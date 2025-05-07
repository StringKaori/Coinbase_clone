import { ThemeType } from "./types/ThemeType";
// arquivo typescript com as definições de tema
export const lightTheme: ThemeType = {
  colors: {
    background: '#fffbf7',
    appBarBackground: '#f8f8f8',
    gradient: {
      colors: ["#e56aa0", "#b053ab", "#9448b1", "#743ab8"],
      locations: [0, 0.44, 0.66, 1],
      start: { x: 0.5, y: 0 },
      end: { x: 0.5, y: 1 }
    },
    primary: '#6200ee',
    secondary: '#FFFBF7',
    defaultTitle: '#626262',
    recentTransactionSecondary: '#979797',
    success: '#0FE133'
  },
  text: {
    title: {
      color: "#9046B2",
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
    },
    button: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
      textTransform: 'uppercase'
    },
    tutorialParagraph: {
      fontSize: 15,
      textAlign: "center",
      paddingVertical: 5,
    },
    profileName: {
      color: '#FFFBF7',
      fontSize: 26,
      fontWeight: 'bold'
    }
  },
  // TODO: remove all hardcoded width and heights
  textInputWithIcon: {
    width: 285,
    height: 43,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 8,
    padding: 10,
  }
};
