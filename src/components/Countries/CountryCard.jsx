import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
    transition: "all 500ms cubic-bezier(0.23, 1, 0.32, 1)",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },

    "&:hover": {
      boxShadow: "4px 4px 20px 0px rgba(56,155,53,0.4)",
      transform: "scale(1.04)",
    },
  },

  gifContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  gif: {
    width: 240,
    height: "auto",
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

const CountryCard = ({ gif, name }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.gifContainer}>
        <img src={gif} alt={name} className={classes.gif} />
      </div>
      <div className={classes.questionContainer}>
        <Typography variant="h6" className={classes.questionText}>
          {name}
        </Typography>
      </div>
    </div>
  );
};

export default CountryCard;
