import React from "react";

import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import SurveyPage from "./components/survey/SurveyPage";
import SurveyResults from "./components/survey/SurveyResults";
import CustomMap from "./components/map/CustomMap";
import PinsList from "./components/PinList";
import DiscordCallback from "./components/DiscordCallback"; // we’ll create this
import { UserProvider } from "./components/UserContext";

const backendUrl = process.env.REACT_APP_BACKEND_URL

function App() {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none"
          }
        },
      },
    },
    palette: {
      background: {
        default: "#2c3f67"
      },
      discord: {
        contrastText: "#FFFFFF",
        main: "#5865F2",
      },
      divider: "#696969",
      mode: 'dark',
      text: {
        wowGold: "#F8B700",
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <Box
          sx={{
            backgroundImage: "url('/Azeroth_Map_Blueprint.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "fixed",
            inset: 0,
            zIndex: -1
          }}
        />
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Router>
            <Navbar />
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                p: 4,
              }}
            >
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<LandingPage />} />
                <Route path="/survey" element={<SurveyPage backendUrl={backendUrl}/>} />
                <Route path="/results" element={<SurveyResults backendUrl={backendUrl} />} />
                <Route path="/map" element={<CustomMap backendUrl={backendUrl} />} />
                <Route path="/pins" element={<PinsList backendUrl={backendUrl} />} />
                <Route path="/auth/callback" element={<DiscordCallback backendUrl={backendUrl} />} />
              </Routes>
            </Box>
          </Router>
        </Box>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;