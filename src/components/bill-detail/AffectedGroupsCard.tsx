import { StyleSheet, Text, View } from 'react-native';
import { BillDetailSectionCard } from '@/src/components/bill-detail/BillDetailSectionCard';
import { billDetailTones } from '@/src/components/bill-detail/billDetailTones';
import type { AffectedGroup } from '@/src/components/bill-detail/types';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { colors, radius } from '@/src/theme/tokens';

type AffectedGroupsCardProps = {
  groups: AffectedGroup[];
};

export function AffectedGroupsCard({ groups }: AffectedGroupsCardProps) {
  return (
    <BillDetailSectionCard
      icon="community"
      subtitle="Factual groups that may be affected by the sample provisions."
      title="Who Is Affected"
    >
      <View style={styles.grid}>
        {groups.map((group) => {
          const tone = billDetailTones[group.tone];

          return (
            <View
              accessibilityLabel={`${group.label}. ${group.claim.text}`}
              key={group.id}
              style={styles.tile}
            >
              <AppIcon color={tone.text} name={group.icon} size={29} weight="regular" />
              <Text numberOfLines={2} style={styles.label}>
                {group.label}
              </Text>
            </View>
          );
        })}
      </View>
    </BillDetailSectionCard>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    marginTop: 10,
  },
  tile: {
    width: '31.8%',
    minHeight: 78,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(156, 192, 255, 0.2)',
    borderRadius: radius.sm,
    backgroundColor: 'rgba(7, 24, 39, 0.3)',
    paddingHorizontal: 5,
  },
  label: {
    minHeight: 28,
    marginTop: 5,
    color: colors.white,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
});
