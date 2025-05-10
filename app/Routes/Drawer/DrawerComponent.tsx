import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native";
import { HomeScreen } from "@modules/Home";
import { ProfileScreen } from "@modules/Profile";
import { TransactionHistory } from "@modules/TransactionHistory";
import { useThemeStore } from "@themes/useThemeStore";

type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
  TransactionHistory: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerComponent = () => {
  const { theme } = useThemeStore()
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: "#a04dae",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerActiveTintColor: "#a04dae",
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          drawerIcon: ({ color }) => <Text style={{ color: color }}>🏠</Text>,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          drawerIcon: ({ color }) => <Text style={{ color: color }}>👤</Text>,
        }}
      />
      <Drawer.Screen
        name="TransactionHistory"
        component={TransactionHistory}
        options={{
          title: "Transaction History",
          drawerIcon: ({ color }) => <Text style={{ color: color }}>⚙️</Text>,
        }}
      />
    </Drawer.Navigator>
  );
};

export { DrawerComponent };