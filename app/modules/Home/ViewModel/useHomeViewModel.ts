import { HomeViewModel } from "./HomeViewModel";
import ExchangeMethods from '../Model/ExchangeMethods.json';
import { useMainHeaderStore, useProfileStore } from "global";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

const useHomeViewModel = (): HomeViewModel => {
    const { username } = useProfileStore()
    const {setIsMainHeaderVisible} = useMainHeaderStore()

    useFocusEffect(
        useCallback(() => {
        setIsMainHeaderVisible(true);
        return () => {
            // Optional: hide header when navigating away
            setIsMainHeaderVisible(false);
        };
        }, [])
    );
    return {
        exchangeMethods: ExchangeMethods,
        username
    };
}

export { useHomeViewModel };
