import { NotificationProvider, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { ErrorComponent, RefineSnackbarProvider } from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier
} from "@refinedev/react-router-v6";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ColorModeContextProvider } from "./contexts/color-mode";

// import { MuiInferencer } from '@refinedev/inferencer/mui'
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./contexts/theme";
import { dataProvider, liveProvider } from './providers/supabase';

import { notificationProvider } from "./notification";
import { authProvider } from "./providers/supabase/authProvider";
import { supabaseClient } from "./providers/supabase/client";
import { Index } from "./pages/index";
import { Home } from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
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

            >
              <ThemeProvider theme={theme}>
                <Routes>
                  <Route index element={<Index />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="*" element={<ErrorComponent />} />
                </Routes>
              </ThemeProvider>
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
              <Toaster />
            </Refine>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
