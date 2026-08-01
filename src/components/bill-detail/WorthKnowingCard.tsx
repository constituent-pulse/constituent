import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BillDetailSectionCard } from '@/src/components/bill-detail/BillDetailSectionCard';
import { SOURCE_COMING_WITH_LIVE_DATA } from '@/src/components/bill-detail/billDetailsData';
import type { WorthKnowingItem } from '@/src/components/bill-detail/types';
import { SourceActionChip } from '@/src/components/ui/SourceActionChip';
import { colors, spacing } from '@/src/theme/tokens';

type WorthKnowingCardProps = {
  items: WorthKnowingItem[];
};

export function WorthKnowingCard({ items }: WorthKnowingCardProps) {
  return (
    <BillDetailSectionCard
      icon="worth knowing"
      showChevron
      subtitle="Provisions that may receive less public attention."
      title="Worth Knowing"
      tone="yellow"
    >
      <ScrollView
        contentContainerStyle={styles.items}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {items.map((item) => (
          <WorthKnowingPanel item={item} key={item.id} />
        ))}
      </ScrollView>

      <View accessibilityElementsHidden importantForAccessibility="no" style={styles.dots}>
        {items.map((item, index) => (
          <View key={item.id} style={[styles.dot, index === 0 && styles.dotActive]} />
        ))}
      </View>
    </BillDetailSectionCard>
  );
}

function WorthKnowingPanel({ item }: { item: WorthKnowingItem }) {
  return (
    <View
      accessibilityLabel={`${item.provisionTitle}. ${item.explanation.text} Why it matters: ${item.whyItMatters.text}`}
      style={styles.panel}
    >
      <View style={styles.claimRow}>
        <View style={styles.bullet} />
        <Text style={styles.claimText}>
          <Text style={styles.provision}>{item.provisionTitle}: </Text>
          {item.explanation.text}
        </Text>
      </View>
      <Text style={styles.whyText}>
        <Text style={styles.whyLabel}>Why it matters: </Text>
        {item.whyItMatters.text}
      </Text>
      <View style={styles.sourceAction}>
        <SourceActionChip
          disabled
          icon="external source"
          label="View in Bill"
          secondaryLabel={SOURCE_COMING_WITH_LIVE_DATA}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  items: {
    paddingTop: spacing.md,
  },
  panel: {
    width: 304,
    paddingRight: spacing.md,
  },
  claimRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.warning,
    marginTop: 7,
    marginRight: spacing.sm,
  },
  claimText: {
    flex: 1,
    color: colors.white,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '500',
  },
  provision: {
    color: colors.warning,
    fontWeight: '800',
  },
  whyText: {
    marginLeft: 18,
    marginTop: spacing.xs,
    color: colors.gray200,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '500',
  },
  whyLabel: {
    color: colors.white,
    fontWeight: '700',
  },
  sourceAction: {
    marginLeft: 18,
    marginTop: spacing.sm,
    alignSelf: 'flex-start',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: 'rgba(156, 192, 255, 0.28)',
  },
  dotActive: {
    backgroundColor: colors.warning,
  },
});
