import React, { useState, useRef } from 'react';
import { 
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    useTheme,
    Box,
    Typography
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

// Import the sections data to maintain consistency
const sections = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "technical-skills", label: "Technical Skills", icon: "💻" },
    { id: "soft-skills", label: "Soft Skills", icon: "🤝" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "projects", label: "Projects", icon: "🚀" },
];

const SectionsMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const buttonRef = useRef(null);

    const handleMouseEnter = () => {
        setAnchorEl(buttonRef.current);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };

    const scrollToSection = (id) => {
        const scrollContainer = document.getElementById("scrollContainer");
        const element = document.getElementById(id);

        if (scrollContainer && element) {
            const elementTop = element.offsetTop - scrollContainer.offsetTop;
            scrollContainer.scrollTo({
                top: elementTop,
                behavior: "smooth",
            });
        }
        setAnchorEl(null);
    };

    return (
        <Box 
            onMouseLeave={handleMouseLeave}
            sx={{ 
                display: 'inline-block',
                position: 'relative'
            }}
        >
            <Box
                ref={buttonRef}
                onMouseEnter={handleMouseEnter}
                sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    px: 1.5,
                    py: 0.75,
                    mr: 2,
                    borderRadius: 1,
                    cursor: 'default',
                    color: 'inherit',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                        bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                    }
                }}
            >
                <Typography sx={{ fontSize: '1rem' }}>
                    Sections
                </Typography>
                <ExpandMoreIcon 
                    sx={{ 
                        fontSize: '1.25rem',
                        transform: Boolean(anchorEl) ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.2s ease-in-out'
                    }} 
                />
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                MenuListProps={{
                    onMouseEnter: handleMouseEnter,
                    sx: {
                        py: 0
                    }
                }}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        mt: 0.5,
                        minWidth: 180,
                        borderRadius: 1.5,
                        bgcolor: isDarkMode ? 'rgba(38, 38, 38, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        color: isDarkMode ? 'white' : 'text.primary',
                        transition: 'all 0.2s ease-in-out',
                        opacity: Boolean(anchorEl) ? 1 : 0,
                        overflow: 'hidden',
                        boxShadow: isDarkMode 
                            ? `0 0 1px 0 rgba(0, 0, 0, 0.9),
                               0 0 2px 0 rgba(0, 0, 0, 0.8),
                               0 4px 8px -2px rgba(0, 0, 0, 0.6),
                               0 8px 16px -4px rgba(0, 0, 0, 0.4)`
                            : `0 0 1px 0 rgba(0, 0, 0, 0.2),
                               0 0 2px 0 rgba(0, 0, 0, 0.15),
                               0 4px 8px -2px rgba(0, 0, 0, 0.1),
                               0 8px 16px -4px rgba(0, 0, 0, 0.05)`,
                        '& .MuiList-root': {
                            background: 'inherit'
                        },
                        '& .MuiTypography-root': {
                            fontSize: '0.9rem'
                        }
                    }
                }}
                transitionDuration={{
                    enter: 200,
                    exit: 200
                }}
            >
                {sections.map((section, index) => (
                    <MenuItem 
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        sx={{
                            py: 1.25,
                            px: 2,
                            color: 'inherit',
                            transition: 'background-color 0.2s ease-in-out',
                            borderBottom: index !== sections.length - 1 ? 1 : 0,
                            borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
                            cursor: 'pointer',
                            '&:hover': {
                                bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                            }
                        }}
                    >
                        <ListItemIcon sx={{ 
                            fontSize: '1.1rem', 
                            minWidth: 32, 
                            color: 'inherit',
                            ml: 0.5
                        }}>
                            {section.icon}
                        </ListItemIcon>
                        <ListItemText primary={section.label} sx={{ ml: 1 }} />
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default SectionsMenu; 