import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { BillDetailSectionCard } from '@/src/components/bill-detail/BillDetailSectionCard';
import { billDetailTones } from '@/src/components/bill-detail/billDetailTones';
import type { BillInsideMetric } from '@/src/components/bill-detail/types';
import { colors, radius, spacing } from '@/src/theme/tokens';

type BillInsideOverviewProps = {
  metrics: BillInsideMetric[];
};

export function BillInsideOverview({ metrics }: BillInsideOverviewProps) {
  return (
    <BillDetailSectionCard icon="provisions" showChevron title="What's Inside">
      <ScrollView
        contentContainerStyle={styles.metrics}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {metrics.map((metric) => (
          <MetricTile key={metric.id} metric={metric} />
        ))}
      </ScrollView>
    </BillDetailSectionCard>
  );
}

function MetricTile({ metric }: { metric: BillInsideMetric }) {
  const tone = billDetailTones[metric.tone];

  return (
    <View
      accessibilityLabel={`${metric.label}, ${metric.count}`}
      style={[styles.tile, { borderColor: `${tone.border}66` }]}
    >
      <AppIcon color={tone.text} name={metric.icon} size={30} weight="regular" />
      <Text style={styles.metricLabel}>{metric.label}</Text>
      <View style={[styles.countPill, { backgroundColor: tone.fill }]}>
        <Text style={styles.countText}>{metric.count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  metrics: {
    paddingTop: spacing.md,
  },
  tile: {
    width: 118,
    minHeight: 96,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: radius.sm,
    backgroundColor: 'rgba(16, 42, 72, 0.64)',
    paddingHorizontal: 7,
    marginRight: spacing.sm,
  },
  metricLabel: {
    minHeight: 30,
    marginTop: 7,
    color: colors.white,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  countPill: {
    minWidth: 28,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    marginTop: spacing.xs,
  },
  countText: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '800',
  },
});
