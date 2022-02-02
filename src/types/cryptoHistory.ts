export interface cryptoHistory {
    data: {
        change: string,
        history: [{
            price: string,
            timestamp: number
        }]
    }
}