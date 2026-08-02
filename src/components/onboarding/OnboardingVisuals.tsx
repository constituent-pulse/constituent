import { StyleSheet, Text, View } from 'react-native';
import { AppIcon, type AppIconName } from '@/src/components/ui/AppIcon';
import { platformShadow } from '@/src/components/ui/shadows';
import { colors, radius, spacing } from '@/src/theme/tokens';

const SCORE_ROWS = [
  { label: 'Votes', value: 'Alignment context', width: '76%' },
  { label: 'Participation', value: 'Public activity', width: '68%' },
  { label: 'PAC Support', value: 'Context only', width: '58%' },
] as const;

type TransparencyRow = {
  icon: AppIconName;
  label: string;
  tone?: 'success';
  value: string;
};

const TRANSPARENCY_ROWS: readonly TransparencyRow[] = [
  { icon: 'latest vote', label: 'Rep. Vote', value: 'Voted FOR', tone: 'success' },
  { icon: 'official summary', label: 'Summary', value: 'Plain language' },
  { icon: 'impact', label: 'Impact', value: 'Real-world preview' },
  { icon: 'read source', label: 'Sources', value: 'Official record' },
];

export function UnderstandEveryVotePreview() {
  return (
    <View accessibilityLabel="Bill explanation preview" style={styles.previewCard}>
      <View style={styles.previewHeader}>
        <View style={styles.documentIcon}>
          <AppIcon color="white" name="bill" size={20} weight="medium" />
        </View>
        <View style={styles.previewTitleBlock}>
          <Text style={styles.previewEyebrow}>Today's Vote</Text>
          <Text style={styles.previewTitle}>H.R. 1234</Text>
        </View>
        <View style={styles.sourcePill}>
          <AppIcon color="blue500" name="read source" size={13} weight="medium" />
          <Text style={styles.sourcePillText}>Source</Text>
        </View>
      </View>

      <View style={styles.questionStack}>
        <QuestionRow icon="question" label="What is this bill about?" />
        <QuestionRow icon="impact" label="How does this affect me?" />
        <QuestionRow icon="latest vote" label="How did my representative vote?" />
      </View>
    </View>
  );
}

export function TopicSelectionPreview() {
  return (
    <View accessibilityLabel="Topic preference preview" style={styles.topicPreview}>
      <View style={styles.topicPreviewHeader}>
        <AppIcon color="blue500" name="relevant to you" size={18} weight="medium" />
        <Text style={styles.topicPreviewTitle}>Personalized around your issues</Text>
      </View>
      <View style={styles.topicPreviewRow}>
        <TopicPreviewPill icon="healthcare" label="Healthcare" />
        <TopicPreviewPill icon="economy" label="Economy" />
        <TopicPreviewPill icon="education" label="Education" />
      </View>
    </View>
  );
}

