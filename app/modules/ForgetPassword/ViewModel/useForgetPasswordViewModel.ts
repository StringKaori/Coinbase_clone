import { useState } from "react";
import { ForgetPasswordViewModel } from "../types/ForgetPasswordViewModel";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { InitialStackParamList } from "@routes/Stack/InitialStack/types/InitialStackParamList";
import { ValidateEmail } from "@common/helpers/ValidateEmail";

const useForgetPasswordViewModel = (): ForgetPasswordViewModel => {
    const [email, setEmail] = useState<string>();
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const [emptyField, setEmptyField] = useState<boolean>(false);
    const [invalidEmail, setInvalidEmail] = useState<boolean>();

    const navigation = useNavigation<NativeStackNavigationProp<InitialStackParamList>>();

    const handlePress = () => {
        setEmptyField(false);
        if(!email) {
            setEmptyField(true);
            return;
        }

        if(!ValidateEmail(email)) {
            setInvalidEmail(true)
            return;
        }

        setIsModalVisible(true);
    }

    const onClose = () => {
        setIsModalVisible(false);
        navigation.goBack()
    }

    return {
        email,
        setEmail,
        isModalVisible,
        setIsModalVisible,
        emptyField,
        setEmptyField,
        invalidEmail, 
        setInvalidEmail,
        handlePress,
        onClose
    };
}

export { useForgetPasswordViewModel };