# Architecture

## Design System

Constituent uses the tokens in `src/theme/tokens.ts` for approved colors, spacing, radii, and shadows. New UI should reuse these tokens and existing shared components before introducing another primitive.

## Route Ownership

`/` owns the timed splash screen and routes to `/onboarding`.

`/onboarding` owns the complete integrated onboarding flow, including Email, ZIP code, local validation, topic preferences, Representative Score education, and Vote Transparency education. It uses local React state only and does not persist account, topic, or validation data.

`/account` is retained only as a stale-link redirect to `/onboarding`. It must not contain duplicate signup, account setup, topic selection, notification preference, persistence, or backend behavior.

`/representatives` remains the first dashboard route after onboarding. `/vote-details` remains the vote-detail route reached from the dashboard.

### Icons

Generic production UI icons must use `src/components/ui/AppIcon.tsx`. `AppIcon` wraps `SymbolView` from `expo-symbols`, keeps sizing consistent, and requires explicit iOS, Android, and web symbol names for each approved app icon.

Production UI must not use emojis, improvised text-character symbols, or generic View-built icons. Custom-drawn graphics are permitted only for approved brand marks, such as the Constituent pulse mark, or bespoke data visualizations and illustrations.

When a new reusable icon is needed, add it to the typed `APP_ICON_SYMBOLS` map before using it in a screen.

### Factual Source References

Bill and vote explanation data should represent factual text as `FactualClaim` objects with `sourceRefs`. Source references must distinguish between pending live-data sources and genuine available official sources.

Mock UI may include disabled source actions, but it must not display invented citations, fake URLs, or fabricated official references. Available source references should be added only when the app is connected to real official or nonpartisan source data.
