import React, { useState } from 'react';
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
    useTheme,
    Tooltip,
    Button
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Code as CodeIcon,
    GitHub as GitHubIcon,
    Close as CloseIcon,
    Info as InfoIcon,
    Launch as LaunchIcon,
    ArrowForward as ArrowForwardIcon,
    ArrowBack as ArrowBackIcon
} from '@mui/icons-material';

const ProjectsSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const [expandedProject, setExpandedProject] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = (e) => {
        if (e) e.stopPropagation();
        if (expandedProject?.images) {
            setCurrentSlide((prev) => 
                prev === expandedProject.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevSlide = (e) => {
        if (e) e.stopPropagation();
        if (expandedProject?.images) {
            setCurrentSlide((prev) => 
                prev === 0 ? expandedProject.images.length - 1 : prev - 1
            );
        }
    };

    // Projects data
    const projects = [
        {
            title: "Personal Portfolio Website",
            tech: "React • Material UI • Framer Motion",
            description: "An interactive portfolio website with smooth animations, responsive design, and dark/light mode support.",
            repoUrl: "https://github.com/reubengue/MyWebsite",
            liveUrl: "https://reubengue.github.io/MyWebsite",
            detailedDescription: "I designed and developed this portfolio website from scratch to showcase my skills, projects, and professional experience. The site features an elegant, modern design with smooth scrolling functionality and interactive elements that create an engaging user experience.\n\nThe website is built with React and leverages Material UI for component styling and layout, with custom theme extensions for a unique visual identity. Framer Motion powers the sophisticated animations throughout the site, from page transitions to micro-interactions that enhance the overall experience.\n\nKey architectural features include a centralized section navigation system, context-based state management, responsive design principles, and optimized performance. The site is fully accessible across all device sizes and includes both light and dark themes that respect user preferences.",
            highlights: [
                "Snap scrolling with section highlighting",
                "Interactive project gallery with image slideshow",
                "Animated tech symbols and background effects",
                "Expandable cards for detailed information",
                "Responsive design for all device sizes",
                "Dark/light mode theme switching"
            ],
            techDetails: "React 19, Material UI v6, Framer Motion, Context API, CSS-in-JS, Responsive Design, GitHub Pages",
            images: [
                "/src/images/projects/portfolio-1.jpg",
                "/src/images/projects/portfolio-2.jpg",
                "/src/images/projects/portfolio-3.jpg",
                "/src/images/projects/portfolio-4.jpg"
            ]
        },
        {
            title: "AI Content Generator",
            tech: "Python • TensorFlow • Flask",
            description: "An AI-powered application that generates custom content based on user inputs using natural language processing.",
            repoUrl: "https://github.com/yourusername/ai-content-generator",
            liveUrl: "https://example.com/ai-generator",
            detailedDescription: "This AI-powered content generation platform uses advanced natural language processing to create high-quality, customized text based on user inputs. The system is built with a deep learning model trained on diverse datasets to understand context and generate relevant content.\n\nThe application features a Python backend with TensorFlow for the AI model, wrapped in a Flask API server. The frontend is a responsive web application that allows users to input parameters, select generation options, and receive real-time content suggestions.\n\nThe project demonstrates my expertise in artificial intelligence, machine learning, and natural language processing. It also showcases my ability to create practical applications of these technologies with user-friendly interfaces that make advanced AI capabilities accessible to non-technical users.",
            highlights: [
                "Custom-trained NLP model for content generation",
                "User-friendly interface for generating different content types",
                "Real-time content suggestions and editing",
                "Content quality evaluation metrics",
                "API endpoints for integration with other platforms"
            ],
            techDetails: "Python, TensorFlow, BERT, Flask, React, Redux, Docker, CI/CD Pipeline, Cloud Deployment",
            images: [
                "/src/images/projects/ai-generator-1.jpg",
                "/src/images/projects/ai-generator-2.jpg",
                "/src/images/projects/ai-generator-3.jpg"
            ]
        },
        {
            title: "Portfolio Website",
            tech: "React • Material UI • Framer Motion",
            description: "A responsive personal portfolio website with smooth animations and dark mode support.",
            repoUrl: "https://github.com/yourusername/portfolio-website",
            liveUrl: "https://example.com/portfolio",
            detailedDescription: "This portfolio website showcases my projects, skills, and professional background in an interactive and visually appealing format. The site is built with React and features smooth animations powered by Framer Motion that enhance the user experience without compromising performance.\n\nThe design is fully responsive, providing an optimal viewing experience across all device sizes from mobile phones to large desktop monitors. The implementation includes a dark/light mode toggle that respects user preferences and provides comfortable viewing in different lighting conditions.\n\nThe architecture follows modern React practices with functional components and hooks, clean code organization, and optimized performance. The project demonstrates my frontend development skills, design sensibilities, and attention to detail in creating engaging user experiences.",
            highlights: [
                "Responsive design for all device sizes",
                "Dark/light mode theme switching",
                "Smooth animations and transitions",
                "Optimized performance metrics",
                "Accessible design following WCAG guidelines"
            ],
            techDetails: "React, Material-UI, Framer Motion, React Router, CSS-in-JS, Responsive Design, Vite",
            images: [
                "/src/images/projects/portfolio-1.jpg",
                "/src/images/projects/portfolio-2.jpg",
                "/src/images/projects/portfolio-3.jpg",
                "/src/images/projects/portfolio-4.jpg",
                "/src/images/projects/portfolio-5.jpg"
            ]
        }
    ];

    const handleCardClick = (project) => {
        setExpandedProject(project);
        setCurrentSlide(0); // Reset to first slide when opening a project
    };

    const handleCloseExpanded = (e) => {
        if (e) e.stopPropagation();
        setExpandedProject(null);
        setCurrentSlide(0);
    };

    return (
        <>
            <Container maxWidth="lg">
                <motion.div variants={itemVariants} initial={{ opacity: 1 }}>
                    <motion.div
                        initial={{ scale: 0.98 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <Paper 
                            elevation={0} 
                            sx={{ 
                                p: 4,
                                borderRadius: "16px",
                                boxShadow: isDarkMode
                                    ? "0 0 2px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(0, 0, 0, 0.9), 0 -8px 24px rgba(0, 0, 0, 0.9)"
                                    : "0 0 2px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.15), 0 -8px 24px rgba(0, 0, 0, 0.15)",
                                transform: "translate3d(0, 0, 0)",
                                WebkitTransform: "translate3d(0, 0, 0)",
                                backfaceVisibility: "hidden",
                                WebkitBackfaceVisibility: "hidden",
                                position: "relative",
                                zIndex: 1,
                                width: "100%",
                                mb: 4,
                                overflow: "hidden",
                            }}>
                            <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
                                <CodeIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 'inherit' }} />
                                Featured Projects
                                <Tooltip
                                    title="Click on cards to learn more"
                                    arrow
                                    placement="top"
                                >
                                    <IconButton
                                        size="small"
                                        sx={{
                                            ml: 2,
                                            verticalAlign: 'middle',
                                            color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'rotate(15deg) scale(1.2)',
                                                color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)',
                                                backgroundColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'
                                            }
                                        }}
                                    >
                                        <InfoIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            </Typography>
                            <Divider sx={{ mb: 4 }} />
                            
                            <Grid container spacing={4}>
                                {projects.map((project, index) => (
                                    <Grid item xs={12} md={4} key={index} sx={{ display: 'flex' }}>
                                        <motion.div 
                                            whileHover={{ scale: 1.03 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            style={{ width: '100%', cursor: 'pointer' }}
                                            onClick={() => handleCardClick(project)}
                                        >
                                            <Card sx={{ 
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                minHeight: '300px',
                                                '&:hover': {
                                                    boxShadow: isDarkMode 
                                                        ? '0 0 1px 0 rgba(0, 0, 0, 0.9), 0 0 2px 0 rgba(0, 0, 0, 0.8), 0 4px 8px -2px rgba(0, 0, 0, 0.6), 0 8px 16px -4px rgba(0, 0, 0, 0.4)'
                                                        : '0 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 2px 0 rgba(0, 0, 0, 0.15), 0 4px 8px -2px rgba(0, 0, 0, 0.1), 0 8px 16px -4px rgba(0, 0, 0, 0.05)',
                                                    bgcolor: isDarkMode
                                                        ? "rgba(255, 255, 255, 0.05)"
                                                        : "rgba(0, 0, 0, 0.02)",
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
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                window.open(project.repoUrl, '_blank');
                                                            }}
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

            {/* Project details fullscreen view */}
            <AnimatePresence>
                {expandedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 2000, // Higher z-index to ensure it's on top of everything
                            padding: "1.5rem",
                        }}
                        onClick={handleCloseExpanded}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 25,
                            }}
                            style={{
                                width: "95%",
                                maxWidth: "1300px",
                                maxHeight: "85vh",
                                borderRadius: "16px",
                                boxShadow: isDarkMode 
                                    ? '0 0 2px rgba(0, 0, 0, 0.5), 0 8px 32px rgba(0, 0, 0, 0.9)'
                                    : '0 0 2px rgba(0, 0, 0, 0.1), 0 8px 32px rgba(0, 0, 0, 0.3)',
                                position: "relative",
                                zIndex: 2001, // Even higher z-index for the card
                                overflow: "hidden" // Change from auto to hidden
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Card
                                sx={{
                                    height: "100%",
                                    maxHeight: "calc(85vh - 8px)", // Slightly shorter than container
                                    borderRadius: "16px",
                                    backgroundColor: theme.palette.background.paper,
                                    overflow: "auto", // This element controls scrolling
                                    "&::-webkit-scrollbar": {
                                        width: "8px",
                                        height: "8px"
                                    },
                                    "&::-webkit-scrollbar-thumb": {
                                        backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                                        borderRadius: "4px"
                                    },
                                    "&::-webkit-scrollbar-track": {
                                        backgroundColor: "transparent"
                                    }
                                }}
                            >
                                <CardContent sx={{ p: { xs: 3, sm: 5 }, pb: { xs: 6, sm: 8 } }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            flexWrap: "wrap"
                                        }}
                                    >
                                        <Box>
                                            <Typography
                                                variant="h2"
                                                fontWeight="bold"
                                                sx={{ mb: 2 }}
                                            >
                                                {expandedProject.title}
                                            </Typography>
                                            <Typography 
                                                variant="h5" 
                                                color={isDarkMode ? "grey.300" : "text.secondary"}
                                                sx={{ mb: 2 }}
                                            >
                                                {expandedProject.tech}
                                            </Typography>
                                        </Box>

                                        <IconButton
                                            onClick={handleCloseExpanded}
                                            size="large"
                                            sx={{
                                                "&:hover": {
                                                    backgroundColor: isDarkMode
                                                        ? "rgba(255, 255, 255, 0.1)"
                                                        : "rgba(0, 0, 0, 0.05)",
                                                },
                                            }}
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                    </Box>

                                    <Divider sx={{ mb: 3 }} />

                                    <Grid container spacing={4}>
                                        <Grid item xs={12} md={8}>
                                            <Typography
                                                variant="h6"
                                                fontWeight="bold"
                                                gutterBottom
                                            >
                                                Project Overview
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                paragraph
                                                sx={{ mb: 4, fontSize: "1.1rem", whiteSpace: "pre-line" }}
                                            >
                                                {expandedProject.detailedDescription}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Typography
                                                variant="h6"
                                                fontWeight="bold"
                                                gutterBottom
                                            >
                                                Key Highlights
                                            </Typography>
                                            <Box sx={{ mb: 4 }}>
                                                {expandedProject.highlights.map((highlight, idx) => (
                                                    <Box 
                                                        key={idx} 
                                                        sx={{ 
                                                            display: 'flex', 
                                                            mb: 1.5,
                                                            '&::before': {
                                                                content: '"•"',
                                                                color: theme.palette.primary.main,
                                                                fontWeight: 'bold',
                                                                marginRight: '10px',
                                                                fontSize: '1.2rem'
                                                            }
                                                        }}
                                                    >
                                                        <Typography variant="body1">
                                                            {highlight}
                                                        </Typography>
                                                    </Box>
                                                ))}
                                            </Box>

                                            <Typography
                                                variant="h6"
                                                fontWeight="bold"
                                                gutterBottom
                                            >
                                                Technologies Used
                                            </Typography>
                                            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                                                {expandedProject.techDetails}
                                            </Typography>

                                            <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    startIcon={<GitHubIcon />}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        window.open(expandedProject.repoUrl, '_blank');
                                                    }}
                                                    sx={{ fontWeight: 'bold' }}
                                                >
                                                    View Code
                                                </Button>
                                                {expandedProject.liveUrl && (
                                                    <Button
                                                        variant="outlined"
                                                        color="primary"
                                                        startIcon={<LaunchIcon />}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            window.open(expandedProject.liveUrl, '_blank');
                                                        }}
                                                        sx={{ fontWeight: 'bold' }}
                                                    >
                                                        Live Demo
                                                    </Button>
                                                )}
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    
                                    {/* Project Images Slideshow */}
                                    {expandedProject.images && expandedProject.images.length > 0 && (
                                        <Box sx={{ mt: 5, mb: 2 }}>
                                            <Divider sx={{ mb: 4 }} />
                                            <Typography
                                                variant="h6"
                                                fontWeight="bold"
                                                gutterBottom
                                                sx={{ mb: 3 }}
                                            >
                                                Project Gallery
                                            </Typography>
                                            
                                            <Box 
                                                sx={{ 
                                                    position: 'relative',
                                                    width: '100%',
                                                    height: { xs: '250px', sm: '350px', md: '570px' },
                                                    borderRadius: '8px',
                                                    overflow: 'hidden',
                                                    border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                                                }}
                                            >
                                                {/* Using AnimatePresence for smooth transitions between slides */}
                                                <AnimatePresence mode="wait">
                                                    <motion.div
                                                        key={currentSlide}
                                                        initial={{ opacity: 0, x: 100 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -100 }}
                                                        transition={{ duration: 0.3 }}
                                                        style={{
                                                            position: 'absolute',
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundImage: `url(${expandedProject.images[currentSlide]})`,
                                                            backgroundSize: 'cover',
                                                            backgroundPosition: 'center',
                                                        }}
                                                    />
                                                </AnimatePresence>
                                                
                                                {/* Left/right nav buttons */}
                                                <Box sx={{ 
                                                    position: 'absolute', 
                                                    top: 0, 
                                                    bottom: 0, 
                                                    left: 0, 
                                                    right: 0, 
                                                    display: 'flex', 
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    padding: '0 16px',
                                                }}>
                                                    <IconButton 
                                                        onClick={prevSlide}
                                                        sx={{
                                                            bgcolor: 'rgba(0, 0, 0, 0.4)',
                                                            color: 'white',
                                                            '&:hover': {
                                                                bgcolor: 'rgba(0, 0, 0, 0.6)',
                                                            },
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            width: '40px',
                                                            height: '40px',
                                                            padding: 0
                                                        }}
                                                    >
                                                        <ArrowBackIcon sx={{ fontSize: '1.8rem' }} />
                                                    </IconButton>
                                                    <IconButton 
                                                        onClick={nextSlide}
                                                        sx={{
                                                            bgcolor: 'rgba(0, 0, 0, 0.4)',
                                                            color: 'white',
                                                            '&:hover': {
                                                                bgcolor: 'rgba(0, 0, 0, 0.6)',
                                                            },
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            width: '40px',
                                                            height: '40px',
                                                            padding: 0
                                                        }}
                                                    >
                                                        <ArrowForwardIcon sx={{ fontSize: '1.8rem' }} />
                                                    </IconButton>
                                                </Box>
                                                
                                                {/* Dots for quick navigation between slides */}
                                                <Box 
                                                    sx={{
                                                        position: 'absolute',
                                                        bottom: '16px',
                                                        left: '50%',
                                                        transform: 'translateX(-50%)',
                                                        display: 'flex',
                                                        gap: '8px'
                                                    }}
                                                >
                                                    {expandedProject.images.map((_, index) => (
                                                        <Box 
                                                            key={index}
                                                            sx={{
                                                                width: '10px',
                                                                height: '10px',
                                                                borderRadius: '50%',
                                                                backgroundColor: currentSlide === index 
                                                                    ? theme.palette.primary.main 
                                                                    : isDarkMode 
                                                                        ? 'rgba(255, 255, 255, 0.5)' 
                                                                        : 'rgba(0, 0, 0, 0.4)',
                                                                transition: 'all 0.3s ease',
                                                                cursor: 'pointer',
                                                                border: '1px solid',
                                                                borderColor: isDarkMode
                                                                    ? 'rgba(255, 255, 255, 0.2)'
                                                                    : 'rgba(0, 0, 0, 0.1)'
                                                            }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setCurrentSlide(index);
                                                            }}
                                                        />
                                                    ))}
                                                </Box>
                                            </Box>
                                        </Box>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectsSection; 