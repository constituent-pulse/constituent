# UI-006 Integrated Onboarding

## Purpose

UI-006 creates one continuous mobile-first onboarding experience. Users move from splash directly into education, signup, topic selection, score explanation, transparency explanation, and then the representatives dashboard.

This flow replaces the separate onboarding-to-account transition. It remains local-only and does not add authentication, backend calls, persistence, analytics, party affiliation, ideology fields, political profiling, display-name fields, or notification preference collection.

## Route Flow

1. `/` renders the splash screen for approximately 5.5 seconds.
2. Splash routes to `/onboarding`.
3. `/onboarding` renders the complete 4-step integrated flow.
4. Continue advances internal step state only.
5. Final Continue uses `router.replace('/representatives')`.
6. `/account` redirects to `/onboarding` for stale links and contains no duplicate signup logic.

## Steps

### Step 1: Understand Every Vote

Includes:

- Headline: "Understand Every Vote"
- Plain-language onboarding explanation
- Email field
- ZIP Code field
- Continue button
- 4-dot progress indicator

Validation:

- Email is required.
- Email must be reasonably formatted.
- ZIP Code is required.
- ZIP Code must be exactly 5 digits.
- ZIP input strips non-digit characters and caps input at 5 digits.
- Errors appear after Continue.
- Errors clear as the user edits.

### Step 2: Choose The Issues That Matter To You

Includes the existing topic preferences and allows up to 5 selected topics.

Topic selection is optional and local-only. Topic preferences may later help prioritize explanations, but must never change facts, Representative Scores, vote positions, sourcing, or political framing.

### Step 3: Representative Score

Explains that Representative Score belongs to elected officials, not the user.

The screen may describe high-level accountability signals, but must not invent or imply a final scoring formula. Any future formula must be approved separately and transparent.

### Step 4: Vote Transparency

Explains:

- How the representative voted
- Plain-language summaries
- Real-world impact
- Source transparency

The source transparency explanation must not create fake citations, fake URLs, or fabricated official references. Live source behavior remains reserved for later approved data work.

## State Ownership

`app/onboarding.tsx` owns:

- Step index
- Email
- ZIP Code
- Local validation errors
- Selected topics

State stays in memory for the current route session only. Browser refresh restarts the local onboarding flow and does not persist Email, ZIP Code, or topic selections.

## Component Structure

- `app/index.tsx`: splash timing, splash copy, and routing to `/onboarding`.
- `app/onboarding.tsx`: integrated flow state, validation, topic state, and final navigation.
- `app/account.tsx`: stale-link redirect to `/onboarding`.
- `src/components/onboarding/IntegratedOnboardingShell.tsx`: safe area, keyboard behavior, fixed no-scroll layout, and footer placement.
- `src/components/onboarding/IntegratedOnboardingSteps.tsx`: concise step copy, form controls, topic grid, and score/transparency explanations.
- `src/components/onboarding/OnboardingVisuals.tsx`: product-style interface previews for the 4 approved steps.
- `src/components/onboarding/OnboardingProgress.tsx`: 4-dot progress indicator.
- `src/components/account/AccountTextField.tsx`: shared Email and ZIP input primitive.
- `src/components/account/AccountPrimaryButton.tsx`: shared Continue button.
- `src/components/account/TopicChipGroup.tsx`: topic selector and 5-selection limit.

## Acceptance Criteria

- Splash remains visible for about 5.5 seconds.
- Splash subtitle reads "Understand Every Vote."
- Splash routes to `/onboarding`.
- `/onboarding` has exactly 4 integrated steps.
- Step 1 includes only Email and ZIP Code inputs.
- Invalid Step 1 input shows local validation errors and does not advance.
- Valid Step 1 input advances to Step 2.
- Step 2 allows no more than 5 selected topics.
- Steps 2-4 do not block progress.
- Onboarding steps do not auto-advance.
- Final Continue routes to `/representatives`.
- `/account` redirects to `/onboarding`.
- `/representatives` and `/vote-details` behavior remains unchanged.
- No party affiliation, ideology fields, political profiling, persistence, backend calls, or account setup branching are introduced.
