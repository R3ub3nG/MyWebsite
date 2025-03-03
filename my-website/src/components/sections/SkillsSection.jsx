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
import { Code as CodeIcon } from '@mui/icons-material';

const SkillsSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    // List of skills to display
    const skills = [
        'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Material UI',
        'HTML/CSS', 'GraphQL', 'MongoDB', 'SQL', 'AWS', 'Docker'
    ];

    return (
        <Container maxWidth="lg">
            <motion.div variants={itemVariants}>
                <Paper elevation={2} sx={{ p: 4, height: '100%', maxHeight: '80vh' }}>
                    <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
                        <CodeIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 'inherit' }} />
                        Skills
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    
                    <Grid container spacing={3}>
                        {skills.map((skill) => (
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
            </motion.div>
        </Container>
    );
};

export default SkillsSection; 