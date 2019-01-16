import axios from 'axios'

const API_KEY = 'a2b8555f889e41d48ce305a492867a90' // ToDo move somewhere

export function getNews() {
  const url = `https://newsapi.org/v2/everything?q=bitcoin&from=2018-12-20&sortBy=publishedAt&apiKey=${API_KEY}`
  return axios.get(url)
}
