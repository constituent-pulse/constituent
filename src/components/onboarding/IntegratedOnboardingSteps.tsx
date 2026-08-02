import { StyleSheet, Text, View } from 'react-native';
import { AccountTextField } from '@/src/components/account/AccountTextField';
import { TopicChipGroup, type AccountTopic } from '@/src/components/account/TopicChipGroup';
import {
  RepresentativeScorePreview,
  TopicSelectionPreview,
  UnderstandEveryVotePreview,
  VoteTransparencyPreview,
} from '@/src/components/onboarding/OnboardingVisuals';
import { AppIcon, type AppIconName } from '@/src/components/ui/AppIcon';
import { colors, spacing } from '@/src/theme/tokens';

type ValidationErrors = {
  email?: string;
  zip?: string;
};

const REPRESENTATIVE_SCORE_POINTS = [
  {
    icon: 'privacy/security',
    text: 'This score belongs to elected officials.',
  },
  {
    icon: 'latest vote',
    text: 'It previews public accountability signals.',
  },
  {
    icon: 'score',
    text: 'No final formula is set in this prototype.',
  },
] as const satisfies readonly { icon: AppIconName; text: string }[];

export function SignupStep({
  email,
  errors,
  onEmailChange,
  onZipChange,
  zip,
}: {
  email: string;
  errors: ValidationErrors;
  onEmailChange: (value: string) => void;
  onZipChange: (value: string) => void;
  zip: string;
}) {
  return (
    <View style={styles.stepContent}>
      <UnderstandEveryVotePreview />
      <Text accessibilityRole="header" style={styles.title}>
        Understand Every Vote
      </Text>
      <Text style={styles.body}>
        Plain-language summaries, real impact, and vote records in one place.
      </Text>

      <View style={styles.form}>
        <AccountTextField
          accessibilityLabel="Email"
          error={errors.email}
          icon="email"
          keyboardType="email-address"
          label="Email"
          onChangeText={onEmailChange}
          placeholder="you@example.com"
          value={email}
        />

        <AccountTextField
          accessibilityLabel="ZIP code"
          error={errors.zip}
          icon="zip"
          keyboardType="number-pad"
          label="ZIP Code"
          onChangeText={onZipChange}
          placeholder="90210"
          value={zip}
        />
      </View>
    </View>
  );
}

export function TopicSelectionStep({
  maxSelections,
  onTopicToggle,
  selectedTopics,
}: {
  maxSelections: number;
  onTopicToggle: (topic: AccountTopic) => void;
  selectedTopics: AccountTopic[];
}) {
  return (
    <View style={styles.stepContent}>
      <TopicSelectionPreview />
      <Text accessibilityRole="header" style={styles.title}>
        Choose the issues that matter to you
      </Text>
      <Text style={styles.body}>
        Pick up to 5 topics to personalize what you see first.
      </Text>

      <TopicChipGroup
        maxSelections={maxSelections}
        onToggleTopic={onTopicToggle}
        selectedTopics={selectedTopics}
      />
    </View>
  );
}

export function RepresentativeScoreStep({ selectedTopicCount }: { selectedTopicCount: number }) {
  return (
    <View style={styles.stepContent}>
      <RepresentativeScorePreview />
      <Text accessibilityRole="header" style={styles.title}>
        Representative Score
      </Text>
      <Text style={styles.body}>
        A public accountability score for elected officials, not for you.
      </Text>

      <ExplanationList items={REPRESENTATIVE_SCORE_POINTS} />
      <SelectedTopicNote selectedTopicCount={selectedTopicCount} />
    </View>
  );
}

export function VoteTransparencyStep({ selectedTopicCount }: { selectedTopicCount: number }) {
  return (
    <View style={styles.stepContent}>
      <VoteTransparencyPreview />
      <Text accessibilityRole="header" style={styles.title}>
        Vote Transparency
      </Text>
      <Text style={styles.body}>
        See vote position, summary, impact, and source status clearly separated.
      </Text>
      <SelectedTopicNote selectedTopicCount={selectedTopicCount} />
    </View>
  );
}

function ExplanationList({ items }: { items: readonly { icon: AppIconName; text: string }[] }) {
  return (
    <View style={styles.explanationList}>
      {items.map((item) => (
        <View key={item.text} style={styles.explanationRow}>
          <View style={styles.explanationIcon}>
            <AppIcon color="blue500" name={item.icon} size={16} weight="medium" />
          </View>
          <Text style={styles.explanationText}>{item.text}</Text>
        </View>
      ))}
    </View>
  );
}

function SelectedTopicNote({ selectedTopicCount }: { selectedTopicCount: number }) {
  if (selectedTopicCount === 0) {
    return null;
  }

  return (
    <Text
      accessibilityLabel={`${selectedTopicCount} selected topics carried through onboarding`}
      style={styles.topicNote}
    >
      {selectedTopicCount} selected {selectedTopicCount === 1 ? 'issue' : 'issues'} carried through this flow.
    </Text>
  );
}

const styles = StyleSheet.create({
  stepContent: {
    width: '100%',
    alignItems: 'center',
    paddingTop: spacing.sm,
  },
  title: {
    maxWidth: 330,
    marginTop: spacing.md,
    color: colors.navy950,
    fontSize: 27,
    lineHeight: 32,
    fontWeight: '800',
    textAlign: 'center',
  },
  body: {
    maxWidth: 304,
    marginTop: spacing.sm,
    color: colors.navy950,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    marginTop: spacing.xs,
  },
  explanationList: {
    width: '100%',
    marginTop: spacing.md,
    gap: spacing.sm,
  },
  explanationRow: {
    width: '100%',
    minHeight: 38,
    flexDirection: 'row',
    alignItems: 'center',
  },
  explanationIcon: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    backgroundColor: 'rgba(45, 125, 255, 0.1)',
    marginRight: spacing.sm,
  },
  explanationText: {
    flex: 1,
    color: colors.navy950,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '700',
  },
  topicNote: {
    width: '100%',
    marginTop: spacing.sm,
    color: colors.textSecondary,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});
