import MovieCard from '../movieCard/movieCard'
import * as Styled from './moviesGrid.styled'

export default function MoviesGrid({ movies }) {
  return (
    <Styled.MoviesGridContainer>
      {movies.length ? movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      )) : <p>Nothing here :(</p>}
    </Styled.MoviesGridContainer>
  )
}
