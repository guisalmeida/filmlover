import { useContext } from 'react';
import MoviesGrid from '../../components/moviesGrid/moviesGrid';
import { MoviesContext } from '../../context/moviesContext';

export default function WallOfShame(): React.JSX.Element {
  const {
    state: { dislikedMoviesList },
  } = useContext(MoviesContext);

  return <MoviesGrid movies={dislikedMoviesList} title="Wall of Shame" />;
}
