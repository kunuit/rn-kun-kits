import { createStyleSheet, UnistylesRegistry, type UnistylesThemes, useStyles } from 'react-native-unistyles';
import { darkColors } from './colors/dark';
import { lightColors } from './colors/light';
import { darkTheme } from './dark';
import { lightTheme } from './light';

export type Colors = keyof UnistylesThemes['dark']['color'];

type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

type LightColor = typeof lightColors;
type ColorDark = typeof darkColors;
export type AllColors = LightColor & ColorDark;

UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
}).addConfig({
  adaptiveThemes: false,
  initialTheme: 'dark',
});

declare module 'react-native-unistyles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface UnistylesThemes extends AppThemes {}
}

export { useStyles, createStyleSheet };
export * from './typography';
