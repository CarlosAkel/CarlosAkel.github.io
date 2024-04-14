/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../css/navbar.css";
import Socials from "./socials";
const drawerWidth = 240;
const navItems = ["Code"];

function Navbar({ scrollToInfo }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar component="nav" className="bar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            className="font_let"
          >
            CARLOS AKEL
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <a
              onClick={scrollToInfo}
              sx={{ color: "#fff", textdecoration: "none" }}
              className="font_let"
            >
              Home
            </a>
            <a
              href="https://github.com/CarlosAkel/CarlosAkel.github.io"
              sx={{ color: "#fff", textdecoration: "none" }}
              className="font_let"
            >
              Code
            </a>
          </Box>
          <Socials></Socials>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
