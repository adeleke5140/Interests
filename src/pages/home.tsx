import { styled, Box, Button, Chip, Divider, FormControl, InputLabel, MenuItem, Select, Stack, ThemeProvider, Typography, SelectChangeEvent, InputBase, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from "@mui/material"
import { BottomMenu, Header } from "components"
import { headerTheme } from "contexts/theme"
import InterestsIcon from '@mui/icons-material/Interests';
import { useState } from "react";
import { useColorMode } from "contexts/color-mode";



const Home = () => {
  const [interest, setInterest] = useState('')
  const [category, setCategory] = useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory((event.target as HTMLInputElement).value);
  };
  const { mode } = useColorMode()
  return (
    <>
      <Header />

      <Box sx={{ paddingTop: '1em', paddingLeft: '1em', paddingRight: '1em' }}>
        <ThemeProvider theme={headerTheme}>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: '600' }}>
            Hi, Kehinde
          </Typography>
        </ThemeProvider>
        <Stack spacing={2}>
          <Box>
            Any spectacular <Chip color="primary" icon={<InterestsIcon />} size="small" label="interests" /> today?
          </Box>
          <Divider variant="middle" />
          <Typography fontSize={18} fontWeight={600}>
            Track it:
          </Typography>
        </Stack>

        <Stack sx={{ paddingTop: 2 }} spacing={3}>
          <Box>
            <Typography sx={{ mb: 2 }}>
              What did you do?
            </Typography>
            <FormControl sx={{
              '& .MuiFormLabel-root.MuiInputLabel-root': {
                color: `${mode === 'dark' ? "#5baffa" : "rgba(0, 0, 0, 0.6)"}`
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: `${mode === 'dark' ? "#5baffa" : "rgba(0, 0, 0, 0.23)"}`
              },
              '& .MuiButtonBase-root.MuiMenuItem-root': {
                color: '#000'
              }
            }} fullWidth>
              <InputLabel id="demo-simple-select-label">Activity</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={interest}
                label="activity"
                onChange={(e) => setInterest(e.target.value as string)}
                sx={{
                  '& .MuiSelect-root': {
                    color: "#5baffa"
                  }
                }}
              >
                <MenuItem value="read">Read</MenuItem>
                <MenuItem value="watched">Watched</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Typography sx={{ mb: 2 }}>
              Name
            </Typography>
            <TextField sx={{
              '& .MuiOutlinedInput-notchedOutline ': {
                borderColor: `${mode === 'dark' ? "#5baffa" : "rgba(0, 0, 0, 0.23)"}`,
                color: '#5baffa'
              },
              '& .MuiInputLabel-formControl': {
                color: `${mode === 'dark' ? "#5baffa" : "rgba(0, 0, 0, 0.6)"}`
              }
            }} fullWidth id="outlined-basic" label="name" variant="outlined" />
          </Box>
          <Box>
            <FormControl sx={{
              '& .MuiFormLabel-root': {
                color: `${mode === 'dark' ? "#fff" : "rgba(0, 0, 0, 0.6)"}`
              },
              '& .MuiFormLabel-colorPrimary': {
                color: `${mode === 'dark' ? "#fff" : "#000000DE"}`
              },

            }}>
              <FormLabel id="demo-row-radio-buttons-group-label">Category</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={category}
                onChange={handleChange}
              >
                <FormControlLabel value="books" control={<Radio sx={{
                  color: `${mode === 'dark' ? "#fff" : null}`
                }} />} label="Books" />
                <FormControlLabel value="movies" control={<Radio sx={{
                  color: `${mode === 'dark' ? "#fff" : null}`
                }} />} label="Movies" />
                <FormControlLabel value="anime" control={<Radio sx={{
                  color: `${mode === 'dark' ? "#fff" : null}`
                }} />} label="Anime" />
                <FormControlLabel value="tvSeries" control={<Radio sx={{
                  color: `${mode === 'dark' ? "#fff" : null}`
                }} />} label="TvSeries" />
                <FormControlLabel value="article" control={<Radio sx={{
                  color: `${mode === 'dark' ? "#fff" : null}`
                }} />} label="Article" />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box>
            Date
          </Box>
          <Button variant="contained">Save</Button>
        </Stack>
      </Box >
      <BottomMenu />
    </>
  )
}

export { Home }
