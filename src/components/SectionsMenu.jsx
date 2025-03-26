import React, { useState, useRef, useEffect } from 'react';
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
import { useSectionContext, sections } from './SectionContext';

const SectionsMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { activeSection, scrollToSection } = useSectionContext();
    const [menuOpened, setMenuOpened] = useState(false);
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const buttonRef = useRef(null);
    const timeoutRef = useRef(null);

    // Clear timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setAnchorEl(buttonRef.current);
        setMenuOpened(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setAnchorEl(null);
            setMenuOpened(false);
        }, 150); // Small delay to prevent accidental closing
    };

    const handleSectionClick = (id) => {
        // Close the menu first
        setAnchorEl(null);
        setMenuOpened(false);
        
        // Simple timeout to ensure menu is closed before scrolling
        setTimeout(() => {
            scrollToSection(id);
        }, 50);
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
                onClose={() => {
                    setAnchorEl(null);
                    setMenuOpened(false);
                }}
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
                    onMouseLeave: handleMouseLeave,
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
                        },
                        zIndex: 1300
                    }
                }}
                style={{ zIndex: 1300 }}
                transitionDuration={{
                    enter: 200,
                    exit: 200
                }}
                // Close when clicked outside
                onBackdropClick={() => {
                    setAnchorEl(null);
                    setMenuOpened(false);
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {sections.map((section, index) => {
                    // Only show active highlighting if menu has been opened by user
                    const isActive = menuOpened && section.id === activeSection;
                    
                    return (
                        <MenuItem 
                            key={section.id}
                            onClick={() => handleSectionClick(section.id)}
                            sx={{
                                py: 1.25,
                                px: 2,
                                color: isActive ? theme.palette.primary.main : 'inherit',
                                bgcolor: isActive 
                                    ? (isDarkMode ? 'rgba(25, 118, 210, 0.1)' : 'rgba(25, 118, 210, 0.05)')
                                    : 'transparent',
                                fontWeight: isActive ? 600 : 400,
                                transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
                                borderBottom: index !== sections.length - 1 ? 1 : 0,
                                borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
                                cursor: 'pointer',
                                '&:hover': {
                                    bgcolor: isActive
                                        ? (isDarkMode ? 'rgba(25, 118, 210, 0.15)' : 'rgba(25, 118, 210, 0.1)')
                                        : (isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)'),
                                }
                            }}
                        >
                            <ListItemIcon sx={{ 
                                fontSize: '1.1rem', 
                                minWidth: 32, 
                                color: isActive ? theme.palette.primary.main : 'inherit',
                                ml: 0.5
                            }}>
                                {section.icon}
                            </ListItemIcon>
                            <ListItemText primary={section.label} sx={{ ml: 1 }} />
                        </MenuItem>
                    );
                })}
            </Menu>
        </Box>
    );
};

export default SectionsMenu; 