import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { AccountPrimaryButton } from '@/src/components/account/AccountPrimaryButton';
import { AccountTextField } from '@/src/components/account/AccountTextField';
import { TopicChipGroup, type AccountTopic } from '@/src/components/account/TopicChipGroup';
import { IntegratedOnboardingShell } from '@/src/components/onboarding/IntegratedOnboardingShell';
import {
  IssuesIllustration,
  RepresentativeScoreIllustration,
  UnderstandEveryVoteIllustration,
  VoteTransparencyIllustration,
} from '@/src/components/onboarding/OnboardingIllustrations';
import { OnboardingProgress } from '@/src/components/onboarding/OnboardingProgress';
import { AppIcon, type AppIconName } from '@/src/components/ui/AppIcon';
import { colors, spacing } from '@/src/theme/tokens';

const MAX_TOPIC_SELECTIONS = 5;
const TOTAL_ONBOARDING_STEPS = 4;

type OnboardingStep = 0 | 1 | 2 | 3;

type ValidationErrors = {
  email?: string;
  zip?: string;
};

const REPRESENTATIVE_SCORE_POINTS = [
  {
    icon: 'privacy/security',
    text: 'The score belongs to elected officials, not you.',
  },
  {
    icon: 'latest vote',
    text: 'It summarizes public accountability signals at a high level.',
  },
  {
    icon: 'score',
    text: 'The final formula is not set in this prototype and will need transparent review.',
  },
] as const satisfies readonly { icon: AppIconName; text: string }[];

const VOTE_TRANSPARENCY_POINTS = [
  {
    icon: 'latest vote',
    text: 'See how your representative voted.',
  },
  {
    icon: 'official summary',
    text: 'Read a plain-language summary of the bill.',
  },
  {
    icon: 'impact',
    text: 'Understand real-world impact without partisan framing.',
  },
  {
    icon: 'read source',
    text: 'Know where source information will come from when live data is connected.',
  },
] as const satisfies readonly { icon: AppIconName; text: string }[];

export default function OnboardingScreen() {
  const router = useRouter();
  const [step, setStep] = useState<OnboardingStep>(0);
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [selectedTopics, setSelectedTopics] = useState<AccountTopic[]>([]);

  function updateEmail(value: string) {
    setEmail(value);

    if (errors.email) {
      setErrors((currentErrors) => ({ ...currentErrors, email: undefined }));
    }
  }

  function updateZip(value: string) {
    const digitsOnly = value.replace(/\D/g, '').slice(0, 5);
    setZip(digitsOnly);

    if (errors.zip) {
      setErrors((currentErrors) => ({ ...currentErrors, zip: undefined }));
    }
  }

  function validateSignupStep() {
    const nextErrors: ValidationErrors = {};
    const trimmedEmail = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedEmail) {
      nextErrors.email = 'Enter your email.';
    } else if (!emailPattern.test(trimmedEmail)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!zip) {
      nextErrors.zip = 'Enter your ZIP code.';
    } else if (!/^\d{5}$/.test(zip)) {
      nextErrors.zip = 'ZIP code must be exactly 5 digits.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function toggleTopic(topic: AccountTopic) {
    setSelectedTopics((currentTopics) => {
      if (currentTopics.includes(topic)) {
        return currentTopics.filter((currentTopic) => currentTopic !== topic);
      }

      if (currentTopics.length >= MAX_TOPIC_SELECTIONS) {
        return currentTopics;
      }

      return [...currentTopics, topic];
    });
  }

  function handleContinue() {
    if (step === 0 && !validateSignupStep()) {
      return;
    }

    if (step === TOTAL_ONBOARDING_STEPS - 1) {
      router.replace('/representatives');
      return;
    }

    setStep(
      (currentStep) =>
        Math.min(currentStep + 1, TOTAL_ONBOARDING_STEPS - 1) as OnboardingStep
    );
  }

  return (
    <IntegratedOnboardingShell
      footer={
        <>
          <AccountPrimaryButton label="Continue" onPress={handleContinue} />
          <OnboardingProgress currentStep={step} totalSteps={TOTAL_ONBOARDING_STEPS} />
        </>
      }
    >
      {step === 0 ? (
        <SignupStep
          email={email}
          errors={errors}
          onEmailChange={updateEmail}
          onZipChange={updateZip}
          zip={zip}
        />
      ) : null}

      {step === 1 ? (
        <TopicSelectionStep
          onTopicToggle={toggleTopic}
          selectedTopics={selectedTopics}
        />
      ) : null}

      {step === 2 ? <RepresentativeScoreStep selectedTopicCount={selectedTopics.length} /> : null}
      {step === 3 ? <VoteTransparencyStep selectedTopicCount={selectedTopics.length} /> : null}
    </IntegratedOnboardingShell>
  );
}

function SignupStep({
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
      <UnderstandEveryVoteIllustration />
      <Text accessibilityRole="header" style={styles.title}>
        Understand Every Vote
      </Text>
      <Text style={styles.body}>
        Plain-language explanations. Real impact. Everything you need to know.
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

function TopicSelectionStep({
  onTopicToggle,
  selectedTopics,
}: {
  onTopicToggle: (topic: AccountTopic) => void;
  selectedTopics: AccountTopic[];
}) {
  return (
    <View style={styles.stepContent}>
      <IssuesIllustration />
      <Text accessibilityRole="header" style={styles.title}>
        Choose the issues that matter to you
      </Text>
      <Text style={styles.body}>
        We'll personalize your experience around what you care about most. Choose up to 5.
      </Text>

      <TopicChipGroup
        maxSelections={MAX_TOPIC_SELECTIONS}
        onToggleTopic={onTopicToggle}
        selectedTopics={selectedTopics}
      />
    </View>
  );
}

function RepresentativeScoreStep({ selectedTopicCount }: { selectedTopicCount: number }) {
  return (
    <View style={styles.stepContent}>
      <RepresentativeScoreIllustration />
      <Text accessibilityRole="header" style={styles.title}>
        Representative Score
      </Text>
      <Text style={styles.body}>
        This is an accountability score for elected officials, not a score for you.
      </Text>

      <ExplanationList items={REPRESENTATIVE_SCORE_POINTS} />
      <SelectedTopicNote selectedTopicCount={selectedTopicCount} />
    </View>
  );
}

function VoteTransparencyStep({ selectedTopicCount }: { selectedTopicCount: number }) {
  return (
    <View style={styles.stepContent}>
      <VoteTransparencyIllustration />
      <Text accessibilityRole="header" style={styles.title}>
        Vote Transparency
      </Text>
      <Text style={styles.body}>
        We break down important votes in plain language, with impact and sourcing clearly separated.
      </Text>

      <ExplanationList items={VOTE_TRANSPARENCY_POINTS} />
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
            <AppIcon color="blue500" name={item.icon} size={19} weight="medium" />
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
  },
  title: {
    maxWidth: 330,
    marginTop: spacing.lg,
    color: colors.navy950,
    fontSize: 31,
    lineHeight: 37,
    fontWeight: '800',
    textAlign: 'center',
  },
  body: {
    maxWidth: 310,
    marginTop: spacing.md,
    color: colors.navy950,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    marginTop: spacing.sm,
  },
  explanationList: {
    width: '100%',
    marginTop: spacing.lg,
    gap: spacing.md,
  },
  explanationRow: {
    width: '100%',
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  explanationIcon: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(45, 125, 255, 0.1)',
    marginRight: spacing.md,
  },
  explanationText: {
    flex: 1,
    color: colors.navy950,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
  },
  topicNote: {
    width: '100%',
    marginTop: spacing.lg,
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});
