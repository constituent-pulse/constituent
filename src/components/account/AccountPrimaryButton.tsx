import { Pressable, StyleSheet, Text } from 'react-native';
import { platformShadow } from '@/src/components/ui/shadows';
import { colors, radius } from '@/src/theme/tokens';

type AccountPrimaryButtonProps = {
  label: string;
  onPress: () => void;
};

export function AccountPrimaryButton({ label, onPress }: AccountPrimaryButtonProps) {
  return (
    <Pressable
      accessibilityLabel={label}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.sm,
    backgroundColor: colors.blue500,
    ...platformShadow({
      color: colors.blue500,
      opacity: 0.2,
      radius: 8,
      offset: { width: 0, height: 4 },
      elevation: 4,
    }),
  },
  text: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.82,
  },
});
