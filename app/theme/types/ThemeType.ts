export type ThemeType = {
    colors: ThemeColors,
    text: ThemeText
}

type ThemeColors = {
    background: string,
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