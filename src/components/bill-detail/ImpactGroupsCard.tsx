import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { BillDetailSectionCard } from '@/src/components/bill-detail/BillDetailSectionCard';
import { billDetailTones } from '@/src/components/bill-detail/billDetailTones';
import type { ImpactGroup } from '@/src/components/bill-detail/types';
import { colors, spacing } from '@/src/theme/tokens';

type ImpactGroupsCardProps = {
  groups: ImpactGroup[];
};

export function ImpactGroupsCard({ groups }: ImpactGroupsCardProps) {
  return (
    <BillDetailSectionCard
      icon="impact"
      showChevron
      subtitle="Tap a category to see potential impacts."
      title="How Does This Affect Me?"
    >
      <ScrollView
        contentContainerStyle={styles.groups}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {groups.map((group) => (
          <ImpactGroupTile group={group} key={group.id} />
        ))}
      </ScrollView>
    </BillDetailSectionCard>
  );
}

function ImpactGroupTile({ group }: { group: ImpactGroup }) {
  const tone = billDetailTones[group.tone];

  return (
    <View accessibilityLabel={`${group.label}. ${group.claim.text}`} style={styles.group}>
      <AppIcon color={tone.text} name={group.icon} size={36} weight="regular" />
      <Text style={styles.groupLabel}>{group.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  groups: {
    paddingTop: spacing.md,
  },
  group: {
    width: 110,
    minHeight: 76,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(156, 192, 255, 0.2)',
    paddingHorizontal: spacing.sm,
  },
  groupLabel: {
    marginTop: spacing.xs,
    color: colors.white,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});
