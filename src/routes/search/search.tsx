import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectSearchResultMovies } from '../../redux/selectors/moviesSelector';
import MoviesGrid from '../../components/moviesGrid/moviesGrid';

export default function Search(): React.JSX.Element {
  const searchResultMovies = useSelector(selectSearchResultMovies);
  const { state } = useLocation();

  return (
    <MoviesGrid
      movies={searchResultMovies}
      title={`Results for ${state.title}`}
    />
  );
}
