import { useThemeStore } from "@themes/useThemeStore";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DrawerIconSVG from "@assets/DrawerIcon.svg";
import ProfileIconSVG from "@assets/ProfileIcon.svg";
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface CustomTabbarHeaderProps {
  navigation: NativeStackNavigationProp<any>;
}

const CustomTabbarHeader = (props: CustomTabbarHeaderProps) => {
  const { theme, height } = useThemeStore();
  const styles = getStyles(theme.colors.appBarBackground, height);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.push("Drawer")}>
          <DrawerIconSVG />
        </TouchableOpacity>

        <SafeAreaView style={{ flex: 1 }} />

        <TouchableOpacity onPress={() => props.navigation.push("ProfileScreen")}>
          <ProfileIconSVG />
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={["rgba(0,0,0,0.1)", "transparent"]}
        style={styles.smokyBottomBorder}
      />
    </SafeAreaView>
  );
};

const getStyles = (backgroundColor: string, height: number) =>
  StyleSheet.create({
    safeArea: {
      backgroundColor: backgroundColor,
    },
    headerContainer: {
      height: height * 0.08,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: 28,
      paddingRight: 10,
    },
    smokyBottomBorder: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 3,
    },
  });

export { CustomTabbarHeader };
