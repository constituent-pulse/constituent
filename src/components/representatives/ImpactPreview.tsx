import { StyleSheet, Text, View } from 'react-native';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { colors, spacing } from '@/src/theme/tokens';

type ImpactPreviewProps = {
  impactPreview: string;
};

export function ImpactPreview({ impactPreview }: ImpactPreviewProps) {
  return (
    <View accessibilityLabel={`How does this affect me? ${impactPreview}`} style={styles.wrap}>
      <View style={styles.copy}>
        <Text style={styles.heading}>How does this affect me?</Text>
        <Text style={styles.body}>{impactPreview}</Text>
      </View>
      <AppIcon color="white" name="forward/chevron" size={22} weight="semibold" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: spacing.md,
  },
  copy: {
    flex: 1,
    minWidth: 0,
    paddingRight: spacing.md,
  },
  heading: {
    color: colors.success,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '800',
  },
  body: {
    marginTop: 5,
    color: colors.white,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '500',
  },
});
