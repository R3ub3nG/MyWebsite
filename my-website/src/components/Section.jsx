import React from 'react';
import { Box, useTheme } from '@mui/material';

/**
 * Section component that fills the viewport height
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @param {string} props.id - Section ID for navigation
 * @param {string} props.bgcolor - Optional background color
 */
const Section = ({ children, id, bgcolor }) => {
    const theme = useTheme();
    
    return (
        <Box
            id={id}
            data-section={id}
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                py: 4,
                position: 'relative',
                scrollSnapAlign: 'start', // For smooth snap scrolling
                bgcolor: bgcolor || 'transparent'
            }}
        >
            {children}
        </Box>
    );
};

export default Section; 