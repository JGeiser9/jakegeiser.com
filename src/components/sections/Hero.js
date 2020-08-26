import React from "react";
import {
  Box,
  Button,
  Container,
  Link,
  Typography,
  Divider,
} from "@material-ui/core";
import { withStyles, useTheme } from "@material-ui/core/styles";

// Hooks
import useWindowSize from "hooks/useWindowSize";

// Images
import { Developer } from "components/svg";

// TODO: move styles into a shared/theme folder
const styles = (theme) => ({
  container: {
    padding: theme.spacing(8, 0, 10, 0),
  },
  heroBox: {
    padding: theme.spacing(8, 0, 10, 0),
  },
  heroImage: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "250px",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "350px",
    },
  },
  heroText: {
    fontWeight: 400,
  },
  socialButton: {
    margin: "0 8px",
    padding: "0",
  },
  socialLink: {
    padding: "5px 15px",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  divider: {
    maxWidth: "25%",
    margin: "0 auto",
    height: "2px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "12%",
    },
  },
});

const Hero = withStyles(styles)(({ classes }) => {
  const theme = useTheme();
  const windowSize = useWindowSize();

  return (
    <Container className={classes.container}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className={classes.heroBox}
        mt={8}
      >
        <Container className={classes.heroImage}>
          <Developer />
        </Container>
        <Typography
          variant={windowSize.width > theme.breakpoints.values.sm ? "h2" : "h3"}
          className={classes.heroText}
        >
          <Box mt={2}>Jake Geiser</Box>
        </Typography>
        <Typography
          variant={windowSize.width > theme.breakpoints.values.sm ? "h5" : "h6"}
          className={classes.heroText}
        >
          <Box mb={5}>Software Developer</Box>
        </Typography>
        <Box display="flex">
          <Button
            variant="outlined"
            color="primary"
            className={classes.socialButton}
          >
            <Link
              href="https://github.com/JGeiser9"
              target="_blank"
              rel="noopener"
              className={classes.socialLink}
              underline="none"
            >
              Github
            </Link>
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.socialButton}
          >
            <Link
              href="https://www.linkedin.com/in/jakegeiser/"
              target="_blank"
              rel="noopener"
              className={classes.socialLink}
              underline="none"
            >
              LinkedIn
            </Link>
          </Button>
        </Box>
      </Box>
      <Divider light={true} variant="middle" className={classes.divider} />
    </Container>
  );
});

export default Hero;
