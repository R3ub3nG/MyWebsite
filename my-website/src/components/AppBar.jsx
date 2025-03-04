import React from 'react';
import { 
    AppBar as MuiAppBar,
    Toolbar,
    Box,
    useTheme
} from '@mui/material';
import ThemeToggle from './ThemeToggle';
import SectionsMenu from './SectionsMenu';

const AppBar = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <MuiAppBar 
            position="fixed" 
            elevation={0}
            sx={{
                bgcolor: isDarkMode ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: 1,
                borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
            }}
        >
            <Toolbar>
                <Box sx={{ flexGrow: 1 }} />
                <SectionsMenu />
                <ThemeToggle />
            </Toolbar>
        </MuiAppBar>
    );
};

export default AppBar; 