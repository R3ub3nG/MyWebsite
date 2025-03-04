import React from 'react';
import { 
    Box,
    Container, 
    Grid, 
    Paper, 
    Typography, 
    Divider,
    Card,
    CardContent,
    IconButton,
    useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
    Code as CodeIcon,
    GitHub as GitHubIcon
} from '@mui/icons-material';

const ProjectsSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    // Projects data
    const projects = [
        {
            title: "E-Commerce Platform",
            tech: "React • Node.js • MongoDB",
            description: "A full-featured e-commerce platform with product management, shopping cart, and payment processing capabilities.",
            repoUrl: "https://github.com/yourusername/ecommerce-platform"
        },
        {
            title: "AI Content Generator",
            tech: "Python • TensorFlow • Flask",
            description: "An AI-powered application that generates custom content based on user inputs using natural language processing.",
            repoUrl: "https://github.com/yourusername/ai-content-generator"
        },
        {
            title: "Portfolio Website",
            tech: "React • Material UI • Framer Motion",
            description: "A responsive personal portfolio website with smooth animations and dark mode support.",
            repoUrl: "https://github.com/yourusername/portfolio-website"
        }
    ];

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
                    <Paper elevation={0} sx={{ 
                        p: 4, 
                        height: '100%', 
                        maxHeight: '80vh',
                        borderRadius: '16px',
                        boxShadow: isDarkMode 
                            ? '0 0 2px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(0, 0, 0, 0.9), 0 -8px 24px rgba(0, 0, 0, 0.9)'
                            : '0 0 2px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.15), 0 -8px 24px rgba(0, 0, 0, 0.15)',
                        transform: 'translate3d(0, 0, 0)',
                        WebkitTransform: 'translate3d(0, 0, 0)',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        position: 'relative',
                        zIndex: 1,
                        backgroundColor: theme.palette.background.paper
                    }}>
                        <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
                            <CodeIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 'inherit' }} />
                            Featured Projects
                        </Typography>
                        <Divider sx={{ mb: 4 }} />
                        
                        <Grid container spacing={4}>
                            {projects.map((project, index) => (
                                <Grid item xs={12} md={4} key={index} sx={{ display: 'flex' }}>
                                    <motion.div 
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        style={{ width: '100%' }}
                                    >
                                        <Card sx={{ 
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            minHeight: '300px',
                                            '&:hover': {
                                                boxShadow: isDarkMode 
                                                    ? '0 0 1px 0 rgba(0, 0, 0, 0.9), 0 0 2px 0 rgba(0, 0, 0, 0.8), 0 4px 8px -2px rgba(0, 0, 0, 0.6), 0 8px 16px -4px rgba(0, 0, 0, 0.4)'
                                                    : '0 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 2px 0 rgba(0, 0, 0, 0.15), 0 4px 8px -2px rgba(0, 0, 0, 0.1), 0 8px 16px -4px rgba(0, 0, 0, 0.05)'
                                            }
                                        }}>
                                            <CardContent sx={{ 
                                                flexGrow: 1, 
                                                p: 3,
                                                display: 'flex',
                                                flexDirection: 'column'
                                            }}>
                                                <Box>
                                                    <Typography variant="h5" component="div" fontWeight="bold" gutterBottom>
                                                        {project.title}
                                                    </Typography>
                                                    <Typography sx={{ mb: 2 }} color={isDarkMode ? "grey.100" : "text.secondary"}>
                                                        {project.tech}
                                                    </Typography>
                                                    <Divider sx={{ my: 2 }} />
                                                    <Typography variant="body1" paragraph>
                                                        {project.description}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ mt: 'auto', pt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                                                    <IconButton 
                                                        color="primary" 
                                                        aria-label="github repository"
                                                        component="a"
                                                        href={project.repoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <GitHubIcon />
                                                    </IconButton>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </motion.div>
            </motion.div>
        </Container>
    );
};

export default ProjectsSection; 