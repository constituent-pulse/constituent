import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { colors } from '@/src/theme/tokens';

type OnboardingProgressProps = {
  currentStep: number;
  style?: StyleProp<ViewStyle>;
  totalSteps: number;
};

export function OnboardingProgress({ currentStep, style, totalSteps }: OnboardingProgressProps) {
  return (
    <View
      accessibilityLabel={`Screen ${currentStep + 1} of ${totalSteps}`}
      style={[styles.progressRow, style]}
    >
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
    gap: 12,
    marginTop: 22,
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.gray300,
  },
  progressDotActive: {
    backgroundColor: colors.blue500,
  },
});
