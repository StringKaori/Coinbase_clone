import { ThemeType } from "./types/ThemeType";

// arquivo typescript com as definições de tema
export const lightTheme: ThemeType = {
  colors: {
    background: '#fffbf7',
    appBarBackground: '#f8f8f8',
    gradient: {
      colors: ["#e56aa0", "#b053ab", "#9448b1", "#743ab8"],
      locations: [0, 0.44, 0.66, 1]
    },
    primary: '#6200ee',
    onPrimary: '#000',
  },
  text: {
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  },
};

// export const darkTheme: ThemeType = {
//   colors: {
//     background: '#000',
//     primary: '#6200ee',
//     onPrimary: '#000',
//   },
//   text: {
//     title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//     },
//   },
// };