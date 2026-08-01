import { StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '@/src/theme/tokens';

export function LegislativeCard() {
  return (
    <View style={[styles.visualCard, styles.billCard]}>
      <View style={styles.billHeader}>
        <View style={styles.capitolTile}>
          <View style={styles.capitolDome} />
          <View style={styles.capitolRoof} />
          <View style={styles.capitolColumns}>
            <View style={styles.capitolColumn} />
            <View style={styles.capitolColumn} />
            <View style={styles.capitolColumn} />
          </View>
          <View style={styles.capitolBase} />
        </View>

        <View style={styles.billCopy}>
          <Text style={styles.billTitle}>H.R. 1234</Text>
          <Text style={styles.billSubtitle}>Infrastructure Investment Act</Text>
        </View>
      </View>

      <View style={styles.passedBadge}>
        <Text style={styles.passedText}>PASSED</Text>
      </View>

      <View style={styles.billLines}>
        <View style={[styles.billLine, styles.billLineLong]} />
        <View style={[styles.billLine, styles.billLineMedium]} />
        <View style={[styles.billLine, styles.billLineShort]} />
      </View>
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
  billCard: {
    width: 214,
    height: 244,
    borderRadius: radius.sm,
    alignItems: 'center',
    paddingTop: 26,
  },
  billHeader: {
    width: 144,
    flexDirection: 'row',
    alignItems: 'center',
  },
  capitolTile: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: colors.navy950,
  },
  capitolDome: {
    width: 17,
    height: 9,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: colors.white,
  },
  capitolRoof: {
    width: 25,
    height: 3,
    marginTop: 2,
    borderRadius: 2,
    backgroundColor: colors.white,
  },
  capitolColumns: {
    width: 21,
    height: 10,
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  capitolColumn: {
    width: 3,
    height: 10,
    borderRadius: 1,
    backgroundColor: colors.white,
  },
  capitolBase: {
    width: 27,
    height: 3,
    marginTop: 2,
    borderRadius: 2,
    backgroundColor: colors.white,
  },
  billCopy: {
    flex: 1,
    marginLeft: 13,
  },
  billTitle: {
    color: colors.navy950,
    fontSize: 15,
    lineHeight: 19,
    fontWeight: '800',
  },
  billSubtitle: {
    marginTop: 4,
    color: colors.navy950,
    fontSize: 9,
    lineHeight: 14,
    fontWeight: '600',
  },
  passedBadge: {
    marginTop: 23,
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 7,
    backgroundColor: '#D6E8FF',
  },
  passedText: {
    color: colors.blue500,
    fontSize: 9,
    fontWeight: '800',
  },
  billLines: {
    width: 150,
    marginTop: 25,
  },
  billLine: {
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.gray200,
  },
  billLineLong: {
    width: 150,
  },
  billLineMedium: {
    width: 110,
    marginTop: 12,
  },
  billLineShort: {
    width: 121,
    marginTop: 12,
  },
});
