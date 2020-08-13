import React from "react";
import { Box, Button, Container, Link, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

// Images
import { Developer } from "components/svg";

// TODO: move styles into a shared/theme folder
const styles = (theme) => ({
  heroBox: {
    minHeight: "600px",
  },
  heroImage: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "250px",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "350px",
    },
  },
  socialButton: {
    margin: "0 8px",
    padding: "0",
  },
  socialLink: {
    padding: "5px 15px",
  },
});

const Hero = withStyles(styles)(({ classes }) => (
  <Container>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className={classes.heroBox}
      mt={11}
    >
      <Container className={classes.heroImage}>
        <Developer />
      </Container>
      <Typography variant="h2">
        <Box mt={2}>Jake Geiser</Box>
      </Typography>
      <Typography variant="h5">
        <Box mb={3}>Software Developer</Box>
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
          >
            LinkedIn
          </Link>
        </Button>
      </Box>
    </Box>
  </Container>
));

export default Hero;
