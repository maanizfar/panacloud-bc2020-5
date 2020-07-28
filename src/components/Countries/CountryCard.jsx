import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import useWebAnimations from "@wellyshen/use-web-animations";

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

  nameContainer: {
    display: "flex",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),

    border: "0px solid",
    borderColor: theme.palette.green,
    borderBottomWidth: "2px",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },

  name: {
    display: "inline-block",
  },
}));

const CountryCard = ({ gif, name }) => {
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
    <div className={classes.container}>
      <div className={classes.gifContainer}>
        <img src={gif} alt={name} className={classes.gif} />
      </div>
      <div className={classes.nameContainer}>
        <Typography ref={ref} variant="h6" className={classes.name}>
          {name}
        </Typography>
      </div>
    </div>
  );
};

export default CountryCard;
