import React from "react";
import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    Avatar,
    Divider,
    Card,
    CardContent,
    IconButton,
    useTheme,
    AppBar,
    Toolbar,
} from "@mui/material";
import { motion } from "framer-motion";
import {
    Code as CodeIcon,
    School as SchoolIcon,
    Work as WorkIcon,
    Email as EmailIcon,
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import ThemeToggle from "./ThemeToggle";

// Animation variants for Framer Motion
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 },
    },
};

// Section component that fills the viewport height
const Section = ({ children, id, bgcolor }) => {
    const theme = useTheme();

    return (
        <Box
            id={id}
            data-section={id}
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                py: 4,
                position: "relative",
                scrollSnapAlign: "start", // For smooth snap scrolling
                bgcolor: bgcolor || "transparent",
            }}
        >
            {children}
        </Box>
    );
};

const Dashboard = ({ toggleColorMode }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";

    // Gradient background that works in both light and dark modes
    const headerGradient = isDarkMode
        ? "linear-gradient(135deg, rgba(63, 81, 181, 0.85), rgba(100, 181, 246, 0.85))"
        : "linear-gradient(135deg, rgba(144, 202, 249, 0.85), rgba(33, 150, 243, 0.85))";

    return (
        <>
            <AppBar
                position="fixed"
                color="transparent"
                elevation={0}
                sx={{ zIndex: 1100 }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, fontWeight: 600 }}
                    >
                        My Portfolio
                    </Typography>
                    <ThemeToggle toggleColorMode={toggleColorMode} />
                </Toolbar>
            </AppBar>

            <Box
                id="scrollContainer"
                sx={{
                    pt: "64px", // Height of AppBar
                    scrollSnapType: { xs: "none", md: "y mandatory" }, // Enable snap scrolling on larger screens
                    height: "100vh",
                    overflowY: "auto",
                    scrollBehavior: "smooth",
                }}
            >
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Header/Profile Section */}
                    <Section id="profile">
                        <Container maxWidth="lg">
                            <motion.div variants={itemVariants}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 4,
                                        display: "flex",
                                        flexDirection: {
                                            xs: "column",
                                            md: "row",
                                        },
                                        alignItems: "center",
                                        background: headerGradient,
                                        color: "white",
                                        boxShadow:
                                            "0 10px 30px rgba(0,0,0,0.15)",
                                        overflow: "hidden",
                                        position: "relative",
                                        height: { xs: "auto", md: "70vh" },
                                        maxHeight: "800px",
                                    }}
                                >
                                    {/* Decorative circles */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            width: "150px",
                                            height: "150px",
                                            borderRadius: "50%",
                                            background: "rgba(255,255,255,0.1)",
                                            top: "-50px",
                                            right: "-50px",
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "50%",
                                            background: "rgba(255,255,255,0.1)",
                                            bottom: "-30px",
                                            left: "10%",
                                        }}
                                    />

                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: {
                                                xs: "column",
                                                md: "row",
                                            },
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: "100%",
                                            height: "100%",
                                            zIndex: 1,
                                        }}
                                    >
                                        <Avatar
                                            sx={{
                                                width: { xs: 120, md: 180 },
                                                height: { xs: 120, md: 180 },
                                                mr: { xs: 0, md: 6 },
                                                mb: { xs: 3, md: 0 },
                                                border: "4px solid rgba(255,255,255,0.8)",
                                                boxShadow:
                                                    "0 8px 20px rgba(0,0,0,0.2)",
                                            }}
                                            alt="Your Name"
                                            src="/path-to-your-photo.jpg" // Replace with your photo path
                                        />
                                        <Box>
                                            <Typography
                                                variant="h2"
                                                component="h1"
                                                gutterBottom
                                                fontWeight="bold"
                                                sx={{
                                                    fontSize: {
                                                        xs: "2.5rem",
                                                        md: "3.5rem",
                                                    },
                                                }}
                                            >
                                                Your Name
                                            </Typography>
                                            <Typography
                                                variant="h4"
                                                color="rgba(255,255,255,0.9)"
                                                gutterBottom
                                                sx={{ mb: 3 }}
                                            >
                                                Software Developer
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="rgba(255,255,255,0.9)"
                                                paragraph
                                                sx={{
                                                    fontSize: "1.1rem",
                                                    maxWidth: "600px",
                                                    mb: 4,
                                                }}
                                            >
                                                Passionate about creating
                                                elegant solutions to complex
                                                problems. I specialize in web
                                                development, machine learning,
                                                and building intuitive user
                                                interfaces.
                                            </Typography>
                                            <Box
                                                sx={{
                                                    mt: 2,
                                                    display: "flex",
                                                    gap: 2,
                                                }}
                                            >
                                                <IconButton
                                                    sx={{
                                                        color: "white",
                                                        bgcolor:
                                                            "rgba(255,255,255,0.1)",
                                                        p: 2,
                                                    }}
                                                    aria-label="github"
                                                    component="a"
                                                    href="https://github.com/yourusername"
                                                >
                                                    <GitHubIcon fontSize="large" />
                                                </IconButton>
                                                <IconButton
                                                    sx={{
                                                        color: "white",
                                                        bgcolor:
                                                            "rgba(255,255,255,0.1)",
                                                        p: 2,
                                                    }}
                                                    aria-label="linkedin"
                                                    component="a"
                                                    href="https://linkedin.com/in/yourusername"
                                                >
                                                    <LinkedInIcon fontSize="large" />
                                                </IconButton>
                                                <IconButton
                                                    sx={{
                                                        color: "white",
                                                        bgcolor:
                                                            "rgba(255,255,255,0.1)",
                                                        p: 2,
                                                    }}
                                                    aria-label="email"
                                                    component="a"
                                                    href="mailto:your.email@example.com"
                                                >
                                                    <EmailIcon fontSize="large" />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Container>
                    </Section>

                    {/* Skills Section */}
                    <Section id="skills">
                        <Container maxWidth="lg">
                            <motion.div variants={itemVariants}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 4,
                                        height: "100%",
                                        maxHeight: "80vh",
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        component="h2"
                                        gutterBottom
                                        fontWeight="bold"
                                        sx={{ mb: 4 }}
                                    >
                                        <CodeIcon
                                            sx={{
                                                mr: 1,
                                                verticalAlign: "middle",
                                                fontSize: "inherit",
                                            }}
                                        />
                                        Skills
                                    </Typography>
                                    <Divider sx={{ mb: 4 }} />

                                    <Grid container spacing={3}>
                                        {[
                                            "React",
                                            "JavaScript",
                                            "TypeScript",
                                            "Node.js",
                                            "Python",
                                            "Material UI",
                                            "HTML/CSS",
                                            "GraphQL",
                                            "MongoDB",
                                            "SQL",
                                            "AWS",
                                            "Docker",
                                        ].map((skill) => (
                                            <Grid
                                                item
                                                xs={6}
                                                md={4}
                                                lg={3}
                                                key={skill}
                                            >
                                                <Card
                                                    variant="outlined"
                                                    sx={{
                                                        transition:
                                                            "transform 0.3s ease, box-shadow 0.3s ease",
                                                        height: "100%",
                                                        "&:hover": {
                                                            transform:
                                                                "translateY(-5px)",
                                                            boxShadow:
                                                                "0 10px 20px rgba(0,0,0,0.1)",
                                                        },
                                                    }}
                                                >
                                                    <CardContent
                                                        sx={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "center",
                                                            alignItems:
                                                                "center",
                                                            height: "100%",
                                                            p: 3,
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="h6"
                                                            fontWeight="medium"
                                                            align="center"
                                                        >
                                                            {skill}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Paper>
                            </motion.div>
                        </Container>
                    </Section>

                    {/* Experience Section */}
                    <Section id="experience">
                        <Container maxWidth="lg">
                            <motion.div variants={itemVariants}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 4,
                                        height: "100%",
                                        maxHeight: "80vh",
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        component="h2"
                                        gutterBottom
                                        fontWeight="bold"
                                        sx={{ mb: 4 }}
                                    >
                                        <WorkIcon
                                            sx={{
                                                mr: 1,
                                                verticalAlign: "middle",
                                                fontSize: "inherit",
                                            }}
                                        />
                                        Experience
                                    </Typography>
                                    <Divider sx={{ mb: 4 }} />

                                    <Grid container spacing={4}>
                                        <Grid item xs={12} md={6}>
                                            <Card sx={{ p: 3, height: "100%" }}>
                                                <CardContent>
                                                    <Typography
                                                        variant="h5"
                                                        fontWeight="bold"
                                                        gutterBottom
                                                    >
                                                        Senior Developer
                                                    </Typography>
                                                    <Typography
                                                        variant="h6"
                                                        color={
                                                            isDarkMode
                                                                ? "grey.100"
                                                                : "text.primary"
                                                        }
                                                        gutterBottom
                                                    >
                                                        Company Name
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        color="text.secondary"
                                                        gutterBottom
                                                    >
                                                        2021 - Present
                                                    </Typography>
                                                    <Divider sx={{ my: 2 }} />
                                                    <Typography
                                                        variant="body1"
                                                        paragraph
                                                    >
                                                        Led development of key
                                                        features for the
                                                        company's flagship
                                                        product, resulting in a
                                                        30% increase in user
                                                        engagement.
                                                    </Typography>
                                                    <Typography variant="body1">
                                                        • Architected and
                                                        implemented scalable
                                                        backend solutions
                                                        <br />
                                                        • Mentored junior
                                                        developers and conducted
                                                        code reviews
                                                        <br />• Optimized
                                                        application performance
                                                        and reduced load times
                                                        by 40%
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Card sx={{ p: 3, height: "100%" }}>
                                                <CardContent>
                                                    <Typography
                                                        variant="h5"
                                                        fontWeight="bold"
                                                        gutterBottom
                                                    >
                                                        Web Developer
                                                    </Typography>
                                                    <Typography
                                                        variant="h6"
                                                        color={
                                                            isDarkMode
                                                                ? "grey.100"
                                                                : "text.primary"
                                                        }
                                                        gutterBottom
                                                    >
                                                        Previous Company
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        color="text.secondary"
                                                        gutterBottom
                                                    >
                                                        2018 - 2021
                                                    </Typography>
                                                    <Divider sx={{ my: 2 }} />
                                                    <Typography
                                                        variant="body1"
                                                        paragraph
                                                    >
                                                        Developed and maintained
                                                        multiple client websites
                                                        and web applications
                                                        using modern JavaScript
                                                        frameworks.
                                                    </Typography>
                                                    <Typography variant="body1">
                                                        • Built responsive
                                                        interfaces with React
                                                        and Material UI
                                                        <br />
                                                        • Implemented RESTful
                                                        APIs and integrated
                                                        third-party services
                                                        <br />• Collaborated
                                                        with design team to
                                                        create intuitive user
                                                        experiences
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </motion.div>
                        </Container>
                    </Section>

                    {/* Education Section */}
                    <Section id="education">
                        <Container maxWidth="lg">
                            <motion.div variants={itemVariants}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 4,
                                        height: "100%",
                                        maxHeight: "80vh",
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        component="h2"
                                        gutterBottom
                                        fontWeight="bold"
                                        sx={{ mb: 4 }}
                                    >
                                        <SchoolIcon
                                            sx={{
                                                mr: 1,
                                                verticalAlign: "middle",
                                                fontSize: "inherit",
                                            }}
                                        />
                                        Education
                                    </Typography>
                                    <Divider sx={{ mb: 4 }} />

                                    <Grid container spacing={4}>
                                        <Grid item xs={12} md={6}>
                                            <Card
                                                variant="outlined"
                                                sx={{
                                                    height: "100%",
                                                    p: 3,
                                                    transition:
                                                        "transform 0.3s ease, box-shadow 0.3s ease",
                                                    "&:hover": {
                                                        transform:
                                                            "translateY(-5px)",
                                                        boxShadow:
                                                            "0 10px 20px rgba(0,0,0,0.1)",
                                                    },
                                                }}
                                            >
                                                <CardContent>
                                                    <Typography
                                                        variant="h5"
                                                        component="div"
                                                        fontWeight="bold"
                                                        gutterBottom
                                                    >
                                                        Bachelor of Science in
                                                        Computer Science
                                                    </Typography>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{ mb: 1.5 }}
                                                        color={
                                                            isDarkMode
                                                                ? "grey.100"
                                                                : "text.secondary"
                                                        }
                                                    >
                                                        University Name
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        color="text.secondary"
                                                        gutterBottom
                                                    >
                                                        2014 - 2018
                                                    </Typography>
                                                    <Divider sx={{ my: 2 }} />
                                                    <Typography variant="body1">
                                                        • GPA: 3.8/4.0
                                                        <br />
                                                        • Dean's List: All
                                                        semesters
                                                        <br />
                                                        • Senior Project:
                                                        AI-powered
                                                        recommendation system
                                                        <br />• Relevant
                                                        coursework: Data
                                                        Structures, Algorithms,
                                                        Database Systems, Web
                                                        Development, Machine
                                                        Learning
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Card
                                                variant="outlined"
                                                sx={{
                                                    height: "100%",
                                                    p: 3,
                                                    transition:
                                                        "transform 0.3s ease, box-shadow 0.3s ease",
                                                    "&:hover": {
                                                        transform:
                                                            "translateY(-5px)",
                                                        boxShadow:
                                                            "0 10px 20px rgba(0,0,0,0.1)",
                                                    },
                                                }}
                                            >
                                                <CardContent>
                                                    <Typography
                                                        variant="h5"
                                                        component="div"
                                                        fontWeight="bold"
                                                        gutterBottom
                                                    >
                                                        Relevant Certifications
                                                    </Typography>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{ mb: 1.5 }}
                                                        color={
                                                            isDarkMode
                                                                ? "grey.100"
                                                                : "text.secondary"
                                                        }
                                                    >
                                                        Various Institutions
                                                    </Typography>
                                                    <Divider sx={{ my: 2 }} />
                                                    <Typography
                                                        variant="body1"
                                                        paragraph
                                                    >
                                                        Professional
                                                        certifications that have
                                                        enhanced my technical
                                                        expertise:
                                                    </Typography>
                                                    <Typography variant="body1">
                                                        • AWS Certified
                                                        Developer (2022)
                                                        <br />
                                                        • Google Cloud
                                                        Professional (2021)
                                                        <br />
                                                        • React Advanced
                                                        Certification (2020)
                                                        <br />
                                                        • MongoDB Database
                                                        Administrator (2019)
                                                        <br />• Certified Scrum
                                                        Master (2018)
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </motion.div>
                        </Container>
                    </Section>

                    {/* Projects Section */}
                    <Section id="projects">
                        <Container maxWidth="lg">
                            <motion.div variants={itemVariants}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 4,
                                        height: "100%",
                                        maxHeight: "80vh",
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        component="h2"
                                        gutterBottom
                                        fontWeight="bold"
                                        sx={{ mb: 4 }}
                                    >
                                        <CodeIcon
                                            sx={{
                                                mr: 1,
                                                verticalAlign: "middle",
                                                fontSize: "inherit",
                                            }}
                                        />
                                        Featured Projects
                                    </Typography>
                                    <Divider sx={{ mb: 4 }} />

                                    <Grid container spacing={4}>
                                        {[
                                            {
                                                title: "E-Commerce Platform",
                                                tech: "React • Node.js • MongoDB",
                                                description:
                                                    "A full-featured e-commerce platform with product management, shopping cart, and payment processing capabilities.",
                                            },
                                            {
                                                title: "AI Content Generator",
                                                tech: "Python • TensorFlow • Flask",
                                                description:
                                                    "An AI-powered application that generates custom content based on user inputs using natural language processing.",
                                            },
                                            {
                                                title: "Portfolio Website",
                                                tech: "React • Material UI • Framer Motion",
                                                description:
                                                    "A responsive personal portfolio website with smooth animations and dark mode support.",
                                            },
                                        ].map((project, index) => (
                                            <Grid
                                                item
                                                xs={12}
                                                md={4}
                                                key={index}
                                            >
                                                <motion.div
                                                    whileHover={{ scale: 1.03 }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 400,
                                                        damping: 10,
                                                    }}
                                                >
                                                    <Card
                                                        sx={{
                                                            height: "100%",
                                                            display: "flex",
                                                            flexDirection:
                                                                "column",
                                                        }}
                                                    >
                                                        <CardContent
                                                            sx={{
                                                                flexGrow: 1,
                                                                p: 3,
                                                            }}
                                                        >
                                                            <Typography
                                                                variant="h5"
                                                                component="div"
                                                                fontWeight="bold"
                                                                gutterBottom
                                                            >
                                                                {project.title}
                                                            </Typography>
                                                            <Typography
                                                                sx={{ mb: 2 }}
                                                                color={
                                                                    isDarkMode
                                                                        ? "grey.100"
                                                                        : "text.secondary"
                                                                }
                                                            >
                                                                {project.tech}
                                                            </Typography>
                                                            <Divider
                                                                sx={{ my: 2 }}
                                                            />
                                                            <Typography
                                                                variant="body1"
                                                                paragraph
                                                            >
                                                                {
                                                                    project.description
                                                                }
                                                            </Typography>
                                                            <Box
                                                                sx={{
                                                                    mt: "auto",
                                                                    pt: 2,
                                                                    display:
                                                                        "flex",
                                                                    justifyContent:
                                                                        "flex-end",
                                                                }}
                                                            >
                                                                <IconButton
                                                                    color="primary"
                                                                    aria-label="github repository"
                                                                >
                                                                    <GitHubIcon />
                                                                </IconButton>
                                                            </Box>
                                                        </CardContent>
                                                    </Card>
                                                </motion.div>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Paper>
                            </motion.div>
                        </Container>
                    </Section>
                </motion.div>
            </Box>
        </>
    );
};

export default Dashboard;
