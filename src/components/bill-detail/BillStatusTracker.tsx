import { StyleSheet, Text, View } from 'react-native';
import { AppIcon } from '@/src/components/ui/AppIcon';
import { colors } from '@/src/theme/tokens';
import type { BillStatusStep } from '@/src/components/bill-detail/types';

type BillStatusTrackerProps = {
  steps: BillStatusStep[];
};

export function BillStatusTracker({ steps }: BillStatusTrackerProps) {
  return (
    <View accessibilityLabel="Bill status tracker" style={styles.wrap}>
      <View style={styles.line} />
      <View style={styles.steps}>
        {steps.map((step) => (
          <View
            accessibilityLabel={`${step.label}, ${step.dateLabel}`}
            key={step.id}
            style={styles.step}
          >
            <View style={[styles.circle, getCircleStyle(step.status)]}>
              <AppIcon
                color={step.status === 'upcoming' ? 'gray300' : 'white'}
                name={step.icon}
                size={25}
                weight="semibold"
              />
            </View>
            <Text style={[styles.stepLabel, step.status === 'upcoming' && styles.upcomingText]}>
              {step.label}
            </Text>
            <Text style={styles.stepDate}>{step.dateLabel}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function getCircleStyle(status: BillStatusStep['status']) {
  if (status === 'completed') {
    return styles.completedCircle;
  }

  if (status === 'current') {
    return styles.currentCircle;
  }

  return styles.upcomingCircle;
}

const styles = StyleSheet.create({
  wrap: {
    position: 'relative',
    marginTop: 20,
    marginBottom: 14,
  },
  line: {
    position: 'absolute',
    top: 22,
    left: '13%',
    right: '13%',
    height: 3,
    borderRadius: 2,
    backgroundColor: 'rgba(226, 232, 240, 0.52)',
  },
  steps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  step: {
    width: '25%',
    alignItems: 'center',
  },
  circle: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 24,
  },
  completedCircle: {
    borderColor: colors.success,
    backgroundColor: 'rgba(46, 204, 113, 0.72)',
  },
  currentCircle: {
    borderColor: colors.blue500,
    backgroundColor: colors.blue500,
  },
  upcomingCircle: {
    borderColor: 'rgba(226, 232, 240, 0.52)',
    backgroundColor: 'rgba(16, 42, 72, 0.82)',
  },
  stepLabel: {
    marginTop: 8,
    color: colors.white,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
  upcomingText: {
    color: colors.gray200,
  },
  stepDate: {
    marginTop: 3,
    color: colors.gray200,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});
