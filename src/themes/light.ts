import { scale, sizeScale, verticalScale } from '@common/scale';
import { Dimensions } from 'react-native';
import { lightColors } from './colors/light';
import { textPresets } from './text-presets';
import { FontDefault } from './typography';

export const lightTheme = {
  type: 'light',
  color: lightColors,
  font: FontDefault,
  textPresets: textPresets,
  sizeScale,
  scale,
  verticalScale,
  screenSize: Dimensions.get('screen'),
  windowSize: Dimensions.get('screen'),
};
