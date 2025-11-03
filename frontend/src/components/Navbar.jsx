import React from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import NavbarDiscordLogin from "./NavbarDiscordLogin";
import { Link } from "@mui/material";

const pages = ["Home", "Survey", "Results", "Map", "Pins"];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        borderBottom: `1px solid ${theme.palette.divider}`,
        py: 1,
        zIndex: 1300,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            alignItems: "flex-end",
            gap: 3
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            sx={{
              alignItems: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            <img
              src="/Classic_Plus_Color_and_Cog.webp"
              alt="Logo"
              style={{
                height: "4rem"
              }}
            />
          </Link>

          {/* Hamburger menu for small screens */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
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
              sx={{ display: { xs: "block", md: "none" } }}
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
            </Menu>
          </Box>

          {/* Links for medium+ screens */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              marginLeft: "auto"
            }}
          >
            {pages.map((page) => {
              const path = page.toLowerCase();
              const isActive = location.pathname === `/${path}`;
              return (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  href={`/${path}`}
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: isActive ? "bold" : "normal",
                    py: 1.75,
                    px: 2.5,
                    marginBottom: "calc(-0.5rem - 1px)",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: isActive ? "100%" : 0,
                      height: "2px",
                      bgcolor: theme.palette.primary.main,
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {page}
                </Button>
              );
            })}
          </Box>

          {/* Discord login/avatar */}
          <Box sx={{ flexGrow: 0 }}>
            <NavbarDiscordLogin />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
