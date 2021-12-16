import React ,{useState}from 'react'
import { Avatar, Grid, Paper, TextField, Button, Typography, Link } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';


const SigninPage = () => {
       
  const [uname,setUname] = useState("")
  const [psword,setPsword] = useState('')
  

    const paperStyle={padding :20, height:'100vh',width:300,margin:'0 auto'}
    const avatarStyle ={ backgroundColor: '#2196f3'}
    const btnStyle = { margin: '20px 0 '}
    
    const login = ()=>{
      console.warn(uname,psword);
      localStorage.setItem('Username', uname);
      localStorage.setItem('Password', psword);

    }


    return (
        <Grid>
            <Paper elevation={10} style= {paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><AccountCircleOutlinedIcon/></Avatar>
                <h2>SignIn</h2> 
                </Grid>
                
                <TextField                
                label='Username'
                name= 'Username'
                value={uname}
                onChange={e=>setUname(e.target.value)}
                placeholder='Email Id'                     
               />                
                <TextField  
                
                label='Password' 
                name ='Password'
                placeholder='Enter Password' 
                type='password' 
                value={psword}
                onChange={e=>setPsword(e.target.value)}
        
               />
                
                <Button type='submit' color='secondary' 
                variant='contained' style={btnStyle} fullWidth 
                onClick={login}> Login
                </Button>
              
                
                <Typography>
               <Link to="/" color='secondary'>  Forget Password  </Link>
                </Typography>
               <Typography>
                 Do You Have an Account ? 
                 <Link to="/signup" color='secondary'  > Registration </Link></Typography>
                </Paper>
        </Grid>
    )
}

export default SigninPage
