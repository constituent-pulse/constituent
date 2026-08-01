import { StyleSheet, View } from 'react-native';
import { AppIcon, type AppIconName } from '@/src/components/ui/AppIcon';
import { colors } from '@/src/theme/tokens';

type IconBadgeProps = {
  backgroundColor?: string;
  borderColor?: string;
  color?: keyof typeof colors | string;
  icon: AppIconName;
  size?: number;
};

export function IconBadge({
  backgroundColor = 'rgba(45, 125, 255, 0.86)',
  borderColor = 'rgba(156, 192, 255, 0.18)',
  color = 'white',
  icon,
  size = 52,
}: IconBadgeProps) {
  const iconSize = Math.round(size * 0.55);

  return (
    <View
      accessibilityElementsHidden
      importantForAccessibility="no"
      style={[
        styles.badge,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          borderColor,
        },
      ]}
    >
      <AppIcon color={color} name={icon} size={iconSize} weight="semibold" />
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
});
