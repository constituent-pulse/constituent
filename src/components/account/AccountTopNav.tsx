import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { colors, spacing } from '@/src/theme/tokens';

type AccountTopNavProps = {
  canGoBack: boolean;
  onBack: () => void;
  onSkip: () => void;
};

export function AccountTopNav({ canGoBack, onBack, onSkip }: AccountTopNavProps) {
  return (
    <View style={styles.topBar}>
      <View style={styles.topBarSide}>
        {canGoBack ? (
          <Pressable
            accessibilityLabel="Back"
            accessibilityRole="button"
            hitSlop={12}
            onPress={onBack}
            style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
          >
            <AppIcon color="navy950" name="back" size={24} weight="semibold" />
          </Pressable>
        ) : null}
      </View>

      <Pressable
        accessibilityLabel="Skip account setup"
        accessibilityRole="button"
        hitSlop={12}
        onPress={onSkip}
        style={({ pressed }) => [styles.skipButton, pressed && styles.pressed]}
      >
        <Text style={styles.skipText}>Skip</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
  },
  topBarSide: {
    width: 44,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  backButton: {
    width: 36,
    height: 36,
    alignItems: 'flex-start',
    justifyContent: 'center',
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
  pressed: {
    opacity: 0.72,
  },
});
