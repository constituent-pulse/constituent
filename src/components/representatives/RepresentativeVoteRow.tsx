import { StyleSheet, Text, View } from 'react-native';
import { VoteBadge } from '@/src/components/ui/VoteBadge';
import { colors, spacing } from '@/src/theme/tokens';
import type { VoteSummary } from '@/src/components/representatives/types';

type RepresentativeVoteRowProps = {
  label: 'Latest Vote' | 'Relevant to You';
  vote: VoteSummary;
};

export function RepresentativeVoteRow({ label, vote }: RepresentativeVoteRowProps) {
  return (
    <View
      accessibilityLabel={`${label}: ${vote.title}, ${vote.position}, ${vote.occurredAt}`}
      style={styles.row}
    >
      <View style={styles.labelColumn}>
        <Text style={styles.label}>{label}</Text>
        {vote.topic ? <Text style={styles.topic}>{vote.topic}</Text> : null}
      </View>
      <VoteBadge position={vote.position} />
      <View style={styles.voteCopy}>
        <Text numberOfLines={2} style={styles.title}>
          {vote.title}
        </Text>
        <Text style={styles.time}>{vote.occurredAt}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  labelColumn: {
    width: 80,
    paddingRight: spacing.sm,
  },
  label: {
    color: colors.gray200,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
  },
  topic: {
    marginTop: 2,
    color: colors.blue400,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '700',
  },
  voteCopy: {
    flex: 1,
    minWidth: 0,
    marginLeft: spacing.md,
  },
  title: {
    color: colors.white,
    fontSize: 15,
    lineHeight: 19,
    fontWeight: '800',
  },
  time: {
    marginTop: 3,
    color: colors.gray200,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '600',
  },
});
