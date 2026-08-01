import { useState } from 'react';
import { ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { BillComplexityCard } from '@/src/components/bill-detail/BillComplexityCard';
import { BillDetailsHeader } from '@/src/components/bill-detail/BillDetailsHeader';
import { BillInsideOverview } from '@/src/components/bill-detail/BillInsideOverview';
import { BillStatusTracker } from '@/src/components/bill-detail/BillStatusTracker';
import { BillSummaryCard } from '@/src/components/bill-detail/BillSummaryCard';
import { ImpactGroupsCard } from '@/src/components/bill-detail/ImpactGroupsCard';
import { OfficialSourcesCard } from '@/src/components/bill-detail/OfficialSourcesCard';
import { VoteResponseCard } from '@/src/components/bill-detail/VoteResponseCard';
import { WorthKnowingCard } from '@/src/components/bill-detail/WorthKnowingCard';
import type { BillDetails, VoteResponse } from '@/src/components/bill-detail/types';
import { BottomTabBar, type BottomTabItem } from '@/src/components/ui/BottomTabBar';
import { CivicScreenBackground } from '@/src/components/ui/CivicScreenBackground';
import { colors, spacing } from '@/src/theme/tokens';

const FIXED_NAV_HEIGHT = 82;

const VOTE_DETAILS_TABS = [
  { key: 'home', label: 'Home', icon: 'home', active: true },
  { key: 'votes', label: 'Votes', icon: 'votes', active: false },
  { key: 'representatives', label: 'Representatives', icon: 'representatives', active: false },
  { key: 'activity', label: 'Activity', icon: 'activity', active: false },
  { key: 'profile', label: 'Profile', icon: 'profile', active: false },
] as const satisfies readonly BottomTabItem[];

type VoteDetailsScreenProps = {
  bill: BillDetails;
};

export function VoteDetailsScreen({ bill }: VoteDetailsScreenProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const [selectedResponse, setSelectedResponse] = useState<VoteResponse>();
  const contentMaxWidth = width >= 768 ? 760 : 640;
  const footerBottomPadding = Math.max(insets.bottom, 0);

  function handleBack() {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.replace('/representatives');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <CivicScreenBackground />

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          {
            maxWidth: contentMaxWidth,
            paddingBottom: FIXED_NAV_HEIGHT + footerBottomPadding + spacing.lg,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <BillDetailsHeader bill={bill} onBack={handleBack} />
        <BillStatusTracker steps={bill.statusSteps} />
        <BillSummaryCard summary={bill.summary} />
        <BillInsideOverview metrics={bill.insideMetrics} />
        <ImpactGroupsCard groups={bill.impactGroups} />
        <WorthKnowingCard items={bill.worthKnowing} />
        <BillComplexityCard complexity={bill.complexity} />
        <OfficialSourcesCard sources={bill.officialSources} />
        <VoteResponseCard
          onSelectResponse={setSelectedResponse}
          selectedResponse={selectedResponse}
        />
      </ScrollView>

      <View style={[styles.fixedNav, { paddingBottom: footerBottomPadding }]}>
        <View style={[styles.navInner, { maxWidth: contentMaxWidth }]}>
          <BottomTabBar items={VOTE_DETAILS_TABS} />
        </View>
      </View>
    </SafeAreaView>
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
    paddingTop: spacing.sm,
  },
  fixedNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(7, 24, 39, 0.96)',
  },
  navInner: {
    width: '100%',
  },
});
