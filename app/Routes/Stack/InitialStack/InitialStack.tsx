import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InitialStackParamList } from "./types/InitialStackParamList";
import { CustomHeader } from "@common/components/CustomHeader/CustomHeader";
import { InitialScreen, LoginScreen, RegisterScreen, ForgetPasswordScreen } from "@modules/index";

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

      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export { InitialStack };
