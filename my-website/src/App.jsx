import React, { useState, useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Dashboard from "./components/Dashboard";
import BackgroundEffect from "./components/BackgroundEffect";
import SectionNav from "./components/SectionNav";
import "./App.css";

// Create a theme instance
const getTheme = (mode) =>
    createTheme({
        palette: {
            mode,
            primary: {
                main: mode === "dark" ? "#90caf9" : "#1976d2",
            },
            secondary: {
                main: mode === "dark" ? "#f48fb1" : "#dc004e",
            },
            background: {
                default: mode === "dark" ? "#303030" : "#f5f5f5",
                paper: mode === "dark" ? "#424242" : "#ffffff",
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
                        // Add slight transparency to papers to show background through
                        backgroundColor:
                            mode === "dark"
                                ? "rgba(66, 66, 66, 0.7)"
                                : "rgba(255, 255, 255, 0.7)",
                        backdropFilter: "blur(10px)",
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 12,
                        // Add slight transparency to cards to show background through
                        backgroundColor:
                            mode === "dark"
                                ? "rgba(66, 66, 66, 0.6)"
                                : "rgba(255, 255, 255, 0.6)",
                        backdropFilter: "blur(10px)",
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor:
                            mode === "dark"
                                ? "rgba(48, 48, 48, 0.7)"
                                : "rgba(255, 255, 255, 0.7)",
                        backdropFilter: "blur(10px)",
                        boxShadow:
                            mode === "dark"
                                ? "0 4px 20px rgba(0, 0, 0, 0.3)"
                                : "0 4px 20px rgba(0, 0, 0, 0.1)",
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                        textTransform: "none",
                        fontWeight: 500,
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        transition: "transform 0.2s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.1)",
                        },
                    },
                },
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        borderColor:
                            mode === "dark"
                                ? "rgba(255, 255, 255, 0.1)"
                                : "rgba(0, 0, 0, 0.1)",
                    },
                },
            },
        },
        shape: {
            borderRadius: 12,
        },
    });

function App() {
    // State to track the current theme mode
    const [mode, setMode] = useState("light");

    // Toggle between light and dark mode
    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    // Memoize the theme to prevent unnecessary re-renders
    const theme = useMemo(() => getTheme(mode), [mode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BackgroundEffect />
            <SectionNav />
            <Dashboard toggleColorMode={toggleColorMode} />
        </ThemeProvider>
    );
}

export default App;
