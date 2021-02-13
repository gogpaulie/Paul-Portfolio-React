import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, handleSetTheme } = useContext(ThemeContext);

  return (
    <select
      className={`theme-select ${theme}`}
      onChange={(e) => handleSetTheme(e.target.value)}
    >
      <option value='light'>Light Mode</option>
      <option selected value='dark'>
        Dark Mode
      </option>
      <option value='nineties'>90s Mode</option>
    </select>
  );
};

export default ThemeSwitcher;
