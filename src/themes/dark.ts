import { scale, sizeScale, verticalScale } from '@common/scale';
import { Dimensions } from 'react-native';
import { darkColors } from './colors/dark';
import { textPresets } from './text-presets';
import { FontDefault } from './typography';

export const darkTheme = {
  type: 'dark',
  color: darkColors,
  font: FontDefault,
  textPresets: textPresets,
  sizeScale,
  scale,
  verticalScale,
  screenSize: Dimensions.get('screen'),
  windowSize: Dimensions.get('screen'),
};
