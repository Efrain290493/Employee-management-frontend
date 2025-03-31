import React from 'react';
import { Container, Typography, Box, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import amarisLogo from '../assets/images/amaris-logo.png';

const HomePage = () => {
  return (
    <Box 
      sx={{ 
        minHeight: 'calc(100vh - 64px - 56px)', // Restando altura del header y footer
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${amarisLogo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.85)', // Overlay translúcido
          zIndex: 1
        }
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Employee Management System
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
            A comprehensive tool to manage employee information
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button 
              component={Link} 
              to="/employees" 
              variant="contained" 
              color="primary" 
              size="large"
            >
              View Employees
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default HomePage;