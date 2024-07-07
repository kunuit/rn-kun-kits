import { sizeScale } from '@common/scale';
import { StyleSheet } from 'react-native';
import { FontDefault } from '../typography';

const presets = {
  caption: {
    color: '#ffffff',
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(12),
  },
  overline: {
    color: '#ffffff',
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(10),
  },
  H1: {
    color: '#ffffff',
    fontFamily: FontDefault.primarySemiBold,
    fontSize: sizeScale(48),
  },
  H2: {
    color: '#ffffff',
    fontFamily: FontDefault.primarySemiBold,
    fontSize: sizeScale(40),
  },
  H3: {
    color: '#ffffff',
    fontFamily: FontDefault.primarySemiBold,
    fontSize: sizeScale(36),
  },
  H4: {
    color: '#ffffff',
    fontFamily: FontDefault.primarySemiBold,
    fontSize: sizeScale(30),
  },
  H5: {
    color: '#ffffff',
    fontFamily: FontDefault.primarySemiBold,
    fontSize: sizeScale(24),
  },
  subtitle1: {
    color: '#ffffff',
    fontFamily: FontDefault.primarySemiBold,
    fontSize: sizeScale(20),
  },
  subtitle2: {
    color: '#ffffff',
    fontFamily: FontDefault.primarySemiBold,
    fontSize: sizeScale(18),
  },
  paragraph1: {
    color: '#ffffff',
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(16),
  },
  paragraph2: {
    color: '#ffffff',
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(14),
  },
  paragraphBold: {
    color: '#ffffff',
    fontFamily: FontDefault.primaryBold,
    fontSize: sizeScale(14),
  },
  quotes: {
    color: '#ffffff',
    fontFamily: FontDefault.primaryItalic,
    fontSize: sizeScale(18),
  },
  label: {
    color: '#ffffff',
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(12),
  },
  placeholder: {
    color: '#ffffff',
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(14),
  },
  assistive: {
    color: '#ffffff',
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(1248),
  },
  CTAs: {
    color: '#ffffff',
    fontFamily: FontDefault.primaryBold,
    fontSize: sizeScale(16),
  },
  CTALinks: {
    color: '#ffffff',
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(18),
  },
  CTASmall: {
    color: '#ffffff',
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(14),
  },
  extraSmall: {
    color: '#ffffff',
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(12),
  },
  inputError: {
    color: '#FF4400',
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(12),
  },
};

export const textPresets = StyleSheet.create(presets);
