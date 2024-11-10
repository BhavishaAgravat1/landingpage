import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

const PlanCard = ({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted,
}) => {
  return (
    <Card
      variant={highlighted ? "elevation" : "outlined"}
      sx={{
        bgcolor: highlighted ? "#043873" : "background.paper",
        color: highlighted ? "white" : "text.primary",
        borderColor: highlighted ? "primary.main" : "lightgrey",
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {price}
        </Typography>
        <Typography
          variant="body2"
          color={highlighted ? "inherit" : "textSecondary"}
        >
          {description}
        </Typography>
        <Box mt={2}>
          {features.map((feature, index) => (
            <Typography key={index} variant="body2">
              ✓ {feature}
            </Typography>
          ))}
        </Box>
        <Button
          variant={buttonVariant}
          color={highlighted ? "primary" : "white"}
          sx={{ mt: 3, textTransform: "capitalize" }}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlanCard;
