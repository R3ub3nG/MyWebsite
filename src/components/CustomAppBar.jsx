import React, { useState, useEffect } from 'react';
import { 
    AppBar as MuiAppBar,
    Toolbar,
    Box,
    Typography,
    useTheme,
    Avatar
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import SectionsMenu from './SectionsMenu';
import { useSectionContext } from './SectionContext';
import logoImage from '../images/MyLogo.png';

// Language data - "Hello" in different languages
const greetings = [
    { text: "Hello!", language: "English" },
    { text: "你好！", language: "Chinese" },
    { text: "Bonjour!", language: "French" },
    { text: "¡Hola!", language: "Spanish" },
    { text: "こんにちは！", language: "Japanese" },
    { text: "Γειά σου!", language: "Greek" },
    { text: "Ciao!", language: "Italian" },
    { text: "Guten Tag!", language: "German" },
    { text: "السلام عليكم", language: "Arabic" },
    { text: "Olá!", language: "Portuguese" },
    { text: "Привет!", language: "Russian" },
    { text: "안녕하세요!", language: "Korean" },
    { text: "سلام", language: "Persian" }
];

const CustomAppBar = ({ toggleColorMode }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const { scrollToSection } = useSectionContext();

    // Add greeting animation state
    const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    // Effect to cycle through languages
    useEffect(() => {
        
        const intervalId = setInterval(() => {
            // Start fade out
            setIsVisible(false);
            
            // After fade out completes, change language and fade in
            setTimeout(() => {
                setCurrentGreetingIndex((prevIndex) => {
                    const nextIndex = prevIndex === greetings.length - 1 ? 0 : prevIndex + 1;
                    return nextIndex;
                });
                setIsVisible(true);
            }, 500); // Match with animation duration
            
        }, 3000); // Change every 3 seconds
        
        return () => clearInterval(intervalId);
    }, [greetings.length]); // Add greetings.length as dependency

    // Current greeting
    const currentGreeting = greetings[currentGreetingIndex];

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
                
                {/* New greeting section in the middle */}
                <Box 
                    sx={{ 
                        flexGrow: 1, 
                        display: 'flex', 
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                    }}
                >
                    <AnimatePresence mode="wait">
                        {isVisible && (
                            <motion.div
                                key={currentGreetingIndex}
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <Typography 
                                    variant="h6" 
                                    sx={{ 
                                        fontWeight: 500,
                                        textAlign: 'center',
                                        fontStyle: 'italic',
                                        color: theme.palette.primary.main
                                    }}
                                >
                                    {currentGreeting.text}
                                </Typography>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Box>
                
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