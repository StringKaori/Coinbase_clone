import { useThemeStore } from "@themes/useThemeStore";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RecoverPasswordSilhouetteSVG from "@assets/RecoverPasswordSilhouette.svg";
import EmailIconSvg from "@assets/EmailIcon.svg";
import {
  CustomModal,
  GradientText,
  InputWithIcon,
  SimpleButton,
} from "@common/components";
import { useForgetPasswordViewModel } from "../ViewModel/useForgetPasswordViewModel";

const ForgetPasswordScreen = () => {
  const { theme, width, height } = useThemeStore();
  const styles = createStyles(theme.colors.background, width);
  const viewModel = useForgetPasswordViewModel();

  return (
    <SafeAreaView style={[styles.container, { height: height }]}>
      <RecoverPasswordSilhouetteSVG />
      <View style={{ padding: 10 }} />
      <GradientText text={"Recover Password"} style={theme.text.title} />
      <View style={{ padding: 10 }} />
      <InputWithIcon
        value={viewModel.email}
        changeValueHandler={viewModel.setEmail}
        placeholder={"Email"}
        IconSVG={EmailIconSvg}
      />
      {viewModel.emptyField && <Text style={{color:'red'}}>Field cannot be empty</Text>}
      {viewModel.invalidEmail && <Text style={{color:'red'}}>Invalid e-mail format</Text>}

      <Text style={styles.paragraph}>
        How well we communicate is determined not by how well we say things, but
        how well we are understood.
      </Text>

      <SimpleButton content={"submit"} handler={viewModel.handlePress} />

      <CustomModal
        visible={viewModel.isModalVisible}
        onClose={viewModel.onClose}
        message={"You'll receive an e-mail with instructions to reset your password."}
      />
    </SafeAreaView>
  );
};

const createStyles = (backgroundColor: string, width: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: backgroundColor,
    },
    paragraph: {
      width: width * 0.6,
      textAlign: "center",
      paddingBottom: 28,
    },
  });

export { ForgetPasswordScreen };
