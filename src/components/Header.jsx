import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Hidden } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MyButton from "./MyButton";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: `linear-gradient(to right, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  },

  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },

  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    flexGrow: 1,
    flexBasis: 1,
    height: 100,

    [theme.breakpoints.down("xs")]: {
      height: 70,
    },
  },

  content: {
    flexGrow: 7,
    justifyContent: "center",
    alignItems: "center",
  },

  scrollDownWrapper: {
    flexBasis: 1,
    flexGrow: 1,
    height: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    height: "100%",
  },

  descWrapper: {
    height: "100%",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  tucanContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      height: 400,
    },
    [theme.breakpoints.down("xs")]: {
      height: 220,
    },
  },

  tucan: {
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

  headingText: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(2),
    },

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },

  btnContainer: {
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      <Container className={classes.container}>
        <div className={classes.logoContainer}>
          <img src="images/logo.svg" alt="logo" className={classes.logo} />
        </div>
        <Grid container className={classes.content}>
          <Grid item xs={12} md={6} className={classes.tucanContainer}>
            <img src="images/Tucan.gif" alt="tucan" className={classes.tucan} />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.descWrapper}>
              <div className={classes.questionContainer}>
                <Typography variant="h6" className={classes.questionText}>
                  Are you ready for the Best Day Ever?
                </Typography>
              </div>

              <Typography variant="h1" className={classes.headingText}>
                The unique, innovative and interacive learning experience.
              </Typography>

              <div className={classes.btnContainer}>
                <MyButton text="Enquire" />
              </div>
            </div>
          </Grid>
        </Grid>

        <div className={classes.scrollDownWrapper}>
          <Hidden smDown>
            <Typography variant="body1">Explore</Typography>
          </Hidden>
          <KeyboardArrowDownIcon fontSize="large" />
        </div>
      </Container>
    </section>
  );
};

export default Header;
