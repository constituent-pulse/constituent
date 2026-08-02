import { StyleSheet, Text, View } from 'react-native';
import { BillDetailSectionCard } from '@/src/components/bill-detail/BillDetailSectionCard';
import { billDetailTones, type BillDetailTone } from '@/src/components/bill-detail/billDetailTones';
import type { TradeoffItem } from '@/src/components/bill-detail/types';
import { AppIcon, type AppIconName } from '@/src/components/ui/AppIcon';
import { colors, radius, spacing } from '@/src/theme/tokens';

type LegislativeTradeoffsCardProps = {
  items: readonly TradeoffItem[];
  kind: 'benefits' | 'drawbacks';
};

const SECTION_STYLE = {
  benefits: {
    icon: 'check',
    title: 'Potential Benefits',
    tone: 'green',
  },
  drawbacks: {
    icon: 'information',
    title: 'Potential Drawbacks',
    tone: 'orange',
  },
} as const satisfies Record<
  LegislativeTradeoffsCardProps['kind'],
  { icon: AppIconName; title: string; tone: BillDetailTone }
>;

export function LegislativeTradeoffsCard({ items, kind }: LegislativeTradeoffsCardProps) {
  const sectionStyle = SECTION_STYLE[kind];

  return (
    <BillDetailSectionCard icon={sectionStyle.icon} title={sectionStyle.title} tone={sectionStyle.tone}>
      <View style={styles.items}>
        {items.map((item) => (
          <TradeoffRow item={item} key={item.id} tone={sectionStyle.tone} />
        ))}
      </View>
    </BillDetailSectionCard>
  );
}

function TradeoffRow({ item, tone }: { item: TradeoffItem; tone: BillDetailTone }) {
  const toneColors = billDetailTones[tone];

  return (
    <View
      accessibilityLabel={`${item.title}. ${item.explanation.text}`}
      style={styles.item}
    >
      <View style={[styles.itemIcon, { backgroundColor: toneColors.softFill }]}>
        <AppIcon color={toneColors.text} name={item.icon} size={20} weight="regular" />
      </View>
      <View style={styles.itemCopy}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemExplanation}>{item.explanation.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  items: {
    marginTop: 10,
    gap: 6,
  },
  item: {
    minHeight: 72,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(156, 192, 255, 0.2)',
    borderRadius: radius.sm,
    backgroundColor: 'rgba(7, 24, 39, 0.3)',
    padding: 9,
  },
  itemIcon: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  itemCopy: {
    flex: 1,
    minWidth: 0,
    marginLeft: spacing.sm,
  },
  itemTitle: {
    color: colors.white,
    fontSize: 13,
    lineHeight: 17,
    fontWeight: '800',
  },
  itemExplanation: {
    marginTop: 2,
    color: colors.gray200,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: '500',
  },
});
