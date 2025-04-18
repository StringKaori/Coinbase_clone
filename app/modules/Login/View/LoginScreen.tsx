import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import LoginSilhouetteSVG from "@assets/LoginSilhouette.svg";
import { useState } from "react";
import {
  InputWithIcon,
  SimpleButton,
  SocialLoginView,
} from "@common/components";
import EmailIconSVG from "@assets/EmailIcon.svg";
import LockedLockSVG from "@assets/LockedLock.svg";
import UnlockedLockSVG from "@assets/UnlockedLock.svg";
import { useThemeStore } from "@themes/useThemeStore";
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { InitialStackParamList } from "@routes/Stack/InitialStack/types/InitialStackParamList";
import { useNavigation } from "@react-navigation/native";
import { LoginScreenStyles } from "./LoginScreenStyles";

type LoginScreenNavigationProp =
  NativeStackNavigationProp<InitialStackParamList>;
// TODO: refactor to use viewmodel pattern
const LoginScreen = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isSecureText, setIsSecureText] = useState<boolean>(true);

  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { theme, width, height } = useThemeStore();
  const styles = LoginScreenStyles(
    width,
    theme.colors.background,
    theme.colors.secondary
  );

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

      <TouchableOpacity 
        style={styles.forgetPasswordButton}
        onPress={() => navigation.navigate('ForgetPasswordScreen')}>
        <Text>Forget your pasword?</Text>
      </TouchableOpacity>

      <SimpleButton
        content={"login"}
        handler={() => {
          console.log("clicou");
        }}
      />

      <Text style={styles.socialLoginTitle}>Login with a social account</Text>
      <SocialLoginView/>

      <TouchableOpacity
        style={styles.absoluteButton}
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        <LinearGradient
          colors={theme.colors.gradient.colors}
          locations={theme.colors.gradient.locations}
          start={theme.colors.gradient.start}
          end={theme.colors.gradient.end}
          style={{
            width: width,
            height: 43,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.absoluteButtonText}>
            Do not have an Account? Create Account
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export { LoginScreen };
