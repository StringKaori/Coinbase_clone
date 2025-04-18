import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import LoginSilhouetteSVG from "@assets/LoginSilhouette.svg";
import EmailIconSVG from "@assets/EmailIcon.svg";
import LockedLockSVG from "@assets/LockedLock.svg";
import UnlockedLockSVG from "@assets/UnlockedLock.svg";
import SillhoueteSVG from "@assets/Silhouette.svg";

import { useThemeStore } from "@themes/useThemeStore";
import { InputWithIcon, SimpleButton } from "@common/components";

import * as Progress from "react-native-progress";
import { RegisterViewModel } from "../types/RegisterViewModel";
import { useRegisterViewModel } from "../ViewModel/useRegisterViewModel";
import { CustomModal } from "@common/components/CustomModal/CustomModal";

const RegisterScreen = () => {
  const { theme, width } = useThemeStore();
  const styles = useStyles(theme.colors.background);
  const viewModel: RegisterViewModel = useRegisterViewModel();
  // TODO: revisit this and use height and width right
  return (
    <SafeAreaView style={[styles.container, { width: width }]}>
      <LoginSilhouetteSVG />
      <Text>
        Inovation distinguishes between a leader and a follower
      </Text>
      <InputWithIcon
        value={viewModel.name}
        changeValueHandler={viewModel.setName}
        placeholder={"Full Name"}
        IconSVG={SillhoueteSVG}
      />

      <InputWithIcon
        value={viewModel.email}
        changeValueHandler={viewModel.setEmail}
        placeholder={"Email"}
        IconSVG={EmailIconSVG}
      />

      <InputWithIcon
        isPassword
        isSecureText={viewModel.isPasswordSecureText}
        setIsSecureText={viewModel.setIsPasswordSecureText}
        value={viewModel.password}
        changeValueHandler={viewModel.setPassword}
        placeholder={"Password"}
        IconSVG={LockedLockSVG}
        AlternativeIconSVG={UnlockedLockSVG}
      />

      <InputWithIcon
        isPassword
        isSecureText={viewModel.isConfirmPasswordSecureText}
        setIsSecureText={viewModel.setIsConfirmPasswordSecureText}
        value={viewModel.confirmPassword}
        changeValueHandler={viewModel.setConfirmPassword}
        placeholder={"Confirm Password"}
        IconSVG={LockedLockSVG}
        AlternativeIconSVG={UnlockedLockSVG}
      />

      {!viewModel.passwordsMatch && (
        <Text style={{ color: "red" }}>Passwords don't match</Text>
      )}

      {viewModel.emptyFields && (
        <Text style={{ color: "red" }}>All fields must be filled</Text>
      )}

      {viewModel.invalidEmail && (
        <Text style={{ color: "red" }}>Invalid e-mail</Text>
      )}

      <Progress.Bar
        progress={viewModel.progress}
        width={300}
        color="#fd749b"
        unfilledColor="#e2e2e2"
        borderColor="transparent"
      />
      <View style={styles.passwordStrength}>
        {["Weak", "Average", "Strong"].map((item) => (
          <Text 
            style={styles.passwordStrengthText}
            key={item}>
            {item}
          </Text>
        ))}
      </View>
      
      <SimpleButton 
        content={"signup"} 
        handler={viewModel.registrationHandler} />

      <CustomModal 
        visible={viewModel.isModalVisible}
        onClose={viewModel.onClose} 
        message={"Your registration was successfull, please try to login now."}        
      />
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
      flexDirection: "row",
      justifyContent: "space-between",
      width: 300,
      paddingBottom: 41
    },
    passwordStrengthText: {
      paddingTop: 10
    }
  });

export { RegisterScreen };
