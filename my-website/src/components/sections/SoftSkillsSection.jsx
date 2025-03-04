import React from 'react';
import { 
    Container, 
    Grid, 
    Paper, 
    Typography, 
    Divider,
    Card,
    CardContent,
    useTheme,
    Tooltip,
    Zoom,
    Box
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
    Psychology as PsychologyIcon,
    Lightbulb as LightbulbIcon,
    Forum as ForumIcon,
    Groups as GroupsIcon,
    TaskAlt as TaskAltIcon,
    Refresh as RefreshIcon,
    HandshakeOutlined as HandshakeIcon
} from '@mui/icons-material';

const SoftSkillsSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

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
            <motion.div variants={itemVariants}>
                <Paper elevation={0} sx={{ 
                    p: 4,
                    borderRadius: '16px',
                    boxShadow: isDarkMode 
                        ? '0 0 2px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(0, 0, 0, 0.9), 0 -8px 24px rgba(0, 0, 0, 0.9)'
                        : '0 0 2px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.15), 0 -8px 24px rgba(0, 0, 0, 0.15)',
                    transform: 'translate3d(0, 0, 0)',
                    WebkitTransform: 'translate3d(0, 0, 0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                }}>
                    <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
                        <PsychologyIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 'inherit' }} />
                        Soft Skills
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    
                    <Grid container spacing={3}>
                        {softSkills.map((skill, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <Tooltip 
                                        title={
                                            <Typography sx={{ 
                                                p: 1,
                                                color: isDarkMode ? 'white' : 'text.primary'
                                            }}>
                                                {skill.longDescription}
                                            </Typography>
                                        }
                                        TransitionComponent={Zoom}
                                        arrow
                                        placement="top"
                                        enterDelay={200}
                                        leaveDelay={0}
                                        componentsProps={{
                                            tooltip: {
                                                sx: {
                                                    bgcolor: isDarkMode ? 'rgba(66, 66, 66, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                                                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                                    '& .MuiTooltip-arrow': {
                                                        color: isDarkMode ? 'rgba(66, 66, 66, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                                                    },
                                                    maxWidth: 300,
                                                    fontSize: '0.875rem',
                                                }
                                            }
                                        }}
                                    >
                                        <Card variant="outlined" sx={{ 
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            cursor: 'help',
                                            '&:hover': {
                                                boxShadow: isDarkMode 
                                                    ? '0 0 1px 0 rgba(0, 0, 0, 0.9), 0 0 2px 0 rgba(0, 0, 0, 0.8), 0 4px 8px -2px rgba(0, 0, 0, 0.6), 0 8px 16px -4px rgba(0, 0, 0, 0.4)'
                                                    : '0 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 2px 0 rgba(0, 0, 0, 0.15), 0 4px 8px -2px rgba(0, 0, 0, 0.1), 0 8px 16px -4px rgba(0, 0, 0, 0.05)',
                                                bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'
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
                                                        transition: 'transform 0.2s',
                                                        '&:hover': {
                                                            transform: 'scale(1.1)',
                                                        }
                                                    }}>
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
                                    </Tooltip>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </motion.div>
        </Container>
    );
};

export default SoftSkillsSection; 