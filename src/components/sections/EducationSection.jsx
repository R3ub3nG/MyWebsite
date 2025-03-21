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
    Box,
    Tooltip,
    IconButton
} from '@mui/material';
import { motion } from 'framer-motion';
import { School as SchoolIcon, Info as InfoIcon } from '@mui/icons-material';

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
                        px: 4,
                        pt: 4,
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
                            <SchoolIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 'inherit' }} />
                            Education & Certification
                            <Tooltip title="Scroll to see more" arrow placement="top">
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
                        <Divider sx={{ mb: 2 }} />
                        
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 3,
                                overflowX: 'auto',
                                pb: 2,
                                scrollSnapType: 'x mandatory',
                                scrollPadding: '0 24px',
                                scrollPaddingRight: '24px',
                                backgroundColor: 'transparent',
                                '::-webkit-scrollbar': {
                                    height: 6,
                                    backgroundColor: 'transparent',
                                },
                                '::-webkit-scrollbar-track': {
                                    backgroundColor: 'transparent',
                                },
                                '::-webkit-scrollbar-thumb': {
                                    backgroundColor: theme => theme.palette.mode === 'dark' 
                                        ? 'rgba(255, 255, 255, 0.5)' 
                                        : 'rgba(0, 0, 0, 0.5)',
                                    borderRadius: '10px',
                                    '&:hover': {
                                        backgroundColor: theme => theme.palette.mode === 'dark'
                                            ? 'rgba(255, 255, 255, 0.7)'
                                            : 'rgba(0, 0, 0, 0.7)'
                                    }
                                },
                                scrollbarWidth: 'thin',
                                scrollbarColor: 'rgba(0, 0, 0, 0.5) transparent',
                                px: 12,
                                '&:hover::-webkit-scrollbar-thumb': {
                                    backgroundColor: theme => theme.palette.mode === 'dark' 
                                        ? 'rgba(255, 255, 255, 0.5)' 
                                        : 'rgba(0, 0, 0, 0.5)',
                                },
                                '&::-webkit-scrollbar-thumb:window-inactive': {
                                    backgroundColor: 'transparent',
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 6,
                                    width: 'fit-content',
                                    py: 3,
                                    pl: 0,
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
                                                sm: 'calc((100vw - 180px - 32px) / 2)',
                                                md: 'calc((1200px - 180px - 32px) / 2)',
                                            },
                                            flexShrink: 0,
                                            scrollSnapAlign: 'start',
                                            '&:last-child': {
                                                scrollSnapAlign: 'end',
                                            },
                                        }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.03 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            style={{ width: '100%', height: '100%' }}
                                        >
                                            <Card sx={{ 
                                                p: 4, 
                                                height: '400px',
                                                overflow: 'auto',
                                                '::-webkit-scrollbar': {
                                                    width: 8,
                                                    backgroundColor: 'transparent',
                                                },
                                                '::-webkit-scrollbar-track': {
                                                    backgroundColor: 'transparent',
                                                },
                                                '::-webkit-scrollbar-thumb': {
                                                    backgroundColor: 'transparent',
                                                    borderRadius: '4px',
                                                },
                                                '&:hover::-webkit-scrollbar-thumb': {
                                                    backgroundColor: theme => theme.palette.mode === 'dark' 
                                                        ? 'rgba(255, 255, 255, 0.5)' 
                                                        : 'rgba(0, 0, 0, 0.5)',
                                                },
                                                scrollbarWidth: 'thin',
                                                scrollbarColor: 'transparent transparent',
                                                '&:hover': {
                                                    scrollbarColor: theme => theme.palette.mode === 'dark'
                                                        ? 'rgba(255, 255, 255, 0.5) transparent'
                                                        : 'rgba(0, 0, 0, 0.5) transparent',
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