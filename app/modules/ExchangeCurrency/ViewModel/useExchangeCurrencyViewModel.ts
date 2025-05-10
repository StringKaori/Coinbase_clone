import { useEffect, useState } from "react";
import { ExchangeCurrencyViewModel } from "./ExchangeCurrencyViewModel";
import { useAccountTotalStore } from "global/useAccountTotal/useAccountTotal";
import { MainStackParamList } from "@routes/Stack/MainStack/types/MainStackParamList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useMainHeaderStore } from "global/useMainHeaderStore/useMainHeaderStore";
import { useTransactionsStore, TransactionType } from "global";
import { ExchangeMethodType } from "@modules/Home/ViewModel/types/ExchangeMethodType";

const useExchangeCurrencyViewModel = (): ExchangeCurrencyViewModel => {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    const isFocused = useIsFocused();

    useEffect(() => {
      if (!isFocused) {
        navigation.goBack();
      }
    }, [isFocused, navigation]);

    const [exchangeValue, setExchangeValue] = useState<string>();
    const [exchangeTotal, setExchangeTotal] = useState<number>(0);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const [cardType, setCardType] = useState<string>();
    const [currency, setCurrency] = useState<string>();
    const [cardValue, setCardValue] = useState<number>();

    const [errorMessage, setErrorMessage] = useState<string>("");

    const { accountTotal, setAccountTotal } = useAccountTotalStore();
    const { setIsMainHeaderVisible } = useMainHeaderStore();
    const { setRecentTransactions, incrementTotalTransactionsNumber, incrementSuccessfulTransactionsCount } = useTransactionsStore();

    // yeah i know the best was to add a state for the item, but i don't have time to refactor rn
    const handleCompletion = (item: ExchangeMethodType) => {
        setErrorMessage("");
        const total = accountTotal;
        setAccountTotal(total + exchangeTotal);
        setIsModalVisible(true);
        const convertedType = item.type as TransactionType
        setRecentTransactions({ 
            type: convertedType,
            title: item.title,
            convertedValue: exchangeTotal,
            date: new Date(),
            status: "Successful",
            iconColorsGradient: item.backgroundGradient.colors
        })
        incrementTotalTransactionsNumber()
        incrementSuccessfulTransactionsCount()
    }

    const handleGift = (item: ExchangeMethodType) => {
        if (cardType === undefined || currency === undefined || cardValue === undefined) { 
            setErrorMessage("Fields must be filled");
            return; 
        }
        handleCompletion(item)
    }

    const handleCrypto = (item: ExchangeMethodType) => {
        if (exchangeValue === undefined || exchangeValue === "0") {
            setErrorMessage("Field must be filled and different than zero");
            return; 
        }
        console.log(`exchange value: ${exchangeValue}`);
        handleCompletion(item)
    }

    const handleContinuePress = (item: ExchangeMethodType) => {
        if (item.type === "gift") {
            handleGift(item);
            return;
        }
        handleCrypto(item);
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