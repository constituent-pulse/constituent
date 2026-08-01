import type { ViewStyle } from 'react-native';
import { Platform } from 'react-native';

type ShadowOptions = {
  color: string;
  elevation: number;
  offset: {
    height: number;
    width: number;
  };
  opacity: number;
  radius: number;
};

export function platformShadow({
  color,
  elevation,
  offset,
  opacity,
  radius,
}: ShadowOptions): ViewStyle {
  if (Platform.OS === 'web') {
    return {
      boxShadow: `${offset.width}px ${offset.height}px ${radius}px ${toRgba(color, opacity)}`,
    };
  }

  return {
    shadowColor: color,
    shadowOpacity: opacity,
    shadowRadius: radius,
    shadowOffset: offset,
    elevation,
  };
}

function toRgba(hexColor: string, opacity: number) {
  const normalizedColor = hexColor.replace('#', '');
  const red = Number.parseInt(normalizedColor.slice(0, 2), 16);
  const green = Number.parseInt(normalizedColor.slice(2, 4), 16);
  const blue = Number.parseInt(normalizedColor.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}
