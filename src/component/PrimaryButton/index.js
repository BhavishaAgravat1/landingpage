import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PrimaryButton = ({ title }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ mt: 2, textTransform: "capitalize" }}
      endIcon={<ArrowForwardIcon />}
    >
      {title}
    </Button>
  );
};

export default PrimaryButton;
