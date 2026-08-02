import type { ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, spacing } from '@/src/theme/tokens';

type IntegratedOnboardingShellProps = {
  children: ReactNode;
  footer: ReactNode;
};

export function IntegratedOnboardingShell({
  children,
  footer,
}: IntegratedOnboardingShellProps) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const contentMaxWidth = width >= 768 ? 420 : 640;
  const footerBottomPadding = Math.max(insets.bottom, spacing.lg);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboard}
      >
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            {
              maxWidth: contentMaxWidth,
              paddingBottom: spacing.lg,
            },
          ]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          style={styles.scroller}
        >
          {children}
        </ScrollView>

        <View style={[styles.footerWrap, { paddingBottom: footerBottomPadding }]}>
          <View style={[styles.footerInner, { maxWidth: contentMaxWidth }]}>{footer}</View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  keyboard: {
    flex: 1,
  },
  scroller: {
    flex: 1,
  },
  scrollContent: {
    width: '100%',
    flexGrow: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
  },
  footerWrap: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.sm,
    backgroundColor: colors.white,
  },
  footerInner: {
    width: '100%',
    alignItems: 'center',
  },
});
