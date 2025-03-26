import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionContext, sections } from "./SectionContext";

const SectionNav = () => {
    const { activeSection, scrollToSection } = useSectionContext();
    const [hoveredSection, setHoveredSection] = useState(null);
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";

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
                const isHovered = hoveredSection === section.id;

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
                        onMouseEnter={() => setHoveredSection(section.id)}
                        onMouseLeave={() => setHoveredSection(null)}
                    >
                        {/* Section label that appears on hover */}
                        <AnimatePresence>
                            {isHovered && (
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
