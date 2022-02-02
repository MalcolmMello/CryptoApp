export interface cryptoUuid {
    data: {
        coin: {
            symbol: string,
            name: string,
            description: string,
            price: string,
            rank: number,
            "24hVolume": string,
            marketCap: string,
            allTimeHigh: {
                price: string
            },
            numberOfMarkets: number,
            numberOfExchanges: number,
            supply: {
                confirmed: boolean,
                total: string,
                circulating: string
            },
            links: [{
                name: string,
                type: string,
                url: string
            }]
        }
    }
}