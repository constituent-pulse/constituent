# UI-007 Legislative Intelligence

## Purpose

UI-007 is Constituent's primary bill-understanding experience. It gives users factual, source-traceable context so they can make their own informed decisions. Constituent provides context, not conclusions.

The screen answers:

- What happened?
- Why does it matter?
- Who may be affected?
- What deserves closer attention?
- Where did the information come from?

UI-007 replaces the visible UI-005 presentation at `/vote-details`. It uses typed mock data only and adds no backend, persistence, notifications, following, or live APIs.

## Section Order

1. Bill Header.
2. 30-Second Summary.
3. At a Glance.
4. Potential Benefits.
5. Potential Drawbacks.
6. Who Is Affected.
7. Worth Knowing.
8. Campaign Funding Context.
9. Questions Worth Asking.
10. Official Sources.

The screen uses a safe-area-aware top bar, one vertical content column, and a fixed `BottomTabBar`. Scroll content includes enough bottom padding that navigation never covers the final source card.

## Typed Data Model

The domain model lives in `src/components/bill-detail/types.ts`. `LegislativeIntelligenceDetails` composes:

- `BillIdentity` for official bill metadata.
- `SummaryParagraphs`, constrained to no more than three sourced claims.
- `AtAGlanceIndicator` for objective bill indicators.
- `TradeoffItem` for structurally identical benefit and drawback items.
- `AffectedGroup` for factual group-based impact categories.
- `WorthKnowingItem` for provision title, explanation, why it matters, and section reference.
- `CampaignFundingContext` for representative identity, reporting period, industries, organizations, source status, and disclaimer.
- `QuestionWorthAsking` for neutral prompts and optional sourced premises.
- `SourceReference` for pending or genuinely available source records.

Every factual claim carries `sourceRefs`. The mock fixture lives in `src/components/bill-detail/legislativeIntelligenceData.ts` and is separate from rendering components.

## Sourcing Rules

- Do not invent citations, URLs, or official references.
- Pending sources use `status: 'pendingLiveData'`.
- Pending source actions are disabled and labeled "Source coming with live data".
- A source may become available only when it includes a genuine citation and URL.
- Plain-language claims retain references to the records intended to substantiate them.
- An unavailable At a Glance value displays "Not yet available" rather than an estimate.

## Tradeoff Neutrality

Potential Benefits and Potential Drawbacks always use the same component structure, card hierarchy, item treatment, and visible item count. Neither section represents Constituent's conclusion.

Claims use cautious language such as "may," "could," and "depending on eligibility." The screen does not use party colors, ideological labels, inferred motives, or unsupported causal language.

## Campaign-Finance Editorial Rules

Campaign Funding Context is representative-specific and always displays its reporting period and source status. Until genuine data is connected, all organizations, figures, and percentages are visibly labeled fictional sample data.

Chart colors distinguish categories without moral red/green signaling. The presentation must not place a contribution next to a vote in a way that asserts causation. It must not use language such as "bought," "controlled," "corrupt," or "proof of influence."

The following disclaimer remains visible:

> Campaign contributions do not prove how someone voted. Contribution patterns provide context, not proof of influence.

## Questions Methodology

Questions Worth Asking encourages closer reading without accusing an official or organization. Generic questions may appear without answers. A bill-specific question may appear only when its premise is supported by a `FactualClaim` with source references.

Questions must not assume motive, wrongdoing, concealment, or a causal relationship. Future answers must present sourced facts and unresolved uncertainty rather than persuasive commentary.

## Accessibility

- The bill title is exposed as a header.
- Back is an active 44-point button.
- Bookmark and share expose disabled state while unavailable.
- Bill metadata rows expose complete label and value text.
- At a Glance indicators expose label, value, and supporting unit.
- Tradeoff rows expose both title and explanation.
- Affected-group tiles expose the group and its neutral impact claim without pretending to be interactive.
- Worth Knowing rows expose explanation, why it matters, and section reference.
- Campaign bars expose category and percentage.
- Questions are exposed as text, not inactive buttons.
- Official source rows expose disabled state and availability copy.
- Bottom navigation uses tab semantics.

## Acceptance Criteria

- `/vote-details` renders `LegislativeIntelligenceScreen` with the approved ten-section order.
- `/representatives` continues to load and route into `/vote-details`.
- The route file remains thin.
- No horizontal overflow occurs at 390x844 or 375x812.
- Cards fit cleanly and the fixed bottom navigation does not cover content.
- At a Glance contains only objective indicators and uses "Not yet available" for missing values.
- Potential Benefits and Potential Drawbacks receive equal hierarchy and comparable visible item counts.
- Every factual tradeoff item supports `sourceRefs`.
- Affected groups remain factual, group-based, and noninteractive.
- Worth Knowing includes title, explanation, why it matters, and section reference.
- Campaign data is visibly fictional sample data and the approved disclaimer remains visible.
- Questions remain neutral and do not assert unsupported premises.
- No fake source link opens; pending actions are disabled.
- No party affiliation, ideology, backend, persistence, live API, notification, or following behavior is introduced.
- Browser verification produces no console warnings, errors, or framework error overlays.
