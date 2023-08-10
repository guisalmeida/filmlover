import User from '../../assets/user.jpeg'
import Search from '../searchBar/searchBar'
import Logo from '/logo.svg'

import * as Styled from './header.styled.js'

export default function Header() {
  return (
    <Styled.Header>
      <img src={Logo} className="header-logo" alt="Filmlover logo" />
      <Search />
      <Styled.UserContainer>
        <p>Guisalmeida</p>
        <img src={User} className="user-photo" alt="User photo" />
      </Styled.UserContainer>
    </Styled.Header>
  )
}
