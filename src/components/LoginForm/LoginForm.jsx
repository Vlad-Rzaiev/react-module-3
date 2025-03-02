import { useId } from 'react';

const LoginForm = ({ onLogin }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    // Викликаємо пропс onLogin
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  const loginId = useId();
  const passwordId = useId();

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId + 'login'}>Login</label>
      <input type="text" name="login" id={loginId + 'login'} />

      <label htmlFor={passwordId + 'password'}>Password</label>
      <input type="password" name="password" id={passwordId + 'password'} />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
