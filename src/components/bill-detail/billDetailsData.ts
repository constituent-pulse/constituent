import type { BillDetails } from '@/src/components/bill-detail/types';

export const SOURCE_COMING_WITH_LIVE_DATA = 'Source coming with live data';

export const MOCK_BILL_DETAILS: BillDetails = {
  id: 'government-funding-act',
  title: 'Government Funding Act',
  billNumber: 'H.R. 5376',
  congress: '118th Congress',
  sourceRefs: [],
  statusSteps: [
    {
      id: 'passed-house',
      label: 'Passed House',
      dateLabel: 'Mar 21, 2025',
      icon: 'check',
      status: 'completed',
      sourceRefs: [],
    },
    {
      id: 'in-senate',
      label: 'In Senate',
      dateLabel: 'Mar 22, 2025',
      icon: 'representatives',
      status: 'current',
      sourceRefs: [],
    },
    {
      id: 'committee',
      label: 'In Committee',
      dateLabel: '-',
      icon: 'committee',
      status: 'upcoming',
      sourceRefs: [],
    },
    {
      id: 'president',
      label: 'To President',
      dateLabel: '-',
      icon: 'president',
      status: 'upcoming',
      sourceRefs: [],
    },
  ],
  summary: {
    text: 'Congress voted to fund the federal government through September 30, 2025, to avoid a shutdown and keep essential services running.',
    sourceRefs: [],
  },
  insideMetrics: [
    {
      id: 'major-provisions',
      label: 'Major Provisions',
      count: 6,
      icon: 'provisions',
      tone: 'blue',
      sourceRefs: [],
    },
    {
      id: 'worth-knowing',
      label: 'Worth Knowing',
      count: 12,
      icon: 'worth knowing',
      tone: 'purple',
      sourceRefs: [],
    },
    {
      id: 'funding-changes',
      label: 'Funding Changes',
      count: 8,
      icon: 'economy',
      tone: 'green',
      sourceRefs: [],
    },
    {
      id: 'new-extended-programs',
      label: 'New or Extended Programs',
      count: 5,
      icon: 'programs',
      tone: 'orange',
      sourceRefs: [],
    },
    {
      id: 'expiring-programs',
      label: 'Expiring Programs',
      count: 7,
      icon: 'expiring',
      tone: 'teal',
      sourceRefs: [],
    },
  ],
  impactGroups: [
    {
      id: 'families',
      label: 'Families',
      icon: 'family',
      tone: 'green',
      claim: {
        text: 'Federal funding timing may affect services used by households.',
        sourceRefs: [],
      },
    },
    {
      id: 'veterans',
      label: 'Veterans',
      icon: 'veterans',
      tone: 'purple',
      claim: {
        text: 'Program funding could apply to services available to veterans.',
        sourceRefs: [],
      },
    },
    {
      id: 'students',
      label: 'Students',
      icon: 'education',
      tone: 'blue',
      claim: {
        text: 'Education-related funding may affect eligible student programs.',
        sourceRefs: [],
      },
    },
    {
      id: 'small-businesses',
      label: 'Small Businesses',
      icon: 'small business',
      tone: 'orange',
      claim: {
        text: 'Program extensions could apply to eligible small business support.',
        sourceRefs: [],
      },
    },
    {
      id: 'homeowners',
      label: 'Homeowners',
      icon: 'housing',
      tone: 'teal',
      claim: {
        text: 'Housing-related provisions may affect some homeowners or applicants.',
        sourceRefs: [],
      },
    },
    {
      id: 'federal-employees',
      label: 'Federal Employees',
      icon: 'profile',
      tone: 'yellow',
      claim: {
        text: 'Funding deadlines may affect federal employees depending on agency operations.',
        sourceRefs: [],
      },
    },
  ],
  worthKnowing: [
    {
      id: 'section-417',
      provisionTitle: 'Section 417',
      explanation: {
        text: 'Extends a rural broadband grant program through FY2030.',
        sourceRefs: [],
      },
      whyItMatters: {
        text: 'Communities currently receiving these grants may remain eligible for additional funding.',
        sourceRefs: [],
      },
    },
    {
      id: 'section-522',
      provisionTitle: 'Section 522',
      explanation: {
        text: 'Continues reporting requirements for selected agency spending categories.',
        sourceRefs: [],
      },
      whyItMatters: {
        text: 'Reporting requirements could affect how program activity is documented and reviewed.',
        sourceRefs: [],
      },
    },
    {
      id: 'section-614',
      provisionTitle: 'Section 614',
      explanation: {
        text: 'Changes the timing for selected program renewals.',
        sourceRefs: [],
      },
      whyItMatters: {
        text: 'Renewal timing may affect when eligible recipients receive updated program guidance.',
        sourceRefs: [],
      },
    },
    {
      id: 'section-702',
      provisionTitle: 'Section 702',
      explanation: {
        text: 'Extends selected administrative authorities for federal programs.',
        sourceRefs: [],
      },
      whyItMatters: {
        text: 'Administrative extensions could apply to agencies managing ongoing services.',
        sourceRefs: [],
      },
    },
  ],
  complexity: {
    label: 'Very Complex',
    barSegments: 12,
    filledSegments: 10,
    readingTimeLabel: '2 min (AI summary)',
    inputs: {
      pageCount: 984,
      sectionCount: 26,
      amendmentCount: 147,
      programsCreated: 2,
      programsExtended: 3,
      programsExpired: 7,
      sourceRefs: [],
    },
  },
  officialSources: [
    {
      id: 'official-bill-text',
      label: 'Official Bill Text',
      icon: 'official text',
      sourceType: 'bill_text',
      status: 'pendingLiveData',
    },
    {
      id: 'official-summary',
      label: 'Official Summary',
      icon: 'official summary',
      sourceType: 'official_summary',
      status: 'pendingLiveData',
    },
    {
      id: 'roll-call-vote',
      label: 'Roll Call Vote',
      icon: 'roll call',
      sourceType: 'roll_call',
      status: 'pendingLiveData',
    },
    {
      id: 'sponsor-info',
      label: 'Sponsor Info',
      icon: 'sponsor',
      sourceType: 'sponsor',
      status: 'pendingLiveData',
    },
    {
      id: 'cbo-analysis',
      label: 'CBO Analysis',
      icon: 'analysis',
      sourceType: 'cbo',
      status: 'pendingLiveData',
    },
    {
      id: 'crs-summary',
      label: 'CRS Summary',
      icon: 'representatives',
      sourceType: 'crs',
      status: 'pendingLiveData',
    },
  ],
};
