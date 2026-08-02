import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { platformShadow } from '@/src/components/ui/shadows';
import { colors, radius, spacing } from '@/src/theme/tokens';

export function UnderstandEveryVoteIllustration() {
  return (
    <View accessibilityLabel="Capitol with civic questions" style={styles.signupScene}>
      <View style={styles.capitolPanel}>
        <View style={styles.sun} />
        <AppIcon color="white" name="representatives" size={86} weight="medium" />
      </View>

      <View style={[styles.questionCard, styles.questionCardTop]}>
        <MiniIcon color="blue500" icon="question" />
        <Text style={styles.questionText}>What is this bill about?</Text>
      </View>

      <View style={[styles.questionCard, styles.questionCardMiddle]}>
        <MiniIcon color="success" icon="impact" />
        <Text style={styles.questionText}>How does this affect me?</Text>
      </View>

      <View style={[styles.questionCard, styles.questionCardBottom]}>
        <MiniIcon color="warning" icon="latest vote" />
        <Text style={styles.questionText}>How did my representative vote?</Text>
      </View>
    </View>
  );
}

export function IssuesIllustration() {
  return (
    <View accessibilityLabel="Issue preference icons" style={styles.issuesScene}>
      <View style={styles.personWrap}>
        <View style={styles.personHead} />
        <View style={styles.personHair} />
        <View style={styles.personBody} />
        <View style={styles.personArm} />
      </View>

      <FloatingIssue style={styles.issueHealthcare}>
        <AppIcon color="danger" name="healthcare" size={28} weight="medium" />
      </FloatingIssue>
      <FloatingIssue style={styles.issueVeterans}>
        <AppIcon color="warning" name="veterans" size={28} weight="medium" />
      </FloatingIssue>
      <FloatingIssue style={styles.issueEconomy}>
        <AppIcon color="blue500" name="economy" size={28} weight="medium" />
      </FloatingIssue>
      <FloatingIssue style={styles.issueEducation}>
        <AppIcon color="blue500" name="education" size={28} weight="medium" />
      </FloatingIssue>
      <FloatingIssue style={styles.issueEnvironment}>
        <AppIcon color="success" name="environment" size={28} weight="medium" />
      </FloatingIssue>
      <FloatingIssue style={styles.issueImmigration}>
        <AppIcon color="blue500" name="immigration" size={28} weight="medium" />
      </FloatingIssue>
    </View>
  );
}

export function RepresentativeScoreIllustration() {
  return (
    <View
      accessibilityLabel="Representative Score gauge showing 76 out of 100"
      style={styles.scoreScene}
    >
      <View style={styles.gaugeOuter}>
        <View style={[styles.gaugeArc, styles.gaugeArcLeft]} />
        <View style={[styles.gaugeArc, styles.gaugeArcRight]} />
        <View style={styles.gaugeCover} />
        <View style={styles.gaugeNeedle} />
      </View>
      <View style={styles.scoreNumberWrap}>
        <Text style={styles.scoreNumber}>76</Text>
        <Text style={styles.scoreTotal}>/100</Text>
      </View>
    </View>
  );
}

export function VoteTransparencyIllustration() {
  return (
    <View accessibilityLabel="Bill transparency review" style={styles.transparencyScene}>
      <View style={styles.document}>
        <View style={styles.documentCheck}>
          <AppIcon color="blue500" name="check" size={18} weight="bold" />
        </View>
        <Text style={styles.documentTitle}>H.R. 1234</Text>
        <View style={[styles.documentLine, styles.documentLineLong]} />
        <View style={[styles.documentLine, styles.documentLineMedium]} />
        <View style={[styles.documentLine, styles.documentLineShort]} />
        <View style={styles.voteBadgeFor}>
          <Text style={styles.voteBadgeText}>For</Text>
        </View>
        <View style={styles.voteBadgeSource}>
          <Text style={styles.voteBadgeText}>Source</Text>
        </View>
      </View>
      <View style={styles.magnifierRing} />
      <View style={styles.magnifierHandle} />
    </View>
  );
}

function MiniIcon({
  color,
  icon,
}: {
  color: 'blue500' | 'success' | 'warning';
  icon: 'impact' | 'latest vote' | 'question';
}) {
  return (
    <View style={styles.miniIcon}>
      <AppIcon color={color} name={icon} size={17} weight="medium" />
    </View>
  );
}

