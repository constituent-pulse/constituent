import { StyleSheet, View } from 'react-native';
import { colors } from '@/src/theme/tokens';

export function CivicScreenBackground() {
  return (
    <View
      accessibilityElementsHidden
      importantForAccessibility="no"
      style={styles.background}
    >
      <View style={styles.topGlow} />
      <View style={styles.bottomGlow} />
      <View style={styles.capitol}>
        <View style={styles.dome} />
        <View style={styles.roof} />
        <View style={styles.columns}>
          {Array.from({ length: 7 }, (_, index) => (
            <View key={index} style={styles.column} />
          ))}
        </View>
        <View style={styles.base} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFill,
    pointerEvents: 'none',
  },
  topGlow: {
    position: 'absolute',
    top: -170,
    right: -150,
    width: 360,
    height: 360,
    borderRadius: 180,
    backgroundColor: 'rgba(45, 125, 255, 0.13)',
  },
  bottomGlow: {
    position: 'absolute',
    bottom: -220,
    left: -180,
    width: 340,
    height: 340,
    borderRadius: 170,
    backgroundColor: 'rgba(79, 141, 255, 0.08)',
  },
  capitol: {
    position: 'absolute',
    top: 96,
    right: -18,
    width: 190,
    height: 132,
    alignItems: 'center',
    opacity: 0.16,
  },
  dome: {
    width: 92,
    height: 64,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderWidth: 2,
    borderBottomWidth: 0,
    borderColor: colors.blue200,
  },
  roof: {
    width: 140,
    height: 9,
    marginTop: 4,
    borderRadius: 5,
    backgroundColor: colors.blue200,
  },
  columns: {
    width: 136,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  column: {
    width: 10,
    height: 40,
    borderRadius: 5,
    backgroundColor: colors.blue200,
  },
  base: {
    width: 170,
    height: 12,
    marginTop: 7,
    borderRadius: 6,
    backgroundColor: colors.blue200,
  },
});
