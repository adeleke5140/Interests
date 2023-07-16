import { ThemeProvider } from '@emotion/react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useGetIdentity } from "@refinedev/core";
import { RefineThemedLayoutV2HeaderProps } from "@refinedev/mui";
import { iconTheme } from 'contexts/theme';
import React from "react";
import { useColorMode } from "../../contexts/color-mode";

type IUser = {
  id: number;
  name: string;
  avatar: string;
};

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({
  isSticky = true,
}) => {
  const { mode, setMode } = useColorMode();

  // const { data: user } = useGetIdentity<IUser>();

  return (
    <AppBar position={isSticky ? "sticky" : "relative"}>
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          <ThemeProvider theme={iconTheme}>
            <Typography sx={{
              padding: '0.5rem',
              fontWeight: '700',
              color: mode === 'light' ? '#000' : '#fff',
            }}>I</Typography>
          </ThemeProvider>
          <Stack
            direction="row"
            width="100%"
            justifyContent="flex-end"
            alignItems="center"
          >
            <IconButton
              color="inherit"
              onClick={() => {
                setMode();
              }}
            >
              {mode === "dark" ? <WbSunnyIcon /> : <DarkModeIcon />}
            </IconButton>

            {/* {(user?.avatar || user?.name) && (
              <Stack
                direction="row"
                gap="16px"
                alignItems="center"
                justifyContent="center"
              >
                {user?.name && (
                  <Typography
                    sx={{
                      display: {
                        xs: "none",
                        sm: "inline-block",
                      },
                    }}
                    variant="subtitle2"
                  >
                    {user?.name}
                  </Typography>
                )}
                <Avatar src={user?.avatar} alt={user?.name} />
              </Stack>
            )} */}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
