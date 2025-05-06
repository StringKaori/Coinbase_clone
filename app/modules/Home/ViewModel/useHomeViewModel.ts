import { HomeViewModel } from "./HomeViewModel";
import ExchangeMethods from '../Model/ExchangeMethods.json';
import { useProfileStore } from "global";

const useHomeViewModel = (): HomeViewModel => {
    const { username } = useProfileStore()
    return {
        exchangeMethods: ExchangeMethods,
        username
    };
}

export { useHomeViewModel };
