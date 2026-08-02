import { StyleSheet, Text, View } from 'react-native';
import { BillDetailSectionCard } from '@/src/components/bill-detail/BillDetailSectionCard';
import { billDetailTones } from '@/src/components/bill-detail/billDetailTones';
import { SOURCE_COMING_WITH_LIVE_DATA } from '@/src/components/bill-detail/legislativeIntelligenceData';
import type {
  CampaignFundingContext,
  CampaignIndustry,
} from '@/src/components/bill-detail/types';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { colors, radius, spacing } from '@/src/theme/tokens';

type CampaignFundingContextCardProps = {
  context: CampaignFundingContext;
};

export function CampaignFundingContextCard({ context }: CampaignFundingContextCardProps) {
  const largestPercentage = Math.max(...context.industries.map((industry) => industry.percentage), 1);

  return (
    <BillDetailSectionCard
      headerAccessory={<Text style={styles.sampleBadge}>Fictional sample data</Text>}
      icon="representatives"
      title="Campaign Funding Context"
    >
      <Text style={styles.representative}>Representative: {context.representativeName}</Text>
      <Text style={styles.reportingPeriod}>{context.reportingPeriod}</Text>
      <Text style={styles.sourceStatus}>{SOURCE_COMING_WITH_LIVE_DATA}</Text>

      <Text style={styles.subheading}>Sample industries supporting the campaign</Text>
      <View style={styles.chart}>
        {context.industries.map((industry) => (
          <IndustryBar
            industry={industry}
            key={industry.id}
            largestPercentage={largestPercentage}
          />
        ))}
      </View>

      <Text style={styles.subheading}>Sample contributing organizations</Text>
      <View style={styles.organizations}>
        {context.organizations.map((organization) => (
          <View
            accessibilityLabel={`${organization.name}, ${organization.amountLabel}`}
            key={organization.id}
            style={styles.organizationRow}
          >
            <AppIcon color="gray200" name="representatives" size={15} weight="regular" />
            <Text numberOfLines={2} style={styles.organizationName}>
              {organization.name}
            </Text>
            <Text style={styles.organizationAmount}>{organization.amountLabel}</Text>
          </View>
        ))}
      </View>

      <View accessibilityLabel={context.disclaimer} style={styles.disclaimer}>
        <AppIcon color="blue200" name="information" size={20} weight="regular" />
        <Text style={styles.disclaimerText}>{context.disclaimer}</Text>
      </View>
    </BillDetailSectionCard>
  );
}

function IndustryBar({
  industry,
  largestPercentage,
}: {
  industry: CampaignIndustry;
  largestPercentage: number;
}) {
  const tone = billDetailTones[industry.tone];
  const width = `${Math.max((industry.percentage / largestPercentage) * 100, 4)}%` as const;

  return (
    <View accessibilityLabel={`${industry.label}, ${industry.percentage} percent`} style={styles.barRow}>
      <Text numberOfLines={1} style={styles.barLabel}>
        {industry.label}
      </Text>
      <View style={styles.barTrack}>
        <View style={[styles.barFill, { backgroundColor: tone.text, width }]} />
      </View>
      <Text style={styles.barValue}>{industry.percentage}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sampleBadge: {
    maxWidth: 96,
    marginLeft: spacing.sm,
    borderRadius: radius.pill,
    backgroundColor: 'rgba(156, 192, 255, 0.14)',
    color: colors.blue200,
    fontSize: 9,
    lineHeight: 12,
    fontWeight: '800',
    textAlign: 'center',
    paddingHorizontal: 7,
    paddingVertical: 4,
  },
  representative: {
    marginTop: 10,
    color: colors.white,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '800',
  },
  reportingPeriod: {
    marginTop: 2,
    color: colors.gray200,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: '600',
  },
  sourceStatus: {
    marginTop: 2,
    color: colors.textSecondary,
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '700',
  },
  subheading: {
    marginTop: 14,
    color: colors.white,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '800',
  },
  chart: {
    marginTop: 8,
    gap: 7,
  },
  barRow: {
    minHeight: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  barLabel: {
    width: 102,
    color: colors.gray200,
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '600',
  },
  barTrack: {
    flex: 1,
    height: 8,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: 'rgba(156, 192, 255, 0.14)',
  },
  barFill: {
    height: '100%',
    borderRadius: 4,
  },
  barValue: {
    width: 34,
    marginLeft: 6,
    color: colors.white,
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '700',
    textAlign: 'right',
  },
  organizations: {
    marginTop: 7,
  },
  organizationRow: {
    minHeight: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },
  organizationName: {
    flex: 1,
    minWidth: 0,
    marginLeft: 6,
    color: colors.gray200,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '600',
  },
  organizationAmount: {
    marginLeft: spacing.sm,
    color: colors.white,
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '700',
  },
  disclaimer: {
    minHeight: 74,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(156, 192, 255, 0.22)',
    borderRadius: radius.sm,
    backgroundColor: 'rgba(45, 125, 255, 0.08)',
    marginTop: 12,
    padding: 10,
  },
  disclaimerText: {
    flex: 1,
    marginLeft: spacing.sm,
    color: colors.blue200,
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '600',
  },
});
