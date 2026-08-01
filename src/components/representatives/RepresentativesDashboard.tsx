import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  REPRESENTATIVES,
  TODAY_VOTE,
} from '@/src/components/representatives/representativesData';
import { RepresentativeCard } from '@/src/components/representatives/RepresentativeCard';
import { TodayVoteCta } from '@/src/components/representatives/TodayVoteCta';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { BottomTabBar } from '@/src/components/ui/BottomTabBar';
import { CivicScreenBackground } from '@/src/components/ui/CivicScreenBackground';
import { colors, spacing } from '@/src/theme/tokens';

const FIXED_FOOTER_HEIGHT = 176;

export function RepresentativesDashboard() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const contentMaxWidth = width >= 768 ? 520 : 640;
  const footerBottomPadding = Math.max(insets.bottom, 10);

  function openVoteDetails() {
    router.push('/vote-details' as never);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <CivicScreenBackground />

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingBottom: FIXED_FOOTER_HEIGHT + footerBottomPadding,
            maxWidth: contentMaxWidth,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topRow}>
          <View style={styles.headerCopy}>
            <Text accessibilityRole="header" style={styles.headline}>
              These people work for you.
            </Text>
            <Text style={styles.subheadline}>
              Know who represents you. See how they’re doing. Hold them accountable.
            </Text>
          </View>
          <NotificationBell />
        </View>

        <View style={styles.cards}>
          {REPRESENTATIVES.map((representative) => (
            <RepresentativeCard
              key={representative.id}
              onOpenVoteDetails={openVoteDetails}
              representative={representative}
            />
          ))}
        </View>
      </ScrollView>

      <View style={[styles.fixedFooter, { paddingBottom: footerBottomPadding }]}>
        <View style={[styles.footerInner, { maxWidth: contentMaxWidth }]}>
          <TodayVoteCta
            onPress={openVoteDetails}
            subtitle={TODAY_VOTE.subtitle}
            title={TODAY_VOTE.title}
          />
          <BottomTabBar />
        </View>
      </View>
    </SafeAreaView>
  );
}

function NotificationBell() {
  return (
    <View accessibilityLabel="Notifications" style={styles.bellWrap}>
      <AppIcon color="white" name="notifications" size={30} weight="medium" />
      <View style={styles.notificationBadge}>
        <Text style={styles.notificationText}>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: colors.navy950,
  },
  scrollContent: {
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },
  topRow: {
    position: 'relative',
  },
  headerCopy: {
    maxWidth: 315,
  },
  headline: {
    color: colors.white,
    fontSize: 38,
    lineHeight: 43,
    fontWeight: '800',
  },
  subheadline: {
    marginTop: 12,
    color: colors.gray200,
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '500',
  },
  bellWrap: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: 1,
    right: 1,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: colors.danger,
  },
  notificationText: {
    color: colors.white,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '800',
  },
  cards: {
    marginTop: spacing.lg,
  },
  fixedFooter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    backgroundColor: 'rgba(7, 24, 39, 0.92)',
  },
  footerInner: {
    width: '100%',
  },
});
