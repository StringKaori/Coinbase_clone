import { useState } from "react";
import { ExchangeCurrencyViewModel } from "./ExchangeCurrencyViewModel";
import { useAccountTotalStore } from "global/useAccountTotal/useAccountTotal";
import { MainStackParamList } from "@routes/Stack/MainStack/types/MainStackParamList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useMainHeaderStore } from "global/useMainHeaderStore/useMainHeaderStore";

const useExchangeCurrencyViewModel = (): ExchangeCurrencyViewModel => {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    const [exchangeValue, setExchangeValue] = useState<string>();
    const [exchangeTotal, setExchangeTotal] = useState<number>(0);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const [cardType, setCardType] = useState<string>();
    const [currency, setCurrency] = useState<string>();
    const [cardValue, setCardValue] = useState<number>();

    const [errorMessage, setErrorMessage] = useState<string>("");

    const { accountTotal, setAccountTotal } = useAccountTotalStore();
    const { setIsMainHeaderVisible } = useMainHeaderStore()

    const handleGift = () => {
        if (cardType === undefined || currency === undefined || cardValue === undefined) { 
            setErrorMessage("Fields must be filled");
            return; 
        }
        setErrorMessage("");
        const total = accountTotal;
        setAccountTotal(total + exchangeTotal);
        setIsModalVisible(true);
    }

    const handleCrypto = () => {
        if (exchangeValue === undefined) { 
            setErrorMessage("Field must be filled");
            return; 
        }
        setErrorMessage("");
        const total = accountTotal;
        setAccountTotal(total + exchangeTotal);
        setIsModalVisible(true);
    }

    const handleContinuePress = (type: string) => {
        if (type === "gift") {
            handleGift();
            return;
        }
        handleCrypto();
    }

    const handleTotal = (text: string, amount: number, rate: number) => {
        setExchangeValue(text);
        if (text==="") {
            setExchangeTotal(0);
            return;
        }
        let mult = parseFloat(text) / amount;
        setExchangeTotal(Math.ceil(rate * mult));
    }

    const onClose = () => {
        navigation.goBack();
        setIsMainHeaderVisible(true);
        setIsModalVisible(false);
    }

    return {
        exchangeValue,
        setExchangeValue,
        exchangeTotal,
        setExchangeTotal,
        isModalVisible,
        setIsModalVisible,
        cardType,
        setCardType,
        currency,
        setCurrency,
        cardValue,
        setCardValue,
        errorMessage, 
        setErrorMessage,
        handleContinuePress,
        handleTotal,
        onClose
    };
}

export { useExchangeCurrencyViewModel };