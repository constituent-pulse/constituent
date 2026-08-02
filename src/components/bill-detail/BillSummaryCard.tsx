import { StyleSheet, Text, View } from 'react-native';
import { BillDetailSectionCard } from '@/src/components/bill-detail/BillDetailSectionCard';
import type { SummaryParagraphs } from '@/src/components/bill-detail/types';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { colors } from '@/src/theme/tokens';

type BillSummaryCardProps = {
  summary: SummaryParagraphs;
};

export function BillSummaryCard({ summary }: BillSummaryCardProps) {
  return (
    <BillDetailSectionCard
      headerAccessory={
        <View accessibilityLabel="About 30 seconds" style={styles.duration}>
          <AppIcon color="gray200" name="timer" size={15} weight="regular" />
          <Text style={styles.durationText}>30s</Text>
        </View>
      }
      icon="timer"
      title="30-Second Summary"
    >
      <View style={styles.paragraphs}>
        {summary.map((paragraph) => (
          paragraph ? (
            <Text key={paragraph.text} style={styles.body}>
              {paragraph.text}
            </Text>
          ) : null
        ))}
      </View>
    </BillDetailSectionCard>
  );
}

const styles = StyleSheet.create({
  duration: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  durationText: {
    marginLeft: 3,
    color: colors.gray200,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '700',
  },
  paragraphs: {
    marginTop: 10,
    gap: 9,
  },
  body: {
    color: colors.white,
    fontSize: 13,
    lineHeight: 19,
    fontWeight: '500',
  },
});
