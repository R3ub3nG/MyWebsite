import React from "react";
import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import CustomAppBar from './CustomAppBar';

// Import section components
import Section from "./Section";
import ProfileSection from "./sections/ProfileSection";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";
import ProjectsSection from "./sections/ProjectsSection";
import ThemeToggle from "./ThemeToggle";
import TechnicalSkillsSection from "./sections/TechnicalSkillsSection";
import SoftSkillsSection from "./sections/SoftSkillsSection";
import SectionNav from "./SectionNav";

// Animation variants for Framer Motion
const containerVariants = {
    hidden: { 
        opacity: 0,
        willChange: 'opacity, transform' // Optimize performance
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: 'easeOut',
            staggerChildren: 0.1,
            when: "beforeChildren",
            delayChildren: 0.1
        },
    },
};

const itemVariants = {
    hidden: { 
        y: 10, 
        opacity: 0,
        willChange: 'opacity, transform'
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { 
            type: "spring", 
            stiffness: 70,
            damping: 20,
            duration: 0.4
        },
    },
};

const Dashboard = ({ toggleColorMode }) => {
    const theme = useTheme();

    return (
        <Box sx={{ height: '100vh', overflow: 'hidden' }}>
            <CustomAppBar toggleColorMode={toggleColorMode} />
            <Box
                id="scrollContainer"
                sx={{
                    height: 'calc(100vh - 64px)',
                    mt: '64px',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    scrollBehavior: 'smooth',
                    scrollSnapType: { xs: 'none', md: 'y mandatory' },
                    WebkitOverflowScrolling: 'touch', // Improve mobile scrolling
                    '& > div': {
                        height: '100%',
                        backfaceVisibility: 'hidden', // Prevent flickering
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'translate3d(0, 0, 0)', // Force GPU acceleration
                        WebkitTransform: 'translate3d(0, 0, 0)',
                    },
                    '& > div > section': {
                        scrollSnapAlign: 'start',
                        scrollSnapStop: 'always',
                        height: '100%',
                    },
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'transparent',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                    },
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
            <SectionNav />
        </Box>
    );
};

export default Dashboard;
