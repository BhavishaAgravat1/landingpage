import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import microsoftLogo from "../../image/microsoft-logo.svg";
import slackLogo from "../../image/slack.png";
import googleLogo from "../../image/google.png";

const Sponsors = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5, mb: 5 }}>
      <Typography variant="h5" gutterBottom>
        Our <span style={{ fontWeight: "bold" }}>sponsors</span>
      </Typography>
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        <Grid item>
          <AppleIcon sx={{ fontSize: 50 }} />
        </Grid>
        <Grid item>
          <Box
            component="img"
            src={microsoftLogo}
            alt="Microsoft Logo"
            sx={{ height: 100 }}
          />
        </Grid>
        <Grid item>
          <Box
            component="img"
            src={slackLogo}
            alt="Slack Logo"
            sx={{ height: 100 }}
          />
        </Grid>
        <Grid item>
          <Box
            component="img"
            src={googleLogo}
            alt="Google Logo"
            sx={{ height: 25 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Sponsors;
