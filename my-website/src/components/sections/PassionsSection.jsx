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
    SportsFootball as FootballIcon,
    SportsBasketball as BasketballIcon,
    SportsEsports as GamingIcon,
    MusicNote as MusicIcon,
    People as FriendsIcon,
    Favorite as PassionsIcon,
    LiveTv as AnimeIcon
} from '@mui/icons-material';

const PassionsSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const passions = [
        {
            name: "Coding",
            icon: <CodeIcon sx={{ color: '#00C853' }} />,
            description: "Building innovative solutions and learning new technologies. I love the creative process of turning ideas into reality through code."
        },
        {
            name: "Football",
            icon: <FootballIcon sx={{ color: '#1565C0' }} />,
            description: "The beautiful game! Playing as a midfielder, watching Premier League matches, and following tactical analyses of different playing styles."
        },
        {
            name: "Basketball",
            icon: <BasketballIcon sx={{ color: '#FF6D00' }} />,
            description: "Playing pickup games, following the NBA, and admiring the strategic elements of the game. The fast-paced nature and team dynamics make it exciting."
        },
        {
            name: "Gaming",
            icon: <GamingIcon sx={{ color: '#7C4DFF' }} />,
            description: "Exploring virtual worlds, enjoying competitive multiplayer games, and appreciating the artistry in game design and storytelling."
        },
        {
            name: "Music",
            icon: <MusicIcon sx={{ color: '#F50057' }} />,
            description: "A constant companion in life. Whether working, relaxing, or exercising, music sets the perfect mood and atmosphere."
        },
        {
            name: "Friends",
            icon: <FriendsIcon sx={{ color: '#00BCD4' }} />,
            description: "Creating memories, sharing experiences, and growing together. Nothing beats quality time with good friends."
        },
        {
            name: "Anime",
            icon: <AnimeIcon sx={{ color: '#EC407A' }} />,
            description: "Appreciating the unique storytelling, art styles, and cultural elements. Following both classic and contemporary series."
        }
    ];

    return (
        <Container maxWidth="lg">
            <motion.div variants={itemVariants}>
                <Paper elevation={0} sx={{ 
                    p: 4,
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
                    mb: 4
                }}>
                    <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
                        <PassionsIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 'inherit' }} />
                        My Passions
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    
                    <Grid container spacing={3}>
                        {passions.map((passion, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    style={{ height: '100%' }}
                                >
                                    <Tooltip
                                        title={
                                            <Typography sx={{ 
                                                p: 1,
                                                color: isDarkMode ? 'white' : 'text.primary'
                                            }}>
                                                {passion.description}
                                            </Typography>
                                        }
                                        TransitionComponent={Zoom}
                                        arrow
                                        placement="top"
                                        enterDelay={200}
                                        leaveDelay={0}
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
                                    >
                                        <Card sx={{ 
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
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                textAlign: 'center',
                                                p: 3,
                                                gap: 2
                                            }}>
                                                <Box sx={{ 
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    fontSize: '2rem',
                                                    transition: 'transform 0.2s',
                                                    '&:hover': {
                                                        transform: 'scale(1.1)',
                                                    }
                                                }}>
                                                    {passion.icon}
                                                </Box>
                                                <Typography variant="h6" fontWeight="medium">
                                                    {passion.name}
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

export default PassionsSection; 