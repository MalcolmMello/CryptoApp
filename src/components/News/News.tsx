import * as C from './styles'
import defaultimg from '../../assets/defaultimg.jpg'
interface Props {
    title: string,
    url: string,
    desc: string,
    provider: string,
    providerImg: string,
    date: string,
    img: string
}

export const News = ({title, url, desc, provider, providerImg, date, img}: Props) => {
    const formatDate = new Date(date);
    return (
        <C.News>
            <a href={url} target="_blank">
                <div className='title'><h4>{title}</h4> <img src={img} alt="imagem da notícia" /></div>
                <div className='description'><p>{desc}</p></div>
                <div className='provider--data'>
                    <div className='provider--name'>
                        <img src={providerImg ? providerImg : defaultimg} alt="imagem do site da notícia"/>
                        <small>{provider}</small>
                    </div>
                    <div className='news--time'>
                        <small>{formatDate.getHours()} hours ago</small>
                    </div>
                </div>
            </a>
        </C.News>
    )
}