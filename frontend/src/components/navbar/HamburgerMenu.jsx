import React from "react";

import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import DiscordLogin from "./DiscordLogin";

export default function HamburgerMenu({pages}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const theme = useTheme();
  const location = useLocation();

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        ml: "auto"
      }}
    >
      <IconButton
        size="large"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" }
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography
              textAlign="center"
              color={
                location.pathname === `/${page.toLowerCase()}`
                ? theme.palette.primary.main
                : theme.palette.text.primary
              }
              >
              {page}
            </Typography>
          </MenuItem>
        ))}
        
        <DiscordLogin />
      </Menu>
    </Box>
  )
}