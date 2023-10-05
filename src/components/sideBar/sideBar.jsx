import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { setSearchMovies } from '../../redux/reducers/moviesReducer'
import { MOVIE_GENRES, fetchMovies } from '../../utils/api'
import GenreBox from '../genreBox/genreBox'

import Logo from '../../assets/logo_h.svg'
import * as Styled from './sideBar.styled'

export default function SideBar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const searchMovies = async (e, movie) => {
    e.preventDefault()
    const searchMovies = await fetchMovies(undefined, undefined, movie.id)
    dispatch(setSearchMovies(searchMovies))
    navigate("/search", { state: { title: movie.name } });
  }

  return (
    <Styled.SideBar>
      <Link to="/">
        <img src={Logo} className="logo" alt="Filmlover logo" />
      </Link>

      <Styled.MenuContainer>
        <NavLink to="/"><Styled.HomeIcon /><p>Home</p></NavLink>
        <NavLink to="/favorites"><Styled.StarIcon /><p>Favorites</p></NavLink>
        <NavLink to="/wallofshame"><Styled.DislikeIcon /><p>Wall of shame</p></NavLink>
      </Styled.MenuContainer>

      <h3 className='genre-title'>Browse by category</h3>

      <Styled.GenreContainer>
        {MOVIE_GENRES.map((movie) => (
          <button
            key={movie.id}
            className='genre-button'
            type="button"
            title={`Browse by ${movie.name}`}
            onClick={(e) => searchMovies(e, movie)}
          >
            <GenreBox>{movie.name}</GenreBox>
          </button>
        ))}
      </Styled.GenreContainer>

    </Styled.SideBar>
  )
}
