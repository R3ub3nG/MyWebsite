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
    Code as CodeIcon,
    Javascript as JavascriptIcon,
    Html as HtmlIcon,
    Storage as StorageIcon,
    Cloud as CloudIcon,
    Terminal as TerminalIcon,
    DesignServices as DesignServicesIcon
} from '@mui/icons-material';
import { 
    SiReact, 
    SiTypescript, 
    SiNodedotjs, 
    SiPython, 
    SiGraphql, 
    SiMongodb, 
    SiDocker 
} from 'react-icons/si';

const TechnicalSkillsSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const technicalSkills = [
        {
            name: 'React',
            description: 'Advanced proficiency in React.js, including hooks, context, and state management. Experience with Next.js and React Native.',
            icon: <SiReact size={24} style={{ color: '#61DAFB' }} />
        },
        {
            name: 'JavaScript',
            description: 'Expert-level JavaScript development including ES6+, async programming, and functional programming concepts.',
            icon: <JavascriptIcon sx={{ color: '#F7DF1E' }} />
        },
        {
            name: 'TypeScript',
            description: 'Strong TypeScript skills with focus on type safety, interfaces, and advanced type system features.',
            icon: <SiTypescript size={24} style={{ color: '#3178C6' }} />
        },
        {
            name: 'Node.js',
            description: 'Backend development with Node.js, Express.js, and RESTful API design principles.',
            icon: <SiNodedotjs size={24} style={{ color: '#339933' }} />
        },
        {
            name: 'Python',
            description: 'Python development for web applications, data analysis, and automation scripts.',
            icon: <SiPython size={24} style={{ color: '#3776AB' }} />
        },
        {
            name: 'Material UI',
            description: 'Expert in Material UI component library, theming, and responsive design patterns.',
            icon: <DesignServicesIcon sx={{ color: '#007FFF', fontSize: 24 }} />
        },
        {
            name: 'HTML/CSS',
            description: 'Advanced HTML5 and CSS3 skills, including Flexbox, Grid, and modern CSS features.',
            icon: <HtmlIcon sx={{ color: '#E34F26' }} />
        },
        {
            name: 'GraphQL',
            description: 'Experience with GraphQL API design, queries, mutations, and Apollo Client/Server.',
            icon: <SiGraphql size={24} style={{ color: '#E10098' }} />
        },
        {
            name: 'MongoDB',
            description: 'Database design and optimization using MongoDB, including aggregation pipelines and indexing.',
            icon: <SiMongodb size={24} style={{ color: '#47A248' }} />
        },
        {
            name: 'SQL',
            description: 'Proficient in SQL database design, complex queries, and performance optimization.',
            icon: <StorageIcon sx={{ color: '#4479A1' }} />
        },
        {
            name: 'AWS',
            description: 'Cloud infrastructure management with AWS services including EC2, S3, Lambda, and more.',
            icon: <CloudIcon sx={{ color: '#FF9900' }} />
        },
        {
            name: 'Docker',
            description: 'Container development and orchestration using Docker and Docker Compose.',
            icon: <SiDocker size={24} style={{ color: '#2496ED' }} />
        }
    ];

    return (
        <Container maxWidth="lg">
            <motion.div variants={itemVariants}>
                <Paper elevation={0} sx={{ 
                    p: 4, 
                    mb: 4,
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
                        <CodeIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 'inherit' }} />
                        Technical Skills
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    
                    <Grid container spacing={3}>
                        {technicalSkills.map((skill) => (
                            <Grid item xs={6} md={4} lg={3} key={skill.name}>
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
                                                {skill.description}
                                            </Typography>
                                        }
                                        TransitionComponent={Zoom}
                                        arrow
                                        placement="top"
                                        enterDelay={100}
                                        leaveDelay={0}
                                        enterNextDelay={100}
                                        followCursor
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
                                        PopperProps={{
                                            modifiers: [
                                                {
                                                    name: 'offset',
                                                    options: {
                                                        offset: [0, -8],
                                                    },
                                                },
                                            ],
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
                                            <CardContent sx={{ 
                                                display: 'flex', 
                                                flexDirection: 'column',
                                                justifyContent: 'center', 
                                                alignItems: 'center',
                                                height: '100%',
                                                p: 3,
                                                gap: 1
                                            }}>
                                                <Box sx={{ 
                                                    display: 'flex', 
                                                    justifyContent: 'center', 
                                                    alignItems: 'center',
                                                    mb: 1,
                                                    transition: 'transform 0.2s',
                                                    '&:hover': {
                                                        transform: 'scale(1.1)',
                                                    }
                                                }}>
                                                    {skill.icon}
                                                </Box>
                                                <Typography variant="h6" fontWeight="medium" align="center">
                                                    {skill.name}
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

export default TechnicalSkillsSection; 