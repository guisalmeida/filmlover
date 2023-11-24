import { Link } from 'react-router-dom';
import User from '../../assets/user.jpeg';
import Search from '../searchBar/searchBar';
// eslint-disable-next-line import/no-absolute-path
import Logo from '/logo.svg?url';

import { HeaderContainer, UserContainer } from './header.styled';

export default function Header(): React.JSX.Element {
  return (
    <HeaderContainer>
      <img src={Logo} className="header-logo" alt="Filmlover logo" />
      <Search />
      <UserContainer>
        <Link to="https://www.guisalmeida.com/" target="_blank">
          Guisalmeida
        </Link>
        <Link to="https://www.guisalmeida.com/" target="_blank">
          <img src={User} className="user-photo" alt="User profile" />
        </Link>
      </UserContainer>
    </HeaderContainer>
  );
}
