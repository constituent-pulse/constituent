import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { colors, radius, spacing } from '@/src/theme/tokens';
import type { BillDetails } from '@/src/components/bill-detail/types';

type BillDetailsHeaderProps = {
  bill: BillDetails;
  onBack: () => void;
};

export function BillDetailsHeader({ bill, onBack }: BillDetailsHeaderProps) {
  return (
    <View style={styles.wrap}>
      <View style={styles.actionsRow}>
        <Pressable
          accessibilityLabel="Back"
          accessibilityRole="button"
          hitSlop={12}
          onPress={onBack}
          style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
        >
          <AppIcon color="white" name="back" size={27} weight="semibold" />
          <Text style={styles.backText}>Back</Text>
        </Pressable>

        <View style={styles.headerActions}>
          <View
            accessibilityLabel="Bookmark unavailable"
            accessibilityRole="button"
            accessibilityState={{ disabled: true }}
            style={styles.iconButton}
          >
            <AppIcon color="white" name="bookmark" size={27} weight="regular" />
          </View>
          <View
            accessibilityLabel="Share unavailable"
            accessibilityRole="button"
            accessibilityState={{ disabled: true }}
            style={styles.iconButton}
          >
            <AppIcon color="white" name="share" size={27} weight="regular" />
          </View>
        </View>
      </View>

      <View style={styles.billRow}>
        <View style={styles.billIconBox}>
          <AppIcon color="white" name="bill" size={58} weight="light" />
        </View>
        <View style={styles.titleCopy}>
          <Text accessibilityRole="header" style={styles.title}>
            {bill.title}
          </Text>
          <Text style={styles.meta}>
            {bill.billNumber}  •  {bill.congress}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: spacing.sm,
  },
  actionsRow: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    marginLeft: 4,
    color: colors.white,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '600',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  iconButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  billRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  billIconBox: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(156, 192, 255, 0.72)',
    borderRadius: radius.sm,
    backgroundColor: 'rgba(45, 125, 255, 0.18)',
  },
  titleCopy: {
    flex: 1,
    minWidth: 0,
    marginLeft: spacing.lg,
  },
  title: {
    color: colors.white,
    fontSize: 35,
    lineHeight: 39,
    fontWeight: '800',
  },
  meta: {
    marginTop: spacing.sm,
    color: colors.gray200,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500',
  },
  pressed: {
    opacity: 0.78,
  },
});
