import * as C from './styles'
import millify from 'millify'
import { useParams } from 'react-router-dom'
import { CryptoApi } from '../../api/CryptoApi'
import { useEffect, useState, useContext } from 'react'
import { Context } from '../../contexts/contexts'
import { cryptoUuid } from '../../types/cryptoUuid'
import { cryptoHistory} from '../../types/cryptoHistory'
import { LineChart } from '../../components/LineChart/LineChart'
import parse from 'html-react-parser';

export const Crypto = () => {
    const { state } = useContext(Context)
    const [crypto, setCrypto] = useState<cryptoUuid>()
    const [coinHistory, setCoinHistory] = useState<cryptoHistory>()
    const [period, setPeriod] = useState('7d')
    const params = useParams()
    const {uuid} = params

    useEffect(() => {
        getCoin()
    }, [])

    useEffect(() => {
        getCryptoHistory()
    },[period])
    
    const getCoin = async () => {
        let coin = await CryptoApi.getCoin(String(uuid))
        setCrypto(coin)
    }

    const getCryptoHistory = async () => {
        let uuidToString = String(uuid)
        let history = await CryptoApi.getCoinHistory({uuidToString, period})
        setCoinHistory(history)
    }

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']

    const statistics = [
        {title: 'Price to USD', value: crypto?.data.coin.price}, {title: 'Rank', value: crypto?.data.coin.rank},
        {title: '24h Volume', value: crypto?.data.coin['24hVolume']}, {title: 'Market Cap', value: crypto?.data.coin.marketCap},
        {title: 'All-time-high(daily avg.)', value: crypto?.data.coin.allTimeHigh.price}
    ]
    const otherStatistics = [
        {title: 'Number of Markets', value: crypto?.data.coin.numberOfMarkets}, {title: 'Number of Markets', value: crypto?.data.coin.numberOfExchanges},
        {title: 'Aprovved Supply', value: crypto?.data.coin.supply.confirmed}, {title: 'Total Supply', value: crypto?.data.coin.supply.total},
        {title: 'Circulating Supply', value: crypto?.data.coin.supply.total}
    ]

    return (
        <C.Crypto theme={state.theme.theme}>
            <section className='container'>
                <div className='header'>
                    <h1>{crypto?.data.coin.name} ({crypto?.data.coin.name}-{crypto?.data.coin.symbol}) Price</h1>
                    <small>{crypto?.data.coin.name} live price in US dollars. View value statistics, market cap and supply</small>
                </div>
                <div className='select--area'>
                    <select value={period} onChange={e => setPeriod(e.target.value)}>
                        <option value="7d">7d</option>
                        {time.map((item) => (<option value={item}>{item}</option>))}
                    </select>
                    <LineChart
                        coinHistory={coinHistory}
                        currentPrice={crypto?.data.coin.price}
                        coinName={crypto?.data.coin.name}
                    />
                </div>
                    <div className='crypto--data'>
                        <div className='statistics'>
                            <div className='statistics--title'>
                                <h1>{crypto?.data.coin.name} Value Statistics</h1>
                                <small>An overview showing the stats of {crypto?.data.coin.name}</small>
                            </div>
                            {statistics.map((item, i) => (
                                <div className='data'>
                                    <h5>{item.title}</h5>
                                    <small>
                                        {item.title !== 'Rank' ? '$' : ''}
                                        {item.title !== 'Rank' ? millify(Number(item.value)) : item.value}
                                    </small>
                                </div>
                            ))}
                        </div>
                        <div className='other--statistics'>
                            <div className='statistics--title'>
                                <h1>Other Statistics</h1>
                                <small>An overview showing the stats of all cryptocurrencies</small>
                            </div>
                            {otherStatistics.map((item, i) => (
                                    <div className='data'>
                                        <h5>{item.title}</h5>
                                        <small>
                                            {item.title !== 'Number of Markets' && 'Number of Markets' && item.title !== 'Aprovved Supply' ? '$' : ''}
                                            {item.title !== 'Aprovved Supply' ? millify(Number(item.value)) : item.value}
                                        </small>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className='crypto--info'>
                        <div className='desc'>
                            <h1>What is {crypto?.data.coin.name}</h1>
                            {crypto && parse(crypto.data.coin.description)}
                        </div>
                        <div className='crypto--links'>
                                <h1>{crypto?.data.coin.name} Links</h1>
                                <div className='bitcoin--links'>
                                    {crypto?.data.coin.links.map((link, i) => (
                                        <div className='links--area'>
                                            <p className='type'>
                                                {link.type}
                                            </p>
                                            <a href={link.url} target="_blank" className='name'>
                                                {link.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                        </div>
                    </div>
            </section>
        </C.Crypto>
    )
}