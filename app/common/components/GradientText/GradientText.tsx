import React from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

import { useThemeStore } from '@themes/useThemeStore';

interface GradientTextProps {
  text: string;
  style: StyleProp<TextStyle>
}

const GradientText: React.FC<GradientTextProps> = (props: GradientTextProps) => {
  const { theme } = useThemeStore();
  return (
    <MaskedView maskElement={<Text style={[props.style, styles.text]}>{props.text}</Text>}>
      <LinearGradient 
        colors={theme.colors.gradient.colors} 
        locations={theme.colors.gradient.locations}
        start={theme.colors.gradient.start}
        end={theme.colors.gradient.end}>
        <Text style={[props.style, styles.hidden]}>{props.text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

export { GradientText };

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'transparent',
  },
  hidden: {
    opacity: 0,
  },
});
