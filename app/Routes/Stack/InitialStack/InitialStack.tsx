import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InitialStackParamList } from "./types/InitialStackParamList";
import { InitialScreen, LoginScreen } from "../../../modules";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator<InitialStackParamList>();

const InitialStack = () => {

  return (
    <Stack.Navigator
      initialRouteName={"InitialScreen"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export { InitialStack };
