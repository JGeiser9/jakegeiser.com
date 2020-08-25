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
    width: "85%",
    margin: "50px auto",
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
    title: "Card 1",
    content: "This is example project number 1",
  },
  {
    title: "Card 2",
    content: "This is example project number 2",
  },
  {
    title: "Card 3",
    content: "This is example project number 3",
  },
  {
    title: "Card 4",
    content: "This is example project number 4",
  },
  {
    title: "Card 5",
    content: "This is example project number 5",
  },
  {
    title: "Card 6",
    content: "This is example project number 6",
  },
];

const Projects = withStyles(styles)(({ classes }) => {
  const buildCards = () => {
    return cards.map((el) => (
      <Grid item xs={6} sm={4}>
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
