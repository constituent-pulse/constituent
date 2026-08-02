import { LegislativeIntelligenceScreen } from '@/src/components/bill-detail/LegislativeIntelligenceScreen';
import { MOCK_LEGISLATIVE_INTELLIGENCE } from '@/src/components/bill-detail/legislativeIntelligenceData';

export default function VoteDetailsRoute() {
  return <LegislativeIntelligenceScreen details={MOCK_LEGISLATIVE_INTELLIGENCE} />;
}
