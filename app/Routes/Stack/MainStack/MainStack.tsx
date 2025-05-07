import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CustomHeader } from "@common/components/CustomHeader/CustomHeader";
import { BottomTab } from "@routes/Tab/BottomTab/BottomTab";
import { MainStackParamList } from "./types/MainStackParamList";
import { EditProfileScreen, ProfileScreen } from "@modules/index";

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {

  return (
    <Stack.Navigator
      initialRouteName={"BottomTab"}
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
        name="BottomTab"
        component={BottomTab}
      />

      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export { MainStack };
