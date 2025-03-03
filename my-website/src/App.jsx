import React, { useState, useMemo } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Dashboard from './components/Dashboard';
import './App.css';

// Create a theme instance
const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? '#90caf9' : '#1976d2',
    },
    secondary: {
      main: mode === 'dark' ? '#f48fb1' : '#dc004e',
    },
    background: {
        default: mode === 'dark' ? '#303030' : '#f5f5f5', // Changed from #121212 to #303030
        paper: mode === 'dark' ? '#424242' : '#ffffff',   // Changed from #1e1e1e to #424242
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

function App() {
  // State to track the current theme mode
  const [mode, setMode] = useState('light');
  
  // Toggle between light and dark mode
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Memoize the theme to prevent unnecessary re-renders
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard toggleColorMode={toggleColorMode} />
    </ThemeProvider>
  );
}

export default App; 