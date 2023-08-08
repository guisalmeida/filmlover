import { Link } from 'react-router-dom'
import User from '../../assets/user.jpeg'

import * as Styled from './menuBarMobile.styled.js'

export default function MenuBarMobile() {
  return (
    <Styled.MenuBarMobile>
      <Styled.MenuBar>
        <Link to="/">
          <Styled.HomeIcon />
        </Link>
        <Link to="/favorites">
          <Styled.StarIcon />
        </Link>
        <Link to="/wallofshame">
          <Styled.DislikeIcon />
        </Link>

        <img src={User} className="user" alt="User photo" />
      </Styled.MenuBar>
    </Styled.MenuBarMobile>
  )
}
