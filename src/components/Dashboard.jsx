import React, { useEffect, useRef, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import CustomAppBar from './CustomAppBar';

// Pull in all the section components
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
        willChange: 'opacity, transform' // Helps with GPU acceleration
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
    const [isScrolling, setIsScrolling] = useState(false);
    const isSnapScrollingRef = useRef(false);
    
    // Custom snap scrolling behavior with external mouse support
    useEffect(() => {
        const scrollContainer = document.getElementById('scrollContainer');
        if (!scrollContainer) return;
        
        let scrollTimeout;
        
        const handleScroll = () => {
            // Skip if we're already in the middle of a snap scroll
            if (isSnapScrollingRef.current) return;
            
            // Set scrolling state
            setIsScrolling(true);
            
            // Clear any existing timeout
            clearTimeout(scrollTimeout);
            
            // Set timeout to detect when scrolling stops
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
                
                // Skip if we're in the middle of a snap scroll
                if (isSnapScrollingRef.current) return;
                
                // Get the viewport height and current scroll position
                const viewportHeight = window.innerHeight - 64;
                const scrollTop = scrollContainer.scrollTop;
                
                // Determine which section we should be on based on scroll position
                // Use rounded division to find nearest section
                const currentSectionIndex = Math.round(scrollTop / viewportHeight);
                const targetPosition = currentSectionIndex * viewportHeight;
                
                // Define a more responsive snap window - 20% of the viewport height
                const snapThreshold = viewportHeight * 0.2;
                
                // If close to a section boundary, snap to it
                const distanceFromSnap = Math.abs(scrollTop - targetPosition);
                
                if (distanceFromSnap > 5 && distanceFromSnap < snapThreshold) {
                    // Flag that we're doing a snap scroll to prevent interference
                    isSnapScrollingRef.current = true;
                    
                    // Smoothly scroll to the proper snap point with quicker animation
                    scrollContainer.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Reset the flag after animation completes - shorter time for quicker response
                    setTimeout(() => {
                        isSnapScrollingRef.current = false;
                    }, 350);
                }
            }, 50); // Shorter timeout for quicker snap response
        };
        
        scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
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
                    // Only use snap scrolling on desktop
                    scrollSnapType: { xs: 'none', md: 'y mandatory' },
                    scrollPaddingTop: '0px',
                    scrollPaddingBottom: '0px',
                    WebkitOverflowScrolling: 'touch',
                    position: 'relative',
                    zIndex: 1,
                    // Adjust scroll speed for quicker response
                    '@media (min-width: 900px)': {
                        scrollBehavior: 'smooth',
                        transition: 'scrollTop 0.5s ease-out',
                    },
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
                    {/* Portfolio sections in display order */}
                    <Section id="profile">
                        <ProfileSection itemVariants={itemVariants} />
                    </Section>

                    <Section id="passions">
                        <PassionsSection itemVariants={itemVariants} />
                    </Section>

                    <Section id="technical-skills">
                        <TechnicalSkillsSection itemVariants={itemVariants} />
                    </Section>

                    <Section id="soft-skills">
                        <SoftSkillsSection itemVariants={itemVariants} />
                    </Section>

                    <Section id="experience">
                        <ExperienceSection itemVariants={itemVariants} />
                    </Section>

                    <Section id="education">
                        <EducationSection itemVariants={itemVariants} />
                    </Section>

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
