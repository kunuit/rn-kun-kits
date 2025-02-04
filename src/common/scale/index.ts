import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 393;

const guidelineBaseHeight = 852;

export const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;

export const verticalScale = (size: number) => (longDimension / guidelineBaseHeight) * size;

export const sizeScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;
