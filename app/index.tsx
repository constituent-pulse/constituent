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

const SPLASH_DURATION_MS = 2600;
const USE_NATIVE_DRIVER = Platform.OS !== 'web';

export default function SplashScreen() {
  const router = useRouter();
  const opacity = useMemo(() => new Animated.Value(0), []);
  const scale = useMemo(() => new Animated.Value(0.9), []);
  const loadingOpacity = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 700,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: USE_NATIVE_DRIVER,
      }),
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.045,
          duration: 720,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: USE_NATIVE_DRIVER,
        }),
        Animated.spring(scale, {
          toValue: 1,
          damping: 9,
          stiffness: 120,
          mass: 0.8,
          useNativeDriver: USE_NATIVE_DRIVER,
        }),
      ]),
      Animated.timing(loadingOpacity, {
        toValue: 1,
        delay: 550,
        duration: 600,
        useNativeDriver: USE_NATIVE_DRIVER,
      }),
    ]).start();

    const timeout = setTimeout(() => {
      router.replace('/onboarding');
    }, SPLASH_DURATION_MS);

    return () => clearTimeout(timeout);
  }, [loadingOpacity, opacity, router, scale]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.ambientTop} />
      <View style={styles.ambientBottom} />

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
        <Text style={styles.tagline}>Your voice. Their vote.</Text>
        <Text style={styles.description}>
          Understand government. See how it affects you.{`\n`}Know how you’re represented.
        </Text>
      </Animated.View>

      <Animated.View style={[styles.loadingWrap, { opacity: loadingOpacity }]}>
        <View style={styles.loadingTrack}>
          <Animated.View style={styles.loadingFill} />
        </View>
        <Text style={styles.loadingText}>Loading civic data…</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: colors.navy950,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ambientTop: {
    position: 'absolute',
    width: 420,
    height: 420,
    borderRadius: 210,
    top: -250,
    right: -170,
    backgroundColor: 'rgba(45, 125, 255, 0.13)',
  },
  ambientBottom: {
    position: 'absolute',
    width: 360,
    height: 360,
    borderRadius: 180,
    bottom: -230,
    left: -190,
    backgroundColor: 'rgba(79, 141, 255, 0.08)',
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
    letterSpacing: -1.4,
    textAlign: 'center',
    fontFamily: Platform.select({ ios: 'System', android: 'sans-serif' }),
  },
  tagline: {
    marginTop: 9,
    color: colors.blue400,
    fontSize: 19,
    lineHeight: 25,
    fontWeight: '700',
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  description: {
    marginTop: spacing.lg,
    maxWidth: 335,
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 23,
    fontWeight: '500',
    textAlign: 'center',
  },
  loadingWrap: {
    position: 'absolute',
    bottom: 54,
    width: 190,
    alignItems: 'center',
  },
  loadingTrack: {
    width: 56,
    height: 3,
    overflow: 'hidden',
    borderRadius: 999,
    backgroundColor: 'rgba(138, 164, 214, 0.18)',
  },
  loadingFill: {
    width: 36,
    height: 3,
    borderRadius: 999,
    backgroundColor: colors.blue400,
  },
  loadingText: {
    marginTop: 13,
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.25,
  },
});
