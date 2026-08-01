import { StyleSheet, Text } from 'react-native';
import { BillDetailSectionCard } from '@/src/components/bill-detail/BillDetailSectionCard';
import { colors, spacing } from '@/src/theme/tokens';
import type { FactualClaim } from '@/src/components/bill-detail/types';

type BillSummaryCardProps = {
  summary: FactualClaim;
};

export function BillSummaryCard({ summary }: BillSummaryCardProps) {
  return (
    <BillDetailSectionCard icon="timer" title="30-Second Summary">
      <Text style={styles.body}>{summary.text}</Text>
    </BillDetailSectionCard>
  );
}

const styles = StyleSheet.create({
  body: {
    marginLeft: 64,
    marginTop: -14,
    color: colors.white,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    paddingRight: spacing.sm,
  },
});
