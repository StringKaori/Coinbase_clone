import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeStore } from "@themes/useThemeStore";

interface CustomHeaderProps {
  showLeftIcon?: boolean
  showRightIcon?: boolean
  title?: string
}

const CustomHeader = (props: CustomHeaderProps) => {
  let asd = "<-";
  let asdd = "->";

  const { theme } = useThemeStore()
  const styles = getStyles(theme.colors.appBarBackground)

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        {props.showLeftIcon &&
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerTitle}>{asd}</Text>
            </TouchableOpacity>
        }

        {props.title && <Text style={styles.headerTitle}>{props.title}</Text>}

        {props.showRightIcon && <SafeAreaView style={{flex:1}}/>}

        {props.showRightIcon && 
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerTitle}>{asdd}</Text>
          </TouchableOpacity>
        }
      </View>
    </SafeAreaView>
  );
};

const getStyles = (backgroundColor: string) => StyleSheet.create({
  safeArea: {
    backgroundColor: backgroundColor,
  },
  headerContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
  },
});

export { CustomHeader };