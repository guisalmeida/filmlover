import { useContext } from 'react';
import MoviesGrid from '../../components/moviesGrid/moviesGrid';
import { MoviesContext } from '../../context/moviesContext';

export default function Favorites(): React.JSX.Element {
  const { likedMoviesList } = useContext(MoviesContext);

  return <MoviesGrid movies={likedMoviesList} title="Favorites" />;
}
