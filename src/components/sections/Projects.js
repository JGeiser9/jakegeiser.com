import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
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
  },
  title: {
    margin: "10px 0 20px",
  },
});

const cards = [
  {
    title: "V2",
    content: "This website :)",
  },
  {
    title: "V1",
    content: "The previous version of jakegeiser.com",
  },
  {
    title: "@Mpls_cycling",
    content: "A twitter bot helping fight bicycle theft on a daily basis",
  },
  {
    title: "Calculator with Friends",
    content: "It's like a real time chat, but for calculators",
  },
];

const Projects = withStyles(styles)(({ classes }) => {
  const buildCards = () => {
    return cards.map((el) => (
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6" component="h6">
              {el.title}
            </Typography>
            <Typography>{el.content}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  return (
    <Container>
      <div className={classes.wrapper}>
        <h2>Personal Projects</h2>
        <Grid container spacing={2}>
          {buildCards()}
        </Grid>
      </div>
    </Container>
  );
});

export default Projects;
