import { MouseEvent } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TMovie, setSearchMovies } from '../../redux/reducers/moviesReducer';
import { MOVIE_GENRES, fetchMovies } from '../../utils/api';
import GenreBox from '../genreBox/genreBox';

import Logo from '../../assets/logo_h.svg';
import * as Styled from './sideBar.styled';

export default function SideBar(): React.JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchMovies = async (e: MouseEvent, movie: TMovie) => {
    e.preventDefault();
    const searchedMovies = await fetchMovies(undefined, undefined, movie.id);
    if (searchedMovies) {
      dispatch(setSearchMovies(searchedMovies));
      navigate('/search', { state: { title: movie.name } });
    }
  };

  return (
    <Styled.SideBar>
      <Link to="/">
        <img src={Logo} className="logo" alt="Filmlover logo" />
      </Link>

      <Styled.MenuContainer>
        <NavLink to="/">
          <Styled.HomeIcon />
          <p>Home</p>
        </NavLink>
        <NavLink to="/favorites">
          <Styled.StarIcon />
          <p>Favorites</p>
        </NavLink>
        <NavLink to="/wallofshame">
          <Styled.DislikeIcon />
          <p>Wall of shame</p>
        </NavLink>
      </Styled.MenuContainer>

      <h3 className="genre-title">Browse by category</h3>

      <Styled.GenreContainer>
        {MOVIE_GENRES.map((movie) => (
          <button
            key={movie.id}
            className="genre-button"
            type="button"
            title={`Browse by ${movie.name}`}
            onClick={(e) => searchMovies(e, movie as TMovie)}
          >
            <GenreBox>{movie.name}</GenreBox>
          </button>
        ))}
      </Styled.GenreContainer>
    </Styled.SideBar>
  );
}
