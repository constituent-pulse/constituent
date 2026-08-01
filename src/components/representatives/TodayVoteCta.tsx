import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { platformShadow } from '@/src/components/ui/shadows';
import { colors, radius } from '@/src/theme/tokens';

type TodayVoteCtaProps = {
  onPress?: () => void;
  subtitle: string;
  title: string;
};

export function TodayVoteCta({ onPress, subtitle, title }: TodayVoteCtaProps) {
  return (
    <Pressable
      accessibilityLabel={`Today's Vote: ${title}. ${subtitle}`}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.cta, pressed && styles.pressed]}
    >
      <View style={styles.copy}>
        <Text style={styles.eyebrow}>TODAY&apos;S VOTE</Text>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Text numberOfLines={1} style={styles.action}>
        Swipe to Vote
      </Text>
      <View style={styles.arrowCircle}>
        <AppIcon color="blue500" name="forward/chevron" size={25} weight="bold" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cta: {
    minHeight: 82,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: radius.md,
    backgroundColor: colors.blue500,
    paddingLeft: 14,
    paddingRight: 14,
    ...platformShadow({
      color: colors.blue500,
      opacity: 0.3,
      radius: 16,
      offset: { width: 0, height: 8 },
      elevation: 7,
    }),
  },
  copy: {
    flex: 1,
    minWidth: 0,
    paddingRight: 6,
  },
  eyebrow: {
    color: colors.white,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '800',
  },
  title: {
    marginTop: 3,
    color: colors.white,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: 2,
    color: colors.white,
    fontSize: 13,
    lineHeight: 17,
    fontWeight: '500',
  },
  action: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '800',
    marginLeft: 4,
    marginRight: 6,
  },
  arrowCircle: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
    backgroundColor: colors.white,
  },
  pressed: {
    opacity: 0.86,
  },
});
