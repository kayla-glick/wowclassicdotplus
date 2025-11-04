import React from "react";

import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import SurveyPage from "./pages/SurveyPage";
import SurveyResults from "./pages/SurveyResultsPage";
import MapPage from "./pages/MapPage";
import PinsPage from "./pages/PinsPage";
import DiscordCallback from "./components/DiscordCallback"; // we’ll create this

const backendUrl = process.env.REACT_APP_BACKEND_URL

function App() {
  return (
    <>
      <CssBaseline />
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
              py: {xs: 2, md: 4},
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<LandingPage />} />
              <Route path="/survey" element={<SurveyPage backendUrl={backendUrl}/>} />
              <Route path="/results" element={<SurveyResults backendUrl={backendUrl} />} />
              <Route path="/map" element={<MapPage backendUrl={backendUrl} />} />
              <Route path="/pins" element={<PinsPage backendUrl={backendUrl} />} />
              <Route path="/auth/callback" element={<DiscordCallback backendUrl={backendUrl} />} />
            </Routes>
          </Box>
        </Router>
      </Box>
    </>
  );
}

export default App;