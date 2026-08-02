import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { colors, spacing } from '@/src/theme/tokens';

type BillDetailsTopBarProps = {
  onBack: () => void;
};

export function BillDetailsTopBar({ onBack }: BillDetailsTopBarProps) {
  return (
    <View style={styles.bar}>
      <Pressable
        accessibilityLabel="Back"
        accessibilityRole="button"
        hitSlop={8}
        onPress={onBack}
        style={({ pressed }) => [styles.action, pressed && styles.pressed]}
      >
        <AppIcon color="white" name="back" size={24} weight="semibold" />
      </Pressable>

      <Text style={styles.title}>Bill Details</Text>

      <View style={styles.trailingActions}>
        <View
          accessibilityLabel="Bookmark unavailable"
          accessibilityRole="button"
          accessibilityState={{ disabled: true }}
          style={styles.action}
        >
          <AppIcon color="white" name="bookmark" size={22} weight="regular" />
        </View>
        <View
          accessibilityLabel="Share unavailable"
          accessibilityRole="button"
          accessibilityState={{ disabled: true }}
          style={styles.action}
        >
          <AppIcon color="white" name="share" size={22} weight="regular" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    width: '100%',
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
  },
  action: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    left: 88,
    right: 88,
    color: colors.white,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '800',
    textAlign: 'center',
  },
  trailingActions: {
    flexDirection: 'row',
  },
  pressed: {
    opacity: 0.72,
  },
});
