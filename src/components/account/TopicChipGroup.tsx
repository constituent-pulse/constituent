import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AppIcon, type AppIconName } from '@/src/components/ui/AppIcon';
import { colors, radius, spacing } from '@/src/theme/tokens';

export const ACCOUNT_TOPICS = [
  'Healthcare',
  'Economy',
  'Veterans',
  'Education',
  'Environment',
  'Immigration',
  'Taxes',
  'Jobs',
  'National Security',
  'Public Safety',
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

const INITIAL_VISIBLE_TOPICS = 6;

const TOPIC_ICONS: Record<AccountTopic, AppIconName> = {
  Healthcare: 'healthcare',
  Economy: 'economy',
  Veterans: 'veterans',
  Education: 'education',
  Environment: 'environment',
  Immigration: 'immigration',
  Taxes: 'economy',
  Jobs: 'jobs',
  'National Security': 'national security',
  'Public Safety': 'public safety',
  Infrastructure: 'infrastructure',
  Technology: 'technology',
  'Small Business': 'small business',
  Housing: 'housing',
};

const TOPIC_COLORS: Record<AccountTopic, keyof typeof colors> = {
  Healthcare: 'danger',
  Economy: 'blue500',
  Veterans: 'blue500',
  Education: 'blue500',
  Environment: 'success',
  Immigration: 'blue500',
  Taxes: 'warning',
  Jobs: 'navy950',
  'National Security': 'navy950',
  'Public Safety': 'danger',
  Infrastructure: 'warning',
  Technology: 'blue500',
  'Small Business': 'success',
  Housing: 'blue500',
};

export function TopicChipGroup({
  maxSelections,
  onToggleTopic,
  selectedTopics,
}: TopicChipGroupProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLimitReached = selectedTopics.length === maxSelections;
  const visibleTopics = isExpanded ? ACCOUNT_TOPICS : ACCOUNT_TOPICS.slice(0, INITIAL_VISIBLE_TOPICS);

  return (
    <View style={styles.section}>
      <View style={styles.grid}>
        {visibleTopics.map((topic) => {
          const isSelected = selectedTopics.includes(topic);
          const isDisabled = !isSelected && isLimitReached;

          return (
            <Pressable
              accessibilityLabel={`${topic} topic${isSelected ? ', selected' : ''}`}
              accessibilityRole="button"
              accessibilityState={{ disabled: isDisabled, selected: isSelected }}
              disabled={isDisabled}
              key={topic}
              onPress={() => onToggleTopic(topic)}
              style={({ pressed }) => [
                styles.topicTile,
                isSelected ? styles.topicTileSelected : styles.topicTileUnselected,
                isDisabled ? styles.topicTileDisabled : null,
                pressed && styles.pressed,
              ]}
            >
              <View style={[styles.iconTile, isSelected ? styles.iconTileSelected : null]}>
                <AppIcon
                  color={isSelected ? 'white' : TOPIC_COLORS[topic]}
                  name={TOPIC_ICONS[topic]}
                  size={20}
                  weight="medium"
                />
              </View>
              <Text style={[styles.topicText, isSelected ? styles.topicTextSelected : null]}>
                {topic}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.metaRow}>
        <Pressable
          accessibilityLabel={isExpanded ? 'Show fewer topics' : 'Show more topics'}
          accessibilityRole="button"
          onPress={() => setIsExpanded((currentValue) => !currentValue)}
          style={({ pressed }) => [styles.showMoreButton, pressed && styles.pressed]}
        >
          <Text style={styles.showMoreText}>{isExpanded ? 'Show Less' : 'Show More'}</Text>
          <AppIcon color="blue500" name="forward/chevron" size={15} weight="semibold" />
        </Pressable>

        <Text accessibilityLiveRegion="polite" style={styles.limitText}>
          {selectedTopics.length}/{maxSelections} selected
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
    marginTop: spacing.lg,
  },
  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  topicTile: {
    width: '48%',
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
  },
  topicTileSelected: {
    borderColor: colors.blue500,
    backgroundColor: 'rgba(45, 125, 255, 0.08)',
  },
  topicTileUnselected: {
    borderColor: colors.gray200,
    backgroundColor: colors.white,
  },
  topicTileDisabled: {
    opacity: 0.52,
  },
  iconTile: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    backgroundColor: colors.gray50,
    marginRight: spacing.sm,
  },
  iconTileSelected: {
    backgroundColor: colors.blue500,
  },
  topicText: {
    flex: 1,
    color: colors.navy950,
    fontSize: 13,
    lineHeight: 17,
    fontWeight: '800',
  },
  topicTextSelected: {
    color: colors.blue500,
  },
  metaRow: {
    minHeight: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.md,
  },
  showMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  showMoreText: {
    color: colors.blue500,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '800',
  },
  limitText: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '800',
  },
  pressed: {
    opacity: 0.76,
  },
});
