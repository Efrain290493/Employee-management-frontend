import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import amarisLogo from '../../assets/images/amaris-logo.png';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1a237e' }}>
      <Container>
        <Toolbar>
          <Box 
            component="img" 
            src={amarisLogo} 
            alt="Amaris Logo" 
            sx={{ height: 40, mr: 2 }} 
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Management System
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link to="/employees" style={{ color: 'white', textDecoration: 'none' }}>Employees</Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;