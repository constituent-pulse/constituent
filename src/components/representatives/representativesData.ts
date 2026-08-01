import type { Representative } from '@/src/components/representatives/types';

export const REPRESENTATIVES: Representative[] = [
  {
    id: 'senator-schumer',
    name: 'Chuck Schumer',
    role: 'United States Senator',
    region: 'New York',
    photoUrl: 'https://www.congress.gov/img/member/s000148_200.jpg',
    representativeScore: 61,
    latestVote: {
      id: 'government-funding-latest-schumer',
      title: 'Government Funding Act',
      position: 'FOR',
      occurredAt: '2 days ago',
    },
    relevantVote: {
      id: 'social-security-processing-schumer',
      title: 'Social Security Service Staffing',
      position: 'FOR',
      occurredAt: '1 week ago',
      topic: 'Economy',
    },
    impactPreview:
      'Keeps federal agencies open and avoids interruptions to Social Security processing.',
  },
  {
    id: 'senator-gillibrand',
    name: 'Kirsten Gillibrand',
    role: 'United States Senator',
    region: 'New York',
    photoUrl: 'https://www.congress.gov/img/member/g000555_200.jpg',
    representativeScore: 74,
    latestVote: {
      id: 'government-funding-latest-gillibrand',
      title: 'Government Funding Act',
      position: 'FOR',
      occurredAt: '2 days ago',
    },
    relevantVote: {
      id: 'veterans-care-access-gillibrand',
      title: 'Veterans Care Access Act',
      position: 'FOR',
      occurredAt: '5 days ago',
      topic: 'Veterans',
    },
    impactPreview:
      'Expands clinic staffing and appointment capacity for veterans seeking care in New York.',
  },
  {
    id: 'house-ny-22',
    name: 'Your House Representative',
    role: 'United States House of Representatives',
    region: 'NY-22',
    photoUrl: 'https://www.congress.gov/img/member/w000820_200.jpg',
    representativeScore: 82,
    latestVote: {
      id: 'government-funding-latest-house-ny-22',
      title: 'Government Funding Act',
      position: 'FOR',
      occurredAt: '2 days ago',
    },
    relevantVote: {
      id: 'infrastructure-resilience-house-ny-22',
      title: 'Local Infrastructure Resilience Act',
      position: 'FOR',
      occurredAt: '6 days ago',
      topic: 'Infrastructure',
    },
    impactPreview:
      'Supports bridge, road, and water-system grants that can fund projects in your district.',
  },
];

export const TODAY_VOTE = {
  title: 'Government Funding Act',
  subtitle: 'Make your voice heard.',
};
