import React from "react";
import { IconButton, Tooltip, useTheme } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { motion } from "framer-motion";

const ThemeToggle = ({ toggleColorMode }) => {
    const theme = useTheme();

    return (
        <Tooltip
            title={
                theme.palette.mode === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            }
        >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <IconButton
                    onClick={toggleColorMode}
                    color="inherit"
                    aria-label="toggle dark/light mode"
                >
                    {theme.palette.mode === "dark" ? (
                        <Brightness7 />
                    ) : (
                        <Brightness4 />
                    )}
                </IconButton>
            </motion.div>
        </Tooltip>
    );
};

export default ThemeToggle;
