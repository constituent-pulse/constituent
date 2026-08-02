import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BillDetailSectionCard } from '@/src/components/bill-detail/BillDetailSectionCard';
import type { WorthKnowingItem } from '@/src/components/bill-detail/types';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { colors, radius, spacing } from '@/src/theme/tokens';

const INITIAL_VISIBLE_ITEMS = 4;

type WorthKnowingCardProps = {
  items: WorthKnowingItem[];
};

export function WorthKnowingCard({ items }: WorthKnowingCardProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, INITIAL_VISIBLE_ITEMS);
  const canExpand = items.length > INITIAL_VISIBLE_ITEMS;

  return (
    <BillDetailSectionCard
      icon="worth knowing"
      subtitle="Objective provisions readers might otherwise overlook."
      title="Worth Knowing"
      tone="purple"
    >
      <View style={styles.items}>
        {visibleItems.map((item) => (
          <ProvisionRow item={item} key={item.id} />
        ))}
      </View>

      {canExpand ? (
        <Pressable
          accessibilityRole="button"
          onPress={() => setShowAll((current) => !current)}
          style={({ pressed }) => [styles.expandButton, pressed && styles.pressed]}
        >
          <Text style={styles.expandText}>{showAll ? 'Show fewer items' : 'View all items'}</Text>
          <AppIcon
            color="blue200"
            name="forward/chevron"
            size={18}
            weight="semibold"
          />
        </Pressable>
      ) : null}
    </BillDetailSectionCard>
  );
}

function ProvisionRow({ item }: { item: WorthKnowingItem }) {
  return (
    <View
      accessibilityLabel={`${item.provisionTitle}. ${item.explanation.text} Why it matters: ${item.whyItMatters.text}. ${item.sectionReference.text}`}
      style={styles.item}
    >
      <View style={styles.itemCopy}>
        <Text style={styles.title}>{item.provisionTitle}</Text>
        <Text style={styles.explanation}>{item.explanation.text}</Text>
        <Text style={styles.whyItMatters}>
          <Text style={styles.whyLabel}>Why it matters: </Text>
          {item.whyItMatters.text}
        </Text>
      </View>
      <Text style={styles.reference}>{item.sectionReference.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  items: {
    marginTop: 10,
    gap: 6,
  },
  item: {
    minHeight: 104,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(156, 192, 255, 0.2)',
    borderRadius: radius.sm,
    backgroundColor: 'rgba(7, 24, 39, 0.3)',
    padding: 9,
  },
  itemCopy: {
    flex: 1,
    minWidth: 0,
    paddingRight: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: 13,
    lineHeight: 17,
    fontWeight: '800',
  },
  explanation: {
    marginTop: 3,
    color: colors.gray200,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: '500',
  },
  whyItMatters: {
    marginTop: 4,
    color: colors.gray200,
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '500',
  },
  whyLabel: {
    color: colors.white,
    fontWeight: '800',
  },
  reference: {
    width: 76,
    alignSelf: 'center',
    color: '#D277FF',
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '700',
    textAlign: 'right',
  },
  expandButton: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    marginTop: 4,
  },
  expandText: {
    color: colors.blue200,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '800',
  },
  pressed: {
    opacity: 0.72,
  },
});
