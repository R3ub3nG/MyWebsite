import React from 'react';
import { 
    AppBar as MuiAppBar,
    Toolbar,
    Box,
    Typography,
    useTheme
} from '@mui/material';
import ThemeToggle from './ThemeToggle';
import SectionsMenu from './SectionsMenu';

const CustomAppBar = ({ toggleColorMode }) => {
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
                color: isDarkMode ? 'white' : 'text.primary',
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ 
                        flexGrow: 0, 
                        fontWeight: 600,
                        mr: 4,
                        color: 'inherit'
                    }}
                >
                    My Portfolio
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    '& .MuiIconButton-root': {
                        color: 'inherit'
                    },
                    '& .MuiButton-root': {
                        color: 'inherit'
                    }
                }}>
                    <SectionsMenu />
                    <ThemeToggle toggleColorMode={toggleColorMode} />
                </Box>
            </Toolbar>
        </MuiAppBar>
    );
};

export default CustomAppBar; 