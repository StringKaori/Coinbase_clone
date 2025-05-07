import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "./types/BottomTabParamList";
import { GradientSVG } from "@common/components";
import { HomeStack } from "@routes/Stack/HomeStack/HomeStack";
import { useMainHeaderStore } from "global/useMainHeaderStore/useMainHeaderStore";
import { CustomTabbarHeader } from "@common/components/CustomHeader/CustomTabbarHeader";
import { EditProfileScreen } from "@modules/Profile";
import HomeSVG from '@assets/HomeIcon.svg';
import SettingsSVG from '@assets/Settings.svg';
import HistorySVG from '@assets/HistoryIcon.svg'
import { TransactionHistory } from "@modules/TransactionHistory";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {

  const { isMainHeaderVisible } = useMainHeaderStore()

  return (
    <Tab.Navigator
      screenOptions={({navigation}) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 1,
          borderTopColor: '#e2e2e2',
        },
        headerShown: isMainHeaderVisible,
        header: () => (
          <CustomTabbarHeader navigation={navigation.getParent()}/>
        ),
      })}
    >
      <Tab.Screen
        name="HomeScreenTab"
        component={HomeStack}
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
        name="TransactionHistoryTab"
        component={TransactionHistory}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <GradientSVG SVG={HistorySVG} />
            ) : (
              <HistorySVG width={24} height={24} />
            ),
        }}
      />  

      <Tab.Screen
        name="EditProfileScreenTab"
        component={EditProfileScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <GradientSVG SVG={SettingsSVG} />
            ) : (
              <SettingsSVG width={24} height={24} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export { BottomTab };
