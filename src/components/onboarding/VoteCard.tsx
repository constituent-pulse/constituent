import { StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '@/src/theme/tokens';

export function VoteCard() {
  return (
    <View style={[styles.visualCard, styles.voteCard]}>
      <Text style={styles.voteQuestion}>
        Do you support{'\n'}increasing funding for{'\n'}veterans mental health{'\n'}services?
      </Text>

      <View style={styles.voteScene}>
        <View style={styles.flagPole} />
        <View style={styles.flagStripeOne} />
        <View style={styles.flagStripeTwo} />
        <View style={styles.flagStripeThree} />
        <View style={styles.backgroundHead} />
        <View style={[styles.voterHead, styles.voterHeadOne]} />
        <View style={[styles.voterHead, styles.voterHeadTwo]} />
        <View style={[styles.voterHead, styles.voterHeadThree]} />
        <View style={[styles.voterHead, styles.voterHeadFour]} />
        <View style={[styles.voterBody, styles.voterBodyOne]} />
        <View style={[styles.voterBody, styles.voterBodyTwo]} />
        <View style={[styles.voterBody, styles.voterBodyThree]} />
        <View style={[styles.voterBody, styles.voterBodyFour]} />
      </View>

      <View style={styles.voteTray}>
        <Text style={styles.swipeText}>Swipe to vote</Text>
        <View style={styles.voteOptions}>
          <VoteOption label="No" mark="X" tone="danger" />
          <VoteOption label="Need More Info" mark="?" tone="neutral" />
          <VoteOption label="Yes" mark="✓" tone="success" />
        </View>
      </View>
    </View>
  );
}

function VoteOption({
  label,
  mark,
  tone,
}: {
  label: string;
  mark: string;
  tone: 'danger' | 'neutral' | 'success';
}) {
  const toneStyle = {
    danger: styles.voteCircleDanger,
    neutral: styles.voteCircleNeutral,
    success: styles.voteCircleSuccess,
  }[tone];

  const markStyle = {
    danger: styles.voteMarkDanger,
    neutral: styles.voteMarkNeutral,
    success: styles.voteMarkSuccess,
  }[tone];

  return (
    <View style={styles.voteOption}>
      <View style={[styles.voteCircle, toneStyle]}>
        <Text style={[styles.voteMark, markStyle]}>{mark}</Text>
      </View>
      <Text style={styles.voteLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  visualCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray100,
    shadowColor: colors.navy950,
    shadowOpacity: 0.13,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 9 },
    elevation: 8,
  },
  voteCard: {
    width: 248,
    height: 270,
    overflow: 'hidden',
    borderRadius: radius.sm,
  },
  voteQuestion: {
    marginTop: 16,
    color: colors.navy950,
    fontSize: 15,
    lineHeight: 19,
    fontWeight: '800',
    textAlign: 'center',
  },
  voteScene: {
    height: 88,
    marginTop: 2,
    overflow: 'hidden',
  },
  backgroundHead: {
    position: 'absolute',
    left: 96,
    top: 20,
    width: 57,
    height: 57,
    borderRadius: 29,
    backgroundColor: colors.gray200,
    opacity: 0.8,
  },
  flagPole: {
    position: 'absolute',
    right: 78,
    top: 11,
    width: 2,
    height: 56,
    backgroundColor: colors.gray300,
  },
  flagStripeOne: {
    position: 'absolute',
    right: 30,
    top: 13,
    width: 46,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.gray200,
  },
  flagStripeTwo: {
    position: 'absolute',
    right: 35,
    top: 26,
    width: 41,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.gray200,
  },
  flagStripeThree: {
    position: 'absolute',
    right: 31,
    top: 39,
    width: 45,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.gray200,
  },
  voterHead: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.navy950,
  },
  voterHeadOne: {
    left: 60,
    top: 48,
  },
  voterHeadTwo: {
    left: 88,
    top: 40,
  },
  voterHeadThree: {
    left: 133,
    top: 40,
  },
  voterHeadFour: {
    left: 161,
    top: 48,
  },
  voterBody: {
    position: 'absolute',
    width: 32,
    height: 23,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: colors.navy950,
  },
  voterBodyOne: {
    left: 53,
    top: 65,
  },
  voterBodyTwo: {
    left: 81,
    top: 57,
  },
  voterBodyThree: {
    left: 126,
    top: 57,
  },
  voterBodyFour: {
    left: 154,
    top: 65,
  },
  voteTray: {
    height: 88,
    marginTop: -1,
    borderTopWidth: 1,
    borderTopColor: colors.gray100,
    backgroundColor: 'rgba(248, 250, 252, 0.92)',
    alignItems: 'center',
  },
  swipeText: {
    marginTop: 6,
    color: colors.navy950,
    fontSize: 10,
    fontWeight: '700',
  },
  voteOptions: {
    width: '100%',
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  voteOption: {
    width: 74,
    alignItems: 'center',
  },
  voteCircle: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
  },
  voteCircleDanger: {
    borderColor: colors.danger,
  },
  voteCircleNeutral: {
    borderColor: colors.gray200,
    backgroundColor: colors.gray200,
  },
  voteCircleSuccess: {
    borderColor: colors.success,
  },
  voteMark: {
    fontSize: 24,
    lineHeight: 26,
    fontWeight: '800',
  },
  voteMarkDanger: {
    color: colors.danger,
  },
  voteMarkNeutral: {
    color: colors.navy950,
  },
  voteMarkSuccess: {
    color: colors.success,
  },
  voteLabel: {
    marginTop: 4,
    color: colors.navy950,
    fontSize: 9,
    lineHeight: 11,
    fontWeight: '700',
    textAlign: 'center',
  },
});
