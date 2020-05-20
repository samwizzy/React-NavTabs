import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Button component={Link} to="/">
            Home
          </Button>
          <Button component={Link} to="/product">
            Products
          </Button>
          <Button component={Link} to="/playground">
            Playground
          </Button>
          <Button component={Link} to="/login">
            Login
          </Button>
          <Button component={Link} to="/navtabs">
            NavTab
          </Button>
        </Toolbar>
      </AppBar>

      <Toolbar variant="dense" disableGutters />
    </>
  );
};

export default Navigation;
