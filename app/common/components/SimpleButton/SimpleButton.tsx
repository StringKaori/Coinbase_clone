import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useThemeStore } from "@themes/useThemeStore";

interface SimpleButtonProps {
    content: string;
    handler: () => void;
}

const SimpleButton = (props: SimpleButtonProps) => {
  const { theme, width } = useThemeStore();

  return (
    <TouchableOpacity
      onPress={props.handler}>
      <LinearGradient
        colors={theme.colors.gradient.colors}
        locations={theme.colors.gradient.locations}
        start={theme.colors.gradient.start}
        end={theme.colors.gradient.end}
        style={{
          width: width * 0.47,
          height: 43,
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
        }} >
        <Text style={theme.text.button}>
          {props.content}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export { SimpleButton };
