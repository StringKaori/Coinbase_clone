import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import LoginSilhouetteSVG from "@assets/LoginSilhouette.svg";
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
import { LoginScreenStyles } from "./LoginScreenStyles";
import { useLoginViewModel } from "../ViewModel/useLoginViewModel";

const LoginScreen = () => {
  const viewModel = useLoginViewModel()
  
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
        value={viewModel.email}
        changeValueHandler={viewModel.setEmail}
        placeholder={"Email"}
        IconSVG={EmailIconSVG}
      />

      <InputWithIcon
        isPassword
        value={viewModel.password}
        changeValueHandler={viewModel.setPassword}
        isSecureText={viewModel.isSecureText}
        setIsSecureText={viewModel.setIsSecureText}
        placeholder={"Password"}
        IconSVG={LockedLockSVG}
        AlternativeIconSVG={UnlockedLockSVG}
      />

      {viewModel.emptyFields && <Text style={{ color: "red" }}>All fields must be filled</Text>}
      {viewModel.invalidEmail && <Text style={{ color: "red" }}>Invalid e-mail format</Text>}

      <TouchableOpacity 
        style={styles.forgetPasswordButton}
        onPress={viewModel.navigateToForgetPassword}>
        <Text>Forget your pasword?</Text>
      </TouchableOpacity>

      <SimpleButton
        content={"login"}
        handler={viewModel.handleLoginPress}
      />

      <Text style={styles.socialLoginTitle}>Login with a social account</Text>
      <SocialLoginView/>

      <TouchableOpacity
        style={styles.absoluteButton}
        onPress={viewModel.navigateToRegisterScreen}
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
