import React from "react";
import { Box, AppBar, Toolbar, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

// Import section components
import Section from "./Section";
import ProfileSection from "./sections/ProfileSection";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";
import ProjectsSection from "./sections/ProjectsSection";
import ThemeToggle from "./ThemeToggle";
import TechnicalSkillsSection from "./sections/TechnicalSkillsSection";
import SoftSkillsSection from "./sections/SoftSkillsSection";

// Animation variants for Framer Motion
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            when: "beforeChildren"
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { 
            type: "spring", 
            stiffness: 100,
            duration: 0.5
        },
    },
};

const Dashboard = ({ toggleColorMode }) => {
    const theme = useTheme();

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
                    {/* Profile Section */}
                    <Section id="profile">
                        <ProfileSection itemVariants={itemVariants} />
                    </Section>

                    {/* Technical Skills Section */}
                    <Section id="technical-skills">
                        <TechnicalSkillsSection itemVariants={itemVariants} />
                    </Section>

                    {/* Soft Skills Section */}
                    <Section id="soft-skills">
                        <SoftSkillsSection itemVariants={itemVariants} />
                    </Section>

                    {/* Experience Section */}
                    <Section id="experience">
                        <ExperienceSection itemVariants={itemVariants} />
                    </Section>

                    {/* Education Section */}
                    <Section id="education">
                        <EducationSection itemVariants={itemVariants} />
                    </Section>

                    {/* Projects Section */}
                    <Section id="projects">
                        <ProjectsSection itemVariants={itemVariants} />
                    </Section>

                </motion.div>
            </Box>
        </>
    );
};

export default Dashboard;
