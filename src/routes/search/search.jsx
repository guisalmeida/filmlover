import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import MoviesGrid from '../../components/moviesGrid/moviesGrid'

export default function Search() {
  const searchResultMovies = useSelector((state) => state.movies.searchResult)
  const { state } = useLocation();

  return (
    <MoviesGrid
      movies={searchResultMovies}
      title={`Results for ${state.title}`}
    />
  )
}
