import axios from 'axios'

const http = axios.create({
    baseURL: 'https://bing-news-search1.p.rapidapi.com'
})

export const NewsApi = {
    getNews: async (newscategory: string, count: number) => {
        try {
            let news = await http.get(`/news/search?q=${newscategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`, {
                headers: {
                    'x-bingapis-sdk': 'true',
                    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
                    'x-rapidapi-key': 'b62db25697msh5694fe061c62ef1p1ac465jsn112aa8012fd7'
                }
            })
            return news.data
        } catch(error) {
            console.log(error)
        }
    }
}