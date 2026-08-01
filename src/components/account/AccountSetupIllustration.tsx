import { StyleSheet, View } from 'react-native';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { colors, radius } from '@/src/theme/tokens';

export function AccountSetupIllustration() {
  return (
    <View accessibilityLabel="Secure account setup" style={styles.badge}>
      <AppIcon color="navy950" name="representatives" size={46} weight="regular" />

      <View style={styles.shieldBadge}>
        <AppIcon color="white" name="privacy/security" size={21} weight="medium" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    width: 108,
    height: 108,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 54,
    backgroundColor: 'rgba(45, 125, 255, 0.12)',
  },
  shieldBadge: {
    position: 'absolute',
    right: 18,
    bottom: 20,
    width: 35,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.sm,
    backgroundColor: colors.blue500,
    borderWidth: 3,
    borderColor: colors.white,
  },
});
