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

// Import project images
import portfolio1 from '../../images/MyWebsite/1.png';
import portfolio2 from '../../images/MyWebsite/2.png';
import portfolio3 from '../../images/MyWebsite/3.png';
import portfolio4 from '../../images/MyWebsite/4.png';

const ProjectsSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const [expandedProject, setExpandedProject] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [previousSlide, setPreviousSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState("right");

    const nextSlide = (e) => {
        if (e) e.stopPropagation();
        if (expandedProject?.images && !isAnimating) {
            setIsAnimating(true);
            setPreviousSlide(currentSlide);
            const newSlide = currentSlide === expandedProject.images.length - 1 ? 0 : currentSlide + 1;
            setDirection("right");
            setCurrentSlide(newSlide);
        }
    };

    const prevSlide = (e) => {
        if (e) e.stopPropagation();
        if (expandedProject?.images && !isAnimating) {
            setIsAnimating(true);
            setPreviousSlide(currentSlide);
            const newSlide = currentSlide === 0 ? expandedProject.images.length - 1 : currentSlide - 1;
            setDirection("left");
            setCurrentSlide(newSlide);
        }
    };

    // Projects data
    const projects = [
        {
            title: "Personal Portfolio Website",
            tech: "React • Material UI • Framer Motion • Node.js",
            description: "An interactive portfolio website with smooth animations, responsive design, and dark/light mode support.",
            repoUrl: "https://github.com/reubengue/MyWebsite",
            liveUrl: "https://reubengue.github.io/MyWebsite",
            detailedDescription: "I designed and developed this portfolio website from scratch to showcase my skills, projects, and professional experience. The site features an elegant, modern design with smooth scrolling functionality and interactive elements that create an engaging user experience.\n\nThe website is built with React and leverages Material UI for component styling and layout, with custom theme extensions for a unique visual identity. Framer Motion powers the sophisticated animations throughout the site, from page transitions to micro-interactions that enhance the overall experience.\n\nKey architectural features include a centralized section navigation system, context-based state management, SEO optimization, and performance enhancements using React best practices. The site implements dynamic content loading, custom scroll behaviors, and intelligent theme switching that respects user preferences while providing a cohesive visual identity.",
            highlights: [
                "Snap scrolling with section highlighting",
                "Interactive project gallery with image slideshow",
                "Animated tech symbols and background effects",
                "Expandable cards for detailed information",
                "Custom scroll behaviors and animations",
                "Dark/light mode theme switching"
            ],
            techDetails: "React 19, Material UI v6, Framer Motion, Context API, CSS-in-JS, Node.js, GitHub Pages",
            images: [
                portfolio1,
                portfolio2,
                portfolio3,
                portfolio4
            ]
        },
        {
            title: "Counting and Sorting",
            tech: "Vaadin • Spring Boot • FastAPI • Docker • Maven • MySQL",
            description: "A Monash Project creating a real-time inventory management system designed to streamline stock tracking and replenishment.",
            repoUrl: "https://github.com/yourusername/counting-and-sorting",
            liveUrl: "https://example.com/counting-and-sorting",
            detailedDescription: "Counting and Sorting was developed as a large group project at Monash University using agile methodologies. We employed sprint planning and weekly standups, allowing us to efficiently adapt to changing requirements while gaining valuable software development experience.\n\nThe Counting and Sorting project is an inventory management and stock replenishment system aimed at providing real-time stock tracking with minimal maintenance efforts. It is designed for store managers and administrators, particularly in liquor stores, to manage stock levels efficiently and generate shopping lists based on low stock alerts.\n\nOne of its standout features is a plugin system that allows developers to extend functionality by integrating additional tools and data sources. The system is built using a microservices architecture, ensuring scalability, maintainability, and independent service deployment.\n\nWith secure authentication, efficient data management, and robust transaction logging, the system enhances stock visibility and minimizes stock maintenance time, helping businesses operate more smoothly.",
            highlights: [
                "Real-time stock tracking and updates",
                "User-friendly interface for efficient inventory management",
                "Automated shopping list generation based on stock levels",
                "Microservices architecture for scalability and maintainability",
                "Secure authentication and transaction logging"
            ],
            techDetails: "Vaadin, Spring Boot, FastAPI, Docker, Maven, MySQL, Microservices, REST APIs, Secure Authentication",
            images: [
                "/src/images/projects/counting-and-sorting-1.jpg",
                "/src/images/projects/counting-and-sorting-2.jpg",
                "/src/images/projects/counting-and-sorting-3.jpg"
            ]
        },
        {
            title: "Fiery Dragons",
            tech: "Python • PyGame • PyInstaller • JSON • Figma",
            description: "A collaborative digital card game developed at Monash University with a focus on object-oriented programming and design patterns.",
            repoUrl: "https://github.com/reubengue/fiery-dragons",
            liveUrl: "https://fiery-dragons.com",
            detailedDescription: "Fiery Dragons was a group project at Monash University where we created a digital version of the Fiery Dragons board game focused on applying object-oriented programming principles. We emphasized proper software design patterns to build a maintainable and well-structured codebase.\n\nThe game was built using PyGame with JSON for data storage. I worked closely with team members on game architecture, mechanics implementation, and interface design. We created detailed UI mockups and user flows in Figma before development to ensure a cohesive vision.\n\nOur collaborative approach involved regular peer feedback sessions and iterative improvements. We used PyInstaller to package the game for easy distribution and testing. This project strengthened both my technical skills and teamwork abilities while applying software engineering concepts in a practical context.",
            highlights: [
                "Applied OOP principles and design patterns",
                "Created UI designs and workflows in Figma",
                "Built with PyGame and JSON data storage",
                "Packaged as standalone application with PyInstaller",
                "Focused on team collaboration and design documentation"
            ],
            techDetails: "Python, PyGame, OOP, Design Patterns, JSON, Figma, PyInstaller",
            images: [
                "/src/images/projects/fiery-dragons-1.jpg",
                "/src/images/projects/fiery-dragons-2.jpg",
                "/src/images/projects/fiery-dragons-3.jpg",
                "/src/images/projects/fiery-dragons-4.jpg"
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
        setPreviousSlide(0);
        setIsAnimating(false);
        setDirection("right");
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
                                                    <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
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
                                                <AnimatePresence
                                                    initial={false}
                                                    custom={direction}
                                                    mode="wait"
                                                    onExitComplete={() => setIsAnimating(false)}
                                                >
                                                    <motion.div
                                                        key={currentSlide}
                                                        custom={direction}
                                                        variants={{
                                                            hidden: (direction) => ({
                                                                x: direction === "right" ? 300 : -300,
                                                                opacity: 0,
                                                            }),
                                                            visible: {
                                                                x: 0,
                                                                opacity: 1,
                                                                transition: {
                                                                    type: "spring",
                                                                    stiffness: 300,
                                                                    damping: 30,
                                                                },
                                                            },
                                                            exit: (direction) => ({
                                                                x: direction === "right" ? -300 : 300,
                                                                opacity: 0,
                                                                transition: {
                                                                    type: "spring",
                                                                    stiffness: 300,
                                                                    damping: 30,
                                                                },
                                                            }),
                                                        }}
                                                        initial="hidden"
                                                        animate="visible"
                                                        exit="exit"
                                                        style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundImage: `url(${expandedProject.images[currentSlide]})`,
                                                            backgroundSize: 'cover',
                                                            backgroundPosition: 'center',
                                                        }}
                                                    />
                                                </AnimatePresence>
                                                
                                                {/* Left/right navigation buttons */}
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
                                                
                                                {/* Navigation dots */}
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
                                                                if (!isAnimating && index !== currentSlide) {
                                                                    setIsAnimating(true);
                                                                    setPreviousSlide(currentSlide);
                                                                    setDirection(index > currentSlide ? "right" : "left");
                                                                    setCurrentSlide(index);
                                                                }
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