import { Box, Container } from "@mui/material"
import { BottomMenu, Header } from "components"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <Box sx={{
      lg: {
        maxWidth: '40rem'
      },
      margin: '0 auto'
    }}>
      <Header />
      <Box sx={{
        maxWidth: '40rem',
        margin: '0 auto'
      }}>
        <Outlet />
      </Box>
      <BottomMenu />
    </Box>
  )
}

export { Layout }
