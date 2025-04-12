import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "react-native-linear-gradient";

interface SimpleButtonProps {
    content: string;
    handler: () => void
}

//TODO: styles rever e usar theme
const SimpleButton = (props: SimpleButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.handler}>
      <LinearGradient
        colors={["#e56aa0", "#b053ab", "#9448b1", "#743ab8"]}
        locations={[0, 0.44, 0.66, 1]}
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
