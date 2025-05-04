import { BooleanSetter, NumberOrUndefinedSetter, NumberSetter, StringOrUndefinedSetter, StringSetter } from "@common/types/SetStateType";

interface ExchangeCurrencyViewModel {
    exchangeValue: string | undefined,
    setExchangeValue: StringOrUndefinedSetter,
    exchangeTotal: number,
    setExchangeTotal: NumberSetter,
    isModalVisible: boolean, 
    setIsModalVisible: BooleanSetter,

    cardType: string | undefined,
    setCardType: StringOrUndefinedSetter,
    currency: string | undefined,
    setCurrency: StringOrUndefinedSetter,
    cardValue: number | undefined,
    setCardValue: NumberOrUndefinedSetter,

    errorMessage: string, 
    setErrorMessage: StringSetter,

    handleContinuePress: (type: string) => void,
    handleTotal: (text: string, amount: number, rate: number) => void,
    onClose: () => void
}

export { ExchangeCurrencyViewModel };