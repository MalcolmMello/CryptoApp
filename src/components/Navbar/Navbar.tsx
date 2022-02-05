import * as C from './styles'
import { Context } from '../../contexts/contexts'
import { useContext, useState } from 'react'
import iconMenu from '../../assets/icon-menu.svg'
import iconClose from '../../assets/icon-close.svg'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const { state, dispatch } = useContext(Context)
    const [isOpen, setIsOpen] = useState(false)
    
    const changeTheme = () => {
        dispatch({
            type: 'CHANGE_THEME',
            payload: {
                theme: state.theme.theme === 'light' ? 'dark' : 'light'
            }
        })
        console.log(state.theme.theme)
    }
    
    const menu = () => {
        setIsOpen(!isOpen)
    }


    const logoColor = state.theme.theme === 'light' ? '000000' : 'ffffff'

    const url = state.theme.theme === 'light' ? 'https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-sun-weather-justicon-lineal-color-justicon-1.png' : 'https://img.icons8.com/external-bearicons-glyph-bearicons/64/ffffff/external-moon-halloween-bearicons-glyph-bearicons.png'

    return (
        <C.Navbar theme={state.theme.theme} menu={isOpen}>
            <div className='container'>
                <div className='logo--area'>
                    <img src={`https://img.icons8.com/pastel-glyph/64/${logoColor}/bitcoin-globe.png`}/>
                    <h1>CryptoApp</h1>
                </div>
                <nav>
                    <div className='menu--theme--area'>
                        <div className='change--theme' onClick={changeTheme}>
                            <img src={url} alt="change theme" />
                        </div>
                        <div className='menu--buttons'>
                            {!isOpen &&
                                <img src={iconMenu} alt="" className='iconMenu' onClick={menu}/>
                            }
                            {isOpen &&
                                <img src={iconClose} alt="" className='iconMenu' onClick={menu}/>
                            }
                        </div>
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
                </nav>
            </div>
        </C.Navbar>
    )
}