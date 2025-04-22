export type ExchangeMethodType = {
    id: number,
    name: string,
    title: string,
    subtitle: string,
    type: string,
    backgroundGradient: {
        colors: readonly [string, string, ...string[]]
    }
}
