import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ pt: "15%" , pl:"15%" }}>
    <Box display="grid" gridTemplateColumns="repeat(11, 1fr)" gap={2}>
      <Box gridRow="span 4" gridColumn="span 6">
        <Item sx={{ m: "10%" }}>Login picture</Item>
      </Box>
      <Box gridColumn="span 3" >
        <Item>Login Page</Item>
      </Box>
      <Box gridColumn="span 3">
        <Item>Username</Item>
      </Box>
      <Box gridColumn="span 3">
        <Item>Password</Item>
      </Box>
      <Box gridColumn="span 3">
        <Item>Login</Item>
      </Box>
    </Box>
  </Box>
  );
}