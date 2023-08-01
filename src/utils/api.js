import axios from 'axios'

export const API_URL = 'https://api.themoviedb.org/3'
export const API_KEY = import.meta.env.VITE_API_KEY

export const fetchMovies = async (searchKey = "", page = 1) => {
  const type = searchKey ? "search" : "discover"
  const { data } = await axios.get(`${API_URL}/${type}/movie`, {
    params: {
      api_key: API_KEY,
      query: searchKey,
      page
    }
  })

  return data.results
}