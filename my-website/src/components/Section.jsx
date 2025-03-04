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
            component="section"
            id={id}
            data-section={id}
            sx={{
                height: { xs: 'auto', md: 'calc(100vh - 64px)' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                py: { xs: 4, md: 0 },
                position: 'relative',
                scrollSnapAlign: { xs: 'none', md: 'start' },
                scrollSnapStop: 'always',
                bgcolor: bgcolor || 'transparent',
                '&:first-of-type': {
                    scrollMarginTop: '64px',
                },
                overflow: 'hidden',
                transform: 'translate3d(0, 0, 0)',
                WebkitTransform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                perspective: 1000,
                WebkitPerspective: 1000,
                '& > *': {
                    width: '100%',
                    maxHeight: '100%',
                    overflow: 'auto',
                    willChange: 'transform, opacity',
                    transform: 'translate3d(0, 0, 0)',
                    WebkitTransform: 'translate3d(0, 0, 0)',
                }
            }}
        >
            {children}
        </Box>
    );
};

export default Section; 