import React from 'react';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const BackgroundEffect = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    // Define different shapes for the background
    const shapes = [
        { size: '300px', x: '10%', y: '15%', delay: 0, rotation: 15 },
        { size: '250px', x: '85%', y: '10%', delay: 0.3, rotation: -20 },
        { size: '200px', x: '75%', y: '45%', delay: 0.5, rotation: 25 },
        { size: '350px', x: '5%', y: '65%', delay: 0.2, rotation: -15 },
        { size: '180px', x: '50%', y: '85%', delay: 0.4, rotation: 10 },
        { size: '220px', x: '60%', y: '30%', delay: 0.6, rotation: -5 },
        { size: '280px', x: '25%', y: '40%', delay: 0.7, rotation: 20 },
    ];

    // Animation variants
    const floatAnimation = {
        initial: { opacity: 0, scale: 0.8 },
        animate: (i) => ({
            opacity: isDarkMode ? 0.15 : 0.2, // Increased opacity for light mode
            scale: 1,
            rotate: i.rotation,
            y: ['0%', '3%', '0%'],
            transition: {
                opacity: { duration: 1.5, delay: i.delay },
                scale: { duration: 1.5, delay: i.delay },
                y: {
                    repeat: Infinity,
                    duration: 8 + i.delay * 3,
                    ease: 'easeInOut',
                    repeatType: 'reverse',
                },
            },
        }),
    };

    // Get shape styles based on theme
    const getShapeStyle = (index) => {
        if (isDarkMode) {
            // Dark mode shapes - cool blues and purples with more vibrant colors
            const gradients = [
                'linear-gradient(135deg, #4527a0 0%, #311b92 100%)',
                'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)',
                'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
                'linear-gradient(135deg, #6a1b9a 0%, #4a148c 100%)',
                'linear-gradient(135deg, #00838f 0%, #006064 100%)',
                'linear-gradient(135deg, #283593 0%, #1a237e 100%)',
                'linear-gradient(135deg, #0097a7 0%, #006064 100%)',
            ];
            return {
                background: gradients[index % gradients.length],
                borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
            };
        } else {
            // Light mode shapes - more vibrant colors with interesting shapes
            const gradients = [
                'linear-gradient(135deg, #5c6bc0 0%, #3949ab 100%)', // More vibrant blue
                'linear-gradient(135deg, #66bb6a 0%, #43a047 100%)', // More vibrant green
                'linear-gradient(135deg, #ba68c8 0%, #9c27b0 100%)', // More vibrant purple
                'linear-gradient(135deg, #4fc3f7 0%, #039be5 100%)', // More vibrant light blue
                'linear-gradient(135deg, #ffb74d 0%, #ff9800 100%)', // More vibrant orange
                'linear-gradient(135deg, #aed581 0%, #7cb342 100%)', // More vibrant light green
                'linear-gradient(135deg, #f06292 0%, #e91e63 100%)', // More vibrant pink
            ];
            return {
                background: gradients[index % gradients.length],
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            };
        }
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                overflow: 'hidden',
                background: isDarkMode 
                    ? 'linear-gradient(135deg, #303030 0%, #212121 100%)' 
                    : 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)', // Slightly darker background for better contrast
            }}
        >
            {shapes.map((shape, index) => (
                <motion.div
                    key={index}
                    custom={{ delay: shape.delay, rotation: shape.rotation }}
                    initial="initial"
                    animate="animate"
                    variants={floatAnimation}
                    style={{
                        position: 'absolute',
                        left: shape.x,
                        top: shape.y,
                        width: shape.size,
                        height: shape.size,
                        ...getShapeStyle(index),
                        filter: isDarkMode ? 'blur(60px)' : 'blur(70px)', // Slightly more blur for light mode
                    }}
                />
            ))}
            
            {/* Subtle dot pattern overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: isDarkMode ? 0.3 : 0.2,
                    backgroundImage: `radial-gradient(${isDarkMode ? '#ffffff20' : '#00000015'} 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                    pointerEvents: 'none',
                }}
            />
        </Box>
    );
};

export default BackgroundEffect; 