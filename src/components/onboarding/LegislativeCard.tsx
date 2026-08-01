import { StyleSheet, Text, View } from 'react-native';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { platformShadow } from '@/src/components/ui/shadows';
import { colors, radius } from '@/src/theme/tokens';

export function LegislativeCard() {
  return (
    <View style={[styles.visualCard, styles.billCard]}>
      <View style={styles.billHeader}>
        <View style={styles.capitolTile}>
          <AppIcon color="white" name="representatives" size={28} weight="medium" />
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
    ...platformShadow({
      color: colors.navy950,
      opacity: 0.13,
      radius: 18,
      offset: { width: 0, height: 9 },
      elevation: 8,
    }),
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
