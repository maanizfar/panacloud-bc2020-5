import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";
import MyButton from "./MyButton";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.secondary.main,
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },

  text: {
    marginBottom: theme.spacing(6),

    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(4),
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.text} align="center">
          Not found what you’re looking for?
        </Typography>
        <MyButton text="Get In Touch" />
      </Container>
    </section>
  );
};

export default Contact;
