import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles((theme) => ({
  btn: {
    padding: "0.5rem 3rem",
    border: "1px solid grey",
    borderRadius: "50px",
    width: 160,

    "&:hover": {
      "& div": {
        display: "flex",
      },
    },
  },

  iconContainer: {
    display: "none",
    marginLeft: theme.spacing(1),
  },
}));

const MyButton = ({ text }) => {
  const classes = useStyles();

  return (
    <Button variant="h1" className={classes.btn}>
      <span>{text}</span>
      <div className={classes.iconContainer}>
        <ArrowRightAltIcon />
      </div>
    </Button>
  );
};

export default MyButton;
