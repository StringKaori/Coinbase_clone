import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CustomHeader } from "@common/components/CustomHeader/CustomHeader";
import { MainStackParamList } from "./types/MainStackParamList";
import { DefaultExchangeScreen, HomeScreen } from "@modules/index";

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {

  return (
    <Stack.Navigator
      initialRouteName={"HomeScreen"}
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
        name="HomeScreen"
        component={HomeScreen}
      />

      <Stack.Screen
        name="DefaultExchangeScreen"
        component={DefaultExchangeScreen}
      />
    </Stack.Navigator>
  );
};

export { MainStack };
