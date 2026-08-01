import { StyleSheet, Text, View } from 'react-native';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { platformShadow } from '@/src/components/ui/shadows';
import { colors, radius, spacing } from '@/src/theme/tokens';

export function PrivacyCard() {
  return (
    <View accessibilityLabel="Privacy notice" style={styles.card}>
      <View style={styles.iconCircle}>
        <AppIcon color="success" name="privacy/security" size={34} weight="medium" />
      </View>

      <View style={styles.copy}>
        <Text style={styles.title}>Your information belongs to you.</Text>
        <Text style={styles.body}>
          Constituent does not sell your personal data or use your political views to influence what
          you see. Your preferences are only used to personalize alerts and explain legislation that
          matters to you.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: spacing.xl,
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: radius.sm,
    backgroundColor: colors.white,
    padding: spacing.lg,
    ...platformShadow({
      color: colors.navy950,
      opacity: 0.08,
      radius: 16,
      offset: { width: 0, height: 8 },
      elevation: 4,
    }),
  },
  iconCircle: {
    width: 62,
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 31,
    backgroundColor: 'rgba(46, 204, 113, 0.14)',
    marginRight: spacing.lg,
  },
  copy: {
    flex: 1,
  },
  title: {
    color: colors.navy950,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '800',
  },
  body: {
    marginTop: spacing.sm,
    color: colors.navy950,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
  },
});
