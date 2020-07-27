import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles((theme) => ({
  btn: {
    padding: "0.75rem 2rem",
    border: "2px solid grey",
    borderRadius: "50px",

    "&:hover": {
      borderColor: theme.palette.green,
    },
  },

  iconContainer: {
    display: "flex",
    width: 0,
    marginLeft: theme.spacing(1),
    transform: "scale(0)",
  },
}));

const MyButton = ({ text }) => {
  const classes = useStyles();
  const ref = useRef(null);

  const timing = {
    duration: 500,
    iterations: 1,
    fill: "forwards",
    easing: "ease-in",
  };

  const play = () => {
    console.log("play");
    ref.current.animate(
      [
        { transform: "scale(0)", width: 0, marginRight: 0 },
        { transform: "scale(1)", width: 20, marginRight: "16px" },
      ],
      timing
    );
  };

  const reverse = () => {
    console.log("reverse");
    ref.current.animate(
      [
        { transform: "scale(1)", width: 20, marginRight: "16px" },
        { transform: "scale(0)", width: 0, marginRight: 0 },
      ],
      timing
    );
  };

  return (
    <Button
      className={classes.btn}
      onMouseEnter={() => {
        play();
      }}
      onMouseLeave={() => reverse()}
    >
      <span>{text}</span>
      <span ref={ref} className={classes.iconContainer}>
        <ArrowRightAltIcon />
      </span>
    </Button>
  );
};

export default MyButton;
