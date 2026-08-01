import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '@/src/theme/tokens';

export const ACCOUNT_TOPICS = [
  'Economy',
  'Taxes',
  'Healthcare',
  'Education',
  'Veterans',
  'Jobs',
  'Immigration',
  'National Security',
  'Public Safety',
  'Environment',
  'Infrastructure',
  'Technology',
  'Small Business',
  'Housing',
] as const;

export type AccountTopic = (typeof ACCOUNT_TOPICS)[number];

type TopicChipGroupProps = {
  maxSelections: number;
  onToggleTopic: (topic: AccountTopic) => void;
  selectedTopics: AccountTopic[];
};

export function TopicChipGroup({
  maxSelections,
  onToggleTopic,
  selectedTopics,
}: TopicChipGroupProps) {
  const isLimitReached = selectedTopics.length === maxSelections;

  return (
    <View style={styles.section}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>What topics matter most to you? (Optional)</Text>
        {isLimitReached ? <Text style={styles.limitText}>5 selected</Text> : null}
      </View>

      <View style={styles.chipWrap}>
        {ACCOUNT_TOPICS.map((topic) => {
          const isSelected = selectedTopics.includes(topic);
          const isDisabled = !isSelected && isLimitReached;

          return (
            <Pressable
              accessibilityLabel={`${topic} topic${isSelected ? ', selected' : ''}`}
              accessibilityRole="button"
              accessibilityState={{ disabled: isDisabled, selected: isSelected }}
              key={topic}
              onPress={() => onToggleTopic(topic)}
              style={({ pressed }) => [
                styles.chip,
                isSelected ? styles.chipSelected : styles.chipUnselected,
                pressed && styles.pressed,
              ]}
            >
              <Text style={[styles.chipText, isSelected ? styles.chipTextSelected : null]}>
                {topic}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
    marginTop: spacing.xl,
  },
  labelRow: {
    minHeight: 24,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  label: {
    flex: 1,
    color: colors.navy950,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '800',
  },
  limitText: {
    color: colors.blue500,
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '800',
  },
  chipWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: 14,
  },
  chip: {
    minHeight: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
  },
  chipSelected: {
    borderColor: colors.blue500,
    backgroundColor: 'rgba(45, 125, 255, 0.08)',
  },
  chipUnselected: {
    borderColor: colors.gray300,
    backgroundColor: colors.white,
  },
  chipText: {
    color: colors.navy950,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '700',
  },
  chipTextSelected: {
    color: colors.blue500,
  },
  pressed: {
    opacity: 0.78,
  },
});
