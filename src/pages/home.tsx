import { Box, Button, Chip, Divider, FormControl, InputLabel, MenuItem, Select, Stack, ThemeProvider, Typography, SelectChangeEvent, InputBase, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from "@mui/material"

import { headerTheme } from "contexts/theme"
import InterestsIcon from '@mui/icons-material/Interests';
import { useState } from "react";
import { useColorMode } from "contexts/color-mode";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { useCreate, useGetIdentity } from "@refinedev/core";

export type IUser = {
  id: number;
  name: string;
  avatar: string;
  email: string;
};

const HomePage = () => {
  const [activity, setActivity] = useState('')
  const [category, setCategory] = useState('');
  const [name, setName] = useState('')
  const [date, setDate] = useState<Dayjs | null>(null)
  const { mutate: create } = useCreate()

  const { data: user } = useGetIdentity<IUser>()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory((event.target as HTMLInputElement).value);
  };

  const saveInterest = () => {
    if (activity && category && name && date) {
      create({
        resource: 'interests',
        values: {
          userId: user?.id,
          activity,
          category,
          name,
          date
        },
        errorNotification: (data, values, resource) => {
          return {
            message: `Could not save Interest, try again`,
            description: "Error",
            type: "error",
          };
        },
        successNotification: (data, values, resource) => {
          return {
            message: `Interest Saved`,
            description: "Success with no errors",
            type: "success",
          };
        }
      }, {
        onSuccess: () => {
          setActivity('')
          setName('')
          setCategory('')
          setDate(null)
        }
      })
    }

  }

  const { mode } = useColorMode()
  return (
    <>
      <Box sx={{ paddingTop: '1em', paddingLeft: '1em', paddingRight: '1em' }}>
        <ThemeProvider theme={headerTheme}>
          <Typography sx={{
            fontSize: {
              xs: '1.2rem',
              sm: '1.5rem'
            }, fontWeight: '600',
            mb: 1
          }}>
            Hi, {user?.name}
          </Typography>
        </ThemeProvider>
        <Stack spacing={2}>
          <Typography>
            Any spectacular <Chip color="primary" icon={<InterestsIcon />} size="small" label="activities" /> today?
          </Typography>
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
                value={activity}
                label="activity"
                onChange={(e) => setActivity(e.target.value as string)}
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
            }} value={name} onChange={(e) => setName(e.target.value)} fullWidth id="outlined-basic" label="name" variant="outlined" />
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
            <Typography sx={{ mb: 2 }}>Date: </Typography>
            <DatePicker sx={{
              width: "100%",
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: `${mode === 'dark' ? "#5baffa" : "rgba(0, 0, 0, 0.23)"}`,
              }
            }} value={date} onChange={
              (newDate) => setDate(newDate)
            } />
          </Box>
          <Button sx={{
            '&.MuiButtonBase-root.Mui-disabled.Mui-disabled': {
              backgroundColor: `${mode === 'dark' ? '#5baffa' : 'rgba(0, 0, 0, 0.12)'}`
            }
          }} disabled={!activity || !category || !date || !name} onClick={saveInterest} variant="contained" disableElevation>Save</Button>
        </Stack>
      </Box >
    </>
  )
}

export default HomePage
