import { ThemeType } from "@themes/types/ThemeType";
import { useThemeStore } from "@themes/useThemeStore";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";
import { SvgProps } from "react-native-svg";

interface CircleBuilderProps {
  SVG: React.FC<SvgProps>;
  svgWidth: number;
  svgHeight: number;
  subtitle: string;
  total: number;
  circleWidth: number;
  circleHeight: number;
}

const CircleBuilder = (props: CircleBuilderProps) => {
  const { SVG, svgWidth, svgHeight, subtitle, total, circleWidth, circleHeight } = props;

  const { theme } = useThemeStore();
  const styles = createStyles(theme, circleWidth, circleHeight);

  return (
    <LinearGradient colors={["#e76ba0", "#7a3db7"]} style={styles.container}>
      <SVG width={svgWidth} height={svgHeight} stroke={"#fff"}/>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.total}>{total}</Text>
    </LinearGradient>
  );
};

const createStyles = (theme: ThemeType, circleWidth: number, circleHeight: number) =>
  StyleSheet.create({
    container: {
      width: circleWidth,
      height: circleHeight,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center'
    },
    subtitle: {
      color: theme.colors.secondary,
      fontSize: 10
    },
    total: {
      color: theme.colors.secondary,
      fontSize: 16
    }
});

export { CircleBuilder };
