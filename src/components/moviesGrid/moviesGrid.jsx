import MovieCard from '../movieCard/movieCard'
import * as Styled from './moviesGrid.styled'

export default function MoviesGrid({ movies, title }) {
  return (
    <>
      <Styled.MoviesGridContainer>
        <h2 className='grid-title'>{title}</h2>
        <Styled.MoviesGrid>
          {movies.length ? movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          )) : <p>Nothing here :(</p>}
        </Styled.MoviesGrid>
      </Styled.MoviesGridContainer>
    </>
  )
}
