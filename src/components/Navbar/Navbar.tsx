import * as C from './styles'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <C.Navbar>
            <div className='logo--area'>
                <img src="https://img.icons8.com/pastel-glyph/64/ffffff/bitcoin-globe.png"/>
                <h1>CryptoApp</h1>
            </div>
            <ul className='nav--area'>
                <li>
                    <Link to="/">
                        <img src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/ffffff/external-home-contact-us-kmg-design-detailed-outline-kmg-design.png"/>
                        <p>Home</p>
                    </Link>
                </li>
            </ul>
        </C.Navbar>
    )
}