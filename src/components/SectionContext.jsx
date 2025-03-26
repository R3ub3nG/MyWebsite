import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';

// Section definitions - kept consistent across the application
export const sections = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "passions", label: "My Passions", icon: "❤️" },
    { id: "technical-skills", label: "Technical Skills", icon: "💻" },
    { id: "soft-skills", label: "Soft Skills", icon: "🤝" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "projects", label: "Projects", icon: "🚀" },
];

// Create the context
const SectionContext = createContext();

// Custom hook to use the section context
export const useSectionContext = () => useContext(SectionContext);

// Provider component
export const SectionProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [isManuallySet, setIsManuallySet] = useState(false);

    // Memoize the scroll handler to prevent recreating it on each render
    const handleScroll = useCallback(() => {
        // Skip scroll detection if section was manually set recently
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

        // Calculate which section is most visible in the viewport
        const scrollTop = scrollContainer.scrollTop;
        const viewportHeight = scrollContainer.clientHeight;

        // For all sections, find which one is most visible
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

    // Scroll to section function
    const scrollToSection = (id) => {
        const scrollContainer = document.getElementById("scrollContainer");
        const element = document.getElementById(id);

        if (scrollContainer && element) {
            // Set active section immediately and mark as manually set
            setActiveSection(id);
            setIsManuallySet(true);

            // Calculate the scroll position
            const elementTop = element.offsetTop - scrollContainer.offsetTop;

            // Scroll to the section
            scrollContainer.scrollTo({
                top: elementTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <SectionContext.Provider value={{ activeSection, scrollToSection, sections }}>
            {children}
        </SectionContext.Provider>
    );
};

export default SectionContext; 