import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import LoginSilhouetteSVG from "@assets/LoginSilhouette.svg";
import { useState } from "react";
import { InputWithIcon, SimpleButton } from "@common/components";
import EmailIconSVG from "@assets/EmailIcon.svg";
import LockedLockSVG from "@assets/LockedLock.svg";
import UnlockedLockSVG from "@assets/UnlockedLock.svg";
import { useThemeStore } from "@themes/useThemeStore";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isSecureText, setIsSecureText] = useState<boolean>(true);

  const { theme, width, height } = useThemeStore();
  const styles = getStyles(width, theme.colors.background, theme.colors.secondary);

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

      <TouchableOpacity style={styles.forgetPasswordButton}>
        <Text>Forget your pasword?</Text>
      </TouchableOpacity>

      <SimpleButton
        content={"login"}
        handler={() => {
          console.log("clicou");
        }}
      />

      <Text>Login With a social Account</Text>

      <TouchableOpacity style={styles.absoluteButton}>
        <LinearGradient
          colors={theme.colors.gradient.colors}
          locations={theme.colors.gradient.locations}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={{
            width: width,
            height: 43,
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Text style={styles.absoluteButtonText}>
              Do not have an Account? Create Account
            </Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export { LoginScreen };

const getStyles = (width: number, backgroundColor: string, secondaryColor: string) =>
  StyleSheet.create({
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
    forgetPasswordButton: {
      marginBottom: 42,
    },
    absoluteButton: {
      position: 'absolute',
      bottom: 0,
    },
    absoluteButtonText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: secondaryColor
    }
  });
