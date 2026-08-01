import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/src/theme/tokens';

export default function OnboardingPlaceholder() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>UI-002</Text>
        <Text style={styles.title}>Onboarding comes next.</Text>
        <Text style={styles.body}>
          This route is intentionally reserved so the splash screen has a real destination without inventing the next approved design.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.navy950 },
  content: { flex: 1, justifyContent: 'center', padding: 32 },
  eyebrow: { color: colors.blue400, fontSize: 14, fontWeight: '800' },
  title: { marginTop: 10, color: colors.white, fontSize: 34, fontWeight: '800' },
  body: { marginTop: 16, color: colors.textSecondary, fontSize: 16, lineHeight: 24 },
});
