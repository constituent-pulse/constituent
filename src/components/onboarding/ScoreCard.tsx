import { StyleSheet, Text, View } from 'react-native';
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
          <View style={styles.pulseMark}>
            <View style={styles.pulseLineA} />
            <View style={styles.pulseLineB} />
            <View style={styles.pulseLineC} />
          </View>
          <View>
            <Text style={styles.metricLabel}>Alignment</Text>
            <Text style={styles.metricValue}>78%</Text>
          </View>
        </View>

        <View style={styles.metricCard}>
          <View style={styles.flameMark}>
            <View style={styles.flameTop} />
            <View style={styles.flameBase} />
          </View>
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
    shadowColor: colors.navy950,
    shadowOpacity: 0.24,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 9 },
    elevation: 8,
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
  pulseMark: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  pulseLineA: {
    position: 'absolute',
    left: 1,
    top: 11,
    width: 22,
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.blue400,
  },
  pulseLineB: {
    position: 'absolute',
    left: 8,
    top: 3,
    width: 3,
    height: 19,
    borderRadius: 2,
    backgroundColor: colors.blue400,
    transform: [{ rotate: '-18deg' }],
  },
  pulseLineC: {
    position: 'absolute',
    right: 4,
    top: 7,
    width: 3,
    height: 13,
    borderRadius: 2,
    backgroundColor: colors.blue400,
    transform: [{ rotate: '24deg' }],
  },
  flameMark: {
    width: 24,
    height: 28,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  flameTop: {
    position: 'absolute',
    top: 2,
    width: 13,
    height: 18,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#FF7A45',
    transform: [{ rotate: '-28deg' }],
  },
  flameBase: {
    width: 18,
    height: 17,
    borderRadius: 9,
    backgroundColor: colors.warning,
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
