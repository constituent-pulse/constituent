import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { platformShadow } from '@/src/components/ui/shadows';
import { colors, spacing } from '@/src/theme/tokens';

type NotificationPreferenceProps = {
  enabled: boolean;
  onToggle: () => void;
};

export function NotificationPreference({ enabled, onToggle }: NotificationPreferenceProps) {
  return (
    <Pressable
      accessibilityLabel="Receive important updates about votes and issues"
      accessibilityRole="checkbox"
      accessibilityState={{ checked: enabled }}
      onPress={onToggle}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
    >
      <View style={[styles.checkbox, enabled && styles.checkboxActive]}>
        {enabled ? (
          <AppIcon color="white" name="check" size={18} weight="bold" />
        ) : null}
      </View>
      <Text style={styles.text}>I’d like to receive important updates about votes and issues.</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: spacing.lg,
  },
  checkbox: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: 6,
    backgroundColor: colors.white,
    marginRight: spacing.md,
  },
  checkboxActive: {
    borderColor: colors.blue500,
    backgroundColor: colors.blue500,
    ...platformShadow({
      color: colors.blue500,
      opacity: 0.2,
      radius: 6,
      offset: { width: 0, height: 3 },
      elevation: 3,
    }),
  },
  text: {
    flex: 1,
    color: colors.navy950,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
  pressed: {
    opacity: 0.82,
  },
});
