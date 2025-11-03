import React from "react";

import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import DiscordIcon from "./DiscordIcon";

export default function LandingPage() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        alignItems: {xs: "flex-start", md: "center"},
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Typography
            as="h1"
            variant="h3"
          >
            Leave your mark on&nbsp;
            <Typography
              as="span"
              sx={{color: "text.wowGold",}}
              variant="wowGold"
            >Classic+</Typography>
          </Typography>
          <Typography
            as="p"
            variant="h6"
            sx={{lineHeight: 2}}
          >
            We've partnered with creators like Joardee in order to better understand the
            community's vision for an ever-evolving World of Warcraft Classic+ experience.
            Share your thoughts and ideas in our in-depth survey and discover what others
            are saying on our forums.
          </Typography>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4
            }}
          >
            <Button
              href="/survey"
              sx={{
                fontSize: "1.5rem",
                whiteSpace: "nowrap"
              }}
              variant="outlined"
            >
              Take the Survey
            </Button>

            <Divider
              flexItem
              sx={{
                borderColor: "text.primary",
                display: { xs: "none", md: "block" },
                my: -1
              }}
              orientation="vertical"
            />

            <Button
              href="/survey"
              sx={{fontSize: "1.5rem"}}
              variant="text"
            >
              Forums
            </Button>
            <Button
              color="discord"
              href="https://discord.gg/uUD65Kjrmw"
              sx={{
                fontSize: "1.5rem",
                whiteSpace: "nowrap"
              }}
              variant="contained"
            >
              <DiscordIcon size="1.5rem"/>&nbsp;
              Connect
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: {xs: "center", lg: "flex-end"},
          }}
        >
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            frameborder="0"
            height="315"
            referrerpolicy="strict-origin-when-cross-origin"
            src="https://www.youtube.com/embed/vu1SOd7oHfA?si=1ntBOoLGudfjzJYN"
            title="YouTube video player"
            width="560"
          />
        </Box>
      </Box>
    </Container>
  );
}
