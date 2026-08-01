import type { ReactNode } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/src/theme/tokens';

type OnboardingShellProps = {
  body: string;
  footer: ReactNode;
  illustration: ReactNode;
  title: string;
  topNav: ReactNode;
};

export function OnboardingShell({
  body,
  footer,
  illustration,
  title,
  topNav,
}: OnboardingShellProps) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      {topNav}

      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.illustrationSlot}>{illustration}</View>

          <Text style={styles.title}>{title}</Text>
          <Text style={styles.body}>{body}</Text>
        </View>

        <View style={styles.footer}>{footer}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingBottom: 34,
  },
  mainContent: {
    alignItems: 'center',
    paddingTop: 20,
  },
  illustrationSlot: {
    height: 282,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 12,
    color: colors.navy950,
    fontSize: 27,
    lineHeight: 32,
    fontWeight: '800',
    textAlign: 'center',
  },
  body: {
    width: '100%',
    maxWidth: 306,
    marginTop: 14,
    color: colors.navy950,
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '400',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
  },
});
