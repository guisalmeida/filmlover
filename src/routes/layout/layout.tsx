import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header';
import MenuBarMobile from '../../components/menuBarMobile/menuBarMobile';
import SideBar from '../../components/sideBar/sideBar';

export default function Layout(): React.JSX.Element {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
      <MenuBarMobile />
    </>
  );
}
