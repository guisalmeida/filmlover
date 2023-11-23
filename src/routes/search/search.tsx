import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesGrid from '../../components/moviesGrid/moviesGrid';
import { MoviesContext } from '../../context/moviesContext';

export default function Search(): React.JSX.Element {
  const { state } = useLocation();
  const {
    state: { searchResult },
  } = useContext(MoviesContext);

  return (
    <MoviesGrid movies={searchResult} title={`Results for ${state.title}`} />
  );
}
