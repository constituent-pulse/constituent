import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';
import type { SymbolWeight } from 'expo-symbols';
import { SymbolView } from 'expo-symbols';
import bold from 'expo-symbols/androidWeights/bold';
import light from 'expo-symbols/androidWeights/light';
import medium from 'expo-symbols/androidWeights/medium';
import regular from 'expo-symbols/androidWeights/regular';
import semiBold from 'expo-symbols/androidWeights/semiBold';
import { colors } from '@/src/theme/tokens';

type PlatformSymbolNames = {
  android: string;
  ios: string;
  web: string;
};

export type AppIconName =
  | 'home'
  | 'votes'
  | 'alignment'
  | 'engagement'
  | 'activity'
  | 'profile'
  | 'notifications'
  | 'representatives'
  | 'latest vote'
  | 'relevant to you'
  | 'impact'
  | 'score'
  | 'back'
  | 'forward/chevron'
  | 'email'
  | 'ZIP/location'
  | 'privacy/security'
  | 'check'
  | 'information'
  | 'healthcare'
  | 'economy'
  | 'education'
  | 'veterans'
  | 'jobs'
  | 'immigration'
  | 'national security'
  | 'public safety'
  | 'environment'
  | 'infrastructure'
  | 'technology'
  | 'small business'
  | 'housing'
  | 'against'
  | 'family'
  | 'community'
  | 'wallet'
  | 'bookmark'
  | 'share'
  | 'timer'
  | 'bill'
  | 'provisions'
  | 'worth knowing'
  | 'programs'
  | 'expiring'
  | 'complexity'
  | 'read source'
  | 'official text'
  | 'official summary'
  | 'roll call'
  | 'sponsor'
  | 'analysis'
  | 'external source'
  | 'support'
  | 'oppose'
  | 'question'
  | 'committee'
  | 'president';

export const APP_ICON_SYMBOLS: Record<AppIconName, PlatformSymbolNames> = {
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
  bookmark: { ios: 'bookmark', android: 'bookmark', web: 'bookmark' },
  share: { ios: 'square.and.arrow.up', android: 'ios_share', web: 'ios_share' },
  timer: { ios: 'timer', android: 'timer', web: 'timer' },
  bill: { ios: 'doc.text.fill', android: 'article', web: 'article' },
  provisions: {
    ios: 'list.bullet',
    android: 'format_list_bulleted',
    web: 'format_list_bulleted',
  },
  'worth knowing': {
    ios: 'magnifyingglass',
    android: 'visibility',
    web: 'visibility',
  },
  programs: {
    ios: 'briefcase.fill',
    android: 'business_center',
    web: 'business_center',
  },
  expiring: { ios: 'clock.fill', android: 'schedule', web: 'schedule' },
  complexity: { ios: 'chart.bar.xaxis', android: 'bar_chart', web: 'bar_chart' },
  'read source': { ios: 'book.fill', android: 'menu_book', web: 'menu_book' },
  'official text': { ios: 'doc.text', android: 'article', web: 'article' },
  'official summary': { ios: 'doc.text.magnifyingglass', android: 'summarize', web: 'summarize' },
  'roll call': { ios: 'checklist', android: 'how_to_vote', web: 'how_to_vote' },
  sponsor: { ios: 'person.text.rectangle', android: 'badge', web: 'badge' },
  analysis: { ios: 'chart.line.uptrend.xyaxis', android: 'analytics', web: 'analytics' },
  'external source': {
    ios: 'arrow.up.right.square',
    android: 'open_in_new',
    web: 'open_in_new',
  },
  support: { ios: 'hand.thumbsup', android: 'thumb_up', web: 'thumb_up' },
  oppose: { ios: 'hand.thumbsdown', android: 'thumb_down', web: 'thumb_down' },
  question: { ios: 'questionmark.circle', android: 'help', web: 'help' },
  committee: { ios: 'person.3.fill', android: 'groups', web: 'groups' },
  president: { ios: 'flag.fill', android: 'flag', web: 'flag' },
};

export type AppIconWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
export type AppIconColor = keyof typeof colors | string;

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
        name={APP_ICON_SYMBOLS[name] as never}
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

function IconFallback({ color, size }: { color: string; size: number }) {
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

function resolveColor(color: AppIconColor): string {
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
