import { StyleProp, TextStyle } from "react-native"
import { TextInput } from "react-native-gesture-handler"

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
    onPrimary: string,
}

type ThemeText = {
    title: StyleProp<TextStyle>
    button: StyleProp<TextStyle>
    tutorialParagraph: StyleProp<TextStyle>
}

type GradientObject = {
    colors: [string, string, ...string[]],
    locations: [number, number, ...number[]]
}

type TextInputWithIconType = {
    width: number,
    height: number,
    borderWidth: number,
    borderColor: string,
    borderRadius: number,
    padding: number,
}