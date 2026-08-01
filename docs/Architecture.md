# Architecture

## Design System

Constituent uses the tokens in `src/theme/tokens.ts` for approved colors, spacing, radii, and shadows. New UI should reuse these tokens and existing shared components before introducing another primitive.

### Icons

Generic production UI icons must use `src/components/ui/AppIcon.tsx`. `AppIcon` wraps `SymbolView` from `expo-symbols`, keeps sizing consistent, and requires explicit iOS, Android, and web symbol names for each approved app icon.

Production UI must not use emojis, improvised text-character symbols, or generic View-built icons. Custom-drawn graphics are permitted only for approved brand marks, such as the Constituent pulse mark, or bespoke data visualizations and illustrations.

When a new reusable icon is needed, add it to the typed `APP_ICON_SYMBOLS` map before using it in a screen.
