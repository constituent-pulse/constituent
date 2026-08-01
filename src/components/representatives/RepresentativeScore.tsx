import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/src/theme/tokens';

type RepresentativeScoreProps = {
  score: number;
};

export function RepresentativeScore({ score }: RepresentativeScoreProps) {
  const scoreColor = score >= 70 ? colors.success : colors.warning;

  return (
    <View
      accessibilityLabel={`Representative Score ${score} out of 100`}
      style={styles.scoreWrap}
    >
      <Text style={styles.label}>Representative Score</Text>
      <Text style={[styles.score, { color: scoreColor }]}>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scoreWrap: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  label: {
    color: colors.gray200,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: '600',
  },
  score: {
    marginTop: 2,
    fontSize: 31,
    lineHeight: 35,
    fontWeight: '800',
  },
});
