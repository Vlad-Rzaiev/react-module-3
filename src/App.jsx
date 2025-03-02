import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import MyComponent from './components/MyComponent/MyComponent';
import SearchBar from './components/SearchBar/SearchBar';
import LangSwitcher from './components/LangSwitcher/LangSwitcher';

const App = () => {
  // Колбек-функція для обробки сабміту форми
  const handleLogin = userData => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  const [lang, setLang] = useState('Ukrainian');

  return (
    <div>
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onLogin={handleLogin} />

      <MyComponent />

      <SearchBar />

      <p>Selected language: {lang}</p>
      <LangSwitcher onChange={setLang} value={lang} />
    </div>
  );
};

export default App;
