import { Link } from 'react-router-dom'

import Logo from '../../assets/logo_h.svg'
import User from '../../assets/user.jpeg'
import Search from '../searchBar/searchBar'

import * as Styled from './header.styled.js'

export default function Header() {
  return (
    <Styled.Header>
      <Link to="/">
        <img src={Logo} className="logo" alt="Filmlover logo" />
      </Link>

      <Search />

      <Link to="/favorites">
        <p>Favorites</p>
      </Link>

      <Link to="/wallofshame">
        <p>Wall of shame</p>
      </Link>

      <img src={User} className="user" alt="User photo" />
    </Styled.Header>
  )
}
