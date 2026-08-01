import type { ColorValue, StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';
import type { AndroidSymbol, SFSymbol, SymbolWeight } from 'expo-symbols';
import { SymbolView } from 'expo-symbols';
import bold from 'expo-symbols/androidWeights/bold';
import light from 'expo-symbols/androidWeights/light';
import medium from 'expo-symbols/androidWeights/medium';
import regular from 'expo-symbols/androidWeights/regular';
import semiBold from 'expo-symbols/androidWeights/semiBold';
import { colors } from '@/src/theme/tokens';

type PlatformSymbolNames = {
  ios: SFSymbol;
  android: AndroidSymbol;
  web: AndroidSymbol;
};

export const APP_ICON_SYMBOLS = {
  home: { ios: 'house.fill', android: 'home', web: 'home' },
  votes: { ios: 'doc.text.fill', android: 'how_to_vote', web: 'how_to_vote' },
  alignment: { ios: 'target', android: 'target', web: 'target' },
  engagement: {
    ios: 'flame.fill',
    android: 'local_fire_department',
    web: 'local_fire_department',
  },
  activity: {
    ios: 'bubble.left.and.bubble.right.fill',
    android: 'forum',
    web: 'forum',
  },
  profile: { ios: 'person.fill', android: 'person', web: 'person' },
  notifications: { ios: 'bell.fill', android: 'notifications', web: 'notifications' },
  representatives: {
    ios: 'building.columns.fill',
    android: 'account_balance',
    web: 'account_balance',
  },
  'latest vote': { ios: 'checklist', android: 'fact_check', web: 'fact_check' },
  'relevant to you': { ios: 'scope', android: 'interests', web: 'interests' },
  impact: {
    ios: 'chart.line.uptrend.xyaxis',
    android: 'trending_up',
    web: 'trending_up',
  },
  score: { ios: 'gauge.medium', android: 'speed', web: 'speed' },
  back: { ios: 'arrow.backward', android: 'arrow_back', web: 'arrow_back' },
  'forward/chevron': {
    ios: 'chevron.right',
    android: 'chevron_right',
    web: 'chevron_right',
  },
  email: { ios: 'envelope.fill', android: 'mail', web: 'mail' },
  'ZIP/location': { ios: 'location.fill', android: 'location_on', web: 'location_on' },
  'privacy/security': { ios: 'shield.fill', android: 'shield', web: 'shield' },
  check: { ios: 'checkmark', android: 'check', web: 'check' },
  information: { ios: 'info.circle.fill', android: 'info', web: 'info' },
  healthcare: {
    ios: 'heart.text.square.fill',
    android: 'health_and_safety',
    web: 'health_and_safety',
  },
  economy: {
    ios: 'dollarsign.circle.fill',
    android: 'payments',
    web: 'payments',
  },
  education: { ios: 'graduationcap.fill', android: 'school', web: 'school' },
  veterans: { ios: 'medal.fill', android: 'military_tech', web: 'military_tech' },
  jobs: { ios: 'briefcase.fill', android: 'work', web: 'work' },
  immigration: {
    ios: 'globe.americas.fill',
    android: 'language',
    web: 'language',
  },
  'national security': {
    ios: 'lock.shield.fill',
    android: 'security',
    web: 'security',
  },
  'public safety': {
    ios: 'exclamationmark.shield.fill',
    android: 'local_police',
    web: 'local_police',
  },
  environment: { ios: 'leaf.fill', android: 'eco', web: 'eco' },
  infrastructure: { ios: 'hammer.fill', android: 'construction', web: 'construction' },
  technology: { ios: 'cpu.fill', android: 'memory', web: 'memory' },
  'small business': { ios: 'storefront.fill', android: 'storefront', web: 'storefront' },
  housing: { ios: 'house.lodge.fill', android: 'house', web: 'house' },
  against: { ios: 'xmark', android: 'cancel', web: 'cancel' },
  family: {
    ios: 'figure.2.and.child.holdinghands',
    android: 'family_restroom',
    web: 'family_restroom',
  },
  community: { ios: 'person.3.fill', android: 'communities', web: 'communities' },
  wallet: {
    ios: 'wallet.pass.fill',
    android: 'account_balance_wallet',
    web: 'account_balance_wallet',
  },
} as const satisfies Record<string, PlatformSymbolNames>;

export type AppIconName = keyof typeof APP_ICON_SYMBOLS;
export type AppIconWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
export type AppIconColor = keyof typeof colors | ColorValue;

type AppIconProps = {
  accessibilityLabel?: string;
  color?: AppIconColor;
  name: AppIconName;
  size?: number;
  style?: StyleProp<ViewStyle>;
  weight?: AppIconWeight;
};

const ANDROID_WEIGHTS = {
  light,
  regular,
  medium,
  semibold: semiBold,
  bold,
} as const;

const IOS_WEIGHTS: Record<AppIconWeight, SymbolWeight> = {
  light: 'light',
  regular: 'regular',
  medium: 'medium',
  semibold: 'semibold',
  bold: 'bold',
};

export function AppIcon({
  accessibilityLabel,
  color = 'white',
  name,
  size = 24,
  style,
  weight = 'regular',
}: AppIconProps) {
  const iconColor = resolveColor(color);

  return (
    <View
      accessibilityElementsHidden={!accessibilityLabel}
      accessibilityLabel={accessibilityLabel}
      importantForAccessibility={accessibilityLabel ? 'auto' : 'no'}
      style={[styles.container, { width: size, height: size }, style]}
    >
      <SymbolView
        fallback={<IconFallback color={iconColor} size={size} />}
        name={APP_ICON_SYMBOLS[name]}
        resizeMode="scaleAspectFit"
        size={size}
        tintColor={iconColor}
        weight={{
          ios: IOS_WEIGHTS[weight],
          android: ANDROID_WEIGHTS[weight],
        }}
      />
    </View>
  );
}

function IconFallback({ color, size }: { color: ColorValue; size: number }) {
  return (
    <View
      accessibilityLabel="Missing icon fallback"
      style={[
        styles.fallback,
        {
          width: size,
          height: size,
          borderColor: color,
          borderRadius: size / 2,
        },
      ]}
    >
      <View
        style={[
          styles.fallbackDot,
          {
            width: Math.max(4, size * 0.24),
            height: Math.max(4, size * 0.24),
            borderRadius: size,
            backgroundColor: color,
          },
        ]}
      />
    </View>
  );
}

function resolveColor(color: AppIconColor): ColorValue {
  if (typeof color === 'string' && color in colors) {
    return colors[color as keyof typeof colors];
  }

  return color;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallback: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    opacity: 0.78,
  },
  fallbackDot: {
    opacity: 0.9,
  },
});
