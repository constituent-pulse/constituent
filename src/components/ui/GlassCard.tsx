import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { platformShadow } from '@/src/components/ui/shadows';
import { colors, radius } from '@/src/theme/tokens';

type GlassCardProps = {
  accessibilityLabel?: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function GlassCard({ accessibilityLabel, children, style }: GlassCardProps) {
  return (
    <View accessibilityLabel={accessibilityLabel} style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(156, 192, 255, 0.24)',
    borderRadius: radius.sm,
    backgroundColor: 'rgba(16, 42, 72, 0.72)',
    ...platformShadow({
      color: colors.navy950,
      opacity: 0.32,
      radius: 18,
      offset: { width: 0, height: 9 },
      elevation: 8,
    }),
  },
});
