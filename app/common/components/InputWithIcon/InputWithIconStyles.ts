import { StyleSheet } from "react-native";

// export const InputWithIconStyles  = (theme: ThemeType) => StyleSheet.create({
export const InputWithIconStyles  = StyleSheet.create ({
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
    right: -5,
    paddingVertical: 10,
  },
});