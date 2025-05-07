export type ExchangeMethodType = {
    id: number,
    name: string,
    title: string,
    subtitle: string,
    type: string,
    rate: number,
    amount:  number,
    backgroundGradient: {
        colors: [string, string, ...string[]]
    }
}
