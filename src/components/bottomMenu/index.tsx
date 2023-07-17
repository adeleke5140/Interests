import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import InterestsIcon from '@mui/icons-material/Interests';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";

export const BottomMenu = () => {
  const [value, setValue] = useState('home')
  const navigate = useNavigate()
  useEffect(() => {
    if (value === "home") navigate('/create')
    if (value === 'interest') navigate('/interests')
    if (value === 'profile') navigate('/profile')
  }, [value, navigate])
  return (
    <Box sx={{ pb: 7 }}>
      <Paper sx={{ position: 'fixed', left: 0, right: 0, bottom: 0 }} elevation={3}>
        <BottomNavigation showLabels value={value} onChange={(event, newValue) => {
          setValue(newValue)
        }}>
          <BottomNavigationAction value="home" color="inherit" label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction value="interest" label="Interest" icon={<InterestsIcon />} />
          <BottomNavigationAction value="profile" label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
    </Box >
  )
}
