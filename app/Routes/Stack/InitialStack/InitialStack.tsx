import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InitialStackParamList } from "./types/InitialStackParamList";
import { CustomHeader } from "@common/components/CustomHeader/CustomHeader";
import { InitialScreen } from "@modules/Initial";
import { LoginScreen } from "@modules/Login";
import { RegisterScreen } from "@modules/Register";

const Stack = createNativeStackNavigator<InitialStackParamList>();

const InitialStack = () => {

  return (
    <Stack.Navigator
      initialRouteName={"InitialScreen"}
      screenOptions={({ navigation }) => ({
        headerShown: true,
        header: () => (
          <CustomHeader 
            helperText={"back"}
            showLeftIcon
            navigation={navigation} />
        ),
      })}
    >
      <Stack.Screen
        name="InitialScreen"
        component={InitialScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export { InitialStack };
