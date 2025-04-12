import { ThemeType } from "./types/ThemeType";

// arquivo typescript com as definições de tema
export const lightTheme: ThemeType = {
  colors: {
    background: '#FFFFFF',
    primary: '#6200ee',
    onPrimary: '#FFFFFF',
  },
  text: {
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  },
};

export const darkTheme: ThemeType = {
  colors: {
    background: '#000',
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