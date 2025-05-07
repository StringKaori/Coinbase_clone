import { BooleanSetter, NumberOrUndefinedSetter, NumberSetter, StringOrUndefinedSetter, StringSetter } from "@common/types/SetStateType";
import { ExchangeMethodType } from "@modules/Home/ViewModel/types/ExchangeMethodType";

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

    handleContinuePress: (item: ExchangeMethodType) => void,
    handleTotal: (text: string, amount: number, rate: number) => void,
    onClose: () => void
}

export { ExchangeCurrencyViewModel };