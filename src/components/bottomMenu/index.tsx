import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@mui/material";
import { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import InterestsIcon from '@mui/icons-material/Interests';
import PersonIcon from '@mui/icons-material/Person';

export const BottomMenu = () => {
  const [value, setValue] = useState(0)
  return (
    <Box sx={{ pb: 7 }}>
      <Paper sx={{ position: 'fixed', left: 0, right: 0, bottom: 0 }} elevation={3}>
        <BottomNavigation showLabels value={value} onChange={(event, newValue) => {
          setValue(newValue)
        }}>
          <BottomNavigationAction color="inherit" label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Interest" icon={<InterestsIcon />} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
    </Box >
  )
}
