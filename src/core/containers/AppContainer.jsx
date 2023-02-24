import React from 'react'
import NavbarWrapper from '../../containers/Navbar/NavbarWrapper'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const AppContainer = () => {
  return (
    <div style={{minHeight: '100vh'}}>
    <NavbarWrapper />
    </div>
  )
}

export default AppContainer