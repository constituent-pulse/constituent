import type { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AccountTopNav } from '@/src/components/account/AccountTopNav';
import { colors, spacing } from '@/src/theme/tokens';

type AccountScreenFrameProps = {
  canGoBack: boolean;
  children: ReactNode;
  footer: ReactNode;
  onBack: () => void;
  onSkip: () => void;
  variant: 'centered' | 'stacked';
};

export function AccountScreenFrame({
  canGoBack,
  children,
  footer,
  onBack,
  onSkip,
  variant,
}: AccountScreenFrameProps) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboard}
      >
        <AccountTopNav canGoBack={canGoBack} onBack={onBack} onSkip={onSkip} />

        <ScrollView
          contentContainerStyle={[
            styles.content,
            variant === 'centered' ? styles.centeredContent : styles.stackedContent,
          ]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          style={styles.scroller}
        >
          {children}
        </ScrollView>

        <View style={styles.footer}>{footer}</View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  keyboard: {
    flex: 1,
  },
  scroller: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingBottom: spacing.lg,
  },
  centeredContent: {
    paddingTop: spacing.sm,
  },
  stackedContent: {
    paddingTop: 28,
  },
  footer: {
    paddingHorizontal: 30,
    paddingBottom: spacing.lg,
  },
});
