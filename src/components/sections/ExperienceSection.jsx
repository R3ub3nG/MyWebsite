import React, { useState, useRef, useEffect } from "react";
import {
    Container,
    Grid,
    Paper,
    Typography,
    Divider,
    Card,
    CardContent,
    useTheme,
    Box,
    Tooltip,
    IconButton,
    Button,
    Stepper,
    Step,
    StepLabel,
    StepConnector,
    stepConnectorClasses,
    styled,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
    Work as WorkIcon,
    Info as InfoIcon,
    NavigateNext as NextIcon,
    NavigateBefore as PrevIcon,
} from "@mui/icons-material";

// Custom timeline connector
const TimelineConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                "linear-gradient(95deg, rgba(33,150,243,1) 0%, rgba(33,150,243,0.6) 100%)",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                "linear-gradient(95deg, rgba(33,150,243,1) 0%, rgba(33,150,243,0.6) 100%)",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: 1,
    },
}));

// Custom timeline dot
const TimelineDot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor: "rgba(0,0,0,0.1)",
    zIndex: 1,
    color: "#fff",
    width: 32,
    height: 32,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    padding: 0,
    boxSizing: "border-box",
    "&:hover": {
        transform: "scale(1.15)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        backgroundColor: "rgba(33,150,243,0.8)",
    },
    ...(ownerState.active && {
        backgroundImage:
            "linear-gradient(136deg, rgba(33,150,243,1) 0%, rgba(33,150,243,0.6) 100%)",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
        backgroundImage:
            "linear-gradient(136deg, rgba(33,150,243,1) 0%, rgba(33,150,243,0.6) 100%)",
    }),
}));

// Custom StepLabel component
const TimelineStepLabel = styled(StepLabel)(({ theme }) => ({
    cursor: "pointer",
    "& .MuiStepLabel-label": {
        marginTop: "8px",
        fontSize: "0.75rem",
        color:
            theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.6)"
                : "rgba(0,0,0,0.6)",
        transition: "all 0.3s ease",
        "&.Mui-active": {
            color: "rgba(33,150,243,1)",
            fontWeight: "bold",
        },
        "&.Mui-completed": {
            color: "rgba(33,150,243,0.8)",
        },
        "&:hover": {
            color: "rgba(33,150,243,1)",
        },
    },
    "&:hover": {
        "& .MuiStepLabel-label": {
            color: "rgba(33,150,243,1)",
        },
    },
}));

// Custom StepIcon component
const TimelineStepIcon = (props) => {
    const { active, completed, className } = props;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <TimelineDot 
            ownerState={{ active, completed }} 
            className={className}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <motion.div
                animate={{
                    rotate: isHovered ? [0, -10, 10, -5, 5, 0] : 0,
                    scale: isHovered ? 1.2 : 1,
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    top: "1px", // Slight adjustment to center the icon vertically
                    lineHeight: 0, // Remove any line-height that might affect positioning
                }}
            >
                {completed ? (
                    <WorkIcon
                        style={{
                            color: "#fff",
                            fontSize: "1.2rem",
                            display: "block",
                            marginBottom: "1px", // Fine-tune vertical alignment
                        }}
                    />
                ) : active ? (
                    <WorkIcon
                        style={{
                            color: "#fff",
                            fontSize: "1.2rem",
                            display: "block",
                            marginBottom: "1px", // Fine-tune vertical alignment
                        }}
                    />
                ) : (
                    <WorkIcon
                        style={{
                            color: isHovered ? "#fff" : "rgba(0,0,0,0.5)",
                            fontSize: "1.2rem",
                            transition: "color 0.3s ease",
                            display: "block",
                            marginBottom: "1px", // Fine-tune vertical alignment
                        }}
                    />
                )}
            </motion.div>
        </TimelineDot>
    );
};

const ExperienceSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";
    const [activeStep, setActiveStep] = useState(0);
    const cardRef = useRef(null);
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    // Experience data
    const experiences = [
        {
            title: "Software Engineer Graduate",
            company: "NAB (National Australia Bank)",
            period: "Feb 2025 - Present",
            description:
                "Developing applications using modern programming languages and agile methodologies. Collaborated with cross-functional teams to design and implement scalable solutions, while maintaining code quality through effective testing practices.",
            responsibilities: [
                "Contributing to a data engineering project aimed at modernizing and uplifting NAB’s data transformation processes",
                "Developing scalable data pipelines to process and transform data across multiple layers using PySpark and Apache Airflow",
                "Collaborating with cross-functional teams to ensure efficient data flow and robust transformation logic aligned with changing business requirements",
            ],
        },
        {
            title: "Techonology Summer Intern",
            company: "NAB (National Australia Bank)",
            period: "Nov 2024 - Feb 2025",
            description:
                "Gained hands-on experience with industry-standard technologies and development practices. Applied classroom knowledge to real-world projects while learning professional coding standards, version control systems, and collaborative development workflows under mentorship from senior engineers.",
            responsibilities: [
                "Designed and developed a scalable web application to uplift NAB’s Hiring Process",
                "Worked with modern and industry standard frameworks and technologies",
                "Gained experience with cloud infrastructure, CI/CD Pipelines and DevOps best practices",
                "Collaborated with cross-functional teams and stakeholders in an Agile environment",
            ],
        },
        {
            title: "Sales Assistant",
            company: "JD Sports",
            period: "May 2022 - Present",
            description:
                "Started career as a junior developer working on frontend development and bug fixes.",
            responsibilities: [
                "Developed and maintained responsive web applications",
                "Fixed bugs and improved application performance",
                "Participated in code reviews and team meetings",
            ],
        },
        {
            title: "Crew Trainer/Coach",
            company: "McDonalds",
            period: "Jun 2018 - Aug 2022",
            description:
                "Gained hands-on experience in software development as part of an innovative startup team, contributing to both frontend and backend development.",
            responsibilities: [
                "Assisted in developing user interface components using JavaScript and React",
                "Contributed to database design and implementation with MongoDB",
                "Participated in agile development processes and sprint planning",
                "Created automated tests to ensure code quality and reliability",
            ],
        },
    ];

    // Handle next and previous navigation
    const handleNext = () => {
        if (!isInView) return;
        
        setActiveStep((prevActiveStep) =>
            prevActiveStep < experiences.length - 1
                ? prevActiveStep + 1
                : prevActiveStep
        );
    };

    const handleBack = () => {
        if (!isInView) return;
        
        setActiveStep((prevActiveStep) =>
            prevActiveStep > 0 ? prevActiveStep - 1 : prevActiveStep
        );
    };

    // Handle timeline step click
    const handleStepClick = (step) => {
        if (!isInView) return;
        
        // Set direction based on which step was clicked relative to current step
        if (step < activeStep) {
            setDirection("left");
        } else if (step > activeStep) {
            setDirection("right");
        }
        
        setActiveStep(step);
    };

    // Card animation variants
    const cardVariants = {
        hidden: (direction) => ({
            x: direction === "right" ? 300 : -300,
            opacity: 0,
        }),
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            },
        },
        exit: (direction) => ({
            x: direction === "right" ? -300 : 300,
            opacity: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            },
        }),
    };

    // Track direction for animations
    const [direction, setDirection] = useState("right");

    // Set up intersection observer to track when the section is in view
    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Only update if the state is changing to prevent unnecessary rerenders
                    if (entry.isIntersecting !== isInView) {
                        console.log(`Experience section is ${entry.isIntersecting ? 'in view' : 'out of view'}`);
                        setIsInView(entry.isIntersecting);
                        
                        // If section is no longer in view, reset any active animations or interactions
                        if (!entry.isIntersecting) {
                            // This helps prevent the section from trying to regain focus
                            document.activeElement.blur();
                        }
                    }
                });
            },
            { 
                threshold: 0.1, // Consider in view when at least 10% is visible
                rootMargin: "-10% 0px" // Add some margin to ensure we detect leaving the view earlier
            }
        );

        observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isInView]);

    // Reset card scroll position when changing cards
    useEffect(() => {
        // Only scroll if the section is in view
        if (cardRef.current && isInView) {
            cardRef.current.scrollTop = 0;
        }
    }, [activeStep, isInView]);

    // Completely disable the component when not in view
    if (!isInView) {
        return (
            <Container maxWidth="lg" ref={sectionRef} id="experience">
                <motion.div variants={itemVariants} initial={{ opacity: 1 }}>
                    <motion.div
                        initial={{ scale: 0.98 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                px: { xs: 2, sm: 3, md: 4 },
                                pt: 3,
                                borderRadius: "16px",
                                boxShadow: isDarkMode
                                    ? "0 0 2px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(0, 0, 0, 0.9), 0 -8px 24px rgba(0, 0, 0, 0.9)"
                                    : "0 0 2px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.15), 0 -8px 24px rgba(0, 0, 0, 0.15)",
                                transform: "translate3d(0, 0, 0)",
                                WebkitTransform: "translate3d(0, 0, 0)",
                                backfaceVisibility: "hidden",
                                WebkitBackfaceVisibility: "hidden",
                                position: "relative",
                                zIndex: "auto",
                                width: "100%",
                                mb: 4,
                                overflow: "hidden",
                                height: {
                                    xs: "500px",
                                    sm: "550px",
                                    md: "600px",
                                },
                            }}
                        >
                            {/* Placeholder content when not in view */}
                            <Typography
                                variant="h3"
                                component="h2"
                                gutterBottom
                                fontWeight="bold"
                                sx={{
                                    mb: 2,
                                    fontSize: {
                                        xs: "1.75rem",
                                        sm: "2.25rem",
                                        md: "2.5rem",
                                    },
                                }}
                            >
                                <WorkIcon
                                    sx={{
                                        mr: 1,
                                        verticalAlign: "middle",
                                        fontSize: "inherit",
                                    }}
                                />
                                Experience
                            </Typography>
                            <Divider sx={{ mb: 3 }} />
                        </Paper>
                    </motion.div>
                </motion.div>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" ref={sectionRef} id="experience">
            <motion.div variants={itemVariants} initial={{ opacity: 1 }}>
                <motion.div
                    initial={{ scale: 0.98 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            px: { xs: 2, sm: 3, md: 4 },
                            pt: 3,
                            borderRadius: "16px",
                            boxShadow: isDarkMode
                                ? "0 0 2px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(0, 0, 0, 0.9), 0 -8px 24px rgba(0, 0, 0, 0.9)"
                                : "0 0 2px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.15), 0 -8px 24px rgba(0, 0, 0, 0.15)",
                            transform: "translate3d(0, 0, 0)",
                            WebkitTransform: "translate3d(0, 0, 0)",
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            position: "relative",
                            zIndex: "auto",
                            width: "100%",
                            mb: 4,
                            overflow: "hidden",
                        }}
                    >
                        <Typography
                            variant="h3"
                            component="h2"
                            gutterBottom
                            fontWeight="bold"
                            sx={{
                                mb: 2,
                                fontSize: {
                                    xs: "1.75rem",
                                    sm: "2.25rem",
                                    md: "2.5rem",
                                },
                            }}
                        >
                            <WorkIcon
                                sx={{
                                    mr: 1,
                                    verticalAlign: "middle",
                                    fontSize: "inherit",
                                }}
                            />
                            Experience
                            <Tooltip
                                title="Navigate through my experience"
                                arrow
                                placement="top"
                            >
                                <IconButton
                                    size="small"
                                    sx={{
                                        ml: 2,
                                        verticalAlign: "middle",
                                        color: (theme) =>
                                            theme.palette.mode === "dark"
                                                ? "rgba(255, 255, 255, 0.7)"
                                                : "rgba(0, 0, 0, 0.6)",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform:
                                                "rotate(15deg) scale(1.2)",
                                            color: (theme) =>
                                                theme.palette.mode === "dark"
                                                    ? "rgba(255, 255, 255, 0.9)"
                                                    : "rgba(0, 0, 0, 0.8)",
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === "dark"
                                                    ? "rgba(255, 255, 255, 0.1)"
                                                    : "rgba(0, 0, 0, 0.05)",
                                        },
                                    }}
                                >
                                    <InfoIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        </Typography>
                        <Divider sx={{ mb: 3 }} />

                        {/* Timeline Stepper */}
                        <Stepper
                            alternativeLabel
                            activeStep={activeStep}
                            connector={<TimelineConnector />}
                            sx={{
                                mb: 3,
                                px: { xs: 0, sm: 2 },
                                "& .MuiStepConnector-root": {
                                    marginLeft: { xs: 0, sm: 0 },
                                    marginRight: { xs: 0, sm: 0 },
                                },
                                // Ensure pointer events work properly
                                pointerEvents: "auto",
                                "& .MuiStep-root": {
                                    cursor: "pointer",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-2px)",
                                    },
                                },
                            }}
                        >
                            {experiences.map((experience, index) => (
                                <Step
                                    key={index}
                                    completed={index < activeStep}
                                    sx={{
                                        cursor: "pointer",
                                        "& .MuiStepLabel-root": {
                                            cursor: "pointer",
                                        },
                                    }}
                                >
                                    <Tooltip
                                        title={`View ${experience.title} at ${experience.company.split(' ')[0]}`}
                                        placement="top"
                                        arrow
                                    >
                                        <TimelineStepLabel
                                            StepIconComponent={TimelineStepIcon}
                                            onClick={(e) => {
                                                // Stop propagation to prevent event bubbling
                                                e.stopPropagation();
                                                handleStepClick(index);
                                            }}
                                            sx={{ 
                                                cursor: "pointer",
                                                "&:hover": {
                                                    "& .MuiStepLabel-label": {
                                                        color: "rgba(33,150,243,1)",
                                                    },
                                                },
                                            }}
                                        >
                                            {experience.period.split(' ').map(part => 
                                                part.includes('20') ? part : 
                                                part === 'Present' ? part : 
                                                ''
                                            ).filter(Boolean).join(' - ')}
                                        </TimelineStepLabel>
                                    </Tooltip>
                                </Step>
                            ))}
                        </Stepper>

                        {/* Experience Card Container */}
                        <Box
                            sx={{
                                position: "relative",
                                height: {
                                    xs: "350px",
                                    sm: "380px",
                                    md: "400px",
                                },
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                px: { xs: 0, sm: 2, md: 3 },
                                pb: 6,
                                mt: 5,
                                mb: 5,
                                zIndex: 1,
                                isolation: "isolate",
                                pointerEvents: "auto"
                            }}
                        >
                            <AnimatePresence
                                initial={false}
                                custom={direction}
                                mode="wait"
                            >
                                {/* Only render the motion.div when the section is in view */}
                                {isInView && (
                                    <motion.div
                                        key={activeStep}
                                        custom={direction}
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            position: "absolute",
                                            zIndex: 1,
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                        }}
                                    >
                                        <Card
                                            sx={{
                                                p: { xs: 2, sm: 3 },
                                                height: "100%",
                                                overflow: "auto",
                                                position: "relative",
                                                zIndex: 1,
                                                pointerEvents: "auto"
                                            }}
                                            ref={cardRef}
                                        >
                                            <CardContent
                                                sx={{ p: { xs: 1, sm: 2 } }}
                                            >
                                                <Typography
                                                    variant="h5"
                                                    fontWeight="bold"
                                                    gutterBottom
                                                    sx={{
                                                        fontSize: {
                                                            xs: "1.25rem",
                                                            sm: "1.5rem",
                                                        },
                                                    }}
                                                >
                                                    {experiences[activeStep].title}
                                                </Typography>
                                                <Typography
                                                    variant="h6"
                                                    color={
                                                        isDarkMode
                                                            ? "grey.100"
                                                            : "text.primary"
                                                    }
                                                    gutterBottom
                                                    sx={{
                                                        fontSize: {
                                                            xs: "1rem",
                                                            sm: "1.25rem",
                                                        },
                                                    }}
                                                >
                                                    {
                                                        experiences[activeStep]
                                                            .company
                                                    }
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    color="text.secondary"
                                                    gutterBottom
                                                >
                                                    {experiences[activeStep].period}
                                                </Typography>
                                                <Divider sx={{ my: 1.5 }} />
                                                <Typography
                                                    variant="body1"
                                                    paragraph
                                                >
                                                    {
                                                        experiences[activeStep]
                                                            .description
                                                    }
                                                </Typography>
                                                <Typography variant="body1">
                                                    {experiences[
                                                        activeStep
                                                    ].responsibilities.map(
                                                        (responsibility, i) => (
                                                            <React.Fragment key={i}>
                                                                • {responsibility}
                                                                <br />
                                                            </React.Fragment>
                                                        )
                                                    )}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Box>
                        {/* Navigation Buttons */}
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                display: "flex",
                                justifyContent: "center",
                                gap: 2,
                                pb: 2,
                                // Only show buttons when section is in view
                                opacity: isInView ? 1 : 0,
                                pointerEvents: isInView ? "auto" : "none",
                                transition: "opacity 0.3s ease"
                            }}
                        >
                            <Button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setDirection("left");
                                    handleBack();
                                }}
                                disabled={activeStep === 0}
                                variant="contained"
                                color="primary"
                                startIcon={<PrevIcon />}
                                size="small"
                                sx={{
                                    borderRadius: "20px",
                                    opacity: activeStep === 0 ? 0.5 : 1,
                                    px: { xs: 1, sm: 2 },
                                    py: { xs: 0.5, sm: 0.75 },
                                    background:
                                        "linear-gradient(136deg, rgba(33,150,243,1) 0%, rgba(33,150,243,0.6) 100%)",
                                    "&:hover": {
                                        background:
                                            "linear-gradient(136deg, rgba(33,150,243,0.9) 0%, rgba(33,150,243,0.7) 100%)",
                                    },
                                }}
                            >
                                Prev
                            </Button>
                            <Button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setDirection("right");
                                    handleNext();
                                }}
                                disabled={activeStep === experiences.length - 1}
                                variant="contained"
                                color="primary"
                                endIcon={<NextIcon />}
                                size="small"
                                sx={{
                                    borderRadius: "20px",
                                    opacity:
                                        activeStep === experiences.length - 1
                                            ? 0.5
                                            : 1,
                                    px: { xs: 1, sm: 2 },
                                    py: { xs: 0.5, sm: 0.75 },
                                    background:
                                        "linear-gradient(136deg, rgba(33,150,243,1) 0%, rgba(33,150,243,0.6) 100%)",
                                    "&:hover": {
                                        background:
                                            "linear-gradient(136deg, rgba(33,150,243,0.9) 0%, rgba(33,150,243,0.7) 100%)",
                                    },
                                }}
                            >
                                Next
                            </Button>
                        </Box>
                    </Paper>
                </motion.div>
            </motion.div>
        </Container>
    );
};

export default ExperienceSection;
