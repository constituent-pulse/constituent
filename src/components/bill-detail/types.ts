import type { AppIconName } from '@/src/components/ui/AppIcon';

export type SourceType =
  | 'bill_text'
  | 'congress'
  | 'crs'
  | 'cbo'
  | 'roll_call'
  | 'campaign_finance';

type SourceReferenceBase = {
  description: string;
  icon: AppIconName;
  id: string;
  label: string;
  sourceType: SourceType;
};

export type SourceReference = SourceReferenceBase &
  (
    | {
        status: 'pendingLiveData';
      }
    | {
        citation: string;
        status: 'available';
        url: string;
      }
  );

export type FactualClaim = {
  sourceRefs: string[];
  text: string;
};

export type BillIdentity = {
  billNumber: string;
  congress: string;
  currentStatus: FactualClaim;
  dateLabel: string;
  id: string;
  officialTitle: string;
  sourceRefs: string[];
  sponsor: FactualClaim;
};

export type SummaryParagraphs = readonly [FactualClaim, FactualClaim?, FactualClaim?];

export type AtAGlanceIndicator = {
  icon: AppIconName;
  id: string;
  label: string;
  sourceRefs: string[];
  supportingLabel?: string;
  tone: 'blue' | 'green' | 'orange' | 'purple' | 'teal' | 'yellow';
  value?: string;
};

export type TradeoffItem = {
  explanation: FactualClaim;
  icon: AppIconName;
  id: string;
  title: string;
};

export type AffectedGroup = {
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
  sectionReference: FactualClaim;
  whyItMatters: FactualClaim;
};

export type CampaignIndustry = {
  id: string;
  label: string;
  percentage: number;
  sourceRefs: string[];
  tone: 'blue' | 'orange' | 'purple' | 'teal' | 'yellow';
};

export type CampaignOrganization = {
  amountLabel: string;
  id: string;
  name: string;
  sourceRefs: string[];
};

export type CampaignFundingContext = {
  dataStatus: 'fictionalSample';
  disclaimer: string;
  industries: CampaignIndustry[];
  organizations: CampaignOrganization[];
  reportingPeriod: string;
  representativeName: string;
  sourceRefs: string[];
};

export type QuestionWorthAsking = {
  id: string;
  prompt: string;
  supportingClaim?: FactualClaim;
};

export type LegislativeIntelligenceDetails = {
  affectedGroups: AffectedGroup[];
  atAGlance: AtAGlanceIndicator[];
  bill: BillIdentity;
  campaignFunding: CampaignFundingContext;
  lastUpdatedLabel: string;
  officialSources: SourceReference[];
  potentialBenefits: readonly [TradeoffItem, ...TradeoffItem[]];
  potentialDrawbacks: readonly [TradeoffItem, ...TradeoffItem[]];
  questionsWorthAsking: QuestionWorthAsking[];
  summary: SummaryParagraphs;
  worthKnowing: WorthKnowingItem[];
};
