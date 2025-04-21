import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { ExchangeMethodType } from "@modules/Home/ViewModel/types/ExchangeMethodType";

type RootStackParamList = {
    CryptoExchangeScreen: ExchangeMethodType;
};

type Props = {
    route: RouteProp<RootStackParamList, 'CryptoExchangeScreen'>;
};

const CryptoExchangeScreen = ({ route }: Props) => {
    const item = route.params
    return (
        <SafeAreaView>
            <Text>{item.name}</Text>
        </SafeAreaView>
    );
}

export { CryptoExchangeScreen };