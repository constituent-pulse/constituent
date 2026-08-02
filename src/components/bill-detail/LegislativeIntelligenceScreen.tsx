import { ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AffectedGroupsCard } from '@/src/components/bill-detail/AffectedGroupsCard';
import { AtAGlanceCard } from '@/src/components/bill-detail/AtAGlanceCard';
import { BillDetailsTopBar } from '@/src/components/bill-detail/BillDetailsTopBar';
import { BillSummaryCard } from '@/src/components/bill-detail/BillSummaryCard';
import { CampaignFundingContextCard } from '@/src/components/bill-detail/CampaignFundingContextCard';
import { LegislativeBillHeaderCard } from '@/src/components/bill-detail/LegislativeBillHeaderCard';
import { LegislativeTradeoffsCard } from '@/src/components/bill-detail/LegislativeTradeoffsCard';
import { OfficialSourcesCard } from '@/src/components/bill-detail/OfficialSourcesCard';
import { QuestionsWorthAskingCard } from '@/src/components/bill-detail/QuestionsWorthAskingCard';
import type { LegislativeIntelligenceDetails } from '@/src/components/bill-detail/types';
import { WorthKnowingCard } from '@/src/components/bill-detail/WorthKnowingCard';
import { BottomTabBar, type BottomTabItem } from '@/src/components/ui/BottomTabBar';
import { colors, spacing } from '@/src/theme/tokens';

const FIXED_NAV_HEIGHT = 82;

const LEGISLATIVE_INTELLIGENCE_TABS = [
  { key: 'home', label: 'Home', icon: 'home', active: false },
  { key: 'votes', label: 'Votes', icon: 'votes', active: true },
  { key: 'score', label: 'Score', icon: 'score', active: false },
  { key: 'activity', label: 'Activity', icon: 'activity', active: false },
  { key: 'profile', label: 'Profile', icon: 'profile', active: false },
] as const satisfies readonly BottomTabItem[];

type LegislativeIntelligenceScreenProps = {
  details: LegislativeIntelligenceDetails;
};

export function LegislativeIntelligenceScreen({ details }: LegislativeIntelligenceScreenProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const contentMaxWidth = width >= 768 ? 520 : 640;
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

      <View style={styles.topBarWrap}>
        <View style={[styles.topBarInner, { maxWidth: contentMaxWidth }]}>
          <BillDetailsTopBar onBack={handleBack} />
        </View>
      </View>

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
        <LegislativeBillHeaderCard bill={details.bill} />
        <BillSummaryCard summary={details.summary} />
        <AtAGlanceCard indicators={details.atAGlance} />
        <LegislativeTradeoffsCard items={details.potentialBenefits} kind="benefits" />
        <LegislativeTradeoffsCard items={details.potentialDrawbacks} kind="drawbacks" />
        <AffectedGroupsCard groups={details.affectedGroups} />
        <WorthKnowingCard items={details.worthKnowing} />
        <CampaignFundingContextCard context={details.campaignFunding} />
        <QuestionsWorthAskingCard questions={details.questionsWorthAsking} />
        <OfficialSourcesCard
          lastUpdatedLabel={details.lastUpdatedLabel}
          sources={details.officialSources}
        />
      </ScrollView>

      <View style={[styles.fixedNav, { paddingBottom: footerBottomPadding }]}>
        <View style={[styles.navInner, { maxWidth: contentMaxWidth }]}>
          <BottomTabBar items={LEGISLATIVE_INTELLIGENCE_TABS} />
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
  topBarWrap: {
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(156, 192, 255, 0.08)',
    backgroundColor: colors.navy950,
  },
  topBarInner: {
    width: '100%',
  },
  scrollContent: {
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
  },
  fixedNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(7, 24, 39, 0.98)',
  },
  navInner: {
    width: '100%',
  },
});
