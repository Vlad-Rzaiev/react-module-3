import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/operations';

export default function App() {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 && <p>{JSON.stringify(items, null, 2)}</p>}
    </div>
  );
}
