import type { LegislativeIntelligenceDetails } from '@/src/components/bill-detail/types';

export const SOURCE_COMING_WITH_LIVE_DATA = 'Source coming with live data';
export const CAMPAIGN_FUNDING_DISCLAIMER =
  'Campaign contributions do not prove how someone voted. Contribution patterns provide context, not proof of influence.';

const BILL_TEXT_SOURCE = 'official-bill-text';
const CONGRESS_SOURCE = 'congress-record';
const CRS_SOURCE = 'crs-summary';
const CBO_SOURCE = 'cbo-analysis';
const ROLL_CALL_SOURCE = 'house-roll-call';
const CAMPAIGN_SOURCE = 'campaign-finance-records';

export const MOCK_LEGISLATIVE_INTELLIGENCE: LegislativeIntelligenceDetails = {
  bill: {
    id: 'affordable-energy-tax-relief-act-sample',
    billNumber: 'H.R. 4872',
    officialTitle: 'Affordable Energy and Tax Relief Act',
    congress: '118th Congress (2023-2024)',
    currentStatus: {
      text: 'Passed House',
      sourceRefs: [CONGRESS_SOURCE, ROLL_CALL_SOURCE],
    },
    dateLabel: 'May 22, 2024',
    sponsor: {
      text: 'Sample Representative',
      sourceRefs: [CONGRESS_SOURCE],
    },
    sourceRefs: [BILL_TEXT_SOURCE, CONGRESS_SOURCE],
  },
  summary: [
    {
      text: 'This sample bill extends selected energy tax provisions and adjusts funding for domestic energy programs.',
      sourceRefs: [BILL_TEXT_SOURCE, CRS_SOURCE],
    },
    {
      text: 'It also adds reporting requirements for certain federal benefit programs and changes when some provisions take effect.',
      sourceRefs: [BILL_TEXT_SOURCE, CRS_SOURCE],
    },
    {
      text: 'The sample record shows the measure moving to the Senate after passing the House.',
      sourceRefs: [CONGRESS_SOURCE, ROLL_CALL_SOURCE],
    },
  ],
  atAGlance: [
    {
      id: 'bill-length',
      label: 'Bill Length',
      value: '1,842',
      supportingLabel: 'pages',
      icon: 'bill',
      tone: 'blue',
      sourceRefs: [BILL_TEXT_SOURCE],
    },
    {
      id: 'agencies-affected',
      label: 'Agencies Affected',
      value: '9',
      icon: 'representatives',
      tone: 'purple',
      sourceRefs: [BILL_TEXT_SOURCE, CRS_SOURCE],
    },
    {
      id: 'budget-impact',
      label: 'Est. Budget Impact',
      icon: 'economy',
      tone: 'green',
      sourceRefs: [CBO_SOURCE],
    },
    {
      id: 'time-before-vote',
      label: 'Time Before Vote',
      value: '18',
      supportingLabel: 'hours',
      icon: 'timer',
      tone: 'yellow',
      sourceRefs: [CONGRESS_SOURCE, ROLL_CALL_SOURCE],
    },
    {
      id: 'major-sections',
      label: 'Major Sections',
      value: '14',
      icon: 'provisions',
      tone: 'teal',
      sourceRefs: [BILL_TEXT_SOURCE],
    },
  ],
  potentialBenefits: [
    {
      id: 'household-energy-costs',
      title: 'May lower some energy costs',
      explanation: {
        text: 'Tax provisions could lower eligible household costs, depending on energy use and eligibility.',
        sourceRefs: [BILL_TEXT_SOURCE, CRS_SOURCE],
      },
      icon: 'economy',
    },
    {
      id: 'domestic-energy-investment',
      title: 'Could support domestic investment',
      explanation: {
        text: 'Selected incentives may support qualifying domestic energy projects and related employment.',
        sourceRefs: [BILL_TEXT_SOURCE, CRS_SOURCE],
      },
      icon: 'jobs',
    },
    {
      id: 'tax-relief-extension',
      title: 'May extend tax relief',
      explanation: {
        text: 'Some individual and business provisions could remain available through the sample extension period.',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
      icon: 'family',
    },
  ],
  potentialDrawbacks: [
    {
      id: 'federal-borrowing',
      title: 'May increase federal borrowing',
      explanation: {
        text: 'The budget effect is not yet available and would require a nonpartisan cost estimate.',
        sourceRefs: [CBO_SOURCE],
      },
      icon: 'economy',
    },
    {
      id: 'program-funding',
      title: 'Could reduce some program funding',
      explanation: {
        text: 'Funding changes may affect selected programs, depending on final allocations and eligibility.',
        sourceRefs: [BILL_TEXT_SOURCE, CRS_SOURCE],
      },
      icon: 'programs',
    },
    {
      id: 'reporting-requirements',
      title: 'May add reporting requirements',
      explanation: {
        text: 'Covered organizations could have additional annual reporting responsibilities.',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
      icon: 'provisions',
    },
  ],
  affectedGroups: [
    {
      id: 'families',
      label: 'Families',
      icon: 'family',
      tone: 'purple',
      claim: {
        text: 'Eligibility-based tax and benefit provisions may apply to some families.',
        sourceRefs: [BILL_TEXT_SOURCE, CRS_SOURCE],
      },
    },
    {
      id: 'veterans',
      label: 'Veterans',
      icon: 'veterans',
      tone: 'green',
      claim: {
        text: 'Selected federal program funding may affect services available to veterans.',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
    },
    {
      id: 'students',
      label: 'Students',
      icon: 'education',
      tone: 'yellow',
      claim: {
        text: 'Eligibility changes may apply to selected student assistance programs.',
        sourceRefs: [BILL_TEXT_SOURCE, CRS_SOURCE],
      },
    },
    {
      id: 'small-businesses',
      label: 'Small Businesses',
      icon: 'small business',
      tone: 'blue',
      claim: {
        text: 'Qualifying businesses may be affected by tax and reporting provisions.',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
    },
    {
      id: 'healthcare',
      label: 'Healthcare',
      icon: 'healthcare',
      tone: 'orange',
      claim: {
        text: 'Program funding provisions may apply to selected healthcare services.',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
    },
    {
      id: 'farmers',
      label: 'Farmers',
      icon: 'environment',
      tone: 'green',
      claim: {
        text: 'Energy and tax provisions may apply to qualifying agricultural operations.',
        sourceRefs: [BILL_TEXT_SOURCE, CRS_SOURCE],
      },
    },
    {
      id: 'homeowners',
      label: 'Homeowners',
      icon: 'housing',
      tone: 'orange',
      claim: {
        text: 'Selected residential energy provisions may apply to eligible homeowners.',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
    },
    {
      id: 'seniors',
      label: 'Seniors',
      icon: 'profile',
      tone: 'purple',
      claim: {
        text: 'Benefit eligibility and implementation timing may affect some older adults.',
        sourceRefs: [BILL_TEXT_SOURCE, CRS_SOURCE],
      },
    },
    {
      id: 'federal-employees',
      label: 'Federal Employees',
      icon: 'representatives',
      tone: 'blue',
      claim: {
        text: 'New agency reporting duties may affect selected federal employees.',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
    },
  ],
  worthKnowing: [
    {
      id: 'effective-date',
      provisionTitle: 'Effective Date Delayed',
      explanation: {
        text: 'Several sample provisions do not take effect until January 1, 2026.',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
      whyItMatters: {
        text: 'People and agencies may need to plan for a later implementation date.',
        sourceRefs: [BILL_TEXT_SOURCE, CRS_SOURCE],
      },
      sectionReference: {
        text: 'Sec. 903, pg. 612',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
    },
    {
      id: 'reporting-requirements',
      provisionTitle: 'New Reporting Requirements',
      explanation: {
        text: 'Covered businesses must submit annual energy-use reports.',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
      whyItMatters: {
        text: 'Qualifying businesses could have new compliance responsibilities.',
        sourceRefs: [BILL_TEXT_SOURCE, CRS_SOURCE],
      },
      sectionReference: {
        text: 'Sec. 412, pg. 287',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
    },
    {
      id: 'eligibility-changes',
      provisionTitle: 'Eligibility Changes',
      explanation: {
        text: 'The sample measure adjusts income thresholds for selected assistance programs.',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
      whyItMatters: {
        text: 'Some applicants could qualify under different thresholds.',
        sourceRefs: [BILL_TEXT_SOURCE, CRS_SOURCE],
      },
      sectionReference: {
        text: 'Sec. 231, pg. 145',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
    },
    {
      id: 'program-sunset',
      provisionTitle: 'Program Sunset',
      explanation: {
        text: 'A sample grant program expires in 2031 unless Congress extends it.',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
      whyItMatters: {
        text: 'Future funding would require another legislative action.',
        sourceRefs: [BILL_TEXT_SOURCE, CRS_SOURCE],
      },
      sectionReference: {
        text: 'Sec. 1102, pg. 938',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
    },
    {
      id: 'funding-formula',
      provisionTitle: 'Funding Formula Change',
      explanation: {
        text: 'The sample formula changes how selected infrastructure funds are distributed.',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
      whyItMatters: {
        text: 'Eligible states could receive different shares under the revised formula.',
        sourceRefs: [BILL_TEXT_SOURCE, CRS_SOURCE],
      },
      sectionReference: {
        text: 'Sec. 520, pg. 401',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
    },
    {
      id: 'cross-references',
      provisionTitle: 'Cross References',
      explanation: {
        text: 'Several provisions amend sections located elsewhere in the tax code.',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
      whyItMatters: {
        text: 'The full effect depends on reading the referenced provisions together.',
        sourceRefs: [BILL_TEXT_SOURCE, CRS_SOURCE],
      },
      sectionReference: {
        text: 'Sec. 701, pg. 522',
        sourceRefs: [BILL_TEXT_SOURCE],
      },
    },
  ],
  campaignFunding: {
    dataStatus: 'fictionalSample',
    representativeName: 'Sample Representative',
    reportingPeriod: 'Illustrative 2023-2024 cycle',
    sourceRefs: [CAMPAIGN_SOURCE],
    disclaimer: CAMPAIGN_FUNDING_DISCLAIMER,
    industries: [
      {
        id: 'healthcare-services',
        label: 'Healthcare services',
        percentage: 18,
        tone: 'blue',
        sourceRefs: [CAMPAIGN_SOURCE],
      },
      {
        id: 'financial-services',
        label: 'Financial services',
        percentage: 16,
        tone: 'purple',
        sourceRefs: [CAMPAIGN_SOURCE],
      },
      {
        id: 'energy',
        label: 'Energy',
        percentage: 14,
        tone: 'yellow',
        sourceRefs: [CAMPAIGN_SOURCE],
      },
      {
        id: 'technology',
        label: 'Technology',
        percentage: 11,
        tone: 'teal',
        sourceRefs: [CAMPAIGN_SOURCE],
      },
      {
        id: 'labor-organizations',
        label: 'Labor organizations',
        percentage: 9,
        tone: 'orange',
        sourceRefs: [CAMPAIGN_SOURCE],
      },
    ],
    organizations: [
      {
        id: 'sample-health-policy-committee',
        name: 'Sample Health Policy Committee',
        amountLabel: '$42,000 sample',
        sourceRefs: [CAMPAIGN_SOURCE],
      },
      {
        id: 'sample-energy-future-committee',
        name: 'Sample Energy Future Committee',
        amountLabel: '$31,500 sample',
        sourceRefs: [CAMPAIGN_SOURCE],
      },
      {
        id: 'sample-manufacturing-policy-fund',
        name: 'Sample Manufacturing Policy Fund',
        amountLabel: '$28,250 sample',
        sourceRefs: [CAMPAIGN_SOURCE],
      },
      {
        id: 'sample-financial-services-committee',
        name: 'Sample Financial Services Committee',
        amountLabel: '$21,000 sample',
        sourceRefs: [CAMPAIGN_SOURCE],
      },
    ],
  },
  questionsWorthAsking: [
    { id: 'included', prompt: 'Why was this measure included in a larger package?' },
    { id: 'timing', prompt: 'Why was the measure brought forward at this time?' },
    { id: 'support', prompt: 'Which organizations publicly supported it?' },
    { id: 'opposition', prompt: 'Which organizations publicly opposed it?' },
    { id: 'spending', prompt: 'Does it create permanent or temporary spending?' },
    { id: 'expiration', prompt: 'Does any part of the measure expire?' },
    { id: 'amendments', prompt: 'Were amendments added shortly before the vote?' },
  ],
  officialSources: [
    {
      id: BILL_TEXT_SOURCE,
      label: 'Bill Text',
      description: 'Full official legislative text from Congress.gov.',
      icon: 'official text',
      sourceType: 'bill_text',
      status: 'pendingLiveData',
    },
    {
      id: CRS_SOURCE,
      label: 'CRS Summary',
      description: 'Congressional Research Service summary and analysis.',
      icon: 'official summary',
      sourceType: 'crs',
      status: 'pendingLiveData',
    },
    {
      id: CBO_SOURCE,
      label: 'CBO Analysis',
      description: 'Congressional Budget Office cost estimate.',
      icon: 'analysis',
      sourceType: 'cbo',
      status: 'pendingLiveData',
    },
    {
      id: CONGRESS_SOURCE,
      label: 'Congress.gov',
      description: 'Bill status, history, sponsor, and official documents.',
      icon: 'representatives',
      sourceType: 'congress',
      status: 'pendingLiveData',
    },
    {
      id: ROLL_CALL_SOURCE,
      label: 'House Roll Call Vote',
      description: 'Official roll call vote details and results.',
      icon: 'roll call',
      sourceType: 'roll_call',
      status: 'pendingLiveData',
    },
    {
      id: CAMPAIGN_SOURCE,
      label: 'Campaign Finance Records',
      description: 'Representative-specific campaign-finance records.',
      icon: 'representatives',
      sourceType: 'campaign_finance',
      status: 'pendingLiveData',
    },
  ],
  lastUpdatedLabel: 'Sample record updated May 22, 2024 at 9:41 AM',
};
