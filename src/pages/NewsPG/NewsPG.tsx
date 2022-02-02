import * as C from './styles'
import { useState, useEffect } from 'react'
import { CryptoApi } from '../../api/CryptoApi'
import { NewsApi } from '../../api/NewsApi'
import { News } from '../../components/News/News'
import { Cryptos } from '../../types/crypto'
import { NewsTS } from '../../types/news'

export const NewsPG = () => {
    const [cryptos, setCryptos] = useState<Cryptos>()
    const [news, setNews] = useState<NewsTS>()
    const [cryptoName, setCryptoName] = useState('Cryptocurrency')
    
    useEffect(() => {
        getCoins()
    }, [])

    useEffect(() => {
        getNews()
    }, [cryptoName])

    const getCoins = async () => {
        let coins = await CryptoApi.getCoins(100)
        setCryptos(coins)
    }

    const getNews = async () => {
        let news = await NewsApi.getNews(cryptoName, 100)
        setNews(news)
    }

    return (
        <C.NewsPG>
            <section className='container'>
                <div className='input--area'>
                    <select value={cryptoName} onChange={e => setCryptoName(e.target.value)}>
                        <option value="Cryptocurrency">Cryptocurrency</option>
                        {cryptos?.data.coins.map((coin) => <option value={coin.name}>{coin.name}</option>)}
                    </select>
                </div>
                <div className='news--area'>
                {news?.value.map((item, i) => (
                        <News
                            title={item.name}
                            url={item.url}
                            desc={item.description}
                            provider={item.provider[0].name}
                            providerImg={item.provider[0].image?.thumbnail.contentUrl}
                            date={item.datePublished}
                            img={item.image?.thumbnail.contentUrl}
                        />
                    ))}
                </div>
            </section>
        </C.NewsPG>
    )
}