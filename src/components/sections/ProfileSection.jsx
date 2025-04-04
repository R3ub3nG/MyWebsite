import React from 'react';
import { 
    Box, 
    Container, 
    Paper, 
    Typography, 
    Avatar, 
    IconButton,
    useTheme,
    Tooltip
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
    Email as EmailIcon,
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
    Phone as PhoneIcon,
    Description as ResumeIcon
} from '@mui/icons-material';
import profilePic from '../../images/pfp.png';
import resumePDF from '../../docs/CV - Reuben Gue.pdf';

const ProfileSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    
    // Gradient background that works in both light and dark modes
    const headerGradient = isDarkMode 
        ? 'linear-gradient(135deg, rgba(63, 81, 181, 0.85), rgba(100, 181, 246, 0.85))' 
        : 'linear-gradient(135deg, rgba(144, 202, 249, 0.85), rgba(33, 150, 243, 0.85))';

    const handlePhoneClick = () => {
        const phoneNumber = '+61468633718';
        navigator.clipboard.writeText(phoneNumber);
    };

    return (
        <Container maxWidth="lg">
            <motion.div 
                variants={itemVariants}
                initial={{ opacity: 1 }}
                style={{
                    width: '100%',
                    height: '100%',
                    willChange: 'transform',
                }}
            >
                <motion.div
                    initial={{ 
                        boxShadow: '0 0px 0px rgba(0,0,0,0)',
                        scale: 0.98,
                    }}
                    animate={{ 
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                    }}
                    style={{
                        width: '100%',
                        height: '100%',
                        willChange: 'transform',
                    }}
                >
                    <Paper 
                        elevation={0}
                        sx={{ 
                            p: 4, 
                            display: 'flex', 
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            background: headerGradient,
                            color: 'white',
                            overflow: 'hidden',
                            position: 'relative',
                            height: { xs: 'auto', md: '70vh' },
                            maxHeight: '800px',
                            borderRadius: '16px',
                            boxShadow: theme => theme.palette.mode === 'dark'
                                ? '0 0 2px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(0, 0, 0, 0.9)'
                                : '0 0 2px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.15)',
                            transform: 'translate3d(0, 0, 0)',
                            WebkitTransform: 'translate3d(0, 0, 0)',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            zIndex: 1,
                            width: '100%',
                            mb: 4
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
                                right: '-50px',
                                transform: 'translate3d(0, 0, 0)',
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
                                left: '10%',
                                transform: 'translate3d(0, 0, 0)',
                            }} 
                        />
                        
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            zIndex: 1,
                            transform: 'translate3d(0, 0, 0)',
                        }}>
                            <motion.div
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeOut',
                                }}
                            >
                                <Avatar 
                                    sx={{ 
                                        width: { xs: 120, md: 180 }, 
                                        height: { xs: 120, md: 180 }, 
                                        mr: { xs: 0, md: 6 },
                                        mb: { xs: 3, md: 0 },
                                        border: '4px solid rgba(255,255,255,0.8)',
                                        transform: 'translate3d(0, 0, 0)',
                                    }}
                                    alt="Reuben Gue"
                                    src={profilePic}
                                />
                            </motion.div>
                            <Box>
                                <Typography variant="h2" component="h1" gutterBottom fontWeight="bold" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                                    Reuben Gue
                                </Typography>
                                <Typography variant="h4" color="rgba(255,255,255,0.9)" gutterBottom sx={{ mb: 3 }}>
                                    Software Engineer
                                </Typography>
                                <Typography variant="body1" color="rgba(255,255,255,0.9)" paragraph sx={{ fontSize: '1.1rem', maxWidth: '600px', mb: 4 }}>
                                    I am an innovative and hard-working student in my final year of a Bachelor of Engineering (Honours), specialising in Software Engineering. Currently working at NAB as a Software Engineer Graduate, I can confidently say I have a strong passion for Software Development and I am driven by the positive impact my work can have within my organisation and throughout the wider community.
                                </Typography>
                                <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                                    <Tooltip title="Visit my GitHub Profile" arrow placement="bottom">
                                        <IconButton 
                                            sx={{ 
                                                color: 'white', 
                                                bgcolor: 'rgba(255,255,255,0.1)',
                                                p: 2,
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    bgcolor: 'rgba(255,255,255,0.2)',
                                                    transform: 'scale(1.15) rotate(5deg)',
                                                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                                                }
                                            }} 
                                            aria-label="github" 
                                            component="a" 
                                            href="https://github.com/R3ub3nG"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <GitHubIcon fontSize="large" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Connect with me on LinkedIn" arrow placement="bottom">
                                        <IconButton 
                                            sx={{ 
                                                color: 'white', 
                                                bgcolor: 'rgba(255,255,255,0.1)',
                                                p: 2,
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    bgcolor: 'rgba(255,255,255,0.2)',
                                                    transform: 'scale(1.15) rotate(5deg)',
                                                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                                                }
                                            }} 
                                            aria-label="linkedin" 
                                            component="a" 
                                            href="https://linkedin.com/in/reuben-gue-0a0b94205"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <LinkedInIcon fontSize="large" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Send me an Email at r3ubng@gmail.com" arrow placement="bottom">
                                        <IconButton 
                                            sx={{ 
                                                color: 'white', 
                                                bgcolor: 'rgba(255,255,255,0.1)',
                                                p: 2,
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    bgcolor: 'rgba(255,255,255,0.2)',
                                                    transform: 'scale(1.15) rotate(5deg)',
                                                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                                                }
                                            }} 
                                            aria-label="email" 
                                            component="a" 
                                            href="mailto:r3ubng@gmail.com"
                                        >
                                            <EmailIcon fontSize="large" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Click to copy phone number (+61 468 633 718)" arrow placement="bottom">
                                        <IconButton 
                                            sx={{ 
                                                color: 'white', 
                                                bgcolor: 'rgba(255,255,255,0.1)',
                                                p: 2,
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    bgcolor: 'rgba(255,255,255,0.2)',
                                                    transform: 'scale(1.15) rotate(5deg)',
                                                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                                                }
                                            }} 
                                            aria-label="phone" 
                                            onClick={handlePhoneClick}
                                        >
                                            <PhoneIcon fontSize="large" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="View my Resume" arrow placement="bottom">
                                        <IconButton 
                                            sx={{ 
                                                color: 'white', 
                                                bgcolor: 'rgba(255,255,255,0.1)',
                                                p: 2,
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    bgcolor: 'rgba(255,255,255,0.2)',
                                                    transform: 'scale(1.15) rotate(5deg)',
                                                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                                                }
                                            }} 
                                            aria-label="view resume" 
                                            component="a"
                                            href={resumePDF}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ResumeIcon fontSize="large" />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </motion.div>
            </motion.div>
        </Container>
    );
};

export default ProfileSection; 