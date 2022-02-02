import * as C from './styles'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <C.Navbar>
            <div className='container'>
                <div className='logo--area'>
                    <img src="https://img.icons8.com/pastel-glyph/64/ffffff/bitcoin-globe.png"/>
                    <h1>CryptoApp</h1>
                </div>
                <ul className='nav--area'>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/cryptocurrencies">
                            Cryptocurrencies
                        </Link>
                    </li>
                    <li>
                        <Link to="/news">
                            News
                        </Link>
                    </li>
                </ul>
            </div>
        </C.Navbar>
    )
}