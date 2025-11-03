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
import LogoutLink from "./LogoutLink";
import { UserContext } from "../UserContext";

export default function HamburgerMenu({pages}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const { user } = React.useContext(UserContext);
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
        slots={{
          list: "div"
        }}
        sx={{
          display: { xs: "block", md: "none" }
        }}
      >
        <MenuItem as="div" divider={true} sx={{p: 0}}>
          <DiscordLogin />
        </MenuItem>
        
        {pages.map((page) => {
          const path = `/${page.toLowerCase()}`;

          return (
            <MenuItem
              as="a"
              href={path}
              key={page}
              selected={location.pathname === path}
            >
            <Typography
              color={
                location.pathname === path
                ? theme.palette.primary.main
                : theme.palette.text.primary
              }
            >
              {page}
            </Typography>
            </MenuItem>
          )
        })}

        {user && <LogoutLink />}
      </Menu>
    </Box>
  )
}