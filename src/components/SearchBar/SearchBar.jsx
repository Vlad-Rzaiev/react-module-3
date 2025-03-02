import { useState, useId } from 'react';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  const textId = useId();

  return (
    <div>
      <label htmlFor={textId}>Input Your text</label>
      <input
        type="text"
        id={textId}
        value={inputValue}
        onChange={handleChange}
      />
      <p>{inputValue}</p>
    </div>
  );
};

export default SearchBar;
