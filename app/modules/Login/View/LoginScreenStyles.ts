import { StyleSheet } from "react-native";

const LoginScreenStyles = (
  width: number,
  backgroundColor: string,
  secondaryColor: string
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: backgroundColor,
    },
    paragraph: {
      paddingVertical: 29,
      width: width * 0.9,
      textAlign: "center",
    },
    forgetPasswordButton: {
      marginBottom: 42,
    },
    absoluteButton: {
      position: "absolute",
      bottom: 0,
    },
    absoluteButtonText: {
      fontSize: 15,
      fontWeight: "bold",
      color: secondaryColor,
    },
    socialLoginTitle: {
      fontSize: 16,
      color: '#333333',
      paddingTop: 60,
      paddingBottom: 23
    }
});

export { LoginScreenStyles }