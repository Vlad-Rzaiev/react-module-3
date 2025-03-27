import axios from 'axios';
import {
  fetchError,
  fetchInProgress,
  fetchSuccess,
} from '../../src/redux/tasksSlice';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

export const fetchTasks = () => async dispatch => {
  try {
    dispatch(fetchInProgress());
    const resp = await axios.get('/tasks');
    dispatch(fetchSuccess(resp.data));
  } catch (error) {
    console.log(error);
    dispatch(fetchError(error.message));
  }
};
