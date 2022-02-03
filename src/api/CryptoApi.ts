import axios from 'axios'

interface Props {
    uuidToString: string,
    period: string
}

const http = axios.create({
    baseURL: 'https://coinranking1.p.rapidapi.com'
})

export const CryptoApi = {
    getCoins: async (limit?: number) => {
        try {
            let coins = await http.get(`/coins?limit=${limit}`, {
                headers: {
                    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                    'x-rapidapi-key': 'b62db25697msh5694fe061c62ef1p1ac465jsn112aa8012fd7'
                }
            })
            return coins.data
        } catch (error) {
            console.log(error)
        }
    },
    getCoin: async (uuid: string) => {
        try {
            let coin = await http.get(`/coin/${uuid}`, {
                headers: {
                    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                    'x-rapidapi-key': 'b62db25697msh5694fe061c62ef1p1ac465jsn112aa8012fd7'
                }
            })
            return coin.data
        } catch (error) {
            console.log(error)
        }
    },
    getCoinHistory: async ({ uuidToString, period }: Props) => {
        try {
            let coin = await http.get(`/coin/${uuidToString}/history`, {
                params: {
                    referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: period
                },
                headers: {
                    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                    'x-rapidapi-key': 'b62db25697msh5694fe061c62ef1p1ac465jsn112aa8012fd7'
                }
            })
            return coin.data
        } catch (error) {
            console.log(error)
        }
    }
}