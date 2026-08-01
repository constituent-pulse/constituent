import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/src/theme/tokens';

type OnboardingActionsProps = {
  isFirstStep: boolean;
  isLastStep: boolean;
  onBack: () => void;
  onNext: () => void;
};

export function OnboardingActions({
  isFirstStep,
  isLastStep,
  onBack,
  onNext,
}: OnboardingActionsProps) {
  return (
    <View style={styles.buttonRow}>
      {!isFirstStep ? (
        <Pressable
          accessibilityRole="button"
          onPress={onBack}
          style={({ pressed }) => [styles.button, styles.secondaryButton, pressed && styles.buttonPressed]}
        >
          <Text style={styles.secondaryButtonText}>Back</Text>
        </Pressable>
      ) : null}

      <Pressable
        accessibilityRole="button"
        onPress={onNext}
        style={({ pressed }) => [
          styles.button,
          styles.primaryButton,
          isFirstStep || isLastStep ? styles.fullWidthButton : styles.splitButton,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.primaryButtonText}>{isLastStep ? 'Get Started' : 'Next'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonRow: {
    width: '100%',
    flexDirection: 'row',
    gap: 18,
  },
  button: {
    height: 47,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
  },
  fullWidthButton: {
    flex: 1,
  },
  splitButton: {
    flex: 1,
  },
  primaryButton: {
    backgroundColor: colors.blue500,
    shadowColor: colors.blue500,
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  secondaryButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.gray300,
    backgroundColor: colors.white,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButtonText: {
    color: colors.navy950,
    fontSize: 16,
    fontWeight: '700',
  },
  buttonPressed: {
    opacity: 0.82,
  },
});
