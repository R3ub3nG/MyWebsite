import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';

// Navigation sections with their emojis
export const sections = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "passions", label: "My Passions", icon: "❤️" },
    { id: "technical-skills", label: "Technical Skills", icon: "💻" },
    { id: "soft-skills", label: "Soft Skills", icon: "🤝" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "projects", label: "Projects", icon: "🚀" },
];

// Set up React context
const SectionContext = createContext();

// Easy access hook
export const useSectionContext = () => useContext(SectionContext);

// Context provider wrapper
export const SectionProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [isManuallySet, setIsManuallySet] = useState(false);

    // Monitor scrolling to highlight current section in nav
    const handleScroll = useCallback(() => {
        // Don't override manual navigation choices
        if (isManuallySet) return;

        // Get the scroll container
        const scrollContainer = document.getElementById("scrollContainer");
        if (!scrollContainer) return;

        // Get all sections
        const sectionElements = sections
            .map((section) => ({
                id: section.id,
                element: document.getElementById(section.id),
            }))
            .filter((section) => section.element !== null);

        if (sectionElements.length === 0) return;

        // Figure out which section takes up most of the screen
        const scrollTop = scrollContainer.scrollTop;
        const viewportHeight = scrollContainer.clientHeight;

        // Find the most visible section
        let bestSection = null;
        let bestVisibility = 0;

        sectionElements.forEach(({ id, element }) => {
            const rect = element.getBoundingClientRect();

            // Calculate how much of the section is in the viewport
            const visibleTop = Math.max(0, rect.top);
            const visibleBottom = Math.min(viewportHeight, rect.bottom);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);

            // Calculate what percentage of the viewport this section occupies
            const visibility = visibleHeight / viewportHeight;

            if (visibility > bestVisibility) {
                bestVisibility = visibility;
                bestSection = id;
            }
        });

        // Update active section if we found one and it's different
        if (bestSection && bestSection !== activeSection) {
            setActiveSection(bestSection);
        }
    }, [activeSection, isManuallySet]);

    // Update active section based on scroll position
    useEffect(() => {
        // Get the scroll container
        const scrollContainer = document.getElementById("scrollContainer");
        if (!scrollContainer) return;

        // Add scroll event listener
        scrollContainer.addEventListener("scroll", handleScroll);

        // Initial check immediately to determine the initial active section
        handleScroll();
        
        // Also check when window is resized
        window.addEventListener("resize", handleScroll);

        // Cleanup
        return () => {
            scrollContainer.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [handleScroll]);

    // Reset the manual flag after a delay
    useEffect(() => {
        if (isManuallySet) {
            const timer = setTimeout(() => {
                setIsManuallySet(false);
            }, 1000); // Ignore scroll events for 1 second after clicking

            return () => clearTimeout(timer);
        }
    }, [isManuallySet]);

    // Handle navigation clicks
    const scrollToSection = (id) => {
        const scrollContainer = document.getElementById("scrollContainer");
        const element = document.getElementById(id);

        if (scrollContainer && element) {
            // Set active section immediately and mark as manually set
            setActiveSection(id);
            setIsManuallySet(true);

            // Find the section's position in the page
            const allSections = Array.from(document.querySelectorAll('#scrollContainer > div > section'));
            const sectionIndex = allSections.findIndex(section => section.id === id);
            
            if (sectionIndex !== -1) {
                // Calculate target position based on section index and viewport height
                const viewportHeight = window.innerHeight - 64;
                const targetPosition = sectionIndex * viewportHeight;
                
                // More responsive scrolling approach
                // Directly scroll to target with smooth behavior
                scrollContainer.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <SectionContext.Provider value={{ activeSection, scrollToSection, sections }}>
            {children}
        </SectionContext.Provider>
    );
};

export default SectionContext; 