import { BottomMenu, Header } from "components"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <BottomMenu />
    </>
  )
}

export { Layout }
