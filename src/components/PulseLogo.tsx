import React from 'react';
import { StyleSheet, View } from 'react-native';
import { platformShadow } from '@/src/components/ui/shadows';
import { colors } from '@/src/theme/tokens';

type PulseLogoProps = {
  size?: number;
};

export function PulseLogo({ size = 118 }: PulseLogoProps) {
  const unit = size / 118;

  return (
    <View
      accessibilityLabel="Constituent pulse logo"
      style={[styles.frame, { width: size, height: size, borderRadius: 30 * unit }]}
    >
      <View style={[styles.glow, { borderRadius: 30 * unit }]} />
      <View style={[styles.line, styles.left, { width: 23 * unit, height: 7 * unit }]} />
      <View style={[styles.line, styles.rise, { width: 38 * unit, height: 7 * unit }]} />
      <View style={[styles.line, styles.fall, { width: 40 * unit, height: 7 * unit }]} />
      <View style={[styles.line, styles.right, { width: 27 * unit, height: 7 * unit }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(45, 125, 255, 0.10)',
    borderWidth: 1,
    borderColor: 'rgba(79, 141, 255, 0.34)',
    ...platformShadow({
      color: colors.blue500,
      opacity: 0.5,
      radius: 28,
      offset: { width: 0, height: 10 },
      elevation: 12,
    }),
  },
  glow: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(45, 125, 255, 0.08)',
  },
  line: {
    position: 'absolute',
    borderRadius: 999,
    backgroundColor: colors.blue400,
    ...platformShadow({
      color: colors.blue500,
      opacity: 0.95,
      radius: 8,
      offset: { width: 0, height: 0 },
      elevation: 0,
    }),
  },
  left: {
    left: 14,
    top: 57,
  },
  rise: {
    left: 31,
    top: 45,
    transform: [{ rotate: '-56deg' }],
  },
  fall: {
    left: 50,
    top: 51,
    transform: [{ rotate: '62deg' }],
  },
  right: {
    right: 13,
    top: 57,
  },
});
