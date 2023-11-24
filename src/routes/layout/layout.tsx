import { Outlet } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';
import Header from '../../components/header/header';
import MenuBarMobile from '../../components/menuBarMobile/menuBarMobile';
import SideBar from '../../components/sideBar/sideBar';

export default function Layout(): React.JSX.Element {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
        closeButton={false}
        transition={Flip}
      />
      <Header />
      <SideBar />
      <Outlet />
      <MenuBarMobile />
    </>
  );
}
