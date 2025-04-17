import { Dispatch, SetStateAction } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SvgProps } from "react-native-svg";
import { InputWithIconStyles } from "./InputWithIconStyles";
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
  const styles = InputWithIconStyles;

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
          <IconSVG style={styles.icon} />
        ) : (
          <AlternativeIconSVG style={styles.icon} />
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

      {!props.isPassword && <IconSVG style={styles.icon} />}

      {props.isPassword && handlePasswordButton()}
    </KeyboardAvoidingView>
  );
};

export { InputWithIcon };