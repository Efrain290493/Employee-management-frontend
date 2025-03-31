import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getEmployees, getEmployeeById } from '../../api/employeeApi';

// Async thunks
export const fetchEmployees = createAsyncThunk(
  'employees/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getEmployees();
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Error fetching employees'
      );
    }
  }
);

export const fetchEmployeeById = createAsyncThunk(
  'employees/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getEmployeeById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || `Error fetching employee with ID ${id}`
      );
    }
  }
);

// Slice
const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    list: [],
    selectedEmployee: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSelectedEmployee: (state) => {
      state.selectedEmployee = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Cases for fetchEmployees
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Cases for fetchEmployeeById
      .addCase(fetchEmployeeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployeeById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedEmployee = action.payload;
      })
      .addCase(fetchEmployeeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;