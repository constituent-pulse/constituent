# UI-004 Representatives Dashboard

## Purpose

UI-004 is the user's first dashboard after account creation. It shows who represents the user, how each representative is performing, the representative's most recent recorded vote, a recent topic-relevant vote, and an always-visible plain-language impact preview.

The screen is nonpartisan. It does not show party affiliation, party colors, party badges, ideology fields, or product-review style star ratings.

## Screen Structure

- Dark navy dashboard shell.
- Subtle Capitol background treatment in the hero area.
- Headline: “These people work for you.”
- Supporting copy: “Know who represents you. See how they’re doing. Hold them accountable.”
- Stacked representative cards.
- Fixed “Today’s Vote” CTA above the bottom navigation.
- Fixed bottom navigation with Home active.
- Scrollable content includes enough bottom padding so cards are not covered by the fixed CTA or navigation.

## Data Model

```ts
type VoteSummary = {
  id: string;
  title: string;
  position: VotePosition;
  occurredAt: string;
  topic?: string;
};

type Representative = {
  id: string;
  name: string;
  role: string;
  region: string;
  photoUrl?: string;
  representativeScore: number;
  latestVote: VoteSummary;
  relevantVote: VoteSummary;
  impactPreview: string;
};
```

`latestVote` is the representative's most recent recorded vote.

`relevantVote` is a recent vote connected to one of the user's selected topics. Relevance must never alter facts, scoring, or political framing.

`representativeScore` is shown as a numeric score with the label “Representative Score.” The score can later open into a transparent score breakdown, but that interaction is not part of UI-004.

## Component Structure

- `app/representatives.tsx`: route entry and screen composition only.
- `src/components/representatives/RepresentativesDashboard.tsx`: dashboard shell, scroll layout, fixed footer, hero copy, and card list.
- `src/components/representatives/RepresentativeCard.tsx`: reusable card that renders one typed `Representative`.
- `src/components/representatives/RepresentativeAvatar.tsx`: representative photo with initials fallback.
- `src/components/representatives/RepresentativeScore.tsx`: numeric representative score.
- `src/components/representatives/RepresentativeVoteRow.tsx`: Latest Vote and Relevant to You rows.
- `src/components/representatives/ImpactPreview.tsx`: always-visible “How does this affect me?” preview.
- `src/components/representatives/TodayVoteCta.tsx`: fixed Today’s Vote call to action.
- `src/components/representatives/representativesData.ts`: static typed mock data.
- `src/components/representatives/types.ts`: `Representative` and `VoteSummary` types.
- `src/components/ui/GlassCard.tsx`: dark translucent card primitive.
- `src/components/ui/VoteBadge.tsx`: vote-position badge primitive.
- `src/components/ui/BottomTabBar.tsx`: fixed bottom navigation UI.
- `src/components/ui/AppIcon.tsx`: shared production icon primitive for navigation, notifications, and bottom tabs.
- `src/components/ui/CivicScreenBackground.tsx`: reusable dark civic background treatment.

## Accessibility

- The dashboard headline is exposed as a header.
- Representative cards have accessible summary labels.
- Representative photos expose the representative name.
- Representative Score exposes the numeric score out of 100.
- Vote rows expose the section label, vote title, vote position, and timing.
- Bottom navigation items use tab semantics and selected state.
- Decorative background and purely directional icons are hidden from assistive technology.

## Acceptance Criteria

- `/representatives` renders the approved UI-004 dashboard.
- The headline begins with “These people work for you.”
- “Welcome, Matthew.” does not appear.
- No party affiliation appears anywhere.
- No party colors, party badges, ideology fields, or party-based styling appear.
- No star ratings appear.
- Every representative card is rendered from typed static mock data.
- Every representative card shows a photo, name, role, region, Representative Score, Latest Vote, Relevant to You, and “How does this affect me?”
- “How does this affect me?” is always visible on every card.
- The Today’s Vote CTA is fixed above the bottom navigation.
- The bottom navigation is fixed and Home is active.
- Fixed footer content does not cover the end of the scrollable representative list.
- No live data, backend calls, score-breakdown interactions, or detail navigation are built in UI-004.
