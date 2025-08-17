import axios from 'axios'

const API_KEY = import.meta.env.VITE_NEWS_API_KEY

const BASE_URL = "https://newsapi.org/v2"

const getNews = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/everything`, {
            params: {
                q: query,
                apiKey: API_KEY,
                language: "en",
                sortBy: "publishedAt"
            }
        })
        return response.data.articles
    } catch (error) {
        console.log("Error fetching news:", error)
        return []
    }
}

export default getNews