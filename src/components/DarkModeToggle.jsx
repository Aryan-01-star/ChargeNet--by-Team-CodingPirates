// src/components/DarkModeToggle.jsx
import React, { useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline, Switch, FormControlLabel } from '@mui/material';

function DarkModeToggle({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
        label="Dark Mode"
        style={{ position: 'absolute', top: '1rem', right: '1rem' }}
      />
      {children}
    </ThemeProvider>
  );
}

export default DarkModeToggle;
