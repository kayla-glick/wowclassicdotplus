import React from "react";

import { useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import DiscordLogin from "./navbar/DiscordLogin";
import { Link } from "@mui/material";
import HamburgerMenu from "./navbar/HamburgerMenu";

const pages = ["Home", "Survey", "Results", "Map", "Pins"];

export default function Navbar() {
  const theme = useTheme();
  const location = useLocation();

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
            alignItems: { xs: "center", md: "flex-end" },
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            sx={{
              alignItems: "center",
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
          <HamburgerMenu pages={pages} />

          {/* Links for medium+ screens */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              ml: "auto"
            }}
          >
            {pages.map((page) => {
              const path = page.toLowerCase();
              const isActive = location.pathname === `/${path}`;
              return (
                <Button
                  key={page}
                  href={`/${path}`}
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: isActive ? "bold" : "normal",
                    py: 1.75,
                    px: 2.5,
                    mb: "calc(-0.5rem - 1px)",
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
          <Box
            sx={{
              display: { xs: "none", md: "block" }
            }}
          >
            <DiscordLogin />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
