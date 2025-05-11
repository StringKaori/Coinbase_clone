import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InitialStackParamList } from "./types/InitialStackParamList";
import { CustomHeader } from "@common/components/CustomHeader/CustomHeader";
import { InitialScreen, LoginScreen, RegisterScreen, ForgetPasswordScreen } from "@modules/index";
import { MainStack } from "../MainStack/MainStack";

const Stack = createNativeStackNavigator<InitialStackParamList>();

interface InitialStackProps {
  initialScreen?: keyof InitialStackParamList
}

const InitialStack = (props: InitialStackProps) => {
  const initialScreen = props.initialScreen  || "LoginScreen" as keyof InitialStackParamList;
  return (
    <Stack.Navigator
      initialRouteName={initialScreen}
      screenOptions={({ navigation }) => ({
        headerShown: false,
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
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />

      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="MainStack"
        component={MainStack}
      />
    </Stack.Navigator>
  );
};

export { InitialStack };
