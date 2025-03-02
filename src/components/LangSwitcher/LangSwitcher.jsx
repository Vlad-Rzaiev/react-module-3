import { useId } from 'react';

const LangSwitcher = ({ onChange, value }) => {
  const selectId = useId();

  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select
        id={selectId}
        value={value}
        onChange={evt => onChange(evt.target.value)}
      >
        <option value="Ukrainian">Ukrainian</option>
        <option value="English">English</option>
        <option value="Polish">Polish</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
