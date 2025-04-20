import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { InitialScreen, LoginScreen } from "@modules/index";
import { BottomTabParamList } from "./types/BottomTabParamList";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 1,
          borderTopColor: "#e2e2e2",
        },
      }}
    >
      <Tab.Screen name="InitialScreen" component={InitialScreen} />

      <Tab.Screen name="SecondScreen" component={LoginScreen} />
    </Tab.Navigator>
  );
};

export { BottomTab };
