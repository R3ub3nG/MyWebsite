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
import { Psychology as PsychologyIcon } from '@mui/icons-material';

const SoftSkillsSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

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

export default SoftSkillsSection; 