import type { AppIconName } from '@/src/components/ui/AppIcon';

export type SourceType =
  | 'bill_text'
  | 'official_summary'
  | 'roll_call'
  | 'sponsor'
  | 'cbo'
  | 'crs';

export type SourceReference =
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

export type FactualClaim = {
  sourceRefs: string[];
  text: string;
};

export type BillStatusStep = {
  dateLabel: string;
  icon: AppIconName;
  id: string;
  label: string;
  sourceRefs: string[];
  status: 'completed' | 'current' | 'upcoming';
};

export type BillInsideMetric = {
  count: number;
  icon: AppIconName;
  id: string;
  label: string;
  sourceRefs: string[];
  tone: 'blue' | 'green' | 'orange' | 'purple' | 'teal';
};

export type ImpactGroup = {
  claim: FactualClaim;
  icon: AppIconName;
  id: string;
  label: string;
  tone: 'blue' | 'green' | 'orange' | 'purple' | 'teal' | 'yellow';
};

export type WorthKnowingItem = {
  explanation: FactualClaim;
  id: string;
  provisionTitle: string;
  viewInBillSourceRef?: string;
  whyItMatters: FactualClaim;
};

export type ComplexityInputs = {
  amendmentCount: number;
  pageCount: number;
  programsCreated: number;
  programsExpired: number;
  programsExtended: number;
  sectionCount: number;
  sourceRefs: string[];
};

export type BillComplexity = {
  barSegments: number;
  filledSegments: number;
  inputs: ComplexityInputs;
  label: string;
  readingTimeLabel: string;
};

export type BillDetails = {
  billNumber: string;
  complexity: BillComplexity;
  congress: string;
  id: string;
  impactGroups: ImpactGroup[];
  insideMetrics: BillInsideMetric[];
  officialSources: SourceReference[];
  sourceRefs: string[];
  statusSteps: BillStatusStep[];
  summary: FactualClaim;
  title: string;
  worthKnowing: WorthKnowingItem[];
};

export type VoteResponse = 'support' | 'oppose' | 'needMoreInformation';
