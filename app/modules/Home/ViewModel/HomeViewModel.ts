import { SvgProps } from "react-native-svg";
import { ExchangeMethodType } from "./types/ExchangeMethodType";

interface HomeViewModel {
    exchangeMethods: ExchangeMethodType[],
    imageMock: Record<string, React.FC<SvgProps>>
}

export { HomeViewModel };