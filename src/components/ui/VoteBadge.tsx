import { StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '@/src/theme/tokens';

export type VotePosition = 'FOR' | 'AGAINST' | 'PRESENT' | 'NOT VOTING';

type VoteBadgeProps = {
  position: VotePosition;
};

export function VoteBadge({ position }: VoteBadgeProps) {
  const toneStyle = {
    FOR: styles.forBadge,
    AGAINST: styles.againstBadge,
    PRESENT: styles.presentBadge,
    'NOT VOTING': styles.notVotingBadge,
  }[position];

  return (
    <View accessibilityLabel={`Vote position ${position}`} style={[styles.badge, toneStyle]}>
      <Text style={styles.text}>{position}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    minWidth: 62,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.pill,
    paddingHorizontal: 12,
  },
  forBadge: {
    backgroundColor: 'rgba(46, 204, 113, 0.58)',
  },
  againstBadge: {
    backgroundColor: 'rgba(239, 68, 68, 0.58)',
  },
  presentBadge: {
    backgroundColor: 'rgba(245, 158, 11, 0.58)',
  },
  notVotingBadge: {
    backgroundColor: 'rgba(138, 164, 214, 0.36)',
  },
  text: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '800',
  },
});
