import React,{useState} from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
const SignupPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phonenumber, setPhoneNumber] =useState("")    
    const [confirmpassword, setConfirmPassword] =useState("")
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
      };
    

    const validateForm = ()=> {
        return email.length > 0 && password.length > 0;
      }
    
    const handleSubmit=(event)=> {
        event.preventDefault();
      }
    
    const paperStyle={padding :20, height:'110vh',width:300,margin:'0 auto'}
    const avatarStyle ={ backgroundColor: '#2196f3'}
    const btnStyle = { margin: '8px 0 '}
    return (
        <Grid>
            <Paper elevation={10} style= {paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}>< AddCircleOutlineIcon/></Avatar>
                <h2>SignUp</h2> 
                </Grid>
                <TextField    
                onSubmit={handleSubmit} 
                label='Name'
                placeholder='Enter Name'
                fullWidth required
                autoFocus                 
                value={name}
                onChange={(e) => setName(e.target.value)} />
                
                <TextField  
                onSubmit={handleSubmit} 
                label='Email' 
                placeholder='Enter EmailId' 
                style={btnStyle}   
                fullWidth required
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>


                 <TextField    
                onSubmit={handleSubmit} 
                label='Phone Number'
                placeholder='Enter Phone Number'
                style={btnStyle} 
                fullWidth required
                autoFocus                 
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)} />
                
                <TextField    
                onSubmit={handleSubmit} 
                label='Password'
                placeholder='Enter Password'
                type='password'
                style={btnStyle} 
                fullWidth required
                autoFocus                 
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                
                <TextField    
                onSubmit={handleSubmit} 
                label='Confirm Password'
                placeholder='Confirm Password'
                type='password'
                style={btnStyle} 
                fullWidth required
                autoFocus                 
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)} />

      <FormControl component="fieldset">
    <FormLabel component="legend">Gender</FormLabel>
    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      
     
    </RadioGroup>
  </FormControl>
                
                <FormControlLabel 
                    control={
                     <Checkbox
                             name="checkedB" 
                             color="primary"
                     />} 
                     label='I accept the term and Conditions' 
                     />

                <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth 
                disabled={!validateForm()}> Sign Up</Button>
               
                </Paper>
        </Grid>
    )
}

export default SignupPage;
