import { MOCK_BILL_DETAILS } from '@/src/components/bill-detail/billDetailsData';
import { VoteDetailsScreen } from '@/src/components/bill-detail/VoteDetailsScreen';

export default function VoteDetailsRoute() {
  return <VoteDetailsScreen bill={MOCK_BILL_DETAILS} />;
}
