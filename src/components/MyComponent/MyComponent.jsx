import { useId } from 'react';

const MyComponent = () => {
  const loginId = useId();
  const passwordId = useId();

  return (
    <div>
      <label htmlFor={loginId}>Text field label</label>
      <input type="text" id={loginId} />

      <label htmlFor={passwordId}>Text field label 2</label>
      <input type="text" id={passwordId} />
    </div>
  );
};

export default MyComponent;
