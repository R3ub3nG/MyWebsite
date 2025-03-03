import React from 'react';
import { 
    Container, 
    Grid, 
    Paper, 
    Typography, 
    Divider,
    Card,
    CardContent,
    useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
    Code as CodeIcon,
    Psychology as PsychologyIcon 
} from '@mui/icons-material';

const SkillsSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    // Technical skills data
    const technicalSkills = [
        'React', 'JavaScript', 'TypeScript', 'Node.js', 
        'Python', 'Material UI', 'HTML/CSS', 'GraphQL', 
        'MongoDB', 'SQL', 'AWS', 'Docker'
    ];

    // Soft skills data
    const softSkills = [
        {
            skill: 'Problem Solving',
            description: 'Strong analytical and creative problem-solving abilities'
        },
        {
            skill: 'Communication',
            description: 'Excellent verbal and written communication skills'
        },
        {
            skill: 'Team Leadership',
            description: 'Experience in leading and mentoring development teams'
        },
        {
            skill: 'Project Management',
            description: 'Skilled in managing complex projects and deadlines'
        },
        {
            skill: 'Adaptability',
            description: 'Quick to learn and adapt to new technologies'
        },
        {
            skill: 'Collaboration',
            description: 'Strong team player with cross-functional collaboration experience'
        }
    ];

    return (
        <Container maxWidth="lg">
            <motion.div variants={itemVariants}>
                {/* Technical Skills */}
                <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
                    <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
                        <CodeIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 'inherit' }} />
                        Technical Skills
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    
                    <Grid container spacing={3}>
                        {technicalSkills.map((skill) => (
                            <Grid item xs={6} md={4} lg={3} key={skill}>
                                <Card variant="outlined" sx={{ 
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    height: '100%',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                    }
                                }}>
                                    <CardContent sx={{ 
                                        display: 'flex', 
                                        justifyContent: 'center', 
                                        alignItems: 'center',
                                        height: '100%',
                                        p: 3
                                    }}>
                                        <Typography variant="h6" fontWeight="medium" align="center">{skill}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>

                {/* Soft Skills */}
                <Paper elevation={2} sx={{ p: 4 }}>
                    <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
                        <PsychologyIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 'inherit' }} />
                        Soft Skills
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    
                    <Grid container spacing={3}>
                        {softSkills.map((skill, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Card variant="outlined" sx={{ 
                                    height: '100%',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                    }
                                }}>
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                                            {skill.skill}
                                        </Typography>
                                        <Typography variant="body1" color={isDarkMode ? "grey.300" : "text.secondary"}>
                                            {skill.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </motion.div>
        </Container>
    );
};

export default SkillsSection; 