# UI-003 Account Creation

## Purpose

UI-003 collects the minimum local information needed to move a user from onboarding toward representative discovery. The flow is nonpartisan, does not ask for party affiliation or ideology, and does not create authentication, persistence, analytics, or backend behavior.

## User Flow

1. The user arrives at `/account` from onboarding.
2. Step 1 asks for email and ZIP code.
3. Continue validates both fields locally.
4. A valid Step 1 advances to Step 2.
5. Step 2 lets the user optionally choose up to 5 civic topics, toggle notification preference, or continue without selecting topics.
6. Skip from either step routes to `/representatives`.
7. Final Continue routes to `/representatives`.
8. `/representatives` is a placeholder for UI-004 and displays “Your representatives are coming next.”

## Exact Copy

### Step 1

Headline:
Let’s find your representatives.

Body:
Enter your email and ZIP code so we can personalize your civic experience and show you the people who represent you.

Fields:
- Email
- ZIP code

ZIP helper text:
Used only to identify your congressional district and representatives.

Action:
Continue

### Step 2

Headline:
What matters most to you?

Subtext:
Choose up to 5 topics. This is optional.

Topic chips:
- Economy
- Taxes
- Healthcare
- Education
- Veterans
- Jobs
- Immigration
- National Security
- Public Safety
- Environment
- Infrastructure
- Technology
- Small Business
- Housing

Limit state:
5 selected

Privacy card:
Your information belongs to you.

Constituent does not sell your personal data or use your political views to influence what you see. Your preferences are only used to personalize alerts and explain legislation that matters to you.

Notification preference:
I’d like to receive important updates about votes and issues.

Action:
Continue

## Validation Rules

- Email is required.
- Email must match a reasonable local email format: non-empty text before and after `@`, followed by a domain segment.
- ZIP code is required.
- ZIP code must be exactly 5 digits.
- ZIP input strips non-digit characters and caps input at 5 digits.
- Validation is local only.
- Step 2 has no required fields.

## Component Structure

- `app/account.tsx`: owns step state, local form values, validation, topic selection, notification preference, and Expo Router navigation.
- `src/components/account/AccountScreenFrame.tsx`: safe area, keyboard behavior, scrollable content, top nav, and footer layout.
- `src/components/account/AccountTopNav.tsx`: Skip and Back controls.
- `src/components/account/AccountPrimaryButton.tsx`: primary Continue button.
- `src/components/account/AccountTextField.tsx`: labeled inputs with icons and validation messages.
- `src/components/account/AccountSetupIllustration.tsx`: account setup illustration.
- `src/components/account/TopicChipGroup.tsx`: selectable topic chip list and 5-selection limit state.
- `src/components/account/PrivacyCard.tsx`: privacy copy and shield treatment.
- `src/components/account/NotificationPreference.tsx`: local notification checkbox.
- `src/components/ui/AppIcon.tsx`: shared production icon primitive for email, ZIP/location, privacy, check, and navigation icons.
- `app/representatives.tsx`: placeholder route for the next approved screen.

## Accessibility

- Skip, Back, Continue, topic chips, and notification control expose accessibility roles and labels.
- Topic chips expose selected state.
- Notification preference exposes checkbox checked state.
- Validation messages use polite live regions.
- Placeholder representatives heading uses header semantics.
- Layout respects safe areas and uses keyboard avoidance.

## Acceptance Criteria

- `/account` renders a 2-step account-creation flow.
- Step 1 includes only Email and ZIP code fields.
- No display-name field appears.
- No party affiliation, ideology, or political profiling fields appear.
- Invalid email or ZIP values show local validation messages and do not advance.
- Valid Step 1 values advance to Step 2.
- Step 2 shows all approved topic chips.
- Topic chips allow no more than 5 selections.
- The “5 selected” state appears when the limit is reached.
- Selected chips use blue border, blue text, and a very light blue fill.
- Unselected chips use white fill, gray border, and navy text.
- Preferences do not change facts, scores, or political framing.
- Skip routes to `/representatives`.
- Final Continue routes to `/representatives`.
- `/representatives` displays “Your representatives are coming next.”
