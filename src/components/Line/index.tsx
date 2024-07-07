import React from 'react';
import { type StyleProp, View, type ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

interface LineProps {
  style?: StyleProp<ViewStyle>;
}

export const Line: React.FC<LineProps> = ({ style }) => {
  const { styles } = useStyles(stylesheet);
  return <View style={[styles.root, style]} />;
};

const stylesheet = createStyleSheet(theme => ({
  root: {
    width: '100%',
    height: 1,
    backgroundColor: theme?.color?.blue?.blue_1CB || 'black', // Default to black if theme is not provided
  },
}));
