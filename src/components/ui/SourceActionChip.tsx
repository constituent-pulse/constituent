import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AppIcon, type AppIconName } from '@/src/components/ui/AppIcon';
import { colors, radius, spacing } from '@/src/theme/tokens';

type SourceActionChipProps = {
  disabled?: boolean;
  icon: AppIconName;
  label: string;
  onPress?: () => void;
  secondaryLabel?: string;
};

export function SourceActionChip({
  disabled = false,
  icon,
  label,
  onPress,
  secondaryLabel,
}: SourceActionChipProps) {
  const content = (
    <>
      <AppIcon color={disabled ? 'gray300' : 'white'} name={icon} size={24} weight="regular" />
      <View style={styles.copy}>
        <Text numberOfLines={1} style={[styles.label, disabled && styles.disabledText]}>
          {label}
        </Text>
        {secondaryLabel ? (
          <Text numberOfLines={1} style={styles.secondary}>
            {secondaryLabel}
          </Text>
        ) : null}
      </View>
    </>
  );

  if (disabled || !onPress) {
    return (
      <View
        accessibilityLabel={`${label}. ${secondaryLabel ?? 'Source coming with live data'}`}
        accessibilityRole="button"
        accessibilityState={{ disabled: true }}
        style={[styles.chip, styles.disabledChip]}
      >
        {content}
      </View>
    );
  }

  return (
    <Pressable
      accessibilityLabel={label}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.chip, pressed && styles.pressed]}
    >
      {content}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    minWidth: 138,
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(156, 192, 255, 0.35)',
    borderRadius: radius.sm,
    backgroundColor: 'rgba(16, 42, 72, 0.72)',
    paddingHorizontal: spacing.sm,
    marginRight: spacing.sm,
  },
  disabledChip: {
    opacity: 0.78,
  },
  copy: {
    flex: 1,
    minWidth: 0,
    marginLeft: spacing.sm,
  },
  label: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '700',
  },
  disabledText: {
    color: colors.gray200,
  },
  secondary: {
    marginTop: 2,
    color: colors.textSecondary,
    fontSize: 9,
    lineHeight: 12,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.84,
  },
});
