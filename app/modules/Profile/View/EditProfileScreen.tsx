import { ThemeType } from "@themes/types/ThemeType";
import { useThemeStore } from "@themes/useThemeStore";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import ChangePictureSVG from "@assets/ChangePicture.svg";
import InputWithPersistentPlaceholder from "./helpers/InputWithPersistentPlaceholder";
import { useEditProfileViewModel } from "../ViewModel/useEditProfileViewModel";
import { CustomModal, SimpleButton } from "@common/components";

const EditProfileScreen = () => {
  const { theme } = useThemeStore();
  const styles = createStyles(theme);
  const viewModel = useEditProfileViewModel();

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Settings</Text>
        <LinearGradient
          colors={["#e477a9", "#854fbd"]}
          style={styles.gradientContainer}
        >
          <ChangePictureSVG />
        </LinearGradient>

        <View style={styles.centralizedView}>
          <Text style={styles.title}>Account information</Text>

          <InputWithPersistentPlaceholder
            labelText={"First Name"}
            value={viewModel.newName}
            onChangeText={viewModel.setNewName}
          />

          <InputWithPersistentPlaceholder
            labelText={"Last Name"}
            value={viewModel.newLastName}
            onChangeText={viewModel.setNewLastName}
          />

          <InputWithPersistentPlaceholder
            labelText={"Phone Number"}
            value={viewModel.newPhoneNumber}
            onChangeText={viewModel.setNewPhoneNumber}
            isPhoneNumber
          />
          {viewModel.emptyAccountInfoFields && <Text style={{ color: "red" }}>All account fields must be filled</Text>}

          <Text style={styles.title}>Change Password</Text>

          <InputWithPersistentPlaceholder
            labelText={"Current Password"}
            value={viewModel.currentPassword}
            onChangeText={viewModel.setCurrentPassword}
            isSecureTextEntry
          />

          <InputWithPersistentPlaceholder
            labelText={"New Password"}
            value={viewModel.newPassword}
            onChangeText={viewModel.setNewPassword}
            isSecureTextEntry
          />

          <InputWithPersistentPlaceholder
            labelText={"Retype New Password"}
            value={viewModel.confirmNewPassword}
            onChangeText={viewModel.setConfirmNewPassword}
            isSecureTextEntry
          />

          {!viewModel.passwordsMatch && <Text style={{ color: "red" }}>New passwords don't match</Text>}
          {viewModel.emptyPasswordInfoFields && <Text style={{ color: "red" }}>All password fields must be filled</Text>}
          
          <View style={{ paddingBottom: 21, paddingTop: 10 }}>
            <SimpleButton
              content={"save & continue"}
              handler={viewModel.handleSaveAndContinuePress}
            />
          </View>
        </View>
      </View>
      <CustomModal 
        visible={viewModel.shouldShowModal} 
        onClose={viewModel.handleModalClose} 
        message={"Successfully updated your data!"} />
    </ScrollView>
  );
};

const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    gradientContainer: {
      width: "100%",
      height: 208,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      color: theme.colors.defaultTitle,
      fontSize: 16,
      paddingHorizontal: 28,
      paddingVertical: 21,
      alignSelf: "flex-start",
    },
    centralizedView: {
      justifyContent: "center",
      alignItems: "center",
    },
  });

export { EditProfileScreen };
