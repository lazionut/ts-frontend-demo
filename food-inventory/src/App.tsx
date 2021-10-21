import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Link, Stack, TextField } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function BasicGrid() {

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop: string): (event: any) => void => {
    return (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ pt: "5%" , pl:"5%" , pr:"5%" , pb:"5%"}} bgcolor="purple" alignItems="center" justifyContent="center">
    <Box display="grid" gridTemplateColumns="repeat(11, 1fr)" gap={2} bgcolor="white" alignItems="center" justifyContent="center" >
      <Box gridRow="span 4" gridColumn="span 6" >
       <img src= "user.png" width = "200" height="200"></img>
      </Box>
      <Box gridColumn="span 4" >
        <Item>Login Page</Item>
      </Box>
      <Box gridColumn="span 4" sx={{ '& > :not(style)': { m: 1 } }}>
        <FormControl variant="standard" fullWidth>
          <InputLabel htmlFor="input-with-icon-adornment">
            Username or email
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <EmailRoundedIcon/>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      
      <Box gridColumn="span 4">
      <FormControl sx={{ m: 1}} variant="standard" fullWidth>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            startAdornment={
              <InputAdornment position="start">
                <LockRoundedIcon/>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Stack  gridColumn="span 4" direction="column" alignItems="center" spacing={1}>
        <Button variant="outlined" fullWidth  style={{textTransform: 'none', color: "blue"}}>Login</Button>
        <Link href="#">Forgot password ?</Link>
      </Stack>
     
    </Box>
  </Box>
  );
}