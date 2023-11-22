import { useSelector } from 'react-redux';
import { selectDislikedMovies } from '../../redux/selectors/moviesSelector';
import MoviesGrid from '../../components/moviesGrid/moviesGrid';

export default function WallOfShame(): React.JSX.Element {
  const dislikedMovies = useSelector(selectDislikedMovies);

  return <MoviesGrid movies={dislikedMovies} title="Wall of Shame" />;
}
