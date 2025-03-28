import React from 'react';
import { 
    AppBar as MuiAppBar,
    Toolbar,
    Box,
    Typography,
    useTheme,
    Avatar
} from '@mui/material';
import ThemeToggle from './ThemeToggle';
import SectionsMenu from './SectionsMenu';
import { useSectionContext } from './SectionContext';
import logoImage from '../images/MyLogo.png';

const CustomAppBar = ({ toggleColorMode }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const { scrollToSection } = useSectionContext();

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
                zIndex: 1200,
            }}
        >
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar 
                        id="logo-image"
                        src={logoImage} 
                        alt="Logo" 
                        onClick={() => scrollToSection("profile")}
                        sx={{ 
                            width: 40, 
                            height: 40, 
                            mr: 2,
                            cursor: 'pointer',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                transition: 'transform 0.2s'
                            }
                        }} 
                    />
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
                </Box>
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