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
import { Work as WorkIcon } from '@mui/icons-material';

const ExperienceSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    // Experience data
    const experiences = [
        {
            title: "Senior Developer",
            company: "Company Name",
            period: "2021 - Present",
            description: "Led development of key features for the company's flagship product, resulting in a 30% increase in user engagement.",
            responsibilities: [
                "Architected and implemented scalable backend solutions",
                "Mentored junior developers and conducted code reviews",
                "Optimized application performance and reduced load times by 40%"
            ]
        },
        {
            title: "Web Developer",
            company: "Previous Company",
            period: "2018 - 2021",
            description: "Developed and maintained multiple client websites and web applications using modern JavaScript frameworks.",
            responsibilities: [
                "Built responsive interfaces with React and Material UI",
                "Implemented RESTful APIs and integrated third-party services",
                "Collaborated with design team to create intuitive user experiences"
            ]
        }
    ];

    return (
        <Container maxWidth="lg">
            <motion.div variants={itemVariants}>
                <Paper elevation={2} sx={{ p: 4, height: '100%', maxHeight: '80vh' }}>
                    <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
                        <WorkIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 'inherit' }} />
                        Experience
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    
                    <Grid container spacing={4}>
                        {experiences.map((experience, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <Card sx={{ 
                                        p: 3, 
                                        height: '100%',
                                        '&:hover': {
                                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                                        }
                                    }}>
                                        <CardContent>
                                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                                {experience.title}
                                            </Typography>
                                            <Typography variant="h6" color={isDarkMode ? "grey.100" : "text.primary"} gutterBottom>
                                                {experience.company}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary" gutterBottom>
                                                {experience.period}
                                            </Typography>
                                            <Divider sx={{ my: 2 }} />
                                            <Typography variant="body1" paragraph>
                                                {experience.description}
                                            </Typography>
                                            <Typography variant="body1">
                                                {experience.responsibilities.map((responsibility, i) => (
                                                    <React.Fragment key={i}>
                                                        • {responsibility}<br />
                                                    </React.Fragment>
                                                ))}
                                            </Typography>
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

export default ExperienceSection; 