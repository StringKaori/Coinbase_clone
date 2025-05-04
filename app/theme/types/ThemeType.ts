import { LinearGradientPoint } from "expo-linear-gradient"
import { StyleProp, TextStyle } from "react-native"

export type ThemeType = {
    colors: ThemeColors,
    text: ThemeText
    textInputWithIcon: TextInputWithIconType
}

type ThemeColors = {
    background: string,
    appBarBackground: string,
    gradient: GradientObject,
    primary: string,
    secondary: string,
    currencyTitle: string
}

type ThemeText = {
    title: StyleProp<TextStyle>
    button: StyleProp<TextStyle>
    tutorialParagraph: StyleProp<TextStyle>
}

type GradientObject = {
    colors: [string, string, ...string[]],
    locations: [number, number, ...number[]],
    start: LinearGradientPoint | null | undefined,
    end: LinearGradientPoint | null | undefined
}

type TextInputWithIconType = {
    width: number,
    height: number,
    borderWidth: number,
    borderColor: string,
    borderRadius: number,
    padding: number,
}