import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, CircularProgress, 
  Alert, Typography, Box 
} from '@mui/material';
import { fetchEmployees } from '../../redux/slices/employeeSlice';

const EmployeeList = () => {
  const dispatch = useDispatch();
  const { list, selectedEmployee, loading, error } = useSelector((state) => state.employees);
  
  useEffect(() => {
    // Only fetch on initial load or if both list is empty and no selected employee
    if (list.length === 0 && !selectedEmployee) {
      dispatch(fetchEmployees());
    }
  }, [dispatch, selectedEmployee, list.length]);

  // For debugging
  useEffect(() => {
    console.log("Current state:", { 
      listLength: list.length, 
      hasSelectedEmployee: !!selectedEmployee 
    });
  }, [list, selectedEmployee]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }
  
  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }
  
  // Display selected employee if available, otherwise show the full list
  const displayData = selectedEmployee ? [selectedEmployee] : list;

  if (displayData.length === 0) {
    return <Typography align="center">No employees found.</Typography>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#e3f2fd' }}>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Annual Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayData.map((employee) => (
            <TableRow key={employee.id} hover>
              <TableCell>{employee.id}</TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.age}</TableCell>
              <TableCell>${parseFloat(employee.salary).toLocaleString()}</TableCell>
              <TableCell>${parseFloat(employee.annualSalary).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeList;