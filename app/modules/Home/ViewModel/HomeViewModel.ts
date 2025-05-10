import { ExchangeMethodType } from "./types/ExchangeMethodType";
import * as ScreenOrientation from 'expo-screen-orientation';

interface HomeViewModel {
    exchangeMethods: ExchangeMethodType[],
    firstName: string
    currentOrientation: ScreenOrientation.Orientation | undefined, 
    setCurrentOrientationuseState: React.Dispatch<React.SetStateAction<ScreenOrientation.Orientation | undefined>>;
}

export { HomeViewModel };