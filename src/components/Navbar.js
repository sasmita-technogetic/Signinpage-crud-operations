import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import  {Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  title: {
    flexGrow: 1,
    
  },
}));

function Navbar() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
            Home 
          </Typography>
          <Link to="/"><Button>Home</Button></Link>
          <Link to="/signup"><Button>SignUp</Button></Link>
          <Link to="/login"><Button>Signin</Button></Link>
          {/* <Button color='inherit'  variant="h6" component={Link} to ='/'>Home</Button>
         <Button color='inherit' variant="h6" component={Link} to ='/signup'>SignUp</Button>
         <Button color='inherit' variant="h6" component={Link} to ='/login'>Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Navbar
