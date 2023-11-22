import { TMovie } from '../../redux/reducers/moviesReducer';
import MovieCard from '../movieCard/movieCard';
import AlertBox from '../alertBox/alertBox';
import * as Styled from './moviesGrid.styled';

type MoviesGridProps = {
  movies: TMovie[];
  title: string;
};

export default function MoviesGrid({
  movies,
  title,
}: MoviesGridProps): React.JSX.Element {
  return (
    <Styled.MoviesGridContainer>
      <h2 className="grid-title">{title}</h2>
      <Styled.MoviesGrid>
        {movies.length ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <AlertBox show>Nothing here!</AlertBox>
        )}
      </Styled.MoviesGrid>
    </Styled.MoviesGridContainer>
  );
}
