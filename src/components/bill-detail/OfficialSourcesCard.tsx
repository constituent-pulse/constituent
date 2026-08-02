import { Linking, StyleSheet, Text, View } from 'react-native';
import { BillDetailSectionCard } from '@/src/components/bill-detail/BillDetailSectionCard';
import { SOURCE_COMING_WITH_LIVE_DATA } from '@/src/components/bill-detail/legislativeIntelligenceData';
import type { SourceReference } from '@/src/components/bill-detail/types';
import { SourceActionChip } from '@/src/components/ui/SourceActionChip';
import { colors } from '@/src/theme/tokens';

type OfficialSourcesCardProps = {
  lastUpdatedLabel: string;
  sources: SourceReference[];
};

export function OfficialSourcesCard({ lastUpdatedLabel, sources }: OfficialSourcesCardProps) {
  return (
    <BillDetailSectionCard icon="read source" title="Official Sources">
      <View style={styles.sources}>
        {sources.map((source) => (
          <SourceActionChip
            description={source.description}
            disabled={source.status === 'pendingLiveData'}
            icon={source.icon}
            key={source.id}
            label={source.label}
            layout="row"
            onPress={
              source.status === 'available' ? () => void Linking.openURL(source.url) : undefined
            }
            secondaryLabel={
              source.status === 'pendingLiveData' ? SOURCE_COMING_WITH_LIVE_DATA : source.citation
            }
          />
        ))}
      </View>
      <Text style={styles.updated}>{lastUpdatedLabel}</Text>
    </BillDetailSectionCard>
  );
}

const styles = StyleSheet.create({
  sources: {
    marginTop: 7,
  },
  updated: {
    marginTop: 9,
    color: colors.textSecondary,
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
