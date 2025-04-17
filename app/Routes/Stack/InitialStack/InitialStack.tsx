import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InitialStackParamList } from "./types/InitialStackParamList";
import { InitialScreen, LoginScreen } from "@modules/index";
import { useThemeStore } from "@themes/useThemeStore";
import { CustomHeader } from "@common/components/CustomHeader/CustomHeader";

const Stack = createNativeStackNavigator<InitialStackParamList>();

const InitialStack = () => {
  const { theme } = useThemeStore();

  return (
    <Stack.Navigator
      initialRouteName={"InitialScreen"}
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: theme.colors.appBarBackground },
        headerTitle: "",
        header: () => (
          <CustomHeader title={"back"} showLeftIcon showRightIcon />
        ),
      }}
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
    </Stack.Navigator>
  );
};

export { InitialStack };
