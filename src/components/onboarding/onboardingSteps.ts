export type OnboardingIllustration = 'bill' | 'impact' | 'vote' | 'score';

export type OnboardingStep = {
  title: string;
  body: string;
  illustration: OnboardingIllustration;
};

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    title: 'Understand\nwhat happened.',
    body: 'See what Congress and the Senate actually did, explained in plain language.',
    illustration: 'bill',
  },
  {
    title: 'See how it\naffects you.',
    body: 'Understand how policies may impact your wallet, work, family, healthcare, and community.',
    illustration: 'impact',
  },
  {
    title: 'Make your\nvoice count.',
    body: 'Vote on the same issues and compare your position with your district, Congress, and your representatives.',
    illustration: 'vote',
  },
  {
    title: 'Keep score.',
    body: 'Track representative alignment, missed votes, civic engagement, badges, and your Constituent Score.',
    illustration: 'score',
  },
];
