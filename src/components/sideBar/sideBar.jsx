import { Link } from 'react-router-dom'

import * as Styled from './sideBar.styled'
import Logo from '../../assets/logo_h.svg'

export default function SideBar() {
  return (
    <Styled.SideBar>
      <Link to="/">
        <img src={Logo} className="logo" alt="Filmlover logo" />
      </Link>

      <Link to="/">
        <p>Home</p>
      </Link>

      <Link to="/favorites">
        <p>Favorites</p>
      </Link>

      <Link to="/wallofshame">
        <p>Wall of shame</p>
      </Link>
    </Styled.SideBar>
  )
}
