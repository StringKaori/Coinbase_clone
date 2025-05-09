import { StyleSheet } from "react-native";

// export const InputWithIconStyles  = (theme: ThemeType) => StyleSheet.create({
export const InputWithIconStyles = (iconSize: number) => StyleSheet.create ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    position: "relative",
    marginBottom: 18,
  },
  icon: {
    position: "absolute",
    right: 20,
    padding: 10,
  },
  button: {
    position: "absolute",
    right: 5,
    paddingVertical: 10,
    height: 20,
    width: 20,
    backgroundColor: 'red'
  },
});