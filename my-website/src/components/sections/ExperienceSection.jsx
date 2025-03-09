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
        },
        {
            title: "Junior Developer",
            company: "First Company",
            period: "2016 - 2018",
            description: "Started career as a junior developer working on frontend development and bug fixes.",
            responsibilities: [
                "Developed and maintained responsive web applications",
                "Fixed bugs and improved application performance",
                "Participated in code reviews and team meetings"
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
                        backgroundColor: theme => theme.palette.mode === 'dark'
                            ? 'rgba(22, 28, 36, 0.8)'
                            : 'rgba(255, 255, 255, 0.8)',
                        boxShadow: theme => theme.palette.mode === 'dark'
                            ? '0 0 0 1px rgba(255, 255, 255, 0.1), 0 2px 24px rgba(0, 0, 0, 0.2)'
                            : '0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 24px rgba(0, 0, 0, 0.05)',
                    }}>
                        <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
                            <WorkIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 'inherit' }} />
                            Experience
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
                                },
                                '::-webkit-scrollbar-thumb': {
                                    backgroundColor: theme => theme.palette.mode === 'dark' 
                                        ? 'rgba(255, 255, 255, 0.5)' 
                                        : 'rgba(0, 0, 0, 0.3)',
                                    borderRadius: '10px',
                                    '&:hover': {
                                        backgroundColor: theme => theme.palette.mode === 'dark'
                                            ? 'rgba(255, 255, 255, 0.7)'
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
                                    gap: 6,
                                    width: 'fit-content',
                                    py: 3,
                                    pl: 0,
                                    pr: 8,
                                    mx: 4,
                                }}
                            >
                                {experiences.map((experience, index) => (
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

export default ExperienceSection; 