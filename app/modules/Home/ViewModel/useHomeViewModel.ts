import { HomeViewModel } from "./HomeViewModel";
import ExchangeMethods from '../Model/ExchangeMethods.json';

const useHomeViewModel = (): HomeViewModel => {
    return {
        exchangeMethods: ExchangeMethods,
    };
}

export { useHomeViewModel };
