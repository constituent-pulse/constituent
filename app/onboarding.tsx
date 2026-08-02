import { useState } from 'react';
import { useRouter } from 'expo-router';
import { AccountPrimaryButton } from '@/src/components/account/AccountPrimaryButton';
import type { AccountTopic } from '@/src/components/account/TopicChipGroup';
import {
  RepresentativeScoreStep,
  SignupStep,
  TopicSelectionStep,
  VoteTransparencyStep,
} from '@/src/components/onboarding/IntegratedOnboardingSteps';
import { IntegratedOnboardingShell } from '@/src/components/onboarding/IntegratedOnboardingShell';
import { OnboardingProgress } from '@/src/components/onboarding/OnboardingProgress';

const MAX_TOPIC_SELECTIONS = 5;
const TOTAL_ONBOARDING_STEPS = 4;

type OnboardingStep = 0 | 1 | 2 | 3;

type ValidationErrors = {
  email?: string;
  zip?: string;
};

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
          maxSelections={MAX_TOPIC_SELECTIONS}
          onTopicToggle={toggleTopic}
          selectedTopics={selectedTopics}
        />
      ) : null}

      {step === 2 ? <RepresentativeScoreStep selectedTopicCount={selectedTopics.length} /> : null}
      {step === 3 ? <VoteTransparencyStep selectedTopicCount={selectedTopics.length} /> : null}
    </IntegratedOnboardingShell>
  );
}
