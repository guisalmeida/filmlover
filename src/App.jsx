import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setMovies } from './redux/actions/moviesAction'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import MovieCarousel from './components/movieCarousel/movieCarousel'
import MoviesGrid from './components/moviesGrid/moviesGrid'

import { fetchMovies } from './utils/api'

export default function App() {
  const dispatch = useDispatch()
  const allMovies = useSelector((state) => state.movies.all)

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies()
      dispatch(setMovies(movies))
    }
    getMovies()
  }, [])

  return (
    <>
      <Header />
      <MoviesGrid movies={allMovies} />

      {/* <MovieCarousel
        movies={movies}
      /> */}
      <Footer />
    </>
  )
}
