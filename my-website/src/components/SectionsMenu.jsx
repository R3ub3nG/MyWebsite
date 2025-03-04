import React, { useState } from 'react';
import { 
    Button,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    useTheme
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

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
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
        handleClose();
    };

    return (
        <>
            <Button
                onClick={handleClick}
                endIcon={<ExpandMoreIcon />}
                sx={{ 
                    textTransform: 'none',
                    fontSize: '1rem',
                    mr: 2,
                    color: 'inherit'
                }}
            >
                Sections
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{
                    elevation: 3,
                    sx: {
                        mt: 1,
                        minWidth: 200,
                        borderRadius: 2,
                        bgcolor: isDarkMode ? 'rgba(38, 38, 38, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        color: isDarkMode ? 'white' : 'text.primary',
                        border: 1,
                        borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
                    }
                }}
            >
                {sections.map((section) => (
                    <MenuItem 
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        sx={{
                            py: 1,
                            color: 'inherit',
                            '&:hover': {
                                bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                            }
                        }}
                    >
                        <ListItemIcon sx={{ fontSize: '1.25rem', minWidth: 36, color: 'inherit' }}>
                            {section.icon}
                        </ListItemIcon>
                        <ListItemText primary={section.label} />
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default SectionsMenu; 