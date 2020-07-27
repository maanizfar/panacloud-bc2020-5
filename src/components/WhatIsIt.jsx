import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  descWrapper: {
    height: "100%",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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

  text: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(2),
    },

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

const WhatIsIt = () => {
  const classes = useStyles();

  return (
    <section>
      <Container className={classes.container}>
        <div className={classes.descWrapper}>
          <div className={classes.questionContainer}>
            <Typography variant="h6" className={classes.questionText}>
              Our takeover, but what is it?
            </Typography>
          </div>

          <Typography variant="body2" className={classes.text}>
            We transform your school into a country for a day then provide you
            with a 2 week related curriculum that encompasses all subjects. We
            provide a fantastic learning experience for every age group.
          </Typography>
        </div>
        <div className={classes.gifContainer}>
          <img src="images/macaque.gif" alt="tucan" className={classes.gif} />
        </div>
      </Container>
    </section>
  );
};

export default WhatIsIt;
