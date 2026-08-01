import { colors } from '@/src/theme/tokens';

export type BillDetailTone = 'blue' | 'green' | 'orange' | 'purple' | 'teal' | 'yellow' | 'red';

export const billDetailTones: Record<
  BillDetailTone,
  {
    border: string;
    fill: string;
    softFill: string;
    text: string;
  }
> = {
  blue: {
    border: colors.blue500,
    fill: colors.blue500,
    softFill: 'rgba(45, 125, 255, 0.18)',
    text: colors.blue400,
  },
  green: {
    border: colors.success,
    fill: colors.success,
    softFill: 'rgba(46, 204, 113, 0.18)',
    text: colors.success,
  },
  orange: {
    border: '#FF7A1A',
    fill: '#FF7A1A',
    softFill: 'rgba(255, 122, 26, 0.18)',
    text: '#FF9A52',
  },
  purple: {
    border: '#B65CFF',
    fill: '#9F42F5',
    softFill: 'rgba(182, 92, 255, 0.2)',
    text: '#D277FF',
  },
  teal: {
    border: '#22D3EE',
    fill: '#0891B2',
    softFill: 'rgba(34, 211, 238, 0.18)',
    text: '#22D3EE',
  },
  yellow: {
    border: '#FACC15',
    fill: '#CA8A04',
    softFill: 'rgba(250, 204, 21, 0.18)',
    text: '#FACC15',
  },
  red: {
    border: colors.danger,
    fill: colors.danger,
    softFill: 'rgba(239, 68, 68, 0.18)',
    text: '#F87171',
  },
};
