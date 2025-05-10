import { HomeViewModel } from "./HomeViewModel";
import ExchangeMethods from '../Model/ExchangeMethods.json';
import { useMainHeaderStore, useProfileStore } from "global";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import * as ScreenOrientation from 'expo-screen-orientation';

const useHomeViewModel = (): HomeViewModel => {
    const { firstName } = useProfileStore();
    const { setIsMainHeaderVisible } = useMainHeaderStore();
    const [currentOrientation, setCurrentOrientation] = useState<ScreenOrientation.Orientation>();

    useEffect(() => {
        const fetchOrientation = async () => {
            const orientation = await ScreenOrientation.getOrientationAsync();
            setCurrentOrientation(orientation);
            console.log('Initial orientation:', ScreenOrientation.Orientation[orientation]);
        };

        fetchOrientation();

        const subscription = ScreenOrientation.addOrientationChangeListener(event => {
            const newOrientation = event.orientationInfo.orientation;
            setCurrentOrientation(newOrientation);
        });

        return () => {
            subscription.remove();
        };
    }, []);

    useFocusEffect(
        useCallback(() => {
            setIsMainHeaderVisible(true);
            ScreenOrientation.unlockAsync();

            return () => {
                ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
            };
        }, [])
    );

    return {
        exchangeMethods: ExchangeMethods,
        firstName,
        currentOrientation, 
        setCurrentOrientation
    };
};

export { useHomeViewModel };
