import { Refine, Authenticated } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { ErrorComponent, RefineSnackbarProvider, AuthPage } from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier
} from "@refinedev/react-router-v6";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ColorModeContextProvider } from "./contexts/color-mode";

// import { MuiInferencer } from '@refinedev/inferencer/mui'
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./contexts/theme";
import { dataProvider, liveProvider } from './providers/supabase';

import { notificationProvider } from "./notification";
import { authProvider } from "./providers/supabase/authProvider";
import { supabaseClient } from "./providers/supabase/client";

import { Index } from "./pages/index";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from "@mui/x-date-pickers";
import HomePage from "pages/home";
import ProfilePage from "pages/profile";
import InterestsPage from "pages/interests";
import { Layout } from "components/layout";

import routerProvider, {
  CatchAllNavigate,
  NavigateToResource
} from '@refinedev/react-router-v6'
import { Header } from "components";
import { Box, Typography } from "@mui/material";
function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <ThemeProvider theme={theme}>
                <Refine
                  authProvider={authProvider}
                  notificationProvider={notificationProvider}
                  routerProvider={routerBindings}
                  dataProvider={dataProvider(supabaseClient)}
                  liveProvider={liveProvider(supabaseClient)}
                  options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                  }}
                  resources={[
                    {
                      name: 'interests',
                      list: '/interests',
                      create: '/create',
                      show: '/profile'
                    }
                  ]}
                >

                  <Routes>
                    <Route index element={<Index />} />
                    <Route element={(
                      <Authenticated redirectOnFail="/login">
                        <Layout />
                      </Authenticated>
                    )}
                    >
                      <Route path="/create" element={<HomePage />} />
                      <Route path="/interests" element={<InterestsPage />} />
                      <Route path="/profile" element={<ProfilePage />} />
                    </Route>


                    <Route element={
                      <Authenticated fallback={<Outlet />}>
                        <NavigateToResource resource="interests" />
                      </Authenticated>
                    }>
                      <Route
                        path="/login"
                        element={
                          <div style={{
                            marginTop: '-4rem'
                          }}>
                            <Header />
                            <AuthPage
                              title={
                                <h3 style={{
                                  color: '#5baffa',
                                  fontFamily: 'Raleway Variable',
                                  marginBottom: 0,

                                }}>Interests</h3>}
                              type="login"
                            />
                            <Box sx={{ textAlign: 'center', mt: -4 }}>
                              <Typography>© No rights reserved -
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href='https://github.com/adeleke5140'
                                  style={{
                                    color: '#5baffa'
                                  }}>
                                  adeleke5140
                                </a></Typography>
                            </Box>
                          </div>
                        }
                      />
                      <Route
                        path="/register"
                        element={
                          <div style={{
                            marginTop: '-4em'
                          }}>
                            <Header />
                            <AuthPage title={
                              <h3 style={{
                                color: '#5baffa',
                                fontFamily: 'Raleway Variable',
                                marginBottom: 0
                              }}>Interests</h3>} type="register" />
                            <Box sx={{ textAlign: 'center', mt: -4 }}>
                              <Typography>© No rights reserved -
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href='https://github.com/adeleke5140'
                                  style={{
                                    color: '#5baffa'
                                  }}>
                                  adeleke5140
                                </a></Typography>
                            </Box>
                          </div>
                        }
                      />
                    </Route>
                    <Route
                      path="/forgot-password"
                      element={
                        <AuthPage title={
                          <h3 style={{
                            color: '#5baffa',
                            fontFamily: 'Raleway Variable',
                            marginBottom: 0
                          }}>Interests</h3>} type="forgotPassword" />}
                    />

                    <Route path="*" element={<ErrorComponent />} />
                  </Routes>

                  <RefineKbar />
                  <UnsavedChangesNotifier />
                  <DocumentTitleHandler />
                  <Toaster />
                </Refine>
              </ThemeProvider>
            </LocalizationProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter >
  );
}

export default App;
