import { useSelector } from 'react-redux';
import MoviesGrid from '../../components/moviesGrid/moviesGrid';
import { selectLikedMovies } from '../../redux/selectors/moviesSelector';

export default function Favorites(): React.JSX.Element {
  const favoriteMovies = useSelector(selectLikedMovies);

  return <MoviesGrid movies={favoriteMovies} title="Favorites" />;
}
