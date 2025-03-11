import React, { useState } from "react";
import {
    Container,
    Grid,
    Paper,
    Typography,
    Divider,
    Card,
    CardContent,
    CardMedia,
    useTheme,
    Box,
    Tooltip,
    IconButton,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
    Code as CodeIcon,
    SportsSoccer as SportsIcon,
    SportsEsports as GamingIcon,
    MusicNote as MusicIcon,
    People as FriendsIcon,
    Favorite as PassionsIcon,
    LiveTv as AnimeIcon,
    Close as CloseIcon,
    Info as InfoIcon,
    DirectionsCar as CarIcon,
    Restaurant as FoodIcon,
    Translate as TranslateIcon,
} from "@mui/icons-material";

const PassionsSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";
    const [expandedPassion, setExpandedPassion] = useState(null);

    const passions = [
        {
            name: "Sports",
            icon: <SportsIcon sx={{ color: "#2196F3", width: "2rem", height: "2rem" }} />,
            description:
                "Passionate about various sports including basketball and football. Playing, watching, and following professional leagues. Appreciating the teamwork, strategy, and physical excellence in sports.",
        },
        {
            name: "Coding",
            icon: <CodeIcon sx={{ color: "#4CAF50", width: "2rem", height: "2rem" }} />,
            description:
                "Building applications and solving problems through code. Exploring new technologies and frameworks to expand my skill set.",
        },
        {
            name: "Gaming",
            icon: <GamingIcon sx={{ color: "#7C4DFF", width: "2rem", height: "2rem" }} />,
            description:
                "Exploring virtual worlds, enjoying competitive multiplayer games, and appreciating the artistry in game design and storytelling.",
        },
        {
            name: "Music",
            icon: <MusicIcon sx={{ color: "#F50057", width: "2rem", height: "2rem"  }} />,
            description:
                "A constant companion in life. Whether working, relaxing, or exercising, music sets the perfect mood and atmosphere.",
        },
        {
            name: "Friends",
            icon: <FriendsIcon sx={{ color: "#00BCD4", width: "2rem", height: "2rem"  }} />,
            description:
                "Creating memories, sharing experiences, and growing together. Nothing beats quality time with good friends.",
        },
        {
            name: "Anime",
            icon: <AnimeIcon sx={{ color: "#EC407A", width: "2rem", height: "2rem"  }} />,
            description:
                "Appreciating the unique storytelling, art styles, and cultural elements. Following both classic and contemporary series.",
        },
        {
            name: "Cars",
            icon: <CarIcon sx={{ color: "#818181", width: "2rem", height: "2rem" }} />,
            description: "Fascinated by automotive engineering, design, and performance. Enjoying everything from classic cars to modern supercars and the latest EV technology.",
        },
        {
            name: "Food",
            icon: <FoodIcon sx={{ color: "#FF9800", width: "2rem", height: "2rem" }} />,
            description: "Exploring diverse cuisines, trying new recipes, and appreciating the cultural significance of food. Both cooking at home and discovering local restaurants.",
        },
        {
            name: "Languages",
            icon: <TranslateIcon sx={{ color: "#9C27B0", width: "2rem", height: "2rem" }} />,
            description: "Fascinated by different languages and cultures. Currently learning and practicing multiple languages to connect with people from around the world and gain new perspectives.",
        },
    ];

    const handleCardClick = (passion) => {
        setExpandedPassion(passion);
    };

    const handleCloseExpanded = (e) => {
        e.stopPropagation();
        setExpandedPassion(null);
    };

    return (
        <Container maxWidth="lg">
            <motion.div variants={itemVariants} initial={{ opacity: 1 }}>
                <motion.div
                    initial={{ scale: 0.98 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            p: 4,
                            borderRadius: "16px",
                            boxShadow: isDarkMode
                                ? "0 0 2px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(0, 0, 0, 0.9), 0 -8px 24px rgba(0, 0, 0, 0.9)"
                                : "0 0 2px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.15), 0 -8px 24px rgba(0, 0, 0, 0.15)",
                            transform: "translate3d(0, 0, 0)",
                            WebkitTransform: "translate3d(0, 0, 0)",
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            position: "relative",
                            zIndex: 1,
                            width: "100%",
                            mb: 4,
                            overflow: "hidden",
                        }}
                    >
                        <Typography
                            variant="h3"
                            component="h2"
                            gutterBottom
                            fontWeight="bold"
                            sx={{ mb: 4 }}
                        >
                            <PassionsIcon
                                sx={{
                                    mr: 1,
                                    verticalAlign: "middle",
                                    fontSize: "inherit",
                                }}
                            />
                            My Passions
                            <Tooltip
                                title="Click on cards to learn more"
                                arrow
                                placement="top"
                            >
                                <IconButton
                                    size="small"
                                    sx={{
                                        ml: 2,
                                        verticalAlign: "middle",
                                        color: (theme) =>
                                            theme.palette.mode === "dark"
                                                ? "rgba(255, 255, 255, 0.7)"
                                                : "rgba(0, 0, 0, 0.6)",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform:
                                                "rotate(15deg) scale(1.2)",
                                            color: (theme) =>
                                                theme.palette.mode === "dark"
                                                    ? "rgba(255, 255, 255, 0.9)"
                                                    : "rgba(0, 0, 0, 0.8)",
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === "dark"
                                                    ? "rgba(255, 255, 255, 0.1)"
                                                    : "rgba(0, 0, 0, 0.05)",
                                        },
                                    }}
                                >
                                    <InfoIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        </Typography>
                        <Divider sx={{ mb: 4 }} />

                        <Grid container spacing={3}>
                            {passions.map((passion, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 10,
                                        }}
                                        onClick={() => handleCardClick(passion)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <Card
                                            sx={{
                                                height: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                cursor: "pointer",
                                                "&:hover": {
                                                    boxShadow: isDarkMode
                                                        ? "0 0 1px 0 rgba(0, 0, 0, 0.9), 0 0 2px 0 rgba(0, 0, 0, 0.8), 0 4px 8px -2px rgba(0, 0, 0, 0.6), 0 8px 16px -4px rgba(0, 0, 0, 0.4)"
                                                        : "0 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 2px 0 rgba(0, 0, 0, 0.15), 0 4px 8px -2px rgba(0, 0, 0, 0.1), 0 8px 16px -4px rgba(0, 0, 0, 0.05)",
                                                    bgcolor: isDarkMode
                                                        ? "rgba(255, 255, 255, 0.05)"
                                                        : "rgba(0, 0, 0, 0.02)",
                                                },
                                                "&:hover .passion-icon": {
                                                    transform:
                                                        "scale(1.2) rotate(5deg)",
                                                    filter: "drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))",
                                                },
                                            }}
                                        >
                                            <CardContent
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    textAlign: "center",
                                                    p: 3,
                                                    gap: 2,
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center",
                                                        fontSize: "2rem",
                                                        transition:
                                                            "all 0.3s ease",
                                                    }}
                                                    className="passion-icon"
                                                >
                                                    {passion.icon}
                                                </Box>
                                                <Typography
                                                    variant="h6"
                                                    fontWeight="medium"
                                                >
                                                    {passion.name}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </motion.div>
            </motion.div>

            {/* Expanded Card Overlay */}
            <AnimatePresence>
                {expandedPassion && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1000,
                            padding: "2rem",
                        }}
                        onClick={handleCloseExpanded}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: "calc(100% - 48px)",
                                maxWidth: "1200px",
                                height: "auto",
                                borderRadius: "16px",
                                backgroundColor: isDarkMode
                                    ? "rgba(0, 0, 0, 0.75)"
                                    : "rgba(255, 255, 255, 0.75)",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(100px)",
                            }}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <motion.div
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 50 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 25,
                            }}
                            style={{
                                width: "100%",
                                maxWidth: "800px",
                                maxHeight: "80vh",
                                overflow: "auto",
                                borderRadius: "16px",
                                boxShadow: isDarkMode 
                                    ? '0 0 2px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(0, 0, 0, 0.9)'
                                    : '0 0 2px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.15)',
                                position: "relative",
                                zIndex: 1001,
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Card
                                sx={{
                                    height: "100%",
                                    borderRadius: "16px",
                                    backgroundColor:
                                        theme.palette.background.paper,
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            mb: 3,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 2,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    fontSize: "3rem",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                {expandedPassion.icon}
                                            </Box>
                                            <Typography
                                                variant="h3"
                                                fontWeight="bold"
                                            >
                                                {expandedPassion.name}
                                            </Typography>
                                        </Box>

                                        <IconButton
                                            onClick={handleCloseExpanded}
                                            size="large"
                                            sx={{
                                                "&:hover": {
                                                    backgroundColor: isDarkMode
                                                        ? "rgba(255, 255, 255, 0.1)"
                                                        : "rgba(0, 0, 0, 0.05)",
                                                },
                                            }}
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                    </Box>

                                    <Divider sx={{ mb: 3 }} />

                                    <Typography
                                        variant="body1"
                                        paragraph
                                        sx={{ mb: 4, fontSize: "1.1rem" }}
                                    >
                                        {expandedPassion.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    );
};

export default PassionsSection;
