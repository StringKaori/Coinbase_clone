import { HomeViewModel } from "./HomeViewModel";
import ExchangeMethods from '../Model/ExchangeMethods.json';
import { useMainHeaderStore, useProfileStore } from "global";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

const useHomeViewModel = (): HomeViewModel => {
    const { firstName } = useProfileStore()
    const {setIsMainHeaderVisible} = useMainHeaderStore()
    // TODO: - mergear os dois header em 1 pra n ter q ficar escondendo dessa forma ruim
    useFocusEffect(
        useCallback(() => {
        setIsMainHeaderVisible(true);
        }, [])
    );
    return {
        exchangeMethods: ExchangeMethods,
        firstName
    };
}

export { useHomeViewModel };
