import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import EmployeeSearch from '../components/employees/EmployeeSearch';
import EmployeeList from '../components/employees/EmployeeList';

const EmployeesPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Employee Directory
        </Typography>
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" color="text.secondary" paragraph>
            Search for an employee by ID.
          </Typography>
          <EmployeeSearch />
        </Box>
        <EmployeeList />
      </Paper>
    </Container>
  );
};

export default EmployeesPage;