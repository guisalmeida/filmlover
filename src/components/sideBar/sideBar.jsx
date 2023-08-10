import { Link } from 'react-router-dom'

import * as Styled from './sideBar.styled'
import Logo from '../../assets/logo_h.svg'

export default function SideBar() {
  return (
    <Styled.SideBar>
      <Link to="/">
        <img src={Logo} className="logo" alt="Filmlover logo" />
      </Link>

      <Styled.MenuContainer>
        <Link to="/"><Styled.HomeIcon /><p>Home</p></Link>
        <Link to="/favorites"><Styled.StarIcon /><p>Favorites</p></Link>
        <Link to="/wallofshame"><Styled.DislikeIcon /><p>Wall of shame</p></Link>
      </Styled.MenuContainer>

    </Styled.SideBar>
  )
}
