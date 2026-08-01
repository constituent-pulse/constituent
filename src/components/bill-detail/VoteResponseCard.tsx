import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AppIcon, type AppIconName } from '@/src/components/ui/AppIcon';
import { BillDetailSectionCard } from '@/src/components/bill-detail/BillDetailSectionCard';
import type { VoteResponse } from '@/src/components/bill-detail/types';
import { colors, radius, spacing } from '@/src/theme/tokens';

type VoteResponseCardProps = {
  onSelectResponse: (response: VoteResponse) => void;
  selectedResponse?: VoteResponse;
};

const RESPONSE_OPTIONS = [
  {
    id: 'support',
    label: 'Support',
    icon: 'support',
    color: colors.success,
    fill: 'rgba(46, 204, 113, 0.18)',
  },
  {
    id: 'oppose',
    label: 'Oppose',
    icon: 'oppose',
    color: colors.danger,
    fill: 'rgba(239, 68, 68, 0.18)',
  },
  {
    id: 'needMoreInformation',
    label: 'Need More Information',
    icon: 'question',
    color: colors.warning,
    fill: 'rgba(245, 158, 11, 0.16)',
  },
] as const satisfies readonly {
  color: string;
  fill: string;
  icon: AppIconName;
  id: VoteResponse;
  label: string;
}[];

export function VoteResponseCard({ onSelectResponse, selectedResponse }: VoteResponseCardProps) {
  return (
    <BillDetailSectionCard icon="question" title="How would you vote?">
      <View style={styles.options}>
        {RESPONSE_OPTIONS.map((option) => {
          const isSelected = selectedResponse === option.id;

          return (
            <Pressable
              accessibilityLabel={option.label}
              accessibilityRole="button"
              accessibilityState={{ selected: isSelected }}
              key={option.id}
              onPress={() => onSelectResponse(option.id)}
              style={({ pressed }) => [
                styles.option,
                {
                  borderColor: option.color,
                  backgroundColor: isSelected ? option.fill : 'rgba(16, 42, 72, 0.68)',
                },
                pressed && styles.pressed,
              ]}
            >
              <AppIcon color={option.color} name={option.icon} size={28} weight="regular" />
              <Text numberOfLines={2} style={styles.optionText}>
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </BillDetailSectionCard>
  );
}

const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    gap: spacing.sm,
    paddingTop: spacing.md,
  },
  option: {
    flex: 1,
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.xs,
  },
  optionText: {
    flexShrink: 1,
    marginLeft: spacing.sm,
    color: colors.white,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.82,
  },
});
