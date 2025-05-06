import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "./types/BottomTabParamList";
import HomeSVG from '@assets/HomeIcon.svg';
import { GradientSVG } from "@common/components";
import { MainStack } from "@routes/Stack/MainStack/MainStack";
import { useMainHeaderStore } from "global/useMainHeaderStore/useMainHeaderStore";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {

  const { isVisible } = useMainHeaderStore()

  return (
    <Tab.Navigator
      screenOptions={({navigation}) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 1,
          borderTopColor: '#e2e2e2',
        },
        headerShown: isVisible,
        // header: () => (
        //   <CustomTabbarHeader />
        // ),
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={MainStack}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <GradientSVG SVG={HomeSVG} />
            ) : (
              <HomeSVG width={24} height={24} />
            ),
        }}
      />

      <Tab.Screen
        name="SecondScreen"
        component={MainStack}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <GradientSVG SVG={HomeSVG} />
            ) : (
              <HomeSVG width={24} height={24} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export { BottomTab };
