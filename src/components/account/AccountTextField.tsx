import type { KeyboardTypeOptions } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { colors, radius, spacing } from '@/src/theme/tokens';

type AccountTextFieldProps = {
  accessibilityLabel: string;
  error?: string;
  icon: 'email' | 'zip';
  keyboardType?: KeyboardTypeOptions;
  label: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  value: string;
};

export function AccountTextField({
  accessibilityLabel,
  error,
  icon,
  keyboardType = 'default',
  label,
  onChangeText,
  placeholder,
  value,
}: AccountTextFieldProps) {
  return (
    <View style={styles.fieldGroup}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputWrap, error ? styles.inputError : null]}>
        <View style={styles.iconSlot}>
          <AppIcon
            color="navy950"
            name={icon === 'email' ? 'email' : 'ZIP/location'}
            size={22}
            weight="medium"
          />
        </View>
        <TextInput
          accessibilityLabel={accessibilityLabel}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.textSecondary}
          returnKeyType="done"
          style={styles.input}
          value={value}
        />
      </View>
      {error ? (
        <Text accessibilityLiveRegion="polite" style={styles.errorText}>
          {error}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  fieldGroup: {
    width: '100%',
    marginTop: 10,
  },
  label: {
    color: colors.navy950,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '800',
  },
  inputWrap: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: radius.sm,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.md,
  },
  inputError: {
    borderColor: colors.danger,
  },
  iconSlot: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },
  input: {
    flex: 1,
    minWidth: 0,
    color: colors.navy950,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
  },
  errorText: {
    marginTop: spacing.sm,
    color: colors.danger,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
  },
});
