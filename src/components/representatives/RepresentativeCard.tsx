import { StyleSheet, Text, View } from 'react-native';
import { RepresentativeAvatar } from '@/src/components/representatives/RepresentativeAvatar';
import { RepresentativeScore } from '@/src/components/representatives/RepresentativeScore';
import { RepresentativeVoteRow } from '@/src/components/representatives/RepresentativeVoteRow';
import type { Representative } from '@/src/components/representatives/types';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { colors, spacing } from '@/src/theme/tokens';
import { ImpactPreview } from '@/src/components/representatives/ImpactPreview';

type RepresentativeCardProps = {
  onOpenVoteDetails?: () => void;
  representative: Representative;
};

export function RepresentativeCard({ onOpenVoteDetails, representative }: RepresentativeCardProps) {
  return (
    <GlassCard
      accessibilityLabel={`${representative.name}, ${representative.role}, ${representative.region}`}
      style={styles.card}
    >
      <View style={styles.header}>
        <RepresentativeAvatar name={representative.name} photoUrl={representative.photoUrl} />

        <View style={styles.identity}>
          <Text numberOfLines={2} style={styles.name}>
            {representative.name}
          </Text>
          <Text numberOfLines={2} style={styles.role}>
            {representative.role}
          </Text>
          <Text style={styles.region}>{representative.region}</Text>
        </View>

        <AppIcon color="white" name="forward/chevron" size={24} weight="semibold" />
      </View>

      <View style={styles.scoreRow}>
        <RepresentativeScore score={representative.representativeScore} />
      </View>

      <View style={styles.divider} />
      <RepresentativeVoteRow
        label="Latest Vote"
        onPress={onOpenVoteDetails}
        vote={representative.latestVote}
      />
      <View style={styles.thinDivider} />
      <RepresentativeVoteRow
        label="Relevant to You"
        onPress={onOpenVoteDetails}
        vote={representative.relevantVote}
      />
      <View style={styles.thinDivider} />
      <ImpactPreview impactPreview={representative.impactPreview} />
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: spacing.md,
    marginBottom: 14,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  identity: {
    flex: 1,
    minWidth: 0,
    marginLeft: spacing.md,
    paddingRight: spacing.sm,
  },
  name: {
    color: colors.white,
    fontSize: 21,
    lineHeight: 25,
    fontWeight: '800',
  },
  role: {
    marginTop: 4,
    color: colors.white,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '600',
  },
  region: {
    marginTop: 2,
    color: colors.white,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '600',
  },
  scoreRow: {
    marginTop: spacing.md,
  },
  divider: {
    height: 1,
    marginTop: spacing.md,
    backgroundColor: 'rgba(156, 192, 255, 0.22)',
  },
  thinDivider: {
    height: 1,
    backgroundColor: 'rgba(156, 192, 255, 0.15)',
  },
});
