import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
    maxWidth: 600,

    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(2),
    },

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

const WhatIsIt = ({ image, heading, text }) => {
  const classes = useStyles();

  return (
    <section>
      <Container className={classes.container}>
        <div className={classes.descWrapper}>
          <div className={classes.questionContainer}>
            <Typography variant="h6" className={classes.questionText}>
              {heading}
            </Typography>
          </div>

          <Typography variant="body2" className={classes.text}>
            {text}
          </Typography>
        </div>
        <div className={classes.gifContainer}>
          <img src={image} alt={heading} className={classes.gif} />
        </div>
      </Container>
    </section>
  );
};

export default WhatIsIt;
