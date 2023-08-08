import Header from '../../components/header/header'
import MenuBarMobile from '../../components/menuBarMobile/menuBarMobile'
import SideBar from '../../components/sideBar/sideBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
      <MenuBarMobile />
    </>
  )
}
