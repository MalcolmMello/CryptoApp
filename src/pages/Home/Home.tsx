import * as C from './styles'
import { Cryptos } from '../../types/crypto'
import { NewsTS } from '../../types/news'
import { CryptoApi } from '../../api/CryptoApi'
import { NewsApi } from '../../api/NewsApi'
import { Stats } from '../../components/Stats/Stats'
import { Topten } from '../../components/Topten/Topten'
import { News } from '../../components/News/News'
import { useEffect, useState } from 'react'

export const Home = () => {
    const [cryptos, setCryptos] = useState<Cryptos>()
    const [news, setNews] = useState<NewsTS>()

    useEffect(() => {
        getCoins()
    }, [])

    useEffect(() => {
        getNews()
    }, [])

    const getCoins = async () => {
        let coins = await CryptoApi.getCoins(10)
        setCryptos(coins)
    }

    const getNews = async () => {
        let news = await NewsApi.getNews('Cryptocurrency', 6)
        setNews(news)
    }

    return (
        <C.Area>
            <div className='container'>
            <section className='global--crypto--stats'>
                <h1>Global Crypto Stats</h1>
                <div className='crypto--stats--area'>
                    <Stats
                        title='Total Cryptocurrencys'
                        content={cryptos?.data.stats.totalCoins}
                    />
                    <Stats
                        title='Total Market Cap'
                        content={cryptos?.data.stats.totalMarketCap}
                    />
                    <Stats
                        title='Total Markets'
                        content={cryptos?.data.stats.totalMarkets}
                    />
                    <Stats
                        title='Total Exchanges'
                        content={cryptos?.data.stats.totalExchanges}
                    />
                    <Stats
                        title='Total 24 Volume'
                        content={cryptos?.data.stats.total24hVolume}
                    />
                </div>
            </section>
            <section className='coins--area'>
                <h1>Top 10 Cryptocurrencies in the world</h1>
                <div className='top--10--area'>
                    {cryptos?.data.coins.map((coin) => (
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
                </div>
            </section>
            <section className='news--area'>
                <h1>The Lastest News</h1>
                <div className='news--grid'>
                    {news?.value.map((item, i) => (
                        <News
                            title={item.name}
                            url={item.url}
                            desc={item.description}
                            provider={item.provider[0].name}
                            providerImg={item.provider[0].image?.thumbnail.contentUrl}
                            date={item.datePublished}
                            img={item.image.thumbnail.contentUrl}
                        />
                    ))}
                </div>
            </section>
            </div>
        </C.Area>
    )
}