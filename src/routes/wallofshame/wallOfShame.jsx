import { useSelector } from 'react-redux'
import MoviesGrid from '../../components/moviesGrid/moviesGrid'

export default function WallOfShame() {
  const shamedMovies = useSelector((state) => state.movies.disliked)

  return (
    <MoviesGrid movies={shamedMovies} />
  )
}
