import { HomeViewModel } from "./HomeViewModel";
import ExchangeMethods from '../Model/ExchangeMethods.json';
import { imageMock } from "../Model/ImageMock";

const useHomeViewModel = (): HomeViewModel => {
    return {
        exchangeMethods: ExchangeMethods,
        imageMock: imageMock
    };
}

export { useHomeViewModel };
