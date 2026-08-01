import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { AccountPrimaryButton } from '@/src/components/account/AccountPrimaryButton';
import { AccountScreenFrame } from '@/src/components/account/AccountScreenFrame';
import { AccountSetupIllustration } from '@/src/components/account/AccountSetupIllustration';
import { AccountTextField } from '@/src/components/account/AccountTextField';
import { NotificationPreference } from '@/src/components/account/NotificationPreference';
import { PrivacyCard } from '@/src/components/account/PrivacyCard';
import { TopicChipGroup, type AccountTopic } from '@/src/components/account/TopicChipGroup';
import { OnboardingProgress } from '@/src/components/onboarding/OnboardingProgress';
import { colors, spacing } from '@/src/theme/tokens';

const MAX_TOPIC_SELECTIONS = 5;

type AccountStep = 0 | 1;

type ValidationErrors = {
  email?: string;
  zip?: string;
};

export default function AccountScreen() {
  const router = useRouter();
  const [step, setStep] = useState<AccountStep>(0);
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [selectedTopics, setSelectedTopics] = useState<AccountTopic[]>([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  function goToRepresentatives() {
    router.replace('/representatives');
  }

  function goBack() {
    setStep(0);
  }

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

  function validateRepresentativeFields() {
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

  function handleContinue() {
    if (step === 0) {
      if (validateRepresentativeFields()) {
        setStep(1);
      }

      return;
    }

    goToRepresentatives();
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

  return (
    <AccountScreenFrame
      canGoBack={step === 1}
      footer={
        <>
          <OnboardingProgress currentStep={step} totalSteps={2} />
          <AccountPrimaryButton label="Continue" onPress={handleContinue} />
        </>
      }
      onBack={goBack}
      onSkip={goToRepresentatives}
      variant={step === 0 ? 'centered' : 'stacked'}
    >
      {step === 0 ? (
        <FindRepresentativesStep
          email={email}
          errors={errors}
          onEmailChange={updateEmail}
          onZipChange={updateZip}
          zip={zip}
        />
      ) : (
        <PersonalizationStep
          notificationsEnabled={notificationsEnabled}
          onNotificationToggle={() => setNotificationsEnabled((isEnabled) => !isEnabled)}
          onTopicToggle={toggleTopic}
          selectedTopics={selectedTopics}
        />
      )}
    </AccountScreenFrame>
  );
}

function FindRepresentativesStep({
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
    <View style={styles.findStep}>
      <AccountSetupIllustration />
      <Text style={styles.centerTitle}>Let’s find your representatives.</Text>
      <Text style={styles.centerBody}>
        Enter your email and ZIP code so we can personalize your civic experience and show you the
        people who represent you.
      </Text>

      <View style={styles.form}>
        <AccountTextField
          accessibilityLabel="Email"
          error={errors.email}
          icon="email"
          keyboardType="email-address"
          label="Email"
          onChangeText={onEmailChange}
          placeholder="Enter your email"
          value={email}
        />

        <AccountTextField
          accessibilityLabel="ZIP code"
          error={errors.zip}
          icon="zip"
          keyboardType="number-pad"
          label="ZIP code"
          onChangeText={onZipChange}
          placeholder="Enter your ZIP code"
          value={zip}
        />
        <Text style={styles.helperText}>
          Used only to identify your congressional district and representatives.
        </Text>
      </View>
    </View>
  );
}

function PersonalizationStep({
  notificationsEnabled,
  onNotificationToggle,
  onTopicToggle,
  selectedTopics,
}: {
  notificationsEnabled: boolean;
  onNotificationToggle: () => void;
  onTopicToggle: (topic: AccountTopic) => void;
  selectedTopics: AccountTopic[];
}) {
  return (
    <View style={styles.personalizationStep}>
      <Text style={styles.leftTitle}>What matters most to you?</Text>
      <Text style={styles.leftBody}>Choose up to 5 topics. This is optional.</Text>

      <TopicChipGroup
        maxSelections={MAX_TOPIC_SELECTIONS}
        onToggleTopic={onTopicToggle}
        selectedTopics={selectedTopics}
      />

      <PrivacyCard />
      <NotificationPreference enabled={notificationsEnabled} onToggle={onNotificationToggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  findStep: {
    width: '100%',
    alignItems: 'center',
  },
  centerTitle: {
    maxWidth: 330,
    marginTop: 27,
    color: colors.navy950,
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '800',
    textAlign: 'center',
  },
  centerBody: {
    maxWidth: 330,
    marginTop: spacing.lg,
    color: colors.navy950,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    marginTop: spacing.lg,
  },
  helperText: {
    marginTop: spacing.sm,
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
  personalizationStep: {
    width: '100%',
  },
  leftTitle: {
    maxWidth: 330,
    color: colors.navy950,
    fontSize: 35,
    lineHeight: 42,
    fontWeight: '800',
  },
  leftBody: {
    marginTop: spacing.lg,
    color: colors.navy950,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
});
