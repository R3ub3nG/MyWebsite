import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

// Section definitions
const sections = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "skills", label: "Skills", icon: "💻" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "projects", label: "Projects", icon: "🚀" },
];

const SectionNav = () => {
    const [activeSection, setActiveSection] = useState("profile");
    const [isManuallySet, setIsManuallySet] = useState(false);
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";

    // Memoize the scroll handler to prevent recreating it on each render
    const handleScroll = useCallback(() => {
        // Skip scroll detection if section was manually set recently
        if (isManuallySet) return;

        // Get the scroll container
        const scrollContainer = document.getElementById("scrollContainer");
        if (!scrollContainer) return;

        // Get all sections
        const sectionElements = sections
            .map((section) => ({
                id: section.id,
                element: document.getElementById(section.id),
            }))
            .filter((section) => section.element !== null);

        if (sectionElements.length === 0) return;

        // Calculate which section is most visible in the viewport
        const scrollTop = scrollContainer.scrollTop;
        const viewportHeight = scrollContainer.clientHeight;

        // Special case for profile section - if we're at the top of the page
        if (scrollTop < viewportHeight / 2) {
            setActiveSection("profile");
            return;
        }

        // For other sections, find which one is most visible
        let bestSection = null;
        let bestVisibility = 0;

        sectionElements.forEach(({ id, element }) => {
            const rect = element.getBoundingClientRect();

            // Calculate how much of the section is in the viewport
            const visibleTop = Math.max(0, rect.top);
            const visibleBottom = Math.min(viewportHeight, rect.bottom);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);

            // Calculate what percentage of the viewport this section occupies
            const visibility = visibleHeight / viewportHeight;

            if (visibility > bestVisibility) {
                bestVisibility = visibility;
                bestSection = id;
            }
        });

        // Update active section if we found one and it's different
        if (bestSection && bestSection !== activeSection) {
            setActiveSection(bestSection);
        }
    }, [activeSection, isManuallySet]);

    // Update active section based on scroll position
    useEffect(() => {
        // Get the scroll container
        const scrollContainer = document.getElementById("scrollContainer");
        if (!scrollContainer) return;

        // Add scroll event listener
        scrollContainer.addEventListener("scroll", handleScroll);

        // Initial check after a short delay to ensure DOM is fully rendered
        const initialCheckTimeout = setTimeout(handleScroll, 300);

        // Also check when window is resized
        window.addEventListener("resize", handleScroll);

        // Cleanup
        return () => {
            scrollContainer.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            clearTimeout(initialCheckTimeout);
        };
    }, [handleScroll]);

    // Reset the manual flag after a delay
    useEffect(() => {
        if (isManuallySet) {
            const timer = setTimeout(() => {
                setIsManuallySet(false);
            }, 1000); // Ignore scroll events for 1 second after clicking

            return () => clearTimeout(timer);
        }
    }, [isManuallySet]);

    // Scroll to section when dot is clicked
    const scrollToSection = (id) => {
        const scrollContainer = document.getElementById("scrollContainer");
        const element = document.getElementById(id);

        if (scrollContainer && element) {
            // Set active section immediately and mark as manually set
            setActiveSection(id);
            setIsManuallySet(true);

            // Calculate the scroll position
            const elementTop = element.offsetTop - scrollContainer.offsetTop;

            // Scroll to the section
            scrollContainer.scrollTo({
                top: elementTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <Box
            sx={{
                position: "fixed",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                zIndex: 1100, // Higher than AppBar
                padding: "10px",
                borderRadius: "20px",
                backgroundColor: isDarkMode
                    ? "rgba(0, 0, 0, 0.2)"
                    : "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(5px)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            {sections.map((section) => {
                const isActive = activeSection === section.id;

                return (
                    <Box
                        key={section.id}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            gap: 1,
                            position: "relative",
                        }}
                    >
                        {/* Section label that appears when active */}
                        <AnimatePresence>
                            {isActive && (
                                <motion.div
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                        position: "absolute",
                                        right: "30px",
                                        pointerEvents: "none",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: isDarkMode
                                                ? "rgba(25, 118, 210, 0.9)"
                                                : "rgba(25, 118, 210, 0.9)",
                                            color: "white",
                                            padding: "4px 12px",
                                            borderRadius: "12px",
                                            boxShadow:
                                                "0 2px 10px rgba(0,0,0,0.2)",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            fontWeight="bold"
                                        >
                                            {section.icon} {section.label}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Navigation dot */}
                        <motion.div
                            onClick={() => scrollToSection(section.id)}
                            whileHover={{ scale: 1.2 }}
                            animate={{
                                scale: isActive ? 1.3 : 1,
                                backgroundColor: isActive
                                    ? theme.palette.primary.main
                                    : isDarkMode
                                    ? "rgba(255, 255, 255, 0.3)"
                                    : "rgba(0, 0, 0, 0.2)",
                            }}
                            style={{
                                width: "14px",
                                height: "14px",
                                borderRadius: "50%",
                                cursor: "pointer",
                                boxShadow: isActive
                                    ? "0 0 10px rgba(25, 118, 210, 0.5)"
                                    : "0 2px 5px rgba(0, 0, 0, 0.1)",
                                border: isActive
                                    ? "2px solid rgba(255, 255, 255, 0.5)"
                                    : "2px solid transparent",
                                WebkitTapHighlightColor: "transparent",
                            }}
                        />
                    </Box>
                );
            })}
        </Box>
    );
};

export default SectionNav;
