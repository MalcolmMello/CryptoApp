import * as C from './styles'
import { Context } from '../../contexts/contexts'
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import { Cryptos } from '../../types/crypto'
import { CryptoApi } from '../../api/CryptoApi'
import { Topten } from '../../components/Topten/Topten'

export const Cryptocurrencies = () => {
    const { state } = useContext(Context)
    const [cryptos, setCryptos] = useState<Cryptos>()
    const [input, setInputValue] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setInputValue('')
        getCoins()
    }, [])


    const getCoins = async () => {
        setLoading(true)
        let coins = await CryptoApi.getCoins(100)
        setCryptos(coins)
        setLoading(false)
    }

    
    const lowerCryptoSearch = input.toLowerCase()
    const filteredCoins = cryptos?.data.coins.filter(coin => coin.name.toLowerCase().includes(lowerCryptoSearch))

    return (
        <C.Cryptocurrencies theme={state.theme.theme}>
            <section className='container'>
                <div className='input--area'>
                    <input type="text"
                        value={input}
                        onChange={e => setInputValue(e.target.value)}
                        placeholder='Search a crypto...'
                    />
                </div>
                <div className='coins--area'>
                    {loading &&
                        <div>Loading...</div>
                    }
                    {filteredCoins && filteredCoins.length > 0 && filteredCoins.map((coin) => (
                        <Topten
                            key={coin.uuid}
                            uuid={coin.uuid}
                            rank={coin.rank}
                            name={coin.name}
                            iconUrl={coin.iconUrl}
                            price={coin.price}
                            marketCap={coin.marketCap}
                            change={coin.change}
                        />
                    ))}
                    {cryptos && filteredCoins && filteredCoins.length === 0 &&
                        <div>There's no Cryptocurrencies with that name</div>
                    }
                </div>
            </section>
        </C.Cryptocurrencies>
    )
}