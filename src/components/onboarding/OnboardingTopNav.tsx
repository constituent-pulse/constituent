import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '@/src/theme/tokens';

type OnboardingTopNavProps = {
  isFirstStep: boolean;
  isLastStep: boolean;
  onBack: () => void;
  onSkip: () => void;
};

export function OnboardingTopNav({
  isFirstStep,
  isLastStep,
  onBack,
  onSkip,
}: OnboardingTopNavProps) {
  return (
    <View style={styles.topBar}>
      <View style={styles.topBarSide}>
        {!isFirstStep ? (
          <Pressable
            accessibilityLabel="Back"
            accessibilityRole="button"
            hitSlop={12}
            onPress={onBack}
            style={styles.topBackButton}
          >
            <BackChevron />
          </Pressable>
        ) : null}
      </View>

      <View style={styles.topBarSide}>
        {!isLastStep ? (
          <Pressable accessibilityRole="button" onPress={onSkip} style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

function BackChevron() {
  return (
    <View style={styles.chevron}>
      <View style={[styles.chevronLine, styles.chevronLineTop]} />
      <View style={[styles.chevronLine, styles.chevronLineBottom]} />
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
    paddingHorizontal: spacing.lg,
  },
  topBarSide: {
    minWidth: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBackButton: {
    width: 36,
    height: 36,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  chevron: {
    width: 20,
    height: 20,
    justifyContent: 'center',
  },
  chevronLine: {
    position: 'absolute',
    left: 2,
    width: 18,
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.navy950,
  },
  chevronLineTop: {
    top: 5,
    transform: [{ rotate: '-35deg' }],
  },
  chevronLineBottom: {
    bottom: 5,
    transform: [{ rotate: '35deg' }],
  },
  skipButton: {
    minWidth: 44,
    height: 36,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  skipText: {
    color: colors.navy950,
    fontSize: 15,
    fontWeight: '700',
  },
});
