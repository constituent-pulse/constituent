# UI-005 Vote Details

## Purpose

UI-005 explains one bill or vote in plain language before the user chooses a local response. The screen is nonpartisan and uses static typed mock data only. It does not add persistence, aggregation, backend integration, live congressional data, representative detail navigation, or the UI-006 vote-results screen.

## Screen Structure

- Dark navy civic detail screen.
- Top Back control, disabled bookmark icon, and disabled share icon.
- Bill header with bill icon, title, bill number, and Congress label.
- Bill status tracker.
- “30-Second Summary” card.
- “What's Inside” metric card.
- “How Does This Affect Me?” group card.
- “Worth Knowing” provisions card.
- “Bill Complexity” card.
- “Read It Yourself” source-action card.
- “How would you vote?” local response card.
- Fixed bottom navigation.

Approved UI copy:

- “Worth Knowing”
- “How would you vote?”
- “Support”
- “Oppose”
- “Need More Information”

## Data Model

UI-005 uses `src/components/bill-detail/types.ts`.

```ts
type SourceReference =
  | {
      id: string;
      icon: AppIconName;
      label: string;
      sourceType: SourceType;
      status: 'pendingLiveData';
    }
  | {
      citation: string;
      icon: AppIconName;
      id: string;
      label: string;
      sourceType: SourceType;
      status: 'available';
      url: string;
    };

type FactualClaim = {
  sourceRefs: string[];
  text: string;
};
```

Every factual text claim supports `sourceRefs`. Mock claims currently use empty `sourceRefs` because no genuine official links are wired yet.

## Factual-Claim Sourcing Rules

- Do not display invented citations.
- Do not display fake URLs.
- Do not fabricate official references.
- Source actions may be visible in the mock UI, but they must be disabled while `status` is `pendingLiveData`.
- Disabled source actions use “Source coming with live data.”
- When live data is approved later, factual claims should reference genuine `SourceReference` IDs and available source references should include real citations and URLs.

## Worth Knowing Methodology

Worth Knowing highlights less-discussed provisions without editorializing or assuming intent. Items should be selected by objective indicators such as:

- Later or less prominent bill sections.
- Eligibility changes.
- Program extensions or expirations.
- Funding formula changes.
- Delayed effective dates.
- Reporting or administrative requirements.

Every item includes:

- Provision title or section.
- Plain-language explanation.
- Why it matters.
- Disabled “View in Bill” action until a genuine official bill reference is available.

## Impact-Language Rules

“How Does This Affect Me?” remains factual, group-based, neutral, and nonpartisan.

Impact language should use careful terms such as:

- “may affect”
- “could apply to”
- “depending on eligibility”
- “depending on agency operations”

The screen must not infer party, ideology, motive, or political preference.

## Complexity Inputs

Bill Complexity uses objective mock inputs only:

- Page count.
- Section count.
- Amendment count.
- Programs created.
- Programs extended.
- Programs expired.

Complexity must not imply wrongdoing, concealment, or intent. A later formula should be transparent and based only on objective bill structure inputs.

## Accessibility

- The bill title is exposed as a header.
- Back is exposed as a button.
- Disabled bookmark, share, source, and “View in Bill” actions expose disabled state.
- Status steps expose label and date.
- Metric tiles expose label and count.
- Impact group tiles expose the group and neutral impact claim.
- Response buttons expose selected state.
- Fixed bottom navigation uses tab semantics.
- Decorative background remains hidden from assistive technology.

## Acceptance Criteria

- `/vote-details` renders the approved UI-005 vote details screen.
- Static typed mock data is used only.
- No party affiliation, party colors, ideology fields, or party-based framing appear.
- Every factual claim supports `sourceRefs` in the data model.
- No fake source link opens.
- Source actions without genuine links are disabled or labeled “Source coming with live data.”
- Worth Knowing includes provision title or section, explanation, why it matters, and View in Bill action.
- Impact language remains factual, neutral, group-based, and nonpartisan.
- Bill Complexity uses objective mock inputs and does not imply wrongdoing or concealment.
- Support, Oppose, and Need More Information use local UI state only.
- Today’s Vote CTA, Latest Vote, and Relevant to You route to `/vote-details`.
- Representative detail navigation is not built.
- Generic icons use `AppIcon`.
- Fixed bottom navigation does not cover scroll content.
