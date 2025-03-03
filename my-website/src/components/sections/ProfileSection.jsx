import React from 'react';
import { 
    Box, 
    Container, 
    Paper, 
    Typography, 
    Avatar, 
    IconButton,
    useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
    Email as EmailIcon,
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon
} from '@mui/icons-material';

const ProfileSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    
    // Gradient background that works in both light and dark modes
    const headerGradient = isDarkMode 
        ? 'linear-gradient(135deg, rgba(63, 81, 181, 0.85), rgba(100, 181, 246, 0.85))' 
        : 'linear-gradient(135deg, rgba(144, 202, 249, 0.85), rgba(33, 150, 243, 0.85))';

    return (
        <Container maxWidth="lg">
            <motion.div variants={itemVariants}>
                <Paper 
                    elevation={3} 
                    sx={{ 
                        p: 4, 
                        display: 'flex', 
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        background: headerGradient,
                        color: 'white',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                        overflow: 'hidden',
                        position: 'relative',
                        height: { xs: 'auto', md: '70vh' },
                        maxHeight: '800px'
                    }}
                >
                    {/* Decorative circles */}
                    <Box 
                        sx={{ 
                            position: 'absolute', 
                            width: '150px', 
                            height: '150px', 
                            borderRadius: '50%', 
                            background: 'rgba(255,255,255,0.1)', 
                            top: '-50px', 
                            right: '-50px' 
                        }} 
                    />
                    <Box 
                        sx={{ 
                            position: 'absolute', 
                            width: '100px', 
                            height: '100px', 
                            borderRadius: '50%', 
                            background: 'rgba(255,255,255,0.1)', 
                            bottom: '-30px', 
                            left: '10%' 
                        }} 
                    />
                    
                    <Box sx={{ 
                        display: 'flex', 
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        zIndex: 1
                    }}>
                        <Avatar 
                            sx={{ 
                                width: { xs: 120, md: 180 }, 
                                height: { xs: 120, md: 180 }, 
                                mr: { xs: 0, md: 6 },
                                mb: { xs: 3, md: 0 },
                                border: '4px solid rgba(255,255,255,0.8)',
                                boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                            }}
                            alt="Your Name"
                            src="/path-to-your-photo.jpg" // Replace with your photo path
                        />
                        <Box>
                            <Typography variant="h2" component="h1" gutterBottom fontWeight="bold" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                                Your Name
                            </Typography>
                            <Typography variant="h4" color="rgba(255,255,255,0.9)" gutterBottom sx={{ mb: 3 }}>
                                Software Developer
                            </Typography>
                            <Typography variant="body1" color="rgba(255,255,255,0.9)" paragraph sx={{ fontSize: '1.1rem', maxWidth: '600px', mb: 4 }}>
                                Passionate about creating elegant solutions to complex problems.
                                I specialize in web development, machine learning, and building intuitive user interfaces.
                            </Typography>
                            <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                                <IconButton 
                                    sx={{ 
                                        color: 'white', 
                                        bgcolor: 'rgba(255,255,255,0.1)',
                                        p: 2
                                    }} 
                                    aria-label="github" 
                                    component="a" 
                                    href="https://github.com/yourusername"
                                >
                                    <GitHubIcon fontSize="large" />
                                </IconButton>
                                <IconButton 
                                    sx={{ 
                                        color: 'white', 
                                        bgcolor: 'rgba(255,255,255,0.1)',
                                        p: 2
                                    }} 
                                    aria-label="linkedin" 
                                    component="a" 
                                    href="https://linkedin.com/in/yourusername"
                                >
                                    <LinkedInIcon fontSize="large" />
                                </IconButton>
                                <IconButton 
                                    sx={{ 
                                        color: 'white', 
                                        bgcolor: 'rgba(255,255,255,0.1)',
                                        p: 2
                                    }} 
                                    aria-label="email" 
                                    component="a" 
                                    href="mailto:your.email@example.com"
                                >
                                    <EmailIcon fontSize="large" />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </motion.div>
        </Container>
    );
};

export default ProfileSection; 