import * as React from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import LogoIcon from "@mui/icons-material/AcUnit";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const pages = ["Products", "Solutions", "Resources", "Pricing"];

const subPages = {
  Products: ["Product 1", "Product 2", "Product 3"],
  Solutions: ["Solution 1", "Solution 2"],
  Resources: ["Resource 1", "Resource 2"],
  Pricing: ["Basic", "Pro", "Enterprise"],
};

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElSubMenu, setAnchorElSubMenu] = React.useState({});

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenSubMenu = (event, page) => {
    setAnchorElSubMenu((prev) => ({ ...prev, [page]: event.currentTarget }));
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseSubMenu = (page) => {
    setAnchorElSubMenu((prev) => ({ ...prev, [page]: null }));
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ backgroundColor: "#043873" }}>
        <Toolbar disableGutters>
          <LogoIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "white" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Whitespace
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={(e) => handleOpenSubMenu(e, page)}
                >
                  <Typography textAlign="center" textTransform="capitalize">
                    {page}
                  </Typography>
                  {Boolean(anchorElSubMenu[page]) ? (
                    <ArrowDropUpIcon sx={{ ml: 1 }} />
                  ) : (
                    <ArrowDropDownIcon sx={{ ml: 1 }} />
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Box key={page} sx={{ mx: 1 }}>
                <Button
                  onClick={(e) =>
                    Boolean(anchorElSubMenu[page])
                      ? handleCloseSubMenu(page)
                      : handleOpenSubMenu(e, page)
                  }
                  sx={{
                    my: 2,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    textTransform: "capitalize",
                  }}
                >
                  {page}
                  {Boolean(anchorElSubMenu[page]) ? (
                    <ArrowDropUpIcon sx={{ color: "white", ml: 0.5 }} />
                  ) : (
                    <ArrowDropDownIcon sx={{ color: "white", ml: 0.5 }} />
                  )}
                </Button>
                <Menu
                  anchorEl={anchorElSubMenu[page]}
                  open={Boolean(anchorElSubMenu[page])}
                  onClose={() => handleCloseSubMenu(page)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  {subPages[page].map((subPage) => (
                    <MenuItem
                      key={subPage}
                      onClick={() => handleCloseSubMenu(page)}
                    >
                      <Typography textAlign="center">{subPage}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFE492",
                textTransform: "capitalize",
                mr: 2,
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "primary", textTransform: "capitalize" }}
              endIcon={<ArrowForwardIcon />}
            >
              Try Whitepace Free
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
