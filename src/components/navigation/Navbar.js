import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Link,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

// import Logo from "components/icons/Logo";

// TODO: move styles into a shared/theme folder
const styles = (theme) => ({
  navbar: {
    backgroundColor: "rgb(250, 250, 250)",
    color: theme.palette.text.primary,
    boxShadow: `0px 2px 4px -1px rgba(0,0,0,0), 
      0px 4px 5px 0px rgba(0,0,0,0), 
      0px 1px 10px 0px rgba(0,0,0,0)`,
  },
  linksContainer: {
    flexGrow: 1,
  },
  link: {
    color: theme.palette.primary.light,
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
});

const Navbar = withStyles(styles)(({ classes, theme }) => (
  <AppBar position="fixed" className={classes.navbar}>
    <Toolbar>
      <IconButton edge="start" aria-label="menu">
        <Menu />
      </IconButton>

      {/* Implements in the side bar */}
      {/* <Box>
        <Logo />
      </Box> */}

      <Box
        display="flex"
        justifyContent="flex-end"
        className={classes.linksContainer}
      >
        <Typography component="div">
          <Box fontWeight="fontWeightRegular" letterSpacing={2} mx={2}>
            <Link
              href="#"
              rel="noopener"
              className={classes.link}
              underline="none"
            >
              About
            </Link>
          </Box>
        </Typography>
        <Typography component="div">
          <Box fontWeight="fontWeightRegular" letterSpacing={2} mx={2}>
            <Link
              href="#"
              rel="noopener"
              className={classes.link}
              underline="none"
            >
              Work
            </Link>
          </Box>
        </Typography>
        <Typography component="div">
          <Box fontWeight="fontWeightRegular" letterSpacing={2} mx={2}>
            <Link
              href="#"
              rel="noopener"
              className={classes.link}
              underline="none"
            >
              Blog
            </Link>
          </Box>
        </Typography>
        <Typography component="div">
          <Box fontWeight="fontWeightRegular" letterSpacing={2} mx={2}>
            <Link
              href="#"
              rel="noopener"
              className={classes.link}
              underline="none"
            >
              Contact
            </Link>
          </Box>
        </Typography>
      </Box>
    </Toolbar>
  </AppBar>
));

export default Navbar;
