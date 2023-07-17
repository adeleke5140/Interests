import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Button, IconButton, Link, ThemeProvider, Typography, } from "@mui/material";
import { useColorMode } from "../contexts/color-mode/index";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { headerTheme, iconTheme } from "contexts/theme";

const Welcome = () => {
  const { mode, setMode } = useColorMode()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '1.25rem', maxWidth: '40rem', margin: '0 auto' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <ThemeProvider theme={iconTheme}>
          <Typography sx={{
            padding: '0.5rem',
            fontWeight: '700',
            color: mode === 'light' ? '#000' : '#fff',
          }}>I</Typography>
        </ThemeProvider>
        <IconButton onClick={setMode}>
          {mode === 'light' ? <DarkModeIcon color="primary" /> : <WbSunnyIcon color="primary" />}
        </IconButton>
      </Stack>
      <Box sx={{ height: '80vh', textAlign: 'center', display: 'flex', flexDirection: 'column', aligItems: 'center', justifyContent: 'center' }}>
        <ThemeProvider theme={headerTheme}>
          <Typography variant="h3" sx={{
            fontWeight: '700', fontSize: {
              lg: '4rem'
            }
          }}>Interests</Typography>
        </ThemeProvider>
        <Typography paragraph={true} sx={{
          fontSize: '1rem', maxWidth: {
            lg: '400px'
          },
          margin: {
            lg: '0 auto'
          }
        }}>
          Never forget any interests you indulge in.
          Track that favorite book, movie, anime or activity you did at any point in time.
        </Typography>
        <Button href="/register" sx={{
          padding: {
            lg: '1rem 1.5rem'
          }, fontSize: {
            lg: '1.3rem'
          }, marginTop: {
            lg: '2rem'
          }, fontFamily: 'DM Sans', borderRadius: '8px'
        }} variant="contained">Start Tracking</Button>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography>© No rights reserved - <a
          target="_blank"
          rel="noopener noreferrer"
          href='https://github.com/adeleke5140'
          style={{
            color: '#5baffa'
          }}>
          adeleke5140
        </a>
        </Typography>
      </Box>
    </Box >)
}

export { Welcome };
