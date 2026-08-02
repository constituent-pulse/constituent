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
    icon: 'alignment',
    text: 'Shows how often officials vote with your stated positions.',
  },
  {
    icon: 'engagement',
    text: 'Shows participation and whether they are doing the job they were elected to do.',
  },
  {
    icon: 'committee',
    text: 'Shows PAC and committee financial support as context for potential conflicts.',
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
      <Text
        accessibilityRole="header"
        adjustsFontSizeToFit
        minimumFontScale={0.88}
        numberOfLines={1}
        style={[styles.title, styles.signupTitle]}
      >
        Understand Every Vote
      </Text>
      <Text style={styles.body}>
        See how votes affect you and how you are represented.
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
        Choose the issues that matter to you.
      </Text>
      <Text style={styles.body}>
        Pick up to five topics that matter most to you.
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
        This is an accountability score for your elected officials.
      </Text>
      <Text style={styles.officialNote}>It belongs to the official, not you.</Text>

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
        See how the official voted, plain-language summary, impact, and source status.
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
      {selectedTopicCount} selected {selectedTopicCount === 1 ? 'issue' : 'issues'} carried forward.
    </Text>
  );
}

const styles = StyleSheet.create({
  stepContent: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    maxWidth: 335,
    marginTop: 14,
    color: colors.navy950,
    fontSize: 26,
    lineHeight: 31,
    fontWeight: '800',
    textAlign: 'center',
  },
  signupTitle: {
    width: '100%',
  },
  body: {
    maxWidth: 315,
    marginTop: 6,
    color: colors.navy950,
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '500',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    marginTop: 2,
  },
  explanationList: {
    width: '100%',
    marginTop: 10,
    gap: 6,
  },
  explanationRow: {
    width: '100%',
    minHeight: 42,
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
    lineHeight: 17,
    fontWeight: '700',
  },
  topicNote: {
    width: '100%',
    marginTop: 6,
    color: colors.textSecondary,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
  officialNote: {
    marginTop: 5,
    color: colors.blue500,
    fontSize: 13,
    lineHeight: 17,
    fontWeight: '800',
    textAlign: 'center',
  },
});
