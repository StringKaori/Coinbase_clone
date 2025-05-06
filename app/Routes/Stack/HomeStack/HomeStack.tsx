import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CustomHeader } from "@common/components/CustomHeader/CustomHeader";
import { BottomTab } from "@routes/Tab/BottomTab/BottomTab";
import { HomeStackParamList } from "./types/HomeStackParamList";
import { DefaultExchangeScreen, HomeScreen } from "@modules/index";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {

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
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export { HomeStack };
