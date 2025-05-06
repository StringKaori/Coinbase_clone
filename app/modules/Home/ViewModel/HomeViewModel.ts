import { ExchangeMethodType } from "./types/ExchangeMethodType";

interface HomeViewModel {
    exchangeMethods: ExchangeMethodType[],
    username: string
}

export { HomeViewModel };