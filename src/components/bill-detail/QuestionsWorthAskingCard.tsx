import { StyleSheet, Text, View } from 'react-native';
import { BillDetailSectionCard } from '@/src/components/bill-detail/BillDetailSectionCard';
import type { QuestionWorthAsking } from '@/src/components/bill-detail/types';
import { colors, radius } from '@/src/theme/tokens';

type QuestionsWorthAskingCardProps = {
  questions: QuestionWorthAsking[];
};

export function QuestionsWorthAskingCard({ questions }: QuestionsWorthAskingCardProps) {
  return (
    <BillDetailSectionCard
      icon="question"
      subtitle="Neutral prompts for closer reading."
      title="Questions Worth Asking"
    >
      <View style={styles.questions}>
        {questions.map((question) => (
          <View accessibilityLabel={question.prompt} key={question.id} style={styles.question}>
            <Text style={styles.questionText}>{question.prompt}</Text>
          </View>
        ))}
      </View>
    </BillDetailSectionCard>
  );
}

const styles = StyleSheet.create({
  questions: {
    marginTop: 10,
    gap: 5,
  },
  question: {
    minHeight: 48,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(156, 192, 255, 0.2)',
    borderRadius: radius.sm,
    backgroundColor: 'rgba(7, 24, 39, 0.3)',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  questionText: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
  },
});
