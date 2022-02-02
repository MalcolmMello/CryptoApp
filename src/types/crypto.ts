export interface Cryptos {
    data: {
        stats: {
            totalCoins: number,
            totalMarkets: number,
            totalExchanges: number,
            totalMarketCap: string,
            total24hVolume: string
        },
        coins: [{
            rank: number,
            name: string,
            iconUrl: string,
            price: string,
            marketCap: string,
            change: string,
            uuid: string
        }]
    }
}