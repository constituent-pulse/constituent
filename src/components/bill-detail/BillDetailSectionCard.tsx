import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { AppIcon, type AppIconName } from '@/src/components/ui/AppIcon';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { IconBadge } from '@/src/components/ui/IconBadge';
import { colors, spacing } from '@/src/theme/tokens';
import { billDetailTones, type BillDetailTone } from '@/src/components/bill-detail/billDetailTones';

type BillDetailSectionCardProps = {
  accessibilityLabel?: string;
  children: ReactNode;
  headerAccessory?: ReactNode;
  icon: AppIconName;
  showChevron?: boolean;
  style?: StyleProp<ViewStyle>;
  subtitle?: string;
  title: string;
  tone?: BillDetailTone;
};

export function BillDetailSectionCard({
  accessibilityLabel,
  children,
  headerAccessory,
  icon,
  showChevron = false,
  style,
  subtitle,
  title,
  tone = 'blue',
}: BillDetailSectionCardProps) {
  const toneColors = billDetailTones[tone];

  return (
    <GlassCard accessibilityLabel={accessibilityLabel ?? title} style={[styles.card, style]}>
      <View style={styles.header}>
        <IconBadge
          backgroundColor={toneColors.fill}
          borderColor={toneColors.border}
          icon={icon}
          size={32}
        />
        <View style={styles.copy}>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
        {headerAccessory}
        {showChevron ? (
          <AppIcon color="gray200" name="forward/chevron" size={20} weight="semibold" />
        ) : null}
      </View>
      {children}
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  copy: {
    flex: 1,
    minWidth: 0,
    marginLeft: 10,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: 3,
    color: colors.gray200,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
  },
});
