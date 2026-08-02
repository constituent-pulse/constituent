# PRD

## UI-006 Integrated Onboarding

The approved onboarding flow is a single local, mobile-first experience that begins after the splash screen. It replaces the separate UI-002 onboarding and UI-003 account-creation handoff.

`/` remains the splash route and stays visible for approximately 8 seconds before routing to `/onboarding`. The splash shows:

- "Understand Every Vote."
- "See How It Affects You."
- "See How You Are Represented."

`/onboarding` owns the full 4-step flow:

1. Understand Every Vote: collects Email and ZIP code.
2. Choose the issues that matter to you: lets users optionally select up to 5 topics.
3. Representative Score: explains that the score belongs to elected officials, not the user, without inventing a final formula.
4. Vote Transparency: explains representative vote position, plain-language summaries, real-world impact, and source transparency.

Onboarding steps must not auto-advance. Continue advances internal step state only. Step 1 validates locally: Email is required and must be reasonably formatted; ZIP code is required and must be exactly 5 digits. Errors appear after Continue and clear as the user edits. Steps 2-4 do not block progress.

Final Continue routes with `router.replace('/representatives')`. `/account` remains only as a stale-link redirect to `/onboarding` and must not duplicate signup logic.

The flow must not include authentication, backend calls, persistence, analytics, party affiliation, ideology fields, political profiling, display-name fields, notification preference collection, or account setup branching. Email, ZIP, and local topic selection are the only collected inputs.

## UI-004 Representatives Dashboard

The approved representatives dashboard is the user's landing screen after account creation. It begins with “These people work for you.” and shows reusable, static, data-driven representative cards.

Each representative card must show the representative photo, name, role, region, numeric Representative Score, Latest Vote, Relevant to You, and an always-visible “How does this affect me?” preview. Latest Vote is the representative's most recent recorded vote. Relevant to You is a recent vote connected to one of the user's selected topics, but relevance must never alter facts, scoring, or political framing.

UI-004 must not include party affiliation, party colors, party badges, ideology fields, star ratings, live congressional data, score breakdown interactions, or detail navigation. The Representative Score can later open into a transparent score breakdown after that interaction is approved.

## UI-005 Vote Details (Superseded)

UI-005 has been superseded by UI-007 Legislative Intelligence. Its historical requirements remain documented in `docs/UI-005-Vote-Details.md`, but `/vote-details` now renders UI-007.

## UI-007 Legislative Intelligence

UI-007 is the primary bill-understanding experience at `/vote-details`. It provides sourced context without recommending a political conclusion. Its approved section order is:

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

Potential Benefits and Potential Drawbacks must receive equal visual hierarchy, comparable visible item counts, cautious language, and the same sourcing requirements. Who Is Affected must use factual group-based categories without inferring political identity or preference. Worth Knowing must surface objective, less-obvious provisions without implying secrecy or wrongdoing.

Campaign Funding Context is representative-specific and must show its reporting period and source status. Sample campaign figures and organizations must be explicitly labeled fictional sample data. Campaign contributions must never be described as causing a vote, proving influence, or demonstrating corruption. The disclaimer "Campaign contributions do not prove how someone voted. Contribution patterns provide context, not proof of influence." must remain visible.

Questions Worth Asking must be neutral and must not assume wrongdoing, motive, or an unsupported premise. Generic prompts may appear without answers. Bill-specific prompts require sourced support for their premise.

Official source actions remain disabled and labeled "Source coming with live data" until genuine citations and URLs are available. UI-007 uses typed mock data only and does not add backend behavior, live APIs, persistence, notifications, following, party affiliation, or ideological labels.

### Historical UI-005 Requirements

The approved vote-details screen lives at `/vote-details` and explains one mock bill using static typed data. It includes a bill status tracker, 30-Second Summary, Bill Complexity, What's Inside metrics, How Does This Affect Me? groups, Worth Knowing provisions, Read It Yourself source actions, and a local “How would you vote?” response card.

UI-005 must use the approved copy “Worth Knowing,” “How would you vote?,” “Support,” “Oppose,” and “Need More Information.”

Every factual claim must support `sourceRefs` in the data model. Mock source actions may be visually present, but they must not display invented citations, fake URLs, or fabricated official references. If no genuine official link exists, source actions must be disabled or labeled “Source coming with live data.”

Worth Knowing must identify less-discussed provisions through objective bill-structure signals without editorializing or assuming intent. How Does This Affect Me? must remain factual, neutral, group-based, and nonpartisan. Bill Complexity must use objective inputs such as page count, section count, amendment count, and programs created, extended, or expired, and must not imply wrongdoing or concealment.

The Support, Oppose, and Need More Information controls are local UI state only. UI-005 must not build persistence, aggregation, backend integration, live congressional data, representative detail navigation, or the UI-006 vote-results screen.
