import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeStore } from "@themes/useThemeStore";
import BackIconSVG from '@assets/BackIcon.svg'
import { GradientText } from "../GradientText/GradientText";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";

interface CustomHeaderProps {
  showLeftIcon?: boolean
  showRightIcon?: boolean
  helperText?: string
  navigation: NativeStackNavigationProp<any>;
}

const CustomHeader = (props: CustomHeaderProps) => {
  const navigation = props.navigation
  const { theme } = useThemeStore()
  const styles = getStyles(theme.colors.appBarBackground, theme.colors.primary)

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        {props.showLeftIcon &&
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {navigation.goBack()}}>
            <BackIconSVG />
            <GradientText 
              text="Back"
              style={{fontSize: 15, padding: 6, fontWeight: 'bold'}}/>
          </TouchableOpacity>
        }

        {props.showRightIcon && <SafeAreaView style={{flex:1}}/>}

        {props.showRightIcon && 
          <TouchableOpacity onPress={() => {}}>
            <Text>right</Text>
          </TouchableOpacity>
        }
      </View>
      <LinearGradient
    colors={['rgba(0,0,0,0.1)', 'transparent']}
    style={styles.smokyBottomBorder}
  />
    </SafeAreaView>
  );
};

const getStyles = (backgroundColor: string, primaryColor: string) => StyleSheet.create({
  safeArea: {
    backgroundColor: backgroundColor,
  },
  headerContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  smokyBottomBorder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
  },
});

export { CustomHeader };