import User from "../../assets/user.jpeg";
import Search from "../searchBar/searchBar";
import Logo from "/logo.svg";

import { HeaderContainer, UserContainer } from "./header.styled";

export default function Header(): React.JSX.Element {
  return (
    <HeaderContainer>
      <img src={Logo} className="header-logo" alt="Filmlover logo" />
      <Search />
      <UserContainer>
        <p>Guisalmeida</p>
        <img src={User} className="user-photo" alt="User photo" />
      </UserContainer>
    </HeaderContainer>
  );
}
