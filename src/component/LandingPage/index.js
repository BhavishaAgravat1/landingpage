import React from "react";
import Navbar from "../Navbar";
import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import landingImage from "../../image/landing1.png";
import PlanCard from "../PlanCard";
import Sponsors from "../Sponser";
import Footer from "../Footer";
import PrimaryButton from "../PrimaryButton";

const plans = [
  {
    title: "Free",
    price: "$0",
    description: "Capture ideas and find them quickly",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications",
    ],
    buttonText: "Get Started",
    buttonVariant: "outlined",
    highlighted: false,
  },
  {
    title: "Personal",
    price: "$11.99",
    description: "Keep home and family on track",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications",
    ],
    buttonText: "Get Started",
    buttonVariant: "contained",
    highlighted: true,
  },
  {
    title: "Organization",
    price: "$49.99",
    description: "Capture ideas and find them quickly",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications",
    ],
    buttonText: "Get Started",
    buttonVariant: "outlined",
    highlighted: false,
  },
];

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: { xs: "auto", md: "50vh" },
          backgroundColor: "#043873",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          padding: 2,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              pr: 4,
              color: "white",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontSize: { xs: "1.8rem", md: "3rem" } }}
            >
              Get More Done with Whitepace
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontSize: { xs: "1rem", md: "1.25rem" },
                lineHeight: { xs: 1.4, md: 1.5 },
              }}
            >
              Project management software that enables your teams to
              collaborate, plan, analyze, and manage everyday tasks
            </Typography>
            <PrimaryButton title="Try Whitepace Free" />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              mt: { xs: 4, md: 0 },
            }}
          >
            <img
              src={landingImage}
              alt="Illustration"
              style={{ width: "100%", maxWidth: "300px" }}
            />
          </Box>
        </Container>
      </Box>
      <Container maxWidth="md" sx={{ textAlign: "center", mt: 5, mb: 5 }}>
        <Typography variant="h4" gutterBottom>
          Choose <span style={{ fontWeight: "bold" }}>Your Plan</span>
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </Typography>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <PlanCard
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                buttonText={plan.buttonText}
                buttonVariant={plan.buttonVariant}
                highlighted={plan.highlighted}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
        sx={{
          bgcolor: "#043873",
          color: "white",
          p: 5,
          mt: 5,
          borderRadius: 1,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Your work, everywhere{" "}
          <span style={{ fontWeight: "bold" }}>you are</span>
        </Typography>
        <Typography variant="body1" color="inherit" gutterBottom>
          Access your notes from your computer, phone, or tablet by
          synchronizing with various services, including Dropbox and OneDrive.
          The app is available on Windows, macOS, Linux, Android, and iOS. A
          terminal app is also available!
        </Typography>
        <PrimaryButton title="Try TasKey" />
      </Box>
      <CssBaseline />
      <Sponsors />
      <Footer />
    </>
  );
};

export default LandingPage;
