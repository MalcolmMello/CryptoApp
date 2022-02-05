import axios from 'axios'

const http = axios.create({
    baseURL: process.env.REACT_APP_NEWSAPI_URL
})


export const NewsApi = {
    getNews: async (newscategory: string, count: number) => {
        try {
            let news = await http.get(`/news/search?q=${newscategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`, {
                headers: {
                    'x-bingapis-sdk': 'true',
                    'x-rapidapi-host': process.env.REACT_APP_NEWSAPI_HOST as string,
                    'x-rapidapi-key': process.env.REACT_APP_NEWSAPI_KEY as string
                }
            })
            return news.data
        } catch(error) {
            console.log(error)
        }
    }
}