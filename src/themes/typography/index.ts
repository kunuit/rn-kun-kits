/* eslint-disable import/extensions */

import { sizeScale } from '@common/scale';
import { useFonts } from 'expo-font';

export const FontDefault = {
  primary: 'primarySemiBold',
  primaryBlack: 'primaryBlack',
  primaryBlackItalic: 'primaryBlackItalic',
  primaryBold: 'primaryBold',
  primaryBoldItalic: 'primaryBoldItalic',
  primaryExtraBold: 'primaryExtraBold',
  primaryExtraBoldItalic: 'primaryExtraBoldItalic',
  primaryExtraLight: 'primaryExtraLight',
  primaryExtraLightItalic: 'primaryExtraLightItalic',
  primaryItalic: 'primaryItalic',
  primaryLight: 'primaryLight',
  primaryLightItalic: 'primaryLightItalic',
  primaryMedium: 'primaryMedium',
  primaryMediumItalic: 'primaryMediumItalic',
  primaryRegular: 'primaryRegular',
  primarySemiBold: 'primarySemiBold',
  primarySemiBoldItalic: 'primarySemiBoldItalic',
  primaryThin: 'primaryThin',
  primaryThinItalic: 'primaryThinItalic',
} as const;

export const useLoadFont = () => {
  // state
  const [isLoaded, error] = useFonts({
    // icons is default font for react native vector icons. flowing IcMoon to use icons
    icons: require('@assets/fonts/icons.ttf'),

    [FontDefault.primaryBlack]: require('@assets/fonts/DMSans-Black.ttf'),
    [FontDefault.primaryBlackItalic]: require('@assets/fonts/DMSans-BlackItalic.ttf'),
    [FontDefault.primaryBold]: require('@assets/fonts/DMSans-Bold.ttf'),
    [FontDefault.primaryBoldItalic]: require('@assets/fonts/DMSans-BoldItalic.ttf'),
    [FontDefault.primaryExtraBold]: require('@assets/fonts/DMSans-ExtraBold.ttf'),
    [FontDefault.primaryExtraBoldItalic]: require('@assets/fonts/DMSans-ExtraBoldItalic.ttf'),
    [FontDefault.primaryExtraLight]: require('@assets/fonts/DMSans-ExtraLight.ttf'),
    [FontDefault.primaryExtraLightItalic]: require('@assets/fonts/DMSans-ExtraLightItalic.ttf'),
    [FontDefault.primaryItalic]: require('@assets/fonts/DMSans-Italic.ttf'),
    [FontDefault.primaryLight]: require('@assets/fonts/DMSans-Light.ttf'),
    [FontDefault.primaryLightItalic]: require('@assets/fonts/DMSans-LightItalic.ttf'),
    [FontDefault.primaryMedium]: require('@assets/fonts/DMSans-Medium.ttf'),
    [FontDefault.primaryMediumItalic]: require('@assets/fonts/DMSans-MediumItalic.ttf'),
    [FontDefault.primaryRegular]: require('@assets/fonts/DMSans-Regular.ttf'),
    [FontDefault.primarySemiBold]: require('@assets/fonts/DMSans-SemiBold.ttf'),
    [FontDefault.primarySemiBoldItalic]: require('@assets/fonts/DMSans-SemiBoldItalic.ttf'),
    [FontDefault.primaryThin]: require('@assets/fonts/DMSans-Thin.ttf'),
    [FontDefault.primaryThinItalic]: require('@assets/fonts/DMSans-ThinItalic.ttf'),
  });

  console.log(error);

  return isLoaded;
};

export const DefaultTypography = {
  title1: {
    fontSize: sizeScale(64),
  },
  title2: {
    fontSize: sizeScale(48),
  },
  title3: {
    fontSize: sizeScale(40),
  },
  title4: {
    fontSize: sizeScale(32),
  },
  title5: {
    fontSize: sizeScale(24),
  },
  title6: {
    fontSize: sizeScale(20),
  },
  copy: {
    fontSize: sizeScale(18),
  },
  body: {
    fontSize: sizeScale(16),
  },
  label: {
    fontSize: sizeScale(14),
  },
  caption1: {
    fontSize: sizeScale(12),
  },
  caption2: {
    fontSize: sizeScale(10),
  },
  overline1: {
    fontSize: sizeScale(11),
  },
  overline2: {
    fontSize: sizeScale(9),
  },
};

export type FontFamily = keyof typeof FontDefault;
