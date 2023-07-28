import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import MovieCard from './components/movieCard/movieCard'

export default function App() {
  const API_URL = 'https://api.themoviedb.org/3'
  const IMAGE_URL = 'http://image.tmdb.org/t/p/w342'
  const API_KEY = import.meta.env.VITE_API_KEY

  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    const { data } = await axios.get(`${API_URL}/discover/movie?`, {
      params: {
        api_key: API_KEY
      }
    })

    setMovies(data.results)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <>
      <Header />
      <div className='container'>
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            image={IMAGE_URL + movie.poster_path}
          />
        ))}
      </div>
      <Footer />
    </>
  )
}
