import { Box, Button, Divider, Stack, ThemeProvider, Typography } from "@mui/material"
import { useGetIdentity, useLogout } from "@refinedev/core"
import { useColorMode } from "contexts/color-mode"
import { headerTheme } from "contexts/theme"

import type { IUser } from "pages/home"

const UserProfile = () => {
  const { mode } = useColorMode()
  const { mutate: logout } = useLogout()
  const { data: user } = useGetIdentity<IUser>()
  return (
    <Box sx={{ paddingTop: '1em', paddingLeft: '1em', paddingRight: '1em' }}>
      <ThemeProvider theme={headerTheme}>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: '600', mb: 2 }}>
          Profile
        </Typography>
      </ThemeProvider>
      <Stack spacing={2}>
        <Typography>Email: {user?.email}</Typography>
        <Divider light={true} sx={{
          borderColor: `${mode === 'dark' ? "#5baffa" : "rgba(0, 0, 0, 0.6)"}`,
        }} />
        <Stack alignItems="flex-end">
          <Button onClick={() => logout()} variant="contained" color="error">Log out</Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export { UserProfile }
