import React, { useState, useRef } from 'react';
import { 
    Container, 
    Grid, 
    Paper, 
    Typography, 
    Divider,
    Card,
    CardContent,
    useTheme,
    Box,
    LinearProgress,
    Tooltip,
    IconButton
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Code as CodeIcon,
    ExpandMore as ExpandMoreIcon,
    Close as CloseIcon,
    Info as InfoIcon
} from '@mui/icons-material';
import { 
    FaReact, 
    FaNodeJs, 
    FaPython, 
    FaDocker, 
    FaGitAlt, 
    FaJs, 
    FaHtml5, 
    FaCss3Alt,
    FaJava
} from 'react-icons/fa';
import { 
    SiTypescript, 
    SiGraphql,
    SiPostgresql,
    SiAmazonwebservices
} from 'react-icons/si';

const TechnicalSkillsSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const [expandedSkill, setExpandedSkill] = useState(null);
    const containerRef = useRef(null);

    // Technical skills data with proficiency levels (0-100)
    const technicalSkills = [
        // Programming Languages
        {
            skill: 'JavaScript',
            proficiency: 90,
            description: 'Expert-level proficiency with modern JavaScript (ES6+), including deep understanding of asynchronous programming, closures, prototypes, and functional paradigms. Consistently apply best practices for performance optimization and maintainable code architecture.',
            icon: <FaJs color="#F7DF1E" />
        },
        {
            skill: 'TypeScript',
            proficiency: 85,
            description: 'Advanced TypeScript developer with strong typing skills for complex systems. Skilled in leveraging type definitions, interfaces, generics, and utility types to build robust applications with improved maintainability and reduced runtime errors.',
            icon: <SiTypescript color="#3178C6" />
        },
        {
            skill: 'Python',
            proficiency: 90,
            description: 'Expert Python developer with comprehensive knowledge of the language ecosystem. Proficient in coding algorithms with various data structures, applying best practices for clean, efficient, and maintainable code.',
            icon: <FaPython color="#3776AB" />
        },
        {
            skill: 'Java',
            proficiency: 85,
            description: 'Advanced Java programmer with strong object-oriented design principles. Knowledge in developing enterprise applications using Spring Boot, implementing design patterns, and optimizing performance for JVM-based systems.',
            icon: <FaJava color="#007396" />
        },
        {
            skill: 'HTML/CSS',
            proficiency: 95,
            description: 'Expert in semantic HTML5 markup and modern CSS techniques. Mastery of responsive design, animations, Flexbox, Grid, and CSS preprocessors. Able to build pixel-perfect, accessible, and cross-browser compatible interfaces following W3C standards.',
            icon: <FaHtml5 color="#E34F26" />
        },
        {
            skill: 'SQL',
            proficiency: 75,
            description: 'Proficient in writing complex SQL queries, designing normalized database schemas, and optimizing query performance. Experienced with multiple database systems and able to implement efficient data models for various application requirements.',
            icon: <SiPostgresql color="#4479A1" />
        },
        
        // Frameworks and Technologies
        {
            skill: 'React',
            proficiency: 85,
            description: 'Advanced React developer with expertise in building complex, performance-optimized applications. Thoroughly experienced with React ecosystem including hooks, context API, custom hooks, and state management solutions such as Redux.',
            icon: <FaReact color="#61DAFB" />
        },
        {
            skill: 'Node.js',
            proficiency: 75,
            description: 'Proficient in building and deploying Node.js applications with Express. Solid understanding of event-driven architecture, middleware patterns, and RESTful API design. Experienced in implementing authentication, data validation, and real-time features.',
            icon: <FaNodeJs color="#339933" />
        },
        {
            skill: 'GraphQL',
            proficiency: 75,
            description: 'Proficient in building and consuming GraphQL APIs. Experienced in schema design, resolver implementation, and query optimization. Comfortable with Apollo Client/Server for frontend and backend integration of GraphQL services.',
            icon: <SiGraphql color="#E535AB" />
        },
        {
            skill: 'AWS',
            proficiency: 70,
            description: 'Proficient in core AWS services and cloud architecture. Capable of deploying and managing applications using EC2, S3, Lambda, and EMR. Experienced in creating secure infrastructure withappropriate IAM policies as well as scalable services with ELBs and ASGs.',
            icon: <SiAmazonwebservices color="#FF9900" />
        },
        {
            skill: 'Docker',
            proficiency: 70,
            description: 'Proficient in containerization with Docker. Capable of creating optimized images, setting up multi-container applications with Docker Compose, and implementing development workflows that leverage containers for consistency across environments.',
            icon: <FaDocker color="#2496ED" />
        },
        {
            skill: 'Git',
            proficiency: 90,
            description: 'Expert Git user with mastery of version control workflows. Skilled in managing complex branching strategies, resolving merge conflicts, and leveraging Git for effective team collaboration. Comfortable with both command line operations and GUI tools.',
            icon: <FaGitAlt color="#F05032" />
        }
    ];

    const handleCardClick = (skillName) => {
        setExpandedSkill(skillName);
    };

    const handleCloseExpanded = () => {
        setExpandedSkill(null);
    };

    // Get proficiency level text based on score
    const getProficiencyLevel = (score) => {
        if (score >= 90) return 'Expert';
        if (score >= 80) return 'Advanced';
        if (score >= 70) return 'Proficient';
        if (score >= 60) return 'Intermediate';
        return 'Beginner';
    };

    // Get color for proficiency bar
    const getProficiencyColor = (score) => {
        if (score >= 90) return '#4CAF50'; // Green
        if (score >= 80) return '#8BC34A'; // Light Green
        if (score >= 70) return '#CDDC39'; // Lime
        if (score >= 60) return '#FFC107'; // Amber
        return '#FF9800'; // Orange
    };

    // Find the expanded skill data
    const expandedSkillData = expandedSkill 
        ? technicalSkills.find(skill => skill.skill === expandedSkill) 
        : null;

    return (
        <Container maxWidth="lg" ref={containerRef}>
            <motion.div 
                variants={itemVariants}
                initial={{ opacity: 1 }}
                style={{
                    width: '100%',
                    height: '100%',
                    willChange: 'transform',
                    position: 'relative'
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
                        width: '100%',
                        mb: 4,
                        overflow: 'hidden'
                    }}>
                        <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
                            <CodeIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 'inherit' }} />
                            Technical Skills
                            <Tooltip title="Click on cards to learn more" arrow placement="top">
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
                        
                        <Grid container spacing={3}>
                            {technicalSkills.map((skill) => (
                                <Grid 
                                    item 
                                    xs={12} 
                                    sm={6} 
                                    md={3} 
                                    key={skill.skill}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ 
                                            type: "spring", 
                                            stiffness: 400, 
                                            damping: 10
                                        }}
                                        onClick={() => handleCardClick(skill.skill)}
                                        style={{ 
                                            height: '100%',
                                            width: '100%',
                                            cursor: 'pointer',
                                            WebkitTapHighlightColor: 'transparent',
                                            outline: 'none'
                                        }}
                                    >
                                        <Card 
                                            sx={{ 
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                outline: 'none',
                                                WebkitTapHighlightColor: 'transparent',
                                                '&:focus': {
                                                    outline: 'none',
                                                },
                                                '&:hover': {
                                                    boxShadow: isDarkMode 
                                                        ? '0 0 1px 0 rgba(0, 0, 0, 0.9), 0 0 2px 0 rgba(0, 0, 0, 0.8), 0 4px 8px -2px rgba(0, 0, 0, 0.6), 0 8px 16px -4px rgba(0, 0, 0, 0.4)'
                                                        : '0 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 2px 0 rgba(0, 0, 0, 0.15), 0 4px 8px -2px rgba(0, 0, 0, 0.1), 0 8px 16px -4px rgba(0, 0, 0, 0.05)',
                                                    bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'
                                                },
                                                '&:hover .tech-icon': {
                                                    transform: 'scale(1.2) rotate(5deg)',
                                                    filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))'
                                                }
                                            }}
                                        >
                                            <CardContent sx={{ 
                                                display: 'flex', 
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                textAlign: 'center',
                                                p: 3,
                                                gap: 2,
                                                flexGrow: 1
                                            }}>
                                                <Box sx={{ 
                                                    fontSize: '2rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    transition: 'all 0.3s ease',
                                                }} className="tech-icon">
                                                    {skill.icon}
                                                </Box>
                                                <Box sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: 0.5
                                                }}>
                                                    <Typography variant="h6" fontWeight="medium">
                                                        {skill.skill}
                                                    </Typography>
                                                    {/* <ExpandMoreIcon 
                                                        fontSize="small" 
                                                        sx={{ 
                                                            opacity: 0.7,
                                                            color: theme.palette.primary.main,
                                                            display: { xs: 'none', sm: 'block' }
                                                        }} 
                                                    /> */}
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

            {/* Detailed skill view overlay */}
            <AnimatePresence>
                {expandedSkill && expandedSkillData && (
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
                            zIndex: 1000,
                            padding: "1.5rem",
                        }}
                        onClick={handleCloseExpanded}
                    >
                        <div 
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 'calc(100% - 48px)',
                                maxWidth: '1200px',
                                height: 'auto',
                                borderRadius: '16px',
                                backgroundColor: isDarkMode 
                                    ? 'rgba(0, 0, 0, 0.75)' 
                                    : 'rgba(255, 255, 255, 0.75)',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                            }}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <motion.div
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 50 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 300,
                                damping: 25
                            }}
                            style={{
                                width: '100%',
                                maxWidth: '800px',
                                maxHeight: '80vh',
                                overflow: 'auto',
                                borderRadius: '16px',
                                boxShadow: isDarkMode 
                                    ? '0 0 2px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(0, 0, 0, 0.9)'
                                    : '0 0 2px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.3)',
                                position: 'relative',
                                zIndex: 1001,
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Card sx={{ 
                                height: '100%',
                                borderRadius: '16px',
                                backgroundColor: theme.palette.background.paper,
                                // No backdrop filter or blur effect
                            }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Box sx={{ 
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        mb: 3
                                    }}>
                                        <Box sx={{ 
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 2
                                        }}>
                                            <Box sx={{ 
                                                fontSize: '3rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                {expandedSkillData.icon}
                                            </Box>
                                            <Typography variant="h3" fontWeight="bold">
                                                {expandedSkillData.skill}
                                            </Typography>
                                        </Box>
                                        
                                        <IconButton 
                                            onClick={handleCloseExpanded}
                                            size="large"
                                            sx={{ 
                                                '&:hover': { 
                                                    backgroundColor: isDarkMode 
                                                        ? 'rgba(255, 255, 255, 0.1)' 
                                                        : 'rgba(0, 0, 0, 0.05)' 
                                                } 
                                            }}
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                    </Box>
                                    
                                    <Divider sx={{ mb: 3 }} />
                                    
                                    <Typography variant="body1" paragraph sx={{ mb: 4, fontSize: '1.1rem' }}>
                                        {expandedSkillData.description}
                                    </Typography>
                                    
                                    <Box sx={{ mb: 2 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                            <Typography variant="h6" fontWeight="medium">
                                                Proficiency
                                            </Typography>
                                            <Typography variant="h6" fontWeight="bold" color="primary">
                                                {getProficiencyLevel(expandedSkillData.proficiency)}
                                            </Typography>
                                        </Box>
                                        <LinearProgress 
                                            variant="determinate" 
                                            value={expandedSkillData.proficiency} 
                                            sx={{ 
                                                height: 12, 
                                                borderRadius: 6,
                                                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                                                '& .MuiLinearProgress-bar': {
                                                    backgroundColor: getProficiencyColor(expandedSkillData.proficiency),
                                                    borderRadius: 6,
                                                }
                                            }} 
                                        />
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    );
};

export default TechnicalSkillsSection; 