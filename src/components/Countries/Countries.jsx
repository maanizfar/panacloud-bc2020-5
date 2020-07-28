import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Grid } from "@material-ui/core";
import useWebAnimations from "@wellyshen/use-web-animations";
import CountryCard from "./CountryCard";

const useStyles = makeStyles((theme) => ({
  wrapper: { backgroundColor: theme.palette.secondary.main },

  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

  gifContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 400,

    [theme.breakpoints.down("xs")]: {
      height: 220,
    },
  },

  gif: {
    width: "auto",
    height: "100%",
  },

  questionContainer: {
    display: "flex",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },

  questionText: {
    display: "inline-block",
    paddingBottom: theme.spacing(1),
    border: "0px solid",
    borderColor: theme.palette.green,
    borderBottomWidth: "2px",
  },
}));

const Countries = () => {
  const classes = useStyles();

  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translateY(0px)" },
      { transform: "translateY(6px)" },
      { transform: "translateY(0px)" },
    ],
    timing: {
      duration: 1000,
      easing: "ease-in-out",
      iterations: Infinity,
    },
  });

  return (
    <section className={classes.wrapper}>
      <Container className={classes.container}>
        <div ref={ref} className={classes.questionContainer}>
          <Typography variant="h6" className={classes.questionText}>
            Popular countries for takeover
          </Typography>
        </div>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <CountryCard gif="images/Gladiator.gif" name="Italy" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CountryCard gif="images/Tribesman.gif" name="Brazil" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CountryCard gif="images/Tiger.gif" name="India" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CountryCard gif="images/lion-run.gif" name="Kenya" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CountryCard gif="images/Panda.gif" name="China" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CountryCard gif="images/Elephant.gif" name="Thiland" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Countries;
