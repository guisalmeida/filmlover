import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import MovieCarousel from './components/movieCarousel/movieCarousel';
import MoviesGrid from './components/moviesGrid/moviesGrid';
import Search from './components/search/search';

import { SearchIcon } from './components/search/search.styled'

import 'swiper/css';
import 'swiper/css/effect-cards';

const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_API_KEY

export default function App() {
  const [movies, setMovies] = useState([])
  const [searchKey, setSearchKey] = useState("")

  const searchMovies = (e) => {
    e.preventDefault()
    fetchMovies(searchKey)
  }

  const fetchMovies = async (searchKey = "", page = 1) => {
    const type = searchKey ? "search" : "discover"
    const { data } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
        page
      }
    })
    console.log(data)
    setMovies(data.results)
    setSearchKey("")
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <>
      <Header />
      <form onSubmit={searchMovies}>
        <input
          type="text"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />

        <button type="submit">
          <SearchIcon />
        </button>
      </form>
      <MoviesGrid movies={movies} />
      {/* <MovieCarousel
        movies={movies}
      /> */}
      <Footer />
    </>
  )
}
