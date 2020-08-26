import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Link,
} from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

// Move into shared styles
const styles = (theme) => ({
  wrapper: {
    maxWidth: "900px",
    width: "75%",
    margin: "0 auto 100px auto",
    [theme.breakpoints.up("sm")]: {
      width: "95%",
    },
  },
  card: {
    minWidth: "175px",
    height: "250px",
    backgroundColor: blueGrey[300],
    color: theme.palette.primary.contrastText,
    cursor: "pointer",
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: blueGrey[400],
    },
  },
});

const cards = [
  {
    title: "HNScan",
    content: "The go to block explorer for the Handshake community",
    link: "https://hnscan.com",
  },
  {
    title: "HNSPool",
    content: "The first mining pool for the Handshake blockchain",
    link: "https://hnspool.com",
  },
  {
    title: "UCL",
    content:
      "The Urkel Shared Library for components, blocks, hooks, charts, and icons",
    link: "https://www.npmjs.com/package/@urkellabs/ucl",
  },
  {
    title: "Handshake Alliance",
    content: "An open-source resource for the Handshake community",
    link: "https://handshakealliance.org",
  },
  {
    title: "White Label Store",
    content: "A Shopify backed e-commerce store",
    link: "",
  },
];

const Work = withStyles(styles)(({ classes }) => {
  const buildCards = () => {
    return cards.map((el) => (
      <Grid item xs={12} sm={6} md={4}>
        <Link
          href={`${el.link}`}
          target="_blank"
          rel="noopener"
          underline="none"
        >
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6" component="h6">
                {el.title}
              </Typography>
              <Typography>{el.content}</Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    ));
  };

  return (
    <Container>
      <div className={classes.wrapper}>
        <h2>Previous Work</h2>
        <Grid container spacing={2}>
          {buildCards()}
        </Grid>
      </div>
    </Container>
  );
});

export default Work;
