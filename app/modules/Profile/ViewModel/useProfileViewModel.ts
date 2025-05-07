import { formatBalance } from "@common/helpers/formatBalance";
import { useAccountTotalStore } from "global";
import { useState } from "react";
import { ProfileViewModel } from "./ProfileViewModel";
import { MainStackParamList } from "@routes/Stack/MainStack/types/MainStackParamList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const useProfileViewModel = (): ProfileViewModel => {
    const { accountTotal } = useAccountTotalStore();
    const [totalBalance, setTotalBalance] = useState<string>(formatBalance(accountTotal));
    
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    const handleEditProfilePress = () => {
        navigation.navigate('EditProfileScreen')
    }

    return {
        totalBalance, 
        setTotalBalance,
        handleEditProfilePress
    }
}

export { useProfileViewModel };