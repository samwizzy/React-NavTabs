import React from "react";
import Navigation from "./Navigation";
import { Table, TableBody, TableRow, TableCell, TableFooter } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  table: {
    display: "flex"
  },
  input: {
    width: '100%',
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Navigation />
      <h4>Welcome To Product</h4>

      <Table size="small" className={classes.table}>
        <TableBody>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell><input type="text" className={classes.input} /></TableCell>
            <TableCell>Group</TableCell>
            <TableCell><input type="text" className={classes.input} /></TableCell>
            <TableCell>Amount</TableCell>
            <TableCell><input type="text" className={classes.input} /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Home;
