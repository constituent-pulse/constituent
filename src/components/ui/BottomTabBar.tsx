import { StyleSheet, Text, View } from 'react-native';
import { AppIcon, type AppIconName } from '@/src/components/ui/AppIcon';
import { colors, spacing } from '@/src/theme/tokens';

export type BottomTabItem = {
  active: boolean;
  icon: AppIconName;
  key: string;
  label: string;
};

const DEFAULT_TABS = [
  { key: 'home', label: 'Home', icon: 'home', active: true },
  { key: 'votes', label: 'Votes', icon: 'votes', active: false },
  { key: 'score', label: 'Score', icon: 'score', active: false },
  { key: 'activity', label: 'Activity', icon: 'activity', active: false },
  { key: 'profile', label: 'Profile', icon: 'profile', active: false },
] as const satisfies readonly BottomTabItem[];

type BottomTabBarProps = {
  items?: readonly BottomTabItem[];
};

export function BottomTabBar({ items = DEFAULT_TABS }: BottomTabBarProps) {
  return (
    <View accessibilityLabel="Main navigation" style={styles.bar}>
      {items.map((tab) => (
        <View
          accessibilityLabel={tab.label}
          accessibilityRole="tab"
          accessibilityState={{ selected: tab.active }}
          key={tab.key}
          style={styles.tab}
        >
          <AppIcon
            color={tab.active ? 'blue500' : 'gray300'}
            name={tab.icon}
            size={28}
            weight={tab.active ? 'bold' : 'regular'}
          />
          <Text
            adjustsFontSizeToFit
            minimumFontScale={0.82}
            numberOfLines={1}
            style={[styles.label, tab.active && styles.labelActive]}
          >
            {tab.label}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: 82,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(156, 192, 255, 0.16)',
    backgroundColor: 'rgba(7, 24, 39, 0.96)',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
  },
  tab: {
    flex: 1,
    minWidth: 0,
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: 6,
    color: colors.gray300,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  labelActive: {
    color: colors.blue500,
  },
});
