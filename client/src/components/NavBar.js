import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);
  
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Sprint - Advanced React</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;