import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Button, IconButton, ThemeProvider, Typography, } from "@mui/material";
import { useColorMode } from "../contexts/color-mode/index";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { headerTheme, iconTheme } from "contexts/theme";

const Welcome = () => {
  const { mode, setMode } = useColorMode()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '1.25rem' }}>
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
          <Typography variant="h3" sx={{ fontWeight: '700' }}>Interests</Typography>
        </ThemeProvider>
        <Typography paragraph={true} sx={{ fontSize: '1rem' }}>
          Never forget any interests you indulge in.
          Track that favorite book, movie, anime or activity you did at any point in time.
        </Typography>
        <Button sx={{ fontFamily: 'DM Sans', borderRadius: '8px' }} variant="contained">Start Tracking</Button>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography>© No rights reserved - adeleke5140</Typography>
      </Box>
    </Box >)
}

export { Welcome };
