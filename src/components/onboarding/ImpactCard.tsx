import { StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '@/src/theme/tokens';

const ROWS = [
  { label: 'Wallet', value: '+ $320 / year', icon: 'wallet' },
  { label: 'Work', value: '+ 2.1%', icon: 'work' },
  { label: 'Healthcare', value: 'No change', icon: 'health' },
  { label: 'Family', value: '+ Support', icon: 'family' },
  { label: 'Community', value: '+ Improvement', icon: 'community' },
] as const;

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
      {kind === 'wallet' ? (
        <>
          <View style={styles.walletBody} />
          <View style={styles.walletDot} />
        </>
      ) : null}
      {kind === 'work' ? (
        <>
          <View style={styles.briefcaseHandle} />
          <View style={styles.briefcaseBody} />
        </>
      ) : null}
      {kind === 'health' ? (
        <>
          <View style={styles.healthShield} />
          <View style={styles.healthCrossVertical} />
          <View style={styles.healthCrossHorizontal} />
        </>
      ) : null}
      {kind === 'family' ? (
        <>
          <View style={styles.familyHeadLeft} />
          <View style={styles.familyHeadRight} />
          <View style={styles.familyBodyLeft} />
          <View style={styles.familyBodyRight} />
        </>
      ) : null}
      {kind === 'community' ? (
        <>
          <View style={styles.communityCircleTop} />
          <View style={styles.communityCircleLeft} />
          <View style={styles.communityCircleRight} />
          <View style={styles.communityBase} />
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  visualCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray100,
    shadowColor: colors.navy950,
    shadowOpacity: 0.13,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 9 },
    elevation: 8,
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
  walletBody: {
    width: 14,
    height: 10,
    borderRadius: 2,
    backgroundColor: colors.blue500,
  },
  walletDot: {
    position: 'absolute',
    right: 5,
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.white,
  },
  briefcaseHandle: {
    width: 8,
    height: 4,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderWidth: 2,
    borderBottomWidth: 0,
    borderColor: colors.blue500,
  },
  briefcaseBody: {
    width: 15,
    height: 11,
    marginTop: -1,
    borderRadius: 2,
    backgroundColor: colors.blue500,
  },
  healthShield: {
    width: 14,
    height: 15,
    borderRadius: 5,
    backgroundColor: colors.blue500,
  },
  healthCrossVertical: {
    position: 'absolute',
    width: 3,
    height: 10,
    borderRadius: 2,
    backgroundColor: colors.white,
  },
  healthCrossHorizontal: {
    position: 'absolute',
    width: 10,
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.white,
  },
  familyHeadLeft: {
    position: 'absolute',
    left: 5,
    top: 4,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.blue500,
  },
  familyHeadRight: {
    position: 'absolute',
    right: 5,
    top: 4,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.blue500,
  },
  familyBodyLeft: {
    position: 'absolute',
    left: 3,
    bottom: 4,
    width: 9,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.blue500,
  },
  familyBodyRight: {
    position: 'absolute',
    right: 3,
    bottom: 4,
    width: 9,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.blue500,
  },
  communityCircleTop: {
    position: 'absolute',
    top: 4,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.blue500,
  },
  communityCircleLeft: {
    position: 'absolute',
    left: 4,
    bottom: 6,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.blue500,
  },
  communityCircleRight: {
    position: 'absolute',
    right: 4,
    bottom: 6,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.blue500,
  },
  communityBase: {
    position: 'absolute',
    bottom: 3,
    width: 14,
    height: 4,
    borderRadius: 3,
    backgroundColor: colors.blue500,
  },
});
