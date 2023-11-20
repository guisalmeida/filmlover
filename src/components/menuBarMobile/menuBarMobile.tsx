import React from 'react'
import { NavLink } from 'react-router-dom'
import User from '../../assets/user.jpeg'

import * as Styled from './menuBarMobile.styled'

export default function MenuBarMobile(): React.JSX.Element {
  return (
    <Styled.MenuBarMobile>
      <Styled.MenuBar>
        <NavLink to="/">
          <Styled.HomeIcon />
        </NavLink>
        <NavLink to="/favorites">
          <Styled.StarIcon />
        </NavLink>
        <NavLink to="/wallofshame">
          <Styled.DislikeIcon />
        </NavLink>

        <img src={User} className="user" alt="User photo" />
      </Styled.MenuBar>
    </Styled.MenuBarMobile>
  )
}
