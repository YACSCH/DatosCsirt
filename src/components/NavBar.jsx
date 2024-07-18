import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ bgcolor: '#4CAF50' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CSIRT
        </Typography>
        <Button color="inherit" component={NavLink} to="/Alerts">Alertas</Button>
        <Button color="inherit"  component={NavLink} to="/News">Noticias</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar