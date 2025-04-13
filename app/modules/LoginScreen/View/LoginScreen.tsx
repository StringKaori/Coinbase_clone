import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import LoginSilhouetteSVG from "@assets/LoginSilhouette.svg";
import { useEffect, useState } from "react";
import { InputWithIcon } from "../../../common";
import EmailIconSVG from "@assets/EmailIcon.svg";
import LockedLockSVG from "@assets/LockedLock.svg";
import UnlockedLockSVG from "@assets/UnlockedLock.svg";

const LoginScreen = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [shouldShowPassword, setShouldShowPassword] = useState<boolean>()

  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <SafeAreaView style={styles.container}>
      <LoginSilhouetteSVG />
      <Text style={styles.paragraph}>
        Great things are not done by impulse, but a series of small things
        brought together
      </Text>

      <InputWithIcon
        value={email}
        changeValueHandler={setEmail}
        placeholder={"Email"}
        IconSVG={EmailIconSVG}
      />

      <InputWithIcon
        isPassword
        value={password}
        changeValueHandler={setPassword}
        shouldShowPassword={shouldShowPassword}
        changeShouldShowPassword={setShouldShowPassword}
        placeholder={"Password"}
        IconSVG={LockedLockSVG}
        AlternativeIconSVG={UnlockedLockSVG}
      />

    </SafeAreaView>
  );
};

export { LoginScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffbf7",
  },
  paragraph: {
    paddingVertical: 29,
    width: 300,
    textAlign: "center",
  },
  textInput: {
    width: 285,
    height: 43,

    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    padding: 10,
  },
});