export function RepresentativeScorePreview() {
  return (
    <View accessibilityLabel="Representative Score preview card" style={styles.scoreCard}>
      <View style={styles.scoreHeader}>
        <View>
          <Text style={styles.scoreLabel}>Representative Score</Text>
          <Text style={styles.scoreOwner}>Elected official preview</Text>
        </View>
        <View style={styles.scoreBadge}>
          <Text style={styles.scoreBadgeText}>Official</Text>
        </View>
      </View>

      <View style={styles.scoreValueRow}>
        <Text style={styles.scoreValue}>76</Text>
        <Text style={styles.scoreTotal}>/100</Text>
      </View>

      <View style={styles.breakdown}>
        {SCORE_ROWS.map((row) => (
          <View key={row.label} style={styles.scoreRow}>
            <View style={styles.scoreRowCopy}>
              <Text style={styles.scoreRowLabel}>{row.label}</Text>
              <Text style={styles.scoreRowValue}>{row.value}</Text>
            </View>
            <View style={styles.scoreTrack}>
              <View style={[styles.scoreFill, { width: row.width }]} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

export function VoteTransparencyPreview() {
  return (
    <View accessibilityLabel="Vote transparency preview card" style={styles.transparencyCard}>
      <View style={styles.transparencyHeader}>
        <View>
          <Text style={styles.previewEyebrow}>Vote Detail</Text>
          <Text style={styles.transparencyTitle}>H.R. 1234</Text>
        </View>
        <AppIcon color="blue500" name="check" size={20} weight="bold" />
      </View>

      <View style={styles.transparencyRows}>
        {TRANSPARENCY_ROWS.map((row) => (
          <View key={row.label} style={styles.transparencyRow}>
            <View style={styles.transparencyIcon}>
              <AppIcon color="blue500" name={row.icon} size={16} weight="medium" />
            </View>
            <Text style={styles.transparencyLabel}>{row.label}</Text>
            <Text
              style={[
                styles.transparencyValue,
                row.tone === 'success' ? styles.transparencyValueSuccess : null,
              ]}
            >
              {row.value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function QuestionRow({ icon, label }: { icon: AppIconName; label: string }) {
  return (
    <View style={styles.questionRow}>
      <View style={styles.questionIcon}>
        <AppIcon color="blue500" name={icon} size={15} weight="medium" />
      </View>
      <Text style={styles.questionText}>{label}</Text>
    </View>
  );
}

function TopicPreviewPill({ icon, label }: { icon: AppIconName; label: string }) {
  return (
    <View style={styles.topicPreviewPill}>
      <AppIcon color="blue500" name={icon} size={14} weight="medium" />
      <Text style={styles.topicPreviewPillText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  previewCard: {
    width: '100%',
    minHeight: 130,
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: radius.sm,
    backgroundColor: colors.white,
    padding: 14,
    ...platformShadow({
      color: colors.navy950,
      opacity: 0.1,
      radius: 14,
      offset: { width: 0, height: 7 },
      elevation: 5,
    }),
  },
  previewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  documentIcon: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: colors.navy950,
  },
  previewTitleBlock: {
    flex: 1,
    marginLeft: spacing.sm,
  },
  previewEyebrow: {
    color: colors.textSecondary,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '800',
  },
  previewTitle: {
    color: colors.navy950,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '800',
  },
  sourcePill: {
    minHeight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: radius.pill,
    backgroundColor: 'rgba(45, 125, 255, 0.08)',
    paddingHorizontal: spacing.sm,
  },
  sourcePillText: {
    marginLeft: spacing.xs,
    color: colors.blue500,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '800',
  },
  questionStack: {
    gap: 7,
    marginTop: 12,
  },
  questionRow: {
    minHeight: 27,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.gray50,
    paddingHorizontal: spacing.sm,
  },
  questionIcon: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    backgroundColor: colors.white,
    marginRight: spacing.sm,
  },
  questionText: {
    flex: 1,
    color: colors.navy950,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '800',
  },
  topicPreview: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: radius.sm,
    backgroundColor: colors.white,
    padding: 13,
  },
  topicPreviewHeader: {
    minHeight: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicPreviewTitle: {
    flex: 1,
    marginLeft: spacing.sm,
    color: colors.navy950,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '800',
  },
  topicPreviewRow: {
    flexDirection: 'row',
    gap: 7,
    marginTop: 7,
  },
  topicPreviewPill: {
    flex: 1,
    minHeight: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.pill,
    backgroundColor: 'rgba(45, 125, 255, 0.08)',
    paddingHorizontal: spacing.xs,
  },
  topicPreviewPillText: {
    marginLeft: spacing.xs,
    color: colors.navy950,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '800',
  },
  scoreCard: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: radius.sm,
    backgroundColor: colors.white,
    padding: 14,
    ...platformShadow({
      color: colors.navy950,
      opacity: 0.1,
      radius: 14,
      offset: { width: 0, height: 7 },
      elevation: 5,
    }),
  },
  scoreHeader: {
    minHeight: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scoreLabel: {
    color: colors.navy950,
    fontSize: 13,
    lineHeight: 17,
    fontWeight: '800',
  },
  scoreOwner: {
    marginTop: 2,
    color: colors.textSecondary,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '700',
  },
  scoreBadge: {
    borderRadius: radius.pill,
    backgroundColor: 'rgba(46, 204, 113, 0.14)',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  scoreBadgeText: {
    color: colors.success,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '800',
  },
  scoreValueRow: {
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: spacing.sm,
  },
  scoreValue: {
    color: colors.navy950,
    fontSize: 48,
    lineHeight: 52,
    fontWeight: '800',
  },
  scoreTotal: {
    marginBottom: 8,
    color: colors.navy950,
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '800',
  },
  breakdown: {
    gap: 7,
    marginTop: 7,
  },
  scoreRow: {
    minHeight: 32,
  },
  scoreRowCopy: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scoreRowLabel: {
    color: colors.navy950,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '800',
  },
  scoreRowValue: {
    color: colors.textSecondary,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '700',
  },
  scoreTrack: {
    height: 6,
    overflow: 'hidden',
    borderRadius: radius.pill,
    backgroundColor: colors.gray200,
    marginTop: spacing.xs,
  },
  scoreFill: {
    height: 6,
    borderRadius: radius.pill,
    backgroundColor: colors.blue500,
  },
  transparencyCard: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: radius.sm,
    backgroundColor: colors.white,
    padding: 14,
    ...platformShadow({
      color: colors.navy950,
      opacity: 0.1,
      radius: 14,
      offset: { width: 0, height: 7 },
      elevation: 5,
    }),
  },
  transparencyHeader: {
    minHeight: 38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  transparencyTitle: {
    color: colors.navy950,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '800',
  },
  transparencyRows: {
    gap: 7,
    marginTop: 12,
  },
  transparencyRow: {
    minHeight: 32,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.gray50,
    paddingHorizontal: spacing.sm,
  },
  transparencyIcon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.white,
    marginRight: spacing.sm,
  },
  transparencyLabel: {
    flex: 1,
    color: colors.navy950,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '800',
  },
  transparencyValue: {
    color: colors.textSecondary,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '800',
  },
  transparencyValueSuccess: {
    color: colors.success,
  },
});
