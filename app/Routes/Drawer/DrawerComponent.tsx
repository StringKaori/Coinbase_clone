import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native";
import { HomeScreen } from "@modules/Home";
import { ProfileScreen } from "@modules/Profile";
import { TransactionHistory } from "@modules/TransactionHistory";

type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
  TransactionHistory: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerComponent = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerActiveTintColor: "#f4511e",
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}
      // Optional: Use custom drawer content
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
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