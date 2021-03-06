import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
    
const HomePage = () => {

    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>FirstName</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Email</TableCell>          
            
          </TableRow>
        </TableHead>
        <TableBody>
               
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default HomePage
