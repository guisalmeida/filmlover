import { useSelector } from 'react-redux'
import MoviesGrid from '../../components/moviesGrid/moviesGrid'

export default function WallOfShame() {
  const dislikedMovies = useSelector((state) => state.movies.disliked)

  return (
    <MoviesGrid
      movies={dislikedMovies}
      title='Wall of Shame'
    />
  )
}
