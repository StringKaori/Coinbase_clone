import { useEffect, useState } from "react";
import { usePasswordStrength } from "./usePasswordStrength";
import { RegisterViewModel } from "./RegisterViewModel";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { InitialStackParamList } from "@routes/Stack/InitialStack/types/InitialStackParamList";
import { useNavigation } from "@react-navigation/native";
import { ValidateEmail } from "@common/helpers/ValidateEmail";

const useRegisterViewModel = (): RegisterViewModel => {

    const navigation = useNavigation<NativeStackNavigationProp<InitialStackParamList>>();
    // MARK: - States
    const [name, setName] = useState<string>();

    const [email, setEmail] = useState<string>();

    const [password, setPassword] = useState<string>();
    const [isPasswordSecureText, setIsPasswordSecureText] = useState<boolean>(true);

    const [confirmPassword, setConfirmPassword] = useState<string>();
    const [isConfirmPasswordSecureText, setIsConfirmPasswordSecureText] = useState<boolean>(true);

    const [progress, setProgress] = useState<number>(0);
    const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    // MARK: - Error states
    const [emptyFields, setEmptyFields] = useState<boolean>();
    const [invalidEmail, setInvalidEmail] = useState<boolean>();

    // MARK: - observables/lifecycle
    useEffect(() => {
        setProgress(usePasswordStrength(password))
    }, [password])

    useEffect(() => {
        if(!password || !confirmPassword) { return; }
        setPasswordsMatch(password===confirmPassword)
    }, [password, confirmPassword])

    // MARK: - functions:
    const registrationHandler = () => {
        setEmptyFields(false);
        setInvalidEmail(false);

        if(!name || !email || !password || !confirmPassword) {
            setEmptyFields(true);
            return;
        }

        if(!ValidateEmail(email)) {
            setInvalidEmail(true)
        }
        
        if(!passwordsMatch) { return; }

        setIsModalVisible(true)
    }

    const onClose = () => {
        setIsModalVisible(false)
        navigation.goBack()
    }

    return {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        isPasswordSecureText,
        setIsPasswordSecureText,
        confirmPassword,
        setConfirmPassword,
        isConfirmPasswordSecureText,
        setIsConfirmPasswordSecureText,
        progress,
        setProgress,
        passwordsMatch,
        setPasswordsMatch,
        emptyFields,
        setEmptyFields,
        invalidEmail,
        setInvalidEmail,
        isModalVisible,
        setIsModalVisible,
        registrationHandler,
        onClose
    };
}

export { useRegisterViewModel };