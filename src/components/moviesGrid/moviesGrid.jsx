import MovieCard from '../movieCard/movieCard'
import * as styled from './moviesGrid.styled'

export default function MoviesGrid({ movies }) {
  return (
    <styled.MoviesGridContainer>
      {movies.length && movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </styled.MoviesGridContainer>
  )
}
