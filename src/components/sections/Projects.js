import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Link,
} from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
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
    backgroundColor: indigo[300],
    color: theme.palette.primary.contrastText,
    cursor: "pointer",
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: indigo[400],
    },
  },
  title: {
    margin: "10px 0 20px",
  },
});

const cards = [
  {
    title: "V2",
    content: "This website :)",
    link: "https://github.com/JGeiser9/jakegeiser.com",
  },
  {
    title: "V1",
    content: "The previous version of jakegeiser.com",
    link: "https://github.com/JGeiser9/myPortfolio",
  },
  {
    title: "@Mpls_cycling",
    content: "A twitter bot helping fight bicycle theft on a daily basis",
    link: "https://github.com/JGeiser9/twitter-bot-nodejs",
  },
  {
    title: "Calculator with Friends",
    content: "It's like a real time chat, but for calculators",
    link: "https://github.com/JGeiser9/CalculatorChallenge",
  },
];

const Projects = withStyles(styles)(({ classes }) => {
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
        <h2>Personal Projects</h2>
        <Grid container spacing={2}>
          {buildCards()}
        </Grid>
      </div>
    </Container>
  );
});

export default Projects;
