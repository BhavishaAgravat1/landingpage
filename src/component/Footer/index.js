import React from "react";
import { Container, Grid, Typography, Link, Box, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AppleIcon from "@mui/icons-material/Apple";
import WindowsIcon from "@mui/icons-material/Window";
import AndroidIcon from "@mui/icons-material/Android";
import LanguageIcon from "@mui/icons-material/Language";
import PrimaryButton from "../PrimaryButton";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#043873", color: "white", py: 4, mt: 5 }}>
      <Box
        sx={{
          bgcolor: "#043873",
          color: "white",
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 6 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom>
            Try <span style={{ fontWeight: "bold" }}>Whitespace</span> today
          </Typography>
          <Typography variant="body1" color="inherit" gutterBottom>
            Get started for free. Add your whole team as your needs grow.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, textTransform: "capitalize" }}
          >
            Try TasKey free
          </Button>
          <Typography variant="body1" sx={{ mt: 3 }}>
            On a big team? Contact sales
          </Typography>
          <Box mt={2} display="flex" justifyContent="center" gap={2}>
            <AppleIcon fontSize="large" />
            <WindowsIcon fontSize="large" />
            <AndroidIcon fontSize="large" />
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Whitespace
            </Typography>
            <Typography variant="body2" color="inherit">
              Whitespace was created for the new ways we live and work. We make
              a better workspace around the world.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Product
            </Typography>
            {["Overview", "Pricing", "Customer stories"].map((item) => (
              <Link
                href="#"
                key={item}
                sx={{ textDecoration: "none", display: "block", mb: 1 }}
                color="inherit"
                variant="body2"
              >
                {item}
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            {["Blog", "Guides & tutorials", "Help center"].map((item) => (
              <Link
                href="#"
                key={item}
                sx={{ textDecoration: "none", display: "block", mb: 1 }}
                color="inherit"
                variant="body2"
              >
                {item}
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            {["About us", "Careers", "Media kit"].map((item) => (
              <Link
                href="#"
                key={item}
                sx={{ textDecoration: "none", display: "block", mb: 1 }}
                color="inherit"
                variant="body2"
              >
                {item}
              </Link>
            ))}
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            <Typography variant="h6" gutterBottom>
              Try It Today
            </Typography>
            <Typography variant="body2" color="inherit">
              Get started for free. Add your whole team as your needs grow.
            </Typography>
            <PrimaryButton title="Start Today" sx={{ mt: 2 }} />
          </Grid>
        </Grid>
        <Box
          mt={4}
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" gap={2} alignItems="center" flexWrap="wrap">
            <LanguageIcon fontSize="small" />
            <Link
              href="#"
              sx={{ textDecoration: "none" }}
              color="inherit"
              variant="body2"
            >
              English
            </Link>
            <Link
              href="#"
              sx={{ textDecoration: "none" }}
              color="inherit"
              variant="body2"
            >
              Terms & privacy
            </Link>
            <Link
              href="#"
              sx={{ textDecoration: "none" }}
              color="inherit"
              variant="body2"
            >
              Security
            </Link>
            <Link
              href="#"
              sx={{ textDecoration: "none" }}
              color="inherit"
              variant="body2"
            >
              Status
            </Link>
          </Box>
          <Typography variant="body2" sx={{ mt: { xs: 2, sm: 0 } }}>
            ©2021 Whitespace LLC.
          </Typography>
          <Box mt={{ xs: 2, sm: 0 }} display="flex" gap={1}>
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
