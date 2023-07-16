import { createTheme, ThemeOptions } from '@mui/material/styles';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import '@fontsource/ibm-plex-mono/600.css';
import '@fontsource/ibm-plex-mono/700.css';

// Supports weights 100-900
import '@fontsource-variable/raleway';

// Supports weights 400-700
import '@fontsource-variable/lora';

export const theme = createTheme({
  typography: {
    fontFamily: 'DM Sans',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      main: '#5baffa'
    },
    text: {
      primary: '#5baffa'
    }
  }
})

export const headerTheme = createTheme({
  typography: {
    fontFamily: 'Raleway Variable',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  }
})

export const iconTheme = createTheme({
  typography: {
    fontFamily: 'IBM Plex Mono',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  }
})
