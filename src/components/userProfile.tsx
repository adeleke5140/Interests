import { Box, Button, Divider, Stack, ThemeProvider, Typography } from "@mui/material"
import { useColorMode } from "contexts/color-mode"
import { headerTheme } from "contexts/theme"

const UserProfile = () => {
  const { mode } = useColorMode()
  return (
    <Box sx={{ paddingTop: '1em', paddingLeft: '1em', paddingRight: '1em' }}>
      <ThemeProvider theme={headerTheme}>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: '600', mb: 2 }}>
          Profile
        </Typography>
      </ThemeProvider>
      <Stack spacing={2}>
        <Typography>Name: Kehinde Adeleke</Typography>
        <Typography>Email: adelekekehinde06@gmail.com</Typography>
        <Divider light={true} sx={{
          borderColor: `${mode === 'dark' ? "#5baffa" : "rgba(0, 0, 0, 0.6)"}`,
        }} />
        <Stack alignItems="flex-end">
          <Typography>
            We take your data privacy seriously. If you don&apos;t feel like using the app again,
            you can delete your account.
          </Typography>
          <Button variant="contained" color="error">Delete Account</Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export { UserProfile }
