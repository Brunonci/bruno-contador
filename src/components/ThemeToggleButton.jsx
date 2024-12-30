import { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';
import Button from '@mui/material/Button';

const ThemeToggleButton = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === lightTheme ? darkTheme : lightTheme;
      console.log('Theme toggled:', newTheme.palette.mode);
      return newTheme;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Button onClick={toggleTheme} variant="contained" color="primary">
          Toggle Theme
        </Button>
        {children}
      </div>
    </ThemeProvider>
  );
};

ThemeToggleButton.propTypes = {
  children: PropTypes.node,
};

export default ThemeToggleButton;
