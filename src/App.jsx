import React, { useState, useMemo } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Dashboard from './components/Dashboard';
import BackgroundEffect from './components/BackgroundEffect';
import SectionNav from './components/SectionNav';
import { SectionProvider } from './components/SectionContext';
import './App.css';

// My custom MUI theme with dark/light mode support
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
            default: mode === 'dark' ? '#303030' : '#f5f5f5',
            paper: mode === 'dark' ? '#424242' : '#ffffff',
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
                    borderRadius: 12,
                    // Semi-transparent background so the animated bg shows through
                    backgroundColor: mode === 'dark' 
                        ? 'rgba(66, 66, 66, 0.7)' 
                        : 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    // Lower opacity for cards to layer nicely on the bg
                    backgroundColor: mode === 'dark' 
                        ? 'rgba(66, 66, 66, 0.6)' 
                        : 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(10px)',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: mode === 'dark' 
                        ? 'rgba(48, 48, 48, 0.7)' 
                        : 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: mode === 'dark'
                        ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                        : '0 4px 20px rgba(0, 0, 0, 0.1)',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 500,
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.1)',
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                },
            },
        },
    },
    shape: {
        borderRadius: 12,
    },
});

function App() {
    // Default to light mode
    const [mode, setMode] = useState('light');
    
    // Switch theme function passed to the toggle button
    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    // Only regenerate theme when mode changes
    const theme = useMemo(() => getTheme(mode), [mode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BackgroundEffect />
            <SectionProvider>
                <Dashboard toggleColorMode={toggleColorMode} />
                <SectionNav />
            </SectionProvider>
        </ThemeProvider>
    );
}

export default App; 