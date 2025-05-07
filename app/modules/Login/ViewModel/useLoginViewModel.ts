import { useState } from "react";
import { LoginViewModel } from "./LoginViewModel";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { InitialStackParamList } from "@routes/Stack/InitialStack/types/InitialStackParamList";
import { ValidateEmail } from "@common/helpers/ValidateEmail";
import AsyncStorage from "@react-native-async-storage/async-storage";

type LoginScreenNavigationProp =
  NativeStackNavigationProp<InitialStackParamList>;

const useLoginViewModel = (): LoginViewModel => {
  // MARK: - States
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isSecureText, setIsSecureText] = useState<boolean>(true);

  // MARK: - Error states
  const [emptyFields, setEmptyFields] = useState<boolean>();
  const [invalidEmail, setInvalidEmail] = useState<boolean>();

  // MARK: - Navigation handlers
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const navigateToForgetPassword = () => {
    navigation.navigate("ForgetPasswordScreen");
  };

  const navigateToRegisterScreen = () => {
    navigation.navigate("RegisterScreen");
  };

  // MARK: - Handlers
  const handleLoginPress = async () => {
    if (!email || !password) {
      setEmptyFields(true);
      return;
    }
    setEmptyFields(false);

    if (!ValidateEmail(email)) {
        setInvalidEmail(true);
      return;
    }
    setInvalidEmail(false);
    try {
      await AsyncStorage.setItem("isFirstTime", "false");
    } catch (e) {
      console.error(e);
    }
    navigation.reset({ index: 0, routes: [{ name: "BottomTab" }] });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isSecureText,
    setIsSecureText,
    emptyFields,
    setEmptyFields,
    invalidEmail,
    setInvalidEmail,
    navigateToForgetPassword,
    navigateToRegisterScreen,
    handleLoginPress,
  };
};

export { useLoginViewModel };
