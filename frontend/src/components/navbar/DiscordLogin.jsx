import React, { useContext } from "react";

import {
  Button,
  Box,
} from "@mui/material";
import { UserContext } from "../UserContext";
import DiscordIcon from "../DiscordIcon";
import LoggedInMenu from "./DIscordLogin/LoggedInMenu";

const CLIENT_ID = process.env.REACT_APP_DISCORD_CLIENT_ID;
const FRONTEND_REDIRECT = process.env.REACT_APP_FRONTEND_REDIRECT;

export default function NavbarDiscordLogin() {
  const { user } = useContext(UserContext);

  if (!CLIENT_ID || !FRONTEND_REDIRECT) {
    return null;
  }

  const handleLogin = () => {
    const OAUTH_URL = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
      FRONTEND_REDIRECT
    )}&response_type=code&scope=identify`;
    window.location.href = OAUTH_URL;
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {!user ? (
        <Button
          color="discord"
          onClick={handleLogin}
          sx={{
            borderRadius: {
              xs: 0,
              md: 0.5
            },
            ml: { xs: 0, md: 2.5}
          }}
          variant="contained"
        >
          <DiscordIcon size={24} />&nbsp;
          Login with Discord
        </Button>
      ) : (
        <LoggedInMenu />
      )}
    </Box>
  );
}