# PRD

## UI-003 Account Creation

The approved account-creation flow is a local, two-step mobile UI.

Step 1 collects email and ZIP code to help identify representatives. Email is required and must be reasonably formatted. ZIP code is required and must be exactly 5 digits. Validation stays local.

Step 2 lets users optionally choose up to 5 topics that matter to them, toggle notification preference, and continue. Topic preferences may personalize alerts and legislation explanations, but must not change facts, scores, or political framing.

The flow must not include authentication, backend calls, persistence, analytics, party affiliation, ideology, political profiling, or a display-name field. Skip and final Continue route to `/representatives`.

## UI-004 Representatives Dashboard

The approved representatives dashboard is the user's landing screen after account creation. It begins with “These people work for you.” and shows reusable, static, data-driven representative cards.

Each representative card must show the representative photo, name, role, region, numeric Representative Score, Latest Vote, Relevant to You, and an always-visible “How does this affect me?” preview. Latest Vote is the representative's most recent recorded vote. Relevant to You is a recent vote connected to one of the user's selected topics, but relevance must never alter facts, scoring, or political framing.

UI-004 must not include party affiliation, party colors, party badges, ideology fields, star ratings, live congressional data, score breakdown interactions, or detail navigation. The Representative Score can later open into a transparent score breakdown after that interaction is approved.

## UI-005 Vote Details

The approved vote-details screen lives at `/vote-details` and explains one mock bill using static typed data. It includes a bill status tracker, 30-Second Summary, What's Inside metrics, How Does This Affect Me? groups, Worth Knowing provisions, Bill Complexity, Read It Yourself source actions, and a local “How would you vote?” response card.

UI-005 must use the approved copy “Worth Knowing,” “How would you vote?,” “Support,” “Oppose,” and “Need More Information.”

Every factual claim must support `sourceRefs` in the data model. Mock source actions may be visually present, but they must not display invented citations, fake URLs, or fabricated official references. If no genuine official link exists, source actions must be disabled or labeled “Source coming with live data.”

Worth Knowing must identify less-discussed provisions through objective bill-structure signals without editorializing or assuming intent. How Does This Affect Me? must remain factual, neutral, group-based, and nonpartisan. Bill Complexity must use objective inputs such as page count, section count, amendment count, and programs created, extended, or expired, and must not imply wrongdoing or concealment.

The Support, Oppose, and Need More Information controls are local UI state only. UI-005 must not build persistence, aggregation, backend integration, live congressional data, representative detail navigation, or the UI-006 vote-results screen.
