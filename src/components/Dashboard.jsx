import React, { useEffect, useRef } from "react";
import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import CustomAppBar from './CustomAppBar';

// Import section components
import Section from "./Section";
import ProfileSection from "./sections/ProfileSection";
import PassionsSection from "./sections/PassionsSection";
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
    const scrollContainerRef = useRef(null);

    // Fix for external mouse wheel scrolling issue
    useEffect(() => {
        const scrollContainer = document.getElementById('scrollContainer');
        if (!scrollContainer) return;

        // Track wheel activity and scroll positions
        let wheelEvents = 0;
        let lastScrollTop = scrollContainer.scrollTop;
        let stuckAtPosition = null;
        let stuckCount = 0;

        const handleWheel = (e) => {
            // Count wheel events to detect continuous scrolling
            wheelEvents++;
            
            // Get current scroll position 
            const currentScrollTop = scrollContainer.scrollTop;
            
            // Check if we're stuck at the same position
            if (currentScrollTop === lastScrollTop && e.deltaY !== 0) {
                // If we're at the same position as before
                if (stuckAtPosition === currentScrollTop) {
                    stuckCount++;
                } else {
                    // We're stuck at a new position
                    stuckAtPosition = currentScrollTop;
                    stuckCount = 1;
                }
                
                // If we've been stuck for multiple wheel events, help push through
                if (stuckCount > 2) {
                    // Calculate viewport height (section height)
                    const viewportHeight = window.innerHeight - 64; 
                    
                    // Calculate target position based on scroll direction
                    const targetPosition = e.deltaY > 0
                        ? currentScrollTop + viewportHeight
                        : currentScrollTop - viewportHeight;
                    
                    // Small offset to get past the snap point
                    const offset = e.deltaY > 0 ? 1 : -1;
                    
                    // Programmatically scroll past the snap point
                    requestAnimationFrame(() => {
                        scrollContainer.scrollTo({
                            top: targetPosition + offset,
                            behavior: 'auto' // Use 'auto' for immediate scroll
                        });
                    });
                    
                    // Reset counters after helping
                    stuckCount = 0;
                    stuckAtPosition = null;
                }
            } else {
                // We're not stuck, reset counters
                stuckCount = 0;
                stuckAtPosition = null;
            }
            
            // Update last scroll position
            lastScrollTop = scrollContainer.scrollTop;
            
            // Reset wheel events counter after a delay
            setTimeout(() => {
                wheelEvents = 0;
            }, 200);
        };

        scrollContainer.addEventListener('wheel', handleWheel, { passive: true });
        
        return () => {
            scrollContainer.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <Box sx={{ height: '100vh', overflow: 'hidden' }}>
            <CustomAppBar toggleColorMode={toggleColorMode} />
            <Box
                id="scrollContainer"
                ref={scrollContainerRef}
                sx={{
                    height: 'calc(100vh - 64px)',
                    mt: '64px',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    scrollBehavior: 'smooth',
                    scrollSnapType: { xs: 'none', md: 'y mandatory' },
                    WebkitOverflowScrolling: 'touch',
                    position: 'relative',
                    zIndex: 1,
                    '& > div': {
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'translate3d(0, 0, 0)',
                        WebkitTransform: 'translate3d(0, 0, 0)',
                        position: 'relative',
                        zIndex: 'auto'
                    },
                    '& > div > section': {
                        scrollSnapAlign: 'start',
                        scrollSnapStop: 'always',
                        height: '100%',
                        position: 'relative',
                        zIndex: 'auto'
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

                    {/* Passions Section */}
                    <Section id="passions">
                        <PassionsSection itemVariants={itemVariants} />
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
