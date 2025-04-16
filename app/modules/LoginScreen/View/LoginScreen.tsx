import { SafeAreaView, StyleSheet, Text, useWindowDimensions } from "react-native";
import LoginSilhouetteSVG from "@assets/LoginSilhouette.svg";
import { useState } from "react";
import { InputWithIcon } from "../../../common";
import EmailIconSVG from "@assets/EmailIcon.svg";
import LockedLockSVG from "@assets/LockedLock.svg";
import UnlockedLockSVG from "@assets/UnlockedLock.svg";
import { useThemeStore } from "../../../theme/useThemeStore";

const LoginScreen = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isSecureText, setIsSecureText] = useState<boolean>(true)

  const { theme, width, height } = useThemeStore();
  const styles = getStyles(width, theme.colors.background)

  return (
    <SafeAreaView style={[styles.container, { height: height }]}>
      <LoginSilhouetteSVG />
      <Text style={[styles.paragraph]}>
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
        isSecureText={isSecureText}
        setIsSecureText={setIsSecureText}
        placeholder={"Password"}
        IconSVG={LockedLockSVG}
        AlternativeIconSVG={UnlockedLockSVG}
      />

    </SafeAreaView>
  );
};

export { LoginScreen };

const getStyles = (
  width: number, 
  backgroundColor: string
) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
  },
  paragraph: {
    paddingVertical: 29,
    width: width * 0.9,
    textAlign: "center",
  },
});

