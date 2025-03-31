import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchEmployees, fetchEmployeeById } from '../../redux/slices/employeeSlice';

const EmployeeSearch = () => {
  const [employeeId, setEmployeeId] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (employeeId.trim() === '') {
      dispatch(fetchEmployees());
    } else {
      dispatch(fetchEmployeeById(employeeId));
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <TextField
        label="Employee ID"
        variant="outlined"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        placeholder="Leave empty to show all employees"
        size="small"
        fullWidth
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
};

export default EmployeeSearch;