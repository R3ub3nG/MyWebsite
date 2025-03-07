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
    Box
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
                "Relevant coursework: Data Structures, Algorithms, Database Systems"
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
                "MongoDB Database Administrator (2019)"
            ]
        },
        {
            degree: "High School Diploma",
            institution: "High School Name",
            period: "2010 - 2014",
            details: [
                "Valedictorian",
                "Advanced Placement: Computer Science, Mathematics",
                "President of Computer Science Club",
                "Science Fair Winner - Programming Category"
            ]
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
                    <Paper elevation={0} sx={{ 
                        p: 4,
                        borderRadius: '16px',
                        backgroundColor: theme => theme.palette.mode === 'dark'
                            ? 'rgba(22, 28, 36, 0.8)'
                            : 'rgba(255, 255, 255, 0.8)',
                        boxShadow: theme => theme.palette.mode === 'dark'
                            ? '0 0 0 1px rgba(255, 255, 255, 0.1), 0 2px 24px rgba(0, 0, 0, 0.2)'
                            : '0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 24px rgba(0, 0, 0, 0.05)',
                    }}>
                        <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
                            <SchoolIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 'inherit' }} />
                            Education & Certification
                        </Typography>
                        <Divider sx={{ mb: 4 }} />
                        
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 3,
                                overflowX: 'auto',
                                pb: 2,
                                scrollSnapType: 'x mandatory',
                                backgroundColor: 'transparent',
                                '::-webkit-scrollbar': {
                                    height: 6,
                                },
                                '::-webkit-scrollbar-thumb': {
                                    backgroundColor: theme => theme.palette.mode === 'dark' 
                                        ? 'rgba(255, 255, 255, 0.8)' 
                                        : 'rgba(0, 0, 0, 0.3)',
                                    borderRadius: '10px',
                                    '&:hover': {
                                        backgroundColor: theme => theme.palette.mode === 'dark'
                                            ? 'rgba(255, 255, 255, 0.4)'
                                            : 'rgba(0, 0, 0, 0.4)'
                                    }
                                },
                                scrollbarWidth: 'thin',
                                px: 12,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 3,
                                    width: 'fit-content',
                                    py: 6,
                                    pl: 8,
                                    pr: 8,
                                    mx: 4,
                                }}
                            >
                                {education.map((edu, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            width: {
                                                xs: '85%',
                                                sm: 'calc((100vw - 160px - 24px) / 2)',
                                                md: 'calc((1200px - 160px - 24px) / 2)',
                                            },
                                            flexShrink: 0,
                                            scrollSnapAlign: 'start',
                                            paddingLeft: 6,
                                        }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.03 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            style={{ width: '100%', height: '100%' }}
                                        >
                                            <Card sx={{ 
                                                p: 3, 
                                                height: '400px',
                                                overflow: 'auto',
                                                '::-webkit-scrollbar': {
                                                    width: 8,
                                                    bgcolor: 'transparent',
                                                    display: 'none'
                                                },
                                                '&:hover::-webkit-scrollbar': {
                                                    display: 'block'
                                                },
                                                '::-webkit-scrollbar-thumb': {
                                                    backgroundColor: theme => theme.palette.mode === 'dark' 
                                                        ? 'rgba(255, 255, 255, 0.3)' 
                                                        : 'rgba(0, 0, 0, 0.3)',
                                                    borderRadius: '4px',
                                                    '&:hover': {
                                                        backgroundColor: theme => theme.palette.mode === 'dark'
                                                            ? 'rgba(255, 255, 255, 0.4)'
                                                            : 'rgba(0, 0, 0, 0.4)'
                                                    }
                                                },
                                                '::-webkit-scrollbar-track': {
                                                    backgroundColor: theme => theme.palette.mode === 'dark'
                                                        ? 'rgba(255, 255, 255, 0.05)'
                                                        : 'rgba(0, 0, 0, 0.05)',
                                                    borderRadius: '4px'
                                                },
                                                '&:hover': {
                                                    boxShadow: isDarkMode 
                                                        ? '0 0 1px 0 rgba(0, 0, 0, 0.9), 0 0 2px 0 rgba(0, 0, 0, 0.8), 0 4px 8px -2px rgba(0, 0, 0, 0.6), 0 8px 16px -4px rgba(0, 0, 0, 0.4)'
                                                        : '0 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 2px 0 rgba(0, 0, 0, 0.15), 0 4px 8px -2px rgba(0, 0, 0, 0.1), 0 8px 16px -4px rgba(0, 0, 0, 0.05)'
                                                }
                                            }}>
                                                <CardContent>
                                                    <Typography variant="h5" component="div" fontWeight="bold" gutterBottom>
                                                        {edu.degree}
                                                    </Typography>
                                                    <Typography variant="h6" sx={{ mb: 1.5 }} color={isDarkMode ? "grey.100" : "text.secondary"}>
                                                        {edu.institution}
                                                    </Typography>
                                                    {edu.period && (
                                                        <Typography variant="body1" color="text.secondary" gutterBottom>
                                                            {edu.period}
                                                        </Typography>
                                                    )}
                                                    <Divider sx={{ my: 2 }} />
                                                    {edu.intro && (
                                                        <Typography variant="body1" paragraph>
                                                            {edu.intro}
                                                        </Typography>
                                                    )}
                                                    <Typography variant="body1">
                                                        {edu.details.map((detail, i) => (
                                                            <React.Fragment key={i}>
                                                                • {detail}<br />
                                                            </React.Fragment>
                                                        ))}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Paper>
                </motion.div>
            </motion.div>
        </Container>
    );
};

export default EducationSection; 