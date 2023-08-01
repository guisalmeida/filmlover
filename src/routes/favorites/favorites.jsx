import { useSelector } from 'react-redux'
import MoviesGrid from '../../components/moviesGrid/moviesGrid'

export default function Favorites() {
  const favoriteMovies = useSelector((state) => state.movies.liked)

  return (
    <MoviesGrid movies={favoriteMovies} />
  )
}
