import { Dispatch, SetStateAction, useEffect } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SvgProps } from "react-native-svg";

interface InputWithIconProps {
  value: string | undefined;
  changeValueHandler: Dispatch<SetStateAction<string | undefined>>;
  isPassword?: boolean;
  shouldShowPassword?: boolean;
  changeShouldShowPassword?: Dispatch<SetStateAction<boolean | undefined>>;
  placeholder: string;
  IconSVG: React.FC<SvgProps>;
  AlternativeIconSVG?: React.FC<SvgProps>;
}

const InputWithIcon = (props: InputWithIconProps) => {
  const IconSVG = props.IconSVG
  const AlternativeIconSVG = props.AlternativeIconSVG;
  const changeShouldShowPassword = props.changeShouldShowPassword

  const handlePasswordButton = () => {
    if(!AlternativeIconSVG || !changeShouldShowPassword) { return; }
    return(
        <TouchableOpacity 
         style={styles.button}
         onPress={() => changeShouldShowPassword(!props.shouldShowPassword)}>
            {props.shouldShowPassword ?
                <IconSVG style={styles.icon}/> :
                <AlternativeIconSVG style={styles.icon}/>
            }
        </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={props.shouldShowPassword}
        value={props.value}
        onChangeText={props.changeValueHandler}
        placeholder={props.placeholder}
        style={styles.textInput}
      />

      {!props.isPassword && <IconSVG style={styles.icon}/>}

      { props.isPassword &&
        handlePasswordButton()
      }
    </View>
  );
};

export { InputWithIcon };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  textInput: {
    width: 285,
    height: 43,

    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    padding: 10,
  },
  icon: {
    position: 'absolute',
    right: 20,
    padding: 10
  },
  button: {
    position: 'absolute',
    right: 0,
    paddingVertical: 10
  }
});
