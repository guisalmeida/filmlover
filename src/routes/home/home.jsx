import { useSelector } from 'react-redux'
import MoviesGrid from '../../components/moviesGrid/moviesGrid'

export default function Home() {
  const allMovies = useSelector((state) => state.movies.all)

  return (
    <MoviesGrid movies={allMovies} />
  )
}
