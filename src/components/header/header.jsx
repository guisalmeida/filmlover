import Logo from '../../assets/filmlover.svg'
import User from '../../assets/user.jpeg'
import * as Styled from './header.styled.js'

export default function header() {
  return (
    <Styled.Header>
        <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Logo} className="logo" alt="Filmlover logo" />
        </a>

        <img src={User} className="user" alt="User photo" />
    </Styled.Header>
  )
}
