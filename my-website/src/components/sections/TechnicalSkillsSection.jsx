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
    IconButton
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Code as CodeIcon,
    ExpandMore as ExpandMoreIcon,
    Close as CloseIcon
} from '@mui/icons-material';
import { 
    FaReact, 
    FaNodeJs, 
    FaPython, 
    FaDocker, 
    FaGitAlt, 
    FaJs, 
    FaHtml5, 
    FaCss3Alt 
} from 'react-icons/fa';
import { 
    SiTypescript, 
    SiMongodb, 
    SiPostgresql, 
    SiAmazonwebservices, 
    SiGooglecloud 
} from 'react-icons/si';

const TechnicalSkillsSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const [expandedSkill, setExpandedSkill] = useState(null);
    const containerRef = useRef(null);

    // Technical skills data with proficiency levels (0-100)
    const technicalSkills = [
        {
            skill: 'JavaScript',
            proficiency: 90,
            description: 'Expert in modern JavaScript (ES6+) with extensive experience in asynchronous programming, functional programming patterns, and performance optimization techniques.',
            icon: <FaJs color="#F7DF1E" />
        },
        {
            skill: 'React',
            proficiency: 95,
            description: 'Advanced React developer with deep knowledge of hooks, context API, custom hooks, and state management solutions like Redux. Experienced in building complex, performant UIs with React.',
            icon: <FaReact color="#61DAFB" />
        },
        {
            skill: 'TypeScript',
            proficiency: 85,
            description: 'Strong TypeScript skills with experience in type definitions, interfaces, generics, and advanced type manipulation. Used to enhance code quality and developer experience.',
            icon: <SiTypescript color="#3178C6" />
        },
        {
            skill: 'Node.js',
            proficiency: 88,
            description: 'Proficient in building scalable backend services with Node.js, including RESTful APIs, authentication systems, and real-time applications with WebSockets.',
            icon: <FaNodeJs color="#339933" />
        },
        {
            skill: 'HTML/CSS',
            proficiency: 92,
            description: 'Expert in semantic HTML and modern CSS, including Flexbox, Grid, animations, and responsive design. Experienced with CSS preprocessors like SASS and CSS-in-JS solutions.',
            icon: <FaHtml5 color="#E34F26" />
        },
        {
            skill: 'Python',
            proficiency: 80,
            description: 'Skilled in Python development for data analysis, automation, and backend services. Experience with frameworks like Flask and libraries such as Pandas and NumPy.',
            icon: <FaPython color="#3776AB" />
        },
        {
            skill: 'MongoDB',
            proficiency: 85,
            description: 'Experienced in designing and optimizing MongoDB databases, including schema design, indexing strategies, and aggregation pipelines for complex data operations.',
            icon: <SiMongodb color="#47A248" />
        },
        {
            skill: 'PostgreSQL',
            proficiency: 78,
            description: 'Proficient in relational database design, complex SQL queries, and performance optimization. Experience with advanced features like stored procedures and triggers.',
            icon: <SiPostgresql color="#336791" />
        },
        {
            skill: 'AWS',
            proficiency: 75,
            description: 'Experienced with core AWS services including EC2, S3, Lambda, DynamoDB, and CloudFormation. Capable of designing and deploying scalable cloud infrastructure.',
            icon: <SiAmazonwebservices color="#FF9900" />
        },
        {
            skill: 'Docker',
            proficiency: 82,
            description: 'Skilled in containerization with Docker, including creating optimized images, multi-container applications with Docker Compose, and CI/CD integration.',
            icon: <FaDocker color="#2496ED" />
        },
        {
            skill: 'Git',
            proficiency: 90,
            description: 'Advanced Git user with experience in complex workflows, branch management strategies, and resolving merge conflicts. Comfortable with both CLI and GUI tools.',
            icon: <FaGitAlt color="#F05032" />
        },
        {
            skill: 'Google Cloud',
            proficiency: 70,
            description: 'Working knowledge of Google Cloud Platform services including Compute Engine, Cloud Functions, and Firebase. Experience deploying and managing applications on GCP.',
            icon: <SiGooglecloud color="#4285F4" />
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
                                        style={{ 
                                            height: '100%',
                                            width: '100%',
                                        }}
                                    >
                                        <Card 
                                            onClick={() => handleCardClick(skill.skill)}
                                            sx={{ 
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    boxShadow: isDarkMode 
                                                        ? '0 0 1px 0 rgba(0, 0, 0, 0.9), 0 0 2px 0 rgba(0, 0, 0, 0.8), 0 4px 8px -2px rgba(0, 0, 0, 0.6), 0 8px 16px -4px rgba(0, 0, 0, 0.4)'
                                                        : '0 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 2px 0 rgba(0, 0, 0, 0.15), 0 4px 8px -2px rgba(0, 0, 0, 0.1), 0 8px 16px -4px rgba(0, 0, 0, 0.05)',
                                                    bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'
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
                                                }}>
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

            {/* Overlay for expanded skill - NO BLUR */}
            <AnimatePresence>
                {expandedSkill && expandedSkillData && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000,
                            padding: '2rem',
                            // Simple solid background with opacity, NO blur effects
                            backgroundColor: isDarkMode 
                                ? 'rgba(0, 0, 0, 0.75)' 
                                : 'rgba(255, 255, 255, 0.75)',
                            borderRadius: '16px',
                        }}
                        onClick={handleCloseExpanded}
                    >
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
                                    : '0 0 2px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.15)',
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