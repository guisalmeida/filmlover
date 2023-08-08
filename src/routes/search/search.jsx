import { useSelector } from 'react-redux'
import MoviesGrid from '../../components/moviesGrid/moviesGrid'

export default function Search() {
  const searchResultMovies = useSelector((state) => state.movies.searchResult)

  return (
    <MoviesGrid
      movies={searchResultMovies}
      title='Search results'
    />
  )
}
