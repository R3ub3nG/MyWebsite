import React, { useRef, useEffect } from 'react';
import { Box, useTheme } from '@mui/material';
import { useSectionContext } from './SectionContext';

/**
 * Section component that fills the viewport height
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @param {string} props.id - Section ID for navigation
 * @param {string} props.bgcolor - Optional background color
 */
const Section = ({ children, id, bgcolor }) => {
    const theme = useTheme();
    const sectionRef = useRef(null);
    const { activeSection } = useSectionContext();
    
    // Make sure each section is exactly viewport height minus the header
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        
        // Recalculate the section height
        const updateSectionHeight = () => {
            const viewportHeight = window.innerHeight;
            const appBarHeight = 64; // Header height
            section.style.height = `${viewportHeight - appBarHeight}px`;
        };
        
        // Run on load and when window resizes
        updateSectionHeight();
        window.addEventListener('resize', updateSectionHeight);
        
        return () => {
            window.removeEventListener('resize', updateSectionHeight);
        };
    }, []);
    
    return (
        <Box
            component="section"
            id={id}
            data-section={id}
            ref={sectionRef}
            sx={{
                height: 'calc(100vh - 64px)',
                minHeight: 'calc(100vh - 64px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                py: { xs: 4, md: 0 },
                position: 'relative',
                scrollSnapAlign: 'start',
                scrollMarginTop: '0px',
                bgcolor: bgcolor || 'transparent',
                overflow: 'hidden',
                transform: 'translate3d(0, 0, 0)',
                WebkitTransform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                perspective: 1000,
                WebkitPerspective: 1000,
                zIndex: activeSection === id ? 2 : 1, // Active section gets higher stacking order
                transition: 'z-index 0.2s',
                '& > *': {
                    width: '100%',
                    maxHeight: '100%',
                    overflow: 'auto',
                    willChange: 'transform, opacity',
                    transform: 'translate3d(0, 0, 0)',
                    WebkitTransform: 'translate3d(0, 0, 0)',
                    zIndex: 'auto'
                }
            }}
        >
            {children}
        </Box>
    );
};

export default Section; 