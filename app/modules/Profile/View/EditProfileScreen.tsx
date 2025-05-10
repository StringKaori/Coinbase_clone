import { ThemeType } from "@themes/types/ThemeType";
import { useThemeStore } from "@themes/useThemeStore";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ChangePictureSVG from "@assets/ChangePicture.svg";
import InputWithPersistentPlaceholder from "./helpers/InputWithPersistentPlaceholder";
import { useEditProfileViewModel } from "../ViewModel/useEditProfileViewModel";
import { CustomModal, SimpleButton } from "@common/components";
import StarSVG from '@assets/Successful.svg';
import React, { useState } from 'react';

const EditProfileScreen = () => {
  const { theme, height } = useThemeStore();
  const styles = createStyles(theme);
  const viewModel = useEditProfileViewModel();
  
  // State to track scroll position
  const [scrollY, setScrollY] = useState(0);

  return (
    <ScrollView 
      style={styles.container} 
      onScroll={(event) => setScrollY(event.nativeEvent.contentOffset.y)}
    >
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

          {/* Floating Button */}
          <LinearGradient 
            colors={["#e76ba0", "#7a3db7"]} 
            style={[
              styles.floatingButton, 
              { top: scrollY + (height * 0.38) } 
            ]}
          >
            <TouchableOpacity
             onPress={viewModel.handleSaveAndContinuePress}>
              <StarSVG />
            </TouchableOpacity>
          </LinearGradient>
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
    floatingButton: {
      position: "absolute",
      right: 20,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 60,
    },
  });

export { EditProfileScreen };
