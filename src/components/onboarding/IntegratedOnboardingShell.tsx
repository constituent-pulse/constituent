import type { ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
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
  const contentMaxWidth = width >= 768 ? 390 : 640;
  const footerBottomPadding = Math.max(insets.bottom, spacing.md);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboard}
      >
        <View style={styles.screen}>
          <View style={[styles.content, { maxWidth: contentMaxWidth }]}>{children}</View>

          <View style={[styles.footerWrap, { paddingBottom: footerBottomPadding }]}>
            <View style={[styles.footerInner, { maxWidth: contentMaxWidth }]}>{footer}</View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },
  keyboard: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    width: '100%',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
  },
  footerWrap: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    backgroundColor: colors.white,
  },
  footerInner: {
    width: '100%',
    alignItems: 'center',
  },
});
