import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        mt: 'auto',
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #e0e0e0'
      }}
    >
      <Container>
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Amaris Consulting. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;