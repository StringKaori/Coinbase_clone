export type ThemeType = {
    colors: ThemeColors,
    text: ThemeText
}

type ThemeColors = {
    background: string,
    appBarBackground: string,
    gradient: GradientObject,
    primary: string,
    onPrimary: string,
}

type ThemeText = {
    title: ThemeTitle
}

type ThemeTitle = {
    fontSize: number,
    fontWeight: string
}

type GradientObject = {
    colors: [string, string, ...string[]],
    locations: [number, number, ...number[]]
}