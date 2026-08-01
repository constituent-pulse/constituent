import type { VotePosition } from '@/src/components/ui/VoteBadge';

export type VoteSummary = {
  id: string;
  title: string;
  position: VotePosition;
  occurredAt: string;
  topic?: string;
};

export type Representative = {
  id: string;
  name: string;
  role: string;
  region: string;
  photoUrl?: string;
  representativeScore: number;
  latestVote: VoteSummary;
  relevantVote: VoteSummary;
  impactPreview: string;
};
