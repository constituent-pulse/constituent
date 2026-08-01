import { useState } from 'react';
import { useRouter } from 'expo-router';
import { ImpactCard } from '@/src/components/onboarding/ImpactCard';
import { LegislativeCard } from '@/src/components/onboarding/LegislativeCard';
import { OnboardingActions } from '@/src/components/onboarding/OnboardingActions';
import { OnboardingProgress } from '@/src/components/onboarding/OnboardingProgress';
import { OnboardingShell } from '@/src/components/onboarding/OnboardingShell';
import { OnboardingTopNav } from '@/src/components/onboarding/OnboardingTopNav';
import { ScoreCard } from '@/src/components/onboarding/ScoreCard';
import { VoteCard } from '@/src/components/onboarding/VoteCard';
import {
  ONBOARDING_STEPS,
  type OnboardingIllustration,
} from '@/src/components/onboarding/onboardingSteps';

export default function OnboardingScreen() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const step = ONBOARDING_STEPS[stepIndex];
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === ONBOARDING_STEPS.length - 1;

  function goToAccount() {
    router.replace('/account');
  }

  function goBack() {
    setStepIndex((currentStep) => Math.max(currentStep - 1, 0));
  }

  function goNext() {
    if (isLastStep) {
      goToAccount();
      return;
    }

    setStepIndex((currentStep) => Math.min(currentStep + 1, ONBOARDING_STEPS.length - 1));
  }

  return (
    <OnboardingShell
      body={step.body}
      footer={
        <>
          <OnboardingProgress currentStep={stepIndex} totalSteps={ONBOARDING_STEPS.length} />
          <OnboardingActions
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            onBack={goBack}
            onNext={goNext}
          />
        </>
      }
      illustration={renderActiveIllustration(step.illustration)}
      title={step.title}
      topNav={
        <OnboardingTopNav
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          onBack={goBack}
          onSkip={goToAccount}
        />
      }
    />
  );
}

function renderActiveIllustration(illustration: OnboardingIllustration) {
  switch (illustration) {
    case 'bill':
      return <LegislativeCard />;
    case 'impact':
      return <ImpactCard />;
    case 'vote':
      return <VoteCard />;
    case 'score':
      return <ScoreCard />;
  }
}
