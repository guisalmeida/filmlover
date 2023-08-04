import { useSelector } from 'react-redux'
import MovieCarousel from '../../components/movieCarousel/movieCarousel'

export default function Home() {
  const allMovies = useSelector((state) => state.movies.all)
  return (
    <MovieCarousel movies={allMovies} />
  )
}
