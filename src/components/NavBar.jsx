import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `linear-gradient(to right, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  },
  logo: {
    padding: theme.spacing(2),
    transition: "all 500ms cubic-bezier(0.23, 1, 0.32, 1)",
    width: 100,
    height: 100,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.container}>
      <img src="images/logo.svg" alt="logo" className={classes.logo} />
    </AppBar>
  );
};

export default NavBar;
