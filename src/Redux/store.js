import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../../src/redux/tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
