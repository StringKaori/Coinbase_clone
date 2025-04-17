import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import LoginSilhouetteSVG from "@assets/LoginSilhouette.svg";
import EmailIconSVG from "@assets/EmailIcon.svg";
import LockedLockSVG from "@assets/LockedLock.svg";
import UnlockedLockSVG from "@assets/UnlockedLock.svg";
import SillhoueteSVG from "@assets/Silhouette.svg";

import { useThemeStore } from "@themes/useThemeStore";
import { InputWithIcon } from "@common/components";
import { useEffect, useState } from "react";

import * as Progress from "react-native-progress";
import { useRegisterViewModel } from "../ViewModel/useRegisterViewModel";
import { usePasswordStrength } from "../ViewModel/usePasswordStrength";

const RegisterScreen = () => {
  const { theme, width } = useThemeStore();
  const styles = useStyles(theme.colors.background);

  const [name, setName] = useState<string>();

  const [email, setEmail] = useState<string>();

  const [password, setPassword] = useState<string>();
  const [isPasswordSecureText, setIsPasswordSecureText] = useState<boolean>(true);

  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [isConfirmPasswordSecureText, setIsConfirmPasswordSecureText] = useState<boolean>(true);

  const [progress, setProgress] = useState<number>(0);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

  useEffect(() => {
    setProgress(usePasswordStrength(password))
  }, [password])

  useEffect(() => {
    if(!password || !confirmPassword) { return; }
    setPasswordsMatch(password===confirmPassword)
  }, [password, confirmPassword])

//   useRegisterViewModel()

  return (
    <SafeAreaView style={[styles.container, { width: width }]}>
      <LoginSilhouetteSVG />
      <Text>Inovation distinguishes between a leader and a follower</Text>
      <InputWithIcon
        value={name}
        changeValueHandler={setName}
        placeholder={"Full Name"}
        IconSVG={SillhoueteSVG}
      />

      <InputWithIcon
        value={email}
        changeValueHandler={setEmail}
        placeholder={"Email"}
        IconSVG={EmailIconSVG}
      />

      <InputWithIcon
        isPassword
        isSecureText={isPasswordSecureText}
        setIsSecureText={setIsPasswordSecureText}
        value={password}
        changeValueHandler={setPassword}
        placeholder={"Password"}
        IconSVG={LockedLockSVG}
        AlternativeIconSVG={UnlockedLockSVG}
      />

      <InputWithIcon
        isPassword
        isSecureText={isConfirmPasswordSecureText}
        setIsSecureText={setIsConfirmPasswordSecureText}
        value={confirmPassword}
        changeValueHandler={setConfirmPassword}
        placeholder={"Confirm Password"}
        IconSVG={LockedLockSVG}
        AlternativeIconSVG={UnlockedLockSVG}
      />

      {!passwordsMatch && <Text style={{color: 'red'}}>Passwords don't match</Text>}

      <Progress.Bar 
       progress={progress}
       width={300}
       color= '#fd749b'
       unfilledColor="#e2e2e2"
       borderColor="transparent" />
      <View style={styles.passwordStrength}>
        <Text>Weak</Text>
        <Text>Average</Text>
        <Text>Strong</Text>
      </View>
    </SafeAreaView>
  );
};

const useStyles = (backgroundColor: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: backgroundColor,
    },
    passwordStrength: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300
    }
  });

export { RegisterScreen };
