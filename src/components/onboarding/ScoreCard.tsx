import { StyleSheet, Text, View } from 'react-native';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { platformShadow } from '@/src/components/ui/shadows';
import { colors, radius } from '@/src/theme/tokens';

export function ScoreCard() {
  return (
    <View style={styles.scoreCard}>
      <Text style={styles.scoreHeading}>Your Constituent Score</Text>

      <View style={styles.gaugeWrap}>
        <View style={styles.gaugeRing} />
        <View style={styles.gaugeMask} />
        <Text style={styles.scoreValue}>732</Text>
      </View>

      <Text style={styles.scoreSubtext}>Above Average</Text>

      <View style={styles.metricRow}>
        <View style={styles.metricCard}>
          <AppIcon color="blue400" name="alignment" size={24} style={styles.metricIcon} weight="semibold" />
          <View>
            <Text style={styles.metricLabel}>Alignment</Text>
            <Text style={styles.metricValue}>78%</Text>
          </View>
        </View>

        <View style={styles.metricCard}>
          <AppIcon color="warning" name="engagement" size={24} style={styles.metricIcon} weight="semibold" />
          <View>
            <Text style={styles.metricLabel}>Engagement</Text>
            <Text style={styles.metricValue}>High</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scoreCard: {
    width: 278,
    height: 280,
    alignItems: 'center',
    borderRadius: radius.sm,
    backgroundColor: colors.navy950,
    ...platformShadow({
      color: colors.navy950,
      opacity: 0.24,
      radius: 18,
      offset: { width: 0, height: 9 },
      elevation: 8,
    }),
    paddingTop: 20,
  },
  scoreHeading: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '800',
  },
  gaugeWrap: {
    width: 118,
    height: 118,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 17,
  },
  gaugeRing: {
    position: 'absolute',
    width: 114,
    height: 114,
    borderWidth: 7,
    borderRadius: 57,
    borderColor: colors.blue500,
    borderBottomColor: colors.navy800,
    borderLeftColor: colors.blue500,
    transform: [{ rotate: '-42deg' }],
  },
  gaugeMask: {
    position: 'absolute',
    bottom: -1,
    width: 70,
    height: 24,
    backgroundColor: colors.navy950,
  },
  scoreValue: {
    color: colors.white,
    fontSize: 45,
    lineHeight: 52,
    fontWeight: '800',
  },
  scoreSubtext: {
    color: colors.blue400,
    fontSize: 14,
    fontWeight: '500',
  },
  metricRow: {
    width: 242,
    flexDirection: 'row',
    gap: 8,
    marginTop: 22,
  },
  metricCard: {
    flex: 1,
    minHeight: 62,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.navy900,
    paddingHorizontal: 12,
  },
  metricIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  metricLabel: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '700',
  },
  metricValue: {
    marginTop: 3,
    color: colors.white,
    fontSize: 22,
    lineHeight: 25,
    fontWeight: '800',
  },
});
