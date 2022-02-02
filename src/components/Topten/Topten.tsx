import * as C from './styles'
import { Link } from 'react-router-dom'

interface Props {
    rank: number,
    name: string,
    iconUrl: string,
    price: string,
    marketCap: string,
    change: string,
    uuid: string
}

export const Topten = ({rank, name, iconUrl, price, marketCap, change, uuid}: Props) => {
    return (
        <C.Topten>
            <Link to={`/crypto/${uuid}`}>
                <div className='title'><span>{rank}. {name}</span> <img src={iconUrl} alt="foto da criptomoeda" /></div>
                <div className='coin--datas'>
                    <p>Price: <span>$ {Number(price).toFixed(2)}</span></p>
                    <p>Market Cap: <span>{Number(marketCap).toFixed(2)}</span></p>
                    <p>Daily Change: <span className={`forhundred ${Number(change) < 0 ? 'red' : 'green'}`}>{change}%</span></p>
                </div>
            </Link>
        </C.Topten>
    )
}