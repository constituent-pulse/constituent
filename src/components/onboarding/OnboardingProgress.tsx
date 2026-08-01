import { StyleSheet, View } from 'react-native';
import { colors } from '@/src/theme/tokens';

type OnboardingProgressProps = {
  currentStep: number;
  totalSteps: number;
};

export function OnboardingProgress({ currentStep, totalSteps }: OnboardingProgressProps) {
  return (
    <View style={styles.progressRow} accessibilityLabel={`Screen ${currentStep + 1} of ${totalSteps}`}>
      {Array.from({ length: totalSteps }, (_, index) => (
        <View key={index} style={[styles.progressDot, index === currentStep && styles.progressDotActive]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 14,
    marginBottom: 28,
  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.gray300,
  },
  progressDotActive: {
    backgroundColor: colors.blue500,
  },
});
