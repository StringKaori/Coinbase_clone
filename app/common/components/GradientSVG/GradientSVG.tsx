import MaskedView from "@react-native-masked-view/masked-view";
import { useThemeStore } from "@themes/useThemeStore";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { SvgProps } from "react-native-svg";

interface GradientSVGProps {
  SVG: React.FC<SvgProps>;
}

const GradientSVG = (props: GradientSVGProps) => {
  const { theme } = useThemeStore();
  return (
    <MaskedView
      maskElement={
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <props.SVG width={24} height={24} />
        </View>
      }
    >
      <LinearGradient
        colors={theme.colors.gradient.colors}
        locations={theme.colors.gradient.locations}
        start={theme.colors.gradient.start}
        end={theme.colors.gradient.end}
        style={{ width: 24, height: 24 }}
      />
    </MaskedView>
  );
};

export { GradientSVG };
