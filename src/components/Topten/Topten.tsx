import * as C from './styles'
import millify from 'millify'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../contexts/contexts'


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
    const { state } = useContext(Context)
    
    return (
        <C.Topten theme={state.theme.theme}>
            <Link to={`/crypto/${uuid}`}>
                <div className='title'><span>{rank}. {name}</span> <img src={iconUrl} alt="foto da criptomoeda" /></div>
                <div className='coin--datas'>
                    <p>Price: <span>$ {Number(price).toFixed(2)}</span></p>
                    <p>Market Cap: <span>{millify(Number(marketCap))}</span></p>
                    <p>Daily Change: <span className={`forhundred ${Number(change) < 0 ? 'red' : 'green'}`}>{change}%</span></p>
                </div>
            </Link>
        </C.Topten>
    )
}