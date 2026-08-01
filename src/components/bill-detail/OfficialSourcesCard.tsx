import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { BillDetailSectionCard } from '@/src/components/bill-detail/BillDetailSectionCard';
import { SOURCE_COMING_WITH_LIVE_DATA } from '@/src/components/bill-detail/billDetailsData';
import type { SourceReference } from '@/src/components/bill-detail/types';
import { SourceActionChip } from '@/src/components/ui/SourceActionChip';
import { colors, spacing } from '@/src/theme/tokens';

type OfficialSourcesCardProps = {
  sources: SourceReference[];
};

export function OfficialSourcesCard({ sources }: OfficialSourcesCardProps) {
  return (
    <BillDetailSectionCard icon="read source" title="Read It Yourself">
      <ScrollView
        contentContainerStyle={styles.sources}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {sources.map((source) => (
          <SourceActionChip
            disabled={source.status === 'pendingLiveData'}
            icon={source.icon}
            key={source.id}
            label={source.label}
            secondaryLabel={
              source.status === 'pendingLiveData' ? SOURCE_COMING_WITH_LIVE_DATA : undefined
            }
          />
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.sourceNote}>
          <AppIcon color="gray200" name="privacy/security" size={24} weight="regular" />
          <Text style={styles.noteText}>{SOURCE_COMING_WITH_LIVE_DATA}</Text>
        </View>
        <View
          accessibilityLabel={`View All Sources. ${SOURCE_COMING_WITH_LIVE_DATA}`}
          accessibilityRole="button"
          accessibilityState={{ disabled: true }}
          style={styles.viewAll}
        >
          <Text style={styles.viewAllText}>View All Sources</Text>
          <AppIcon color="gray200" name="forward/chevron" size={22} weight="semibold" />
        </View>
      </View>
    </BillDetailSectionCard>
  );
}

const styles = StyleSheet.create({
  sources: {
    paddingTop: spacing.md,
  },
  footer: {
    minHeight: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'rgba(156, 192, 255, 0.22)',
    marginTop: spacing.sm,
    paddingTop: spacing.sm,
  },
  sourceNote: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: spacing.sm,
  },
  noteText: {
    flex: 1,
    marginLeft: spacing.sm,
    color: colors.gray200,
    fontSize: 13,
    lineHeight: 17,
    fontWeight: '500',
  },
  viewAll: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.72,
  },
  viewAllText: {
    color: colors.gray200,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
  },
});
