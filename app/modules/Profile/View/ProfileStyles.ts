import { ThemeType } from "@themes/types/ThemeType";
import { StyleSheet } from "react-native";

const createStyles = (theme: ThemeType, width: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      width: width,
    },
    profileTitle: {
      color: theme.colors.defaultTitle,
      fontSize: 16,
      paddingLeft: 28,
      paddingBottom: 21,
    },
    gradientContainer: {
      height: 269,
      justifyContent: "center",
      alignItems: "center",
    },
    balanceText: {
      color: theme.colors.secondary,
      fontSize: 14,
    },
    editProfileButton: {
      backgroundColor: "#fff",
      width: 113,
      height: 29,
      borderRadius: 6,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
    recentTransactionsTitle: {
      color: theme.colors.defaultTitle,
      fontSize: 14,
      padding: 28,
    },
    iconWithGradientBackground: {
      width: 46,
      height: 46,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
    },
    recentTransactionButton: {
      paddingBottom: 10,
      flexDirection: "row",
      alignItems: "center",
    },
    transactionInfoContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: 13,
    },
    grayText: {
      color: theme.colors.recentTransactionSecondary,
    },
    convertedValue: {
      color: theme.colors.success,
    },
});

export { createStyles }