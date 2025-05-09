import { Dispatch, SetStateAction } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { SvgProps } from "react-native-svg";
// import { InputWithIconStyles } from "./InputWithIconStyles";
import { useThemeStore } from "@themes/useThemeStore";

interface InputWithIconProps {
  value: string | undefined;
  changeValueHandler: Dispatch<SetStateAction<string | undefined>>;
  isPassword?: boolean;
  isSecureText?: boolean;
  setIsSecureText?: Dispatch<SetStateAction<boolean>>;
  placeholder: string;
  IconSVG: React.FC<SvgProps>;
  AlternativeIconSVG?: React.FC<SvgProps>;
}

const InputWithIcon = (props: InputWithIconProps) => {
  // the point is to imitate flutter ThemeData, 
  // i know this isn't the best way to do it in react
  const { theme } = useThemeStore()
  const styles = InputWithIconStyles(18);

  const IconSVG = props.IconSVG;
  const AlternativeIconSVG = props.AlternativeIconSVG;
  const setIsSecureText = props.setIsSecureText;

  const handlePasswordButton = () => {
    if (!AlternativeIconSVG || !setIsSecureText) {
      return;
    }
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsSecureText(!props.isSecureText)}
      >
        {props.isSecureText ? (
          <IconSVG width={18} height={18} style={{ padding: 10 }} />
        ) : (
          <AlternativeIconSVG width={18} height={18} style={{ padding: 10 }} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <KeyboardAvoidingView behavior={"padding"} style={styles.container}>
      <TextInput
        secureTextEntry={props.isSecureText}
        value={props.value}
        onChangeText={props.changeValueHandler}
        placeholder={props.placeholder}
        style={theme.textInputWithIcon}
      />

      {!props.isPassword && <IconSVG width={18} height={18} style={styles.icon} />}

      {props.isPassword && handlePasswordButton()}
    </KeyboardAvoidingView>
  );
};
const InputWithIconStyles = (iconSize: number) => StyleSheet.create ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    position: "relative",
    marginBottom: 18,
  },
  icon: {
    position: "absolute",
    right: 20,
    padding: 10,
  },
  button: {
    position: "absolute",
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    height: iconSize + 5,
    width: iconSize + 5,
  },
});
export { InputWithIcon };