import React from 'react';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const BackgroundEffect = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    // Cool tech symbols to float around
    const techElements = [
        { content: '</>', size: '2.5rem' },
        { content: '{...}', size: '2.2rem' },
        { content: 'const', size: '2rem' },
        { content: '=>', size: '2.2rem' },
        { content: '01', size: '2rem' },
        { content: '()', size: '2.2rem' },
        { content: '[]', size: '2rem' },
        { content: 'npm', size: '2.2rem' },
        { content: 'git', size: '2rem' },
        { content: '&&', size: '1.8rem' },
        { content: '||', size: '1.8rem' },
        { content: 'async', size: '2.2rem' },
        { content: 'await', size: '2.2rem' },
        { content: '===', size: '2rem' },
        { content: '<div>', size: '2.5rem' }
    ];

    // Set up random floating animation paths
    const elements = techElements.map((el, index) => {
        // Get a random screen position
        const getRandomPosition = () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
        });

        // Make 4 waypoints for each element to float between
        const positions = Array(4).fill(null).map(() => getRandomPosition());

        return {
            ...el,
            positions,
            duration: 10 + Math.random() * 10,
            delay: index * 0.1 // Stagger the animations
        };
    });

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                overflow: 'hidden',
            }}
        >
            {/* Subtle background gradient that slowly shifts */}
            <motion.div
                initial={{
                    background: isDarkMode 
                        ? 'linear-gradient(135deg, #1a1a1a 0%, #3a506f 100%)'
                        : 'linear-gradient(135deg, #ffffff 0%, #bbdefb 100%)'
                }}
                animate={{
                    background: isDarkMode 
                        ? [
                            'linear-gradient(135deg, #1a1a1a 0%, #3a506f 100%)',
                            'linear-gradient(145deg, #1a1a1a 0%, #4a617f 100%)',
                            'linear-gradient(135deg, #1a1a1a 0%, #3a506f 100%)'
                          ]
                        : [
                            'linear-gradient(135deg, #ffffff 0%, #bbdefb 100%)',
                            'linear-gradient(145deg, #ffffff 0%, #90caf9 100%)',
                            'linear-gradient(135deg, #ffffff 0%, #bbdefb 100%)'
                          ]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    // Start animation immediately
                    delay: 0
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            />

            {/* The floating code symbols */}
            {elements.map((element, index) => (
                <motion.div
                    key={index}
                    initial={{
                        x: element.positions[0].x,
                        y: element.positions[0].y,
                        // Start with partial opacity for immediate visibility
                        opacity: isDarkMode ? 0.3 : 0.4,
                        scale: 0.8,
                        rotate: 0
                    }}
                    animate={{
                        x: element.positions.map(p => p.x),
                        y: element.positions.map(p => p.y),
                        opacity: isDarkMode ? 0.5 : 0.6,
                        scale: [0.8, 1.2, 0.8],
                        rotate: [-15, 15, -15],
                    }}
                    transition={{
                        duration: element.duration,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        ease: 'easeInOut',
                        delay: element.delay,
                        times: [0, 0.33, 0.66, 1]
                    }}
                    style={{
                        position: 'absolute',
                        fontSize: element.size,
                        fontFamily: 'Consolas, monospace',
                        color: isDarkMode ? '#88ccff' : '#2196f3',
                        fontWeight: '600',
                        userSelect: 'none',
                        textShadow: isDarkMode 
                            ? '0 0 15px rgba(136, 204, 255, 0.7)'
                            : '0 0 15px rgba(33, 150, 243, 0.5)',
                        willChange: 'transform',
                        transformOrigin: 'center center',
                    }}
                >
                    {element.content}
                </motion.div>
            ))}

            {/* Center glow effect */}
            <motion.div
                initial={{
                    opacity: 0.4,
                    scale: 1
                }}
                animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    // Start immediately
                    delay: 0 
                }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100%',
                    height: '100%',
                    transform: 'translate(-50%, -50%)',
                    background: isDarkMode
                        ? 'radial-gradient(circle at 50% 50%, rgba(136, 204, 255, 0.2) 0%, transparent 60%)'
                        : 'radial-gradient(circle at 50% 50%, rgba(33, 150, 243, 0.15) 0%, transparent 60%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Bottom-right glow */}
            <motion.div
                initial={{
                    opacity: 0.3,
                    scale: 1.2
                }}
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    // Reduced delay for quicker start
                    delay: 0.2,
                }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100%',
                    height: '100%',
                    transform: 'translate(-50%, -50%)',
                    background: isDarkMode
                        ? 'radial-gradient(circle at 30% 70%, rgba(136, 204, 255, 0.15) 0%, transparent 50%)'
                        : 'radial-gradient(circle at 30% 70%, rgba(33, 150, 243, 0.1) 0%, transparent 50%)',
                    pointerEvents: 'none',
                }}
            />
        </Box>
    );
};

export default BackgroundEffect; 