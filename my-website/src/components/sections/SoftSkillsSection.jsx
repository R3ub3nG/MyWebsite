import React, { useState } from 'react';
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
    IconButton,
    Tooltip
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Psychology as PsychologyIcon,
    Lightbulb as LightbulbIcon,
    Forum as ForumIcon,
    Groups as GroupsIcon,
    TaskAlt as TaskAltIcon,
    Refresh as RefreshIcon,
    HandshakeOutlined as HandshakeIcon,
    Close as CloseIcon,
    Info as InfoIcon
} from '@mui/icons-material';

const SoftSkillsSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const [expandedSkill, setExpandedSkill] = useState(null);

    const handleCardClick = (skill) => {
        setExpandedSkill(skill);
    };

    const handleCloseExpanded = (e) => {
        e.stopPropagation();
        setExpandedSkill(null);
    };

    const softSkills = [
        {
            skill: 'Problem Solving',
            shortDescription: 'Strong analytical and creative problem-solving abilities',
            longDescription: 'Expert at breaking down complex problems into manageable components, analyzing root causes, and developing innovative solutions. Experienced in using systematic approaches and design thinking methodologies.',
            icon: <LightbulbIcon sx={{ color: '#FFD700' }} />
        },
        {
            skill: 'Communication',
            shortDescription: 'Excellent verbal and written communication skills',
            longDescription: 'Skilled in clear and concise technical documentation, presenting complex ideas to diverse audiences, and facilitating effective team discussions. Experience in client communication and stakeholder management.',
            icon: <ForumIcon sx={{ color: '#4CAF50' }} />
        },
        {
            skill: 'Team Leadership',
            shortDescription: 'Experience in leading and mentoring development teams',
            longDescription: 'Proven track record of leading cross-functional teams, mentoring junior developers, and fostering a collaborative team culture. Experience in agile methodologies and team performance optimization.',
            icon: <GroupsIcon sx={{ color: '#2196F3' }} />
        },
        {
            skill: 'Project Management',
            shortDescription: 'Skilled in managing complex projects and deadlines',
            longDescription: 'Expertise in project planning, risk management, and resource allocation. Strong experience in agile methodologies, sprint planning, and delivering projects on time and within budget.',
            icon: <TaskAltIcon sx={{ color: '#9C27B0' }} />
        },
        {
            skill: 'Adaptability',
            shortDescription: 'Quick to learn and adapt to new technologies',
            longDescription: 'Demonstrated ability to rapidly learn new technologies and frameworks. Strong track record of successfully adapting to changing project requirements and emerging industry trends.',
            icon: <RefreshIcon sx={{ color: '#FF5722' }} />
        },
        {
            skill: 'Collaboration',
            shortDescription: 'Strong team player with cross-functional collaboration experience',
            longDescription: 'Excellent at working across departments, building consensus, and fostering positive relationships with team members, stakeholders, and clients. Experience in remote and distributed team environments.',
            icon: <HandshakeIcon sx={{ color: '#3F51B5' }} />
        }
    ];

    return (
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
                            borderRadius: '16px',
                            boxShadow: theme => theme.palette.mode === 'dark'
                                ? '0 0 0 1px rgba(255, 255, 255, 0.1), 0 2px 24px rgba(0, 0, 0, 0.2)'
                                : '0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 24px rgba(0, 0, 0, 0.05)',
                            transform: 'translate3d(0, 0, 0)',
                            WebkitTransform: 'translate3d(0, 0, 0)',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden'
                        }}
                    >
                        <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
                            <PsychologyIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 'inherit' }} />
                            Soft Skills
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
                            {softSkills.map((skill, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        onClick={() => handleCardClick(skill)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <Card variant="outlined" sx={{ 
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                boxShadow: isDarkMode 
                                                    ? '0 0 1px 0 rgba(0, 0, 0, 0.9), 0 0 2px 0 rgba(0, 0, 0, 0.8), 0 4px 8px -2px rgba(0, 0, 0, 0.6), 0 8px 16px -4px rgba(0, 0, 0, 0.4)'
                                                    : '0 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 2px 0 rgba(0, 0, 0, 0.15), 0 4px 8px -2px rgba(0, 0, 0, 0.1), 0 8px 16px -4px rgba(0, 0, 0, 0.05)',
                                                bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'
                                            },
                                            '&:hover .skill-icon': {
                                                transform: 'scale(1.2) rotate(5deg)',
                                                filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))'
                                            }
                                        }}>
                                            <CardContent sx={{ p: 3 }}>
                                                <Box sx={{ 
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 2,
                                                    mb: 2
                                                }}>
                                                    <Box sx={{ 
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        transition: 'all 0.3s ease',
                                                    }} className="skill-icon">
                                                        {skill.icon}
                                                    </Box>
                                                    <Typography variant="h6" component="h3" fontWeight="bold">
                                                        {skill.skill}
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body1" color={isDarkMode ? "grey.300" : "text.secondary"}>
                                                    {skill.shortDescription}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </motion.div>
            </motion.div>

            {/* Expanded Card Overlay */}
            <AnimatePresence>
                {expandedSkill && (
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
                                position: 'relative',
                                zIndex: 1001,
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Card sx={{ 
                                height: '100%',
                                borderRadius: '16px',
                                backgroundColor: theme.palette.background.paper,
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
                                                {expandedSkill.icon}
                                            </Box>
                                            <Typography variant="h3" fontWeight="bold">
                                                {expandedSkill.skill}
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
                                        {expandedSkill.longDescription}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    );
};

export default SoftSkillsSection; 