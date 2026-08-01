import { StyleSheet, Text, View } from 'react-native';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { BillDetailSectionCard } from '@/src/components/bill-detail/BillDetailSectionCard';
import { billDetailTones } from '@/src/components/bill-detail/billDetailTones';
import type { BillComplexity } from '@/src/components/bill-detail/types';
import { colors, spacing } from '@/src/theme/tokens';

type BillComplexityCardProps = {
  complexity: BillComplexity;
};

export function BillComplexityCard({ complexity }: BillComplexityCardProps) {
  const inputs = complexity.inputs;
  const tone = billDetailTones.purple;

  return (
    <BillDetailSectionCard icon="complexity" title="Bill Complexity" tone="purple">
      <View style={styles.content}>
        <View style={styles.ratingRow}>
          <View style={styles.ratingCopy}>
            <Text style={[styles.rating, { color: tone.text }]}>{complexity.label}</Text>
            <View style={styles.bar}>
              {Array.from({ length: complexity.barSegments }, (_, index) => (
                <View
                  key={index}
                  style={[
                    styles.segment,
                    index < complexity.filledSegments
                      ? { backgroundColor: tone.fill }
                      : styles.segmentEmpty,
                  ]}
                />
              ))}
            </View>
          </View>
          <View style={styles.pages}>
            <Text style={styles.pageCount}>{inputs.pageCount}</Text>
            <Text style={styles.pageLabel}>pages</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.statsRow}>
          <ComplexityStat label="Major Sections" value={inputs.sectionCount.toString()} />
          <ComplexityStat label="Amendments" value={inputs.amendmentCount.toString()} />
          <View style={styles.readingStat}>
            <AppIcon color="white" name="expiring" size={28} weight="regular" />
            <View style={styles.readingCopy}>
              <Text style={styles.readingLabel}>Reading time</Text>
              <Text style={styles.readingValue}>{complexity.readingTimeLabel}</Text>
            </View>
          </View>
        </View>

        <View style={styles.programInputs}>
          <Text style={styles.programInput}>{inputs.programsCreated} created</Text>
          <Text style={styles.programInput}>{inputs.programsExtended} extended</Text>
          <Text style={styles.programInput}>{inputs.programsExpired} expired</Text>
        </View>
      </View>
    </BillDetailSectionCard>
  );
}

function ComplexityStat({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginLeft: 64,
    marginTop: -12,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingCopy: {
    flex: 1,
    minWidth: 0,
  },
  rating: {
    fontSize: 15,
    lineHeight: 19,
    fontWeight: '800',
  },
  bar: {
    height: 14,
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: 7,
    backgroundColor: 'rgba(156, 192, 255, 0.13)',
    marginTop: spacing.xs,
  },
  segment: {
    flex: 1,
    borderRightWidth: 2,
    borderRightColor: 'rgba(7, 24, 39, 0.45)',
  },
  segmentEmpty: {
    backgroundColor: 'rgba(156, 192, 255, 0.16)',
  },
  pages: {
    width: 76,
    alignItems: 'flex-start',
    marginLeft: spacing.md,
  },
  pageCount: {
    color: colors.white,
    fontSize: 27,
    lineHeight: 30,
    fontWeight: '800',
  },
  pageLabel: {
    color: colors.white,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(156, 192, 255, 0.25)',
    marginTop: spacing.sm,
  },
  statsRow: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat: {
    flex: 1,
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(156, 192, 255, 0.25)',
  },
  statValue: {
    color: colors.white,
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '800',
  },
  statLabel: {
    color: colors.gray200,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  readingStat: {
    flex: 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: spacing.sm,
  },
  readingCopy: {
    flex: 1,
    minWidth: 0,
    marginLeft: spacing.xs,
  },
  readingLabel: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '700',
  },
  readingValue: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '500',
  },
  programInputs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    paddingTop: spacing.xs,
  },
  programInput: {
    color: colors.gray200,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: '700',
  },
});
