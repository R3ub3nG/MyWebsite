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
import { School as SchoolIcon } from '@mui/icons-material';

const EducationSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    // Education data
    const education = [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University Name",
            period: "2014 - 2018",
            details: [
                "GPA: 3.8/4.0",
                "Dean's List: All semesters",
                "Senior Project: AI-powered recommendation system",
                "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development, Machine Learning"
            ]
        },
        {
            degree: "Relevant Certifications",
            institution: "Various Institutions",
            period: "",
            intro: "Professional certifications that have enhanced my technical expertise:",
            details: [
                "AWS Certified Developer (2022)",
                "Google Cloud Professional (2021)",
                "React Advanced Certification (2020)",
                "MongoDB Database Administrator (2019)",
                "Certified Scrum Master (2018)"
            ]
        }
    ];

    return (
        <Container maxWidth="lg">
            <motion.div variants={itemVariants}>
                <Paper elevation={2} sx={{ p: 4, height: '100%', maxHeight: '80vh' }}>
                    <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
                        <SchoolIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 'inherit' }} />
                        Education
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    
                    <Grid container spacing={4}>
                        {education.map((item, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <Card variant="outlined" sx={{ 
                                        height: '100%',
                                        p: 3,
                                        '&:hover': {
                                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                                        }
                                    }}>
                                        <CardContent>
                                            <Typography variant="h5" component="div" fontWeight="bold" gutterBottom>
                                                {item.degree}
                                            </Typography>
                                            <Typography variant="h6" sx={{ mb: 1.5 }} color={isDarkMode ? "grey.100" : "text.secondary"}>
                                                {item.institution}
                                            </Typography>
                                            {item.period && (
                                                <Typography variant="body1" color="text.secondary" gutterBottom>
                                                    {item.period}
                                                </Typography>
                                            )}
                                            <Divider sx={{ my: 2 }} />
                                            {item.intro && (
                                                <Typography variant="body1" paragraph>
                                                    {item.intro}
                                                </Typography>
                                            )}
                                            <Typography variant="body1">
                                                {item.details.map((detail, i) => (
                                                    <React.Fragment key={i}>
                                                        • {detail}<br />
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

export default EducationSection; 