import { StyleSheet, Text, View } from 'react-native';
import { BillDetailSectionCard } from '@/src/components/bill-detail/BillDetailSectionCard';
import { billDetailTones } from '@/src/components/bill-detail/billDetailTones';
import type { AtAGlanceIndicator } from '@/src/components/bill-detail/types';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { colors } from '@/src/theme/tokens';

const UNAVAILABLE_LABEL = 'Not yet available';

type AtAGlanceCardProps = {
  indicators: AtAGlanceIndicator[];
};

export function AtAGlanceCard({ indicators }: AtAGlanceCardProps) {
  return (
    <BillDetailSectionCard icon="impact" title="At a Glance">
      <View style={styles.indicators}>
        {indicators.map((indicator, index) => (
          <Indicator
            indicator={indicator}
            isLast={index === indicators.length - 1}
            key={indicator.id}
          />
        ))}
      </View>
    </BillDetailSectionCard>
  );
}

function Indicator({
  indicator,
  isLast,
}: {
  indicator: AtAGlanceIndicator;
  isLast: boolean;
}) {
  const tone = billDetailTones[indicator.tone];
  const isUnavailable = !indicator.value;

  return (
    <View
      accessibilityLabel={`${indicator.label}: ${indicator.value ?? UNAVAILABLE_LABEL}${indicator.supportingLabel ? ` ${indicator.supportingLabel}` : ''}`}
      style={[styles.indicator, !isLast && styles.indicatorDivider]}
    >
      <AppIcon color={tone.text} name={indicator.icon} size={23} weight="regular" />
      <Text numberOfLines={2} style={styles.label}>
        {indicator.label}
      </Text>
      <Text
        adjustsFontSizeToFit
        minimumFontScale={0.86}
        numberOfLines={isUnavailable ? 3 : 1}
        style={[styles.value, isUnavailable && styles.unavailableValue]}
      >
        {indicator.value ?? UNAVAILABLE_LABEL}
      </Text>
      {indicator.supportingLabel ? (
        <Text style={styles.supportingLabel}>{indicator.supportingLabel}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  indicators: {
    flexDirection: 'row',
    marginTop: 12,
  },
  indicator: {
    flex: 1,
    minWidth: 0,
    minHeight: 106,
    alignItems: 'center',
    paddingHorizontal: 3,
  },
  indicatorDivider: {
    borderRightWidth: 1,
    borderRightColor: 'rgba(156, 192, 255, 0.18)',
  },
  label: {
    minHeight: 28,
    marginTop: 6,
    color: colors.gray200,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  value: {
    marginTop: 4,
    color: colors.white,
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '800',
    textAlign: 'center',
  },
  unavailableValue: {
    minHeight: 34,
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '700',
  },
  supportingLabel: {
    color: colors.gray200,
    fontSize: 9,
    lineHeight: 12,
    fontWeight: '500',
  },
});
