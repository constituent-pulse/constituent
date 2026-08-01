import { StyleSheet, Text, View } from 'react-native';
import { AppIcon, type AppIconName } from '@/src/components/ui/AppIcon';
import { platformShadow } from '@/src/components/ui/shadows';
import { colors, radius } from '@/src/theme/tokens';

const ROWS = [
  { label: 'Wallet', value: '+ $320 / year', icon: 'wallet' },
  { label: 'Work', value: '+ 2.1%', icon: 'jobs' },
  { label: 'Healthcare', value: 'No change', icon: 'healthcare' },
  { label: 'Family', value: '+ Support', icon: 'family' },
  { label: 'Community', value: '+ Improvement', icon: 'community' },
] as const satisfies readonly { icon: AppIconName; label: string; value: string }[];

export function ImpactCard() {
  return (
    <View style={[styles.visualCard, styles.impactCard]}>
      <View style={styles.impactHeader}>
        <Text style={styles.impactTitle}>Your Impact</Text>
        <View style={styles.positiveBadge}>
          <Text style={styles.positiveText}>POSITIVE</Text>
        </View>
      </View>

      <View style={styles.impactRows}>
        {ROWS.map((row) => (
          <View key={row.label} style={styles.impactRow}>
            <MiniImpactIcon kind={row.icon} />
            <Text style={styles.impactLabel}>{row.label}</Text>
            <Text style={[styles.impactValue, row.value === 'No change' && styles.neutralValue]}>
              {row.value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function MiniImpactIcon({ kind }: { kind: (typeof ROWS)[number]['icon'] }) {
  return (
    <View style={styles.impactIconTile}>
      <AppIcon color="blue500" name={kind} size={15} weight="medium" />
    </View>
  );
}

const styles = StyleSheet.create({
  visualCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray100,
    ...platformShadow({
      color: colors.navy950,
      opacity: 0.13,
      radius: 18,
      offset: { width: 0, height: 9 },
      elevation: 8,
    }),
  },
  impactCard: {
    width: 264,
    height: 268,
    borderRadius: radius.sm,
    paddingTop: 20,
  },
  impactHeader: {
    height: 35,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  impactTitle: {
    color: colors.navy950,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '800',
  },
  positiveBadge: {
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: 'rgba(46, 204, 113, 0.18)',
  },
  positiveText: {
    color: '#027A48',
    fontSize: 9,
    fontWeight: '800',
  },
  impactRows: {
    borderTopWidth: 1,
    borderTopColor: colors.gray100,
  },
  impactRow: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray100,
    paddingHorizontal: 20,
  },
  impactIconTile: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#E8F1FF',
    marginRight: 14,
  },
  impactLabel: {
    flex: 1,
    color: colors.navy950,
    fontSize: 12,
    fontWeight: '800',
  },
  impactValue: {
    color: '#027A48',
    fontSize: 12,
    fontWeight: '700',
  },
  neutralValue: {
    color: colors.navy950,
    fontWeight: '500',
  },
});
