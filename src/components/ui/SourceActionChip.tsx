import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AppIcon, type AppIconName } from '@/src/components/ui/AppIcon';
import { colors, radius, spacing } from '@/src/theme/tokens';

type SourceActionChipProps = {
  description?: string;
  disabled?: boolean;
  icon: AppIconName;
  label: string;
  layout?: 'chip' | 'row';
  onPress?: () => void;
  secondaryLabel?: string;
};

export function SourceActionChip({
  description,
  disabled = false,
  icon,
  label,
  layout = 'chip',
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
        {description ? <Text style={styles.description}>{description}</Text> : null}
        {secondaryLabel ? (
          <Text numberOfLines={2} style={styles.secondary}>
            {secondaryLabel}
          </Text>
        ) : null}
      </View>
    </>
  );

  if (disabled || !onPress) {
    return (
      <Pressable
        accessibilityLabel={`${label}. ${description ?? ''} ${secondaryLabel ?? 'Source coming with live data'}`}
        accessibilityRole="button"
        accessibilityState={{ disabled: true }}
        aria-disabled
        disabled
        style={[styles.chip, layout === 'row' && styles.row, styles.disabledChip]}
      >
        {content}
        {layout === 'row' ? (
          <AppIcon color="gray300" name="external source" size={19} weight="regular" />
        ) : null}
      </Pressable>
    );
  }

  return (
    <Pressable
      accessibilityLabel={label}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.chip,
        layout === 'row' && styles.row,
        pressed && styles.pressed,
      ]}
    >
      {content}
      {layout === 'row' ? (
        <AppIcon color="white" name="external source" size={19} weight="regular" />
      ) : null}
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
  row: {
    width: '100%',
    minWidth: 0,
    height: 'auto',
    minHeight: 66,
    marginRight: 0,
    marginBottom: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 0,
    borderBottomColor: 'rgba(156, 192, 255, 0.18)',
    backgroundColor: 'transparent',
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.sm,
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
  description: {
    marginTop: 2,
    color: colors.gray200,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: '500',
  },
  pressed: {
    opacity: 0.84,
  },
});
