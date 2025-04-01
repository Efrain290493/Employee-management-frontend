import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchEmployees, fetchEmployeeById, clearSelectedEmployee } from '../../redux/slices/employeeSlice';

const EmployeeSearch = () => {
  const [employeeId, setEmployeeId] = useState('');
  const dispatch = useDispatch();

  // Load all employees when component mounts
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleSearch = (e) => {
    if (e) e.preventDefault(); // Prevent form submission if it's a form event
    
    if (employeeId.trim() === '') {
      // Explicitly clear selected employee before fetching all
      dispatch(clearSelectedEmployee());
      dispatch(fetchEmployees());
    } else {
      dispatch(fetchEmployeeById(employeeId));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <TextField
        label="Employee ID"
        variant="outlined"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Leave empty to show all employees"
        size="small"
        fullWidth
      />
      <Button 
        type="submit"
        variant="contained" 
        color="primary"
      >
        Search
      </Button>
    </Box>
  );
};

export default EmployeeSearch;