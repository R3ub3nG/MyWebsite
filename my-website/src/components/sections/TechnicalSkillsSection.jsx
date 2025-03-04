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

const TechnicalSkillsSection = ({ itemVariants }) => {
    const technicalSkills = [
        'React', 'JavaScript', 'TypeScript', 'Node.js', 
        'Python', 'Material UI', 'HTML/CSS', 'GraphQL', 
        'MongoDB', 'SQL', 'AWS', 'Docker'
    ];

    return (
        <Container maxWidth="lg">
            <motion.div variants={itemVariants}>
                <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
                    <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
                        <CodeIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 'inherit' }} />
                        Technical Skills
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    
                    <Grid container spacing={3}>
                        {technicalSkills.map((skill) => (
                            <Grid item xs={6} md={4} lg={3} key={skill}>
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <Card variant="outlined" sx={{ 
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        '&:hover': {
                                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
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
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </motion.div>
        </Container>
    );
};

export default TechnicalSkillsSection; 