import React from "react";

import {
  Button,
  Box,
  Avatar,
  Typography,
  useTheme,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import { UserContext } from "../../UserContext";
import LogoutLink from "../LogoutLink";

export default function LoggedInMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const anchorElRef = React.useRef(null);

  const theme = useTheme();
  const { user } = React.useContext(UserContext);

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        gap: 2
      }}
    >
      <Button
        endIcon={<KeyboardArrowDown sx={{display: {xs: "none", md: "block"}}} />}
        onClick={() => setIsOpen(!isOpen)}
        ref={anchorElRef}
        sx={{
          color: "#FFFFFF",
          mb: -1,
          px: {xs: 2, md: 2.5}
        }}
        variant="text"
      >
        <Avatar
          src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
          alt="avatar"
          sx={{
            backgroundColor: theme.palette.background.paper,
            height: { xs: 32, sm: 40 },
            mr: 1,
            width: { xs: 32, sm: 40 },
          }}
        />
        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem' },
            whiteSpace: "nowrap",
          }}
        >
          {user.username}
          {user.discriminator !== "0" && `#${user.discriminator}`}
        </Typography>
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElRef.current}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        sx={{
          display: { xs: "none", md: "block" }
        }}
      >
        <LogoutLink />
      </Menu>
    </Box>
  )
}