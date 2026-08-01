# Constituent Agent Instructions

## Non-negotiable product identity

- Brand: Constituent
- Tagline: Your voice. Their vote.
- Mobile-first civic accountability application
- Nonpartisan: scoreboard, not referee
- Preserve approved UI exactly unless the product owner explicitly changes it

## Visual system

Use tokens from `src/theme/tokens.ts`. Do not introduce alternate colors, fonts, corner radii, shadows, or design systems without approval.

## Development process

- Implement one screen at a time.
- Keep components reusable and strongly typed.
- Do not add backend behavior until the UI flow is approved.
- Do not reward users for a yes/no political position; engagement scores and badges measure participation only.
- Every future legislative card must support: what happened, arguments for, arguments against, how this may affect the user, citizen vote, and comparison scoreboard.
