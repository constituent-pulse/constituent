import { StyleSheet, Text, View } from 'react-native';
import type { BillIdentity } from '@/src/components/bill-detail/types';
import { AppIcon, type AppIconName } from '@/src/components/ui/AppIcon';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { colors, radius, spacing } from '@/src/theme/tokens';

type LegislativeBillHeaderCardProps = {
  bill: BillIdentity;
};

export function LegislativeBillHeaderCard({ bill }: LegislativeBillHeaderCardProps) {
  return (
    <GlassCard accessibilityLabel={`${bill.billNumber}. ${bill.officialTitle}`} style={styles.card}>
      <View style={styles.heading}>
        <View style={styles.headingCopy}>
          <View style={styles.billNumberPill}>
            <Text style={styles.billNumber}>{bill.billNumber}</Text>
          </View>
          <Text accessibilityRole="header" style={styles.title}>
            {bill.officialTitle}
          </Text>
          <Text style={styles.congress}>{bill.congress}</Text>
        </View>
        <View accessibilityElementsHidden importantForAccessibility="no" style={styles.billMark}>
          <AppIcon color="blue200" name="bill" size={52} weight="light" />
        </View>
      </View>

      <View style={styles.metadata}>
        <MetadataRow icon="check" label="Status" value={bill.currentStatus.text} valueTone="success" />
        <MetadataRow icon="expiring" label="Date" value={bill.dateLabel} />
        <MetadataRow icon="sponsor" label="Sponsor" value={bill.sponsor.text} />
      </View>
    </GlassCard>
  );
}

function MetadataRow({
  icon,
  label,
  value,
  valueTone,
}: {
  icon: AppIconName;
  label: string;
  value: string;
  valueTone?: 'success';
}) {
  return (
    <View accessibilityLabel={`${label}: ${value}`} style={styles.metadataRow}>
      <AppIcon color="gray200" name={icon} size={17} weight="regular" />
      <Text style={styles.metadataLabel}>{label}</Text>
      <Text
        numberOfLines={2}
        style={[styles.metadataValue, valueTone === 'success' && styles.successValue]}
      >
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    marginBottom: 10,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingCopy: {
    flex: 1,
    minWidth: 0,
  },
  billNumberPill: {
    alignSelf: 'flex-start',
    borderRadius: radius.sm,
    backgroundColor: 'rgba(45, 125, 255, 0.68)',
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
  billNumber: {
    color: colors.white,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '800',
  },
  title: {
    marginTop: 10,
    color: colors.white,
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '800',
  },
  congress: {
    marginTop: 5,
    color: colors.gray200,
    fontSize: 13,
    lineHeight: 17,
    fontWeight: '500',
  },
  billMark: {
    width: 64,
    height: 76,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: spacing.sm,
    opacity: 0.32,
  },
  metadata: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(156, 192, 255, 0.18)',
  },
  metadataRow: {
    minHeight: 42,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(156, 192, 255, 0.14)',
  },
  metadataLabel: {
    width: 68,
    marginLeft: spacing.sm,
    color: colors.gray200,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
  },
  metadataValue: {
    flex: 1,
    color: colors.white,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    textAlign: 'right',
  },
  successValue: {
    color: colors.success,
  },
});
