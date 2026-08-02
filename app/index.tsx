import { useEffect, useMemo } from 'react';
import {
  Animated,
  Easing,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PulseLogo } from '@/src/components/PulseLogo';
import { colors, spacing } from '@/src/theme/tokens';

const SPLASH_DURATION_MS = 8000;
const USE_NATIVE_DRIVER = Platform.OS !== 'web';
const SPLASH_LINES = [
  'Understand Every Vote.',
  'See How It Affects You.',
  'See How You Are Represented.',
] as const;

export default function SplashScreen() {
  const router = useRouter();
  const opacity = useMemo(() => new Animated.Value(0), []);
  const scale = useMemo(() => new Animated.Value(0.97), []);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1500,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: USE_NATIVE_DRIVER,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 1700,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: USE_NATIVE_DRIVER,
      }),
    ]).start();

    const timeout = setTimeout(() => {
      router.replace('/onboarding');
    }, SPLASH_DURATION_MS);

    return () => clearTimeout(timeout);
  }, [opacity, router, scale]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animated.View
        style={[
          styles.hero,
          {
            opacity,
            transform: [{ scale }],
          },
        ]}
      >
        <PulseLogo />

        <Text style={styles.brand}>Constituent</Text>
        <View style={styles.messageStack}>
          {SPLASH_LINES.map((line) => (
            <Text key={line} style={styles.messageLine}>
              {line}
            </Text>
          ))}
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hero: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    marginTop: -24,
  },
  brand: {
    marginTop: spacing.xl,
    color: colors.white,
    fontSize: 43,
    lineHeight: 50,
    fontWeight: '800',
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: Platform.select({ ios: 'System', android: 'sans-serif' }),
  },
  messageStack: {
    marginTop: spacing.lg,
    maxWidth: 335,
    alignItems: 'center',
  },
  messageLine: {
    color: colors.textSecondary,
    fontSize: 17,
    lineHeight: 25,
    fontWeight: '700',
    letterSpacing: 0,
    textAlign: 'center',
  },
});
