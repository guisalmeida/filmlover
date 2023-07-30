import { useEffect, useState } from 'react'
import axios from 'axios'

import 'swiper/css';
import 'swiper/css/effect-cards';

import Header from './components/header/header'
import Footer from './components/footer/footer'
import MovieCarousel from './components/movieCarousel/movieCarousel';
import MovieCard from './components/movieCard/movieCard';

export default function App() {
  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY = import.meta.env.VITE_API_KEY

  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    const { data } = await axios.get(`${API_URL}/discover/movie?`, {
      params: {
        api_key: API_KEY,
        page: 1

      }
    })
    console.log(data)
    setMovies(data.results)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <>
      <Header />
      <MovieCard
        movie={
          {
            poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
            title: 'Barbie',
            vote_average: 8.8
          }
        }
      />
      <MovieCarousel
        movies={movies}
      />
      <Footer />
    </>
  )
}
