import { formatBalance } from "@common/helpers/formatBalance";
import { useAccountTotalStore } from "global";
import { useState } from "react";
import { ProfileViewModel } from "./ProfileViewModel";
import { MainStackParamList } from "@routes/Stack/MainStack/types/MainStackParamList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useProfileViewModel = (): ProfileViewModel => {
    const { accountTotal } = useAccountTotalStore();
    const [totalBalance, setTotalBalance] = useState<string>(formatBalance(accountTotal));
    const [modalVisible, setModalVisible] = useState(false);
    
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    const handleEditProfilePress = () => {
        navigation.navigate('EditProfileScreen')
    }

    const handleExit = async () => {
        await AsyncStorage.setItem("isLoggedIn", "false");
        navigation.reset({ index: 0, routes: [{ name: "InitialStack" }] })
    }

    return {
        totalBalance, 
        setTotalBalance,
        modalVisible,
        setModalVisible,

        handleEditProfilePress,
        handleExit
    }
}

export { useProfileViewModel };