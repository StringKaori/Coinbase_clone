import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useThemeStore } from "../../theme/useThemeStore";

interface SimpleButtonProps {
    content: string;
    handler: () => void
}

//TODO: styles rever e usar theme
const SimpleButton = (props: SimpleButtonProps) => {
  const { theme } = useThemeStore();
  return (
    <TouchableOpacity
      onPress={props.handler}>
      <LinearGradient
        colors={theme.colors.gradient.colors}
        locations={theme.colors.gradient.locations}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{
          width: 193,
          height: 43,
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
        }} >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
          {props.content}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export { SimpleButton };
