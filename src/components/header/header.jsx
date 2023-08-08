import User from '../../assets/user.jpeg'
import Search from '../searchBar/searchBar'
import Logo from '/logo.svg'

import * as Styled from './header.styled.js'

export default function Header() {
  return (
    <Styled.Header>
      <img src={Logo} className="header-logo" alt="Filmlover logo" />
      <Search />
      <img src={User} className="user" alt="User photo" />
    </Styled.Header>
  )
}