function FloatingIssue({
  children,
  style,
}: {
  children: ReactNode;
  style: StyleProp<ViewStyle>;
}) {
  return <View style={[styles.floatingIssue, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  signupScene: {
    width: 310,
    height: 190,
    alignItems: 'center',
    justifyContent: 'center',
  },
  capitolPanel: {
    position: 'absolute',
    left: 8,
    top: 15,
    width: 178,
    height: 126,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.sm,
    backgroundColor: colors.blue200,
  },
  sun: {
    position: 'absolute',
    width: 108,
    height: 108,
    borderRadius: 54,
    backgroundColor: 'rgba(255, 255, 255, 0.28)',
  },
  questionCard: {
    position: 'absolute',
    right: 3,
    width: 155,
    minHeight: 42,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: radius.sm,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.sm,
    ...platformShadow({
      color: colors.navy950,
      opacity: 0.11,
      radius: 14,
      offset: { width: 0, height: 7 },
      elevation: 5,
    }),
  },
  questionCardTop: {
    top: 0,
  },
  questionCardMiddle: {
    top: 59,
  },
  questionCardBottom: {
    top: 118,
  },
  miniIcon: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    backgroundColor: colors.gray50,
    marginRight: spacing.sm,
  },
  questionText: {
    flex: 1,
    color: colors.navy950,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '800',
  },
  issuesScene: {
    width: 246,
    height: 180,
  },
  personWrap: {
    position: 'absolute',
    left: 12,
    bottom: 6,
    width: 82,
    height: 124,
  },
  personHead: {
    position: 'absolute',
    left: 31,
    top: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.gray200,
  },
  personHair: {
    position: 'absolute',
    left: 17,
    top: 3,
    width: 33,
    height: 56,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    backgroundColor: colors.navy950,
  },
  personBody: {
    position: 'absolute',
    left: 25,
    bottom: 0,
    width: 44,
    height: 78,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: colors.blue200,
  },
  personArm: {
    position: 'absolute',
    right: 0,
    top: 59,
    width: 42,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.navy950,
    transform: [{ rotate: '-30deg' }],
  },
  floatingIssue: {
    position: 'absolute',
    width: 54,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 27,
    backgroundColor: colors.gray50,
  },
  issueHealthcare: {
    left: 71,
    top: 9,
  },
  issueVeterans: {
    left: 142,
    top: 0,
  },
  issueEconomy: {
    left: 113,
    top: 68,
  },
  issueEducation: {
    right: 6,
    top: 42,
  },
  issueEnvironment: {
    left: 112,
    bottom: 2,
  },
  issueImmigration: {
    right: 8,
    bottom: 9,
  },
  scoreScene: {
    width: 252,
    height: 188,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeOuter: {
    position: 'absolute',
    top: 6,
    width: 188,
    height: 188,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeArc: {
    position: 'absolute',
    width: 164,
    height: 164,
    borderWidth: 17,
    borderRadius: 82,
    borderBottomColor: 'transparent',
    borderLeftColor: colors.blue500,
    borderRightColor: colors.success,
    borderTopColor: colors.blue500,
  },
  gaugeArcLeft: {
    transform: [{ rotate: '-42deg' }],
  },
  gaugeArcRight: {
    opacity: 0.2,
    transform: [{ rotate: '38deg' }],
  },
  gaugeCover: {
    position: 'absolute',
    bottom: 0,
    width: 190,
    height: 76,
    backgroundColor: colors.white,
  },
  gaugeNeedle: {
    position: 'absolute',
    right: 29,
    top: 78,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.navy950,
  },
  scoreNumberWrap: {
    alignItems: 'center',
    marginTop: 38,
  },
  scoreNumber: {
    color: colors.navy950,
    fontSize: 56,
    lineHeight: 61,
    fontWeight: '800',
    textAlign: 'center',
  },
  scoreTotal: {
    color: colors.navy950,
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '800',
    textAlign: 'center',
  },
  transparencyScene: {
    width: 252,
    height: 190,
    alignItems: 'center',
    justifyContent: 'center',
  },
  document: {
    position: 'absolute',
    top: 1,
    right: 44,
    width: 128,
    height: 148,
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: radius.sm,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    ...platformShadow({
      color: colors.navy950,
      opacity: 0.12,
      radius: 16,
      offset: { width: 0, height: 8 },
      elevation: 6,
    }),
  },
  documentCheck: {
    position: 'absolute',
    top: -7,
    right: -7,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: colors.gray50,
  },
  documentTitle: {
    color: colors.navy950,
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '800',
  },
  documentLine: {
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.gray200,
    marginTop: spacing.sm,
  },
  documentLineLong: {
    width: 72,
  },
  documentLineMedium: {
    width: 58,
  },
  documentLineShort: {
    width: 78,
  },
  voteBadgeFor: {
    position: 'absolute',
    right: 14,
    bottom: 38,
    borderRadius: 7,
    backgroundColor: 'rgba(46, 204, 113, 0.18)',
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
  },
  voteBadgeSource: {
    position: 'absolute',
    right: 8,
    bottom: 17,
    borderRadius: 7,
    backgroundColor: 'rgba(45, 125, 255, 0.12)',
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
  },
  voteBadgeText: {
    color: colors.navy950,
    fontSize: 8,
    lineHeight: 11,
    fontWeight: '800',
  },
  magnifierRing: {
    position: 'absolute',
    left: 37,
    bottom: 32,
    width: 82,
    height: 82,
    borderWidth: 8,
    borderColor: colors.navy950,
    borderRadius: 41,
  },
  magnifierHandle: {
    position: 'absolute',
    left: 33,
    bottom: 19,
    width: 49,
    height: 11,
    borderRadius: 6,
    backgroundColor: colors.navy950,
    transform: [{ rotate: '45deg' }],
  },
});
