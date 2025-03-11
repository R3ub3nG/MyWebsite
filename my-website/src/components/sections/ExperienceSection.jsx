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
    "& .MuiStepLabel-label": {
        marginTop: "8px",
        fontSize: "0.75rem",
        color:
            theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.6)"
                : "rgba(0,0,0,0.6)",
        "&.Mui-active": {
            color: "rgba(33,150,243,1)",
            fontWeight: "bold",
        },
        "&.Mui-completed": {
            color: "rgba(33,150,243,0.8)",
        },
    },
}));

// Custom StepIcon component
const TimelineStepIcon = (props) => {
    const { active, completed, className } = props;

    return (
        <TimelineDot ownerState={{ active, completed }} className={className}>
            {completed ? (
                <WorkIcon
                    style={{
                        color: "#fff",
                        fontSize: "1.2rem",
                    }}
                />
            ) : active ? (
                <WorkIcon
                    style={{
                        color: "#fff",
                        fontSize: "1.2rem",
                    }}
                />
            ) : (
                <WorkIcon
                    style={{
                        color: "rgba(0,0,0,0.5)",
                        fontSize: "1.2rem",
                    }}
                />
            )}
        </TimelineDot>
    );
};

const ExperienceSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";
    const [activeStep, setActiveStep] = useState(0);
    const cardRef = useRef(null);

    // Experience data
    const experiences = [
        {
            title: "Senior Developer",
            company: "Company Name",
            period: "2021 - Present",
            description:
                "Led development of key features for the company's flagship product, resulting in a 30% increase in user engagement.",
            responsibilities: [
                "Architected and implemented scalable backend solutions",
                "Mentored junior developers and conducted code reviews",
                "Optimized application performance and reduced load times by 40%",
            ],
        },
        {
            title: "Web Developer",
            company: "Previous Company",
            period: "2018 - 2021",
            description:
                "Developed and maintained multiple client websites and web applications using modern JavaScript frameworks.",
            responsibilities: [
                "Built responsive interfaces with React and Material UI",
                "Implemented RESTful APIs and integrated third-party services",
                "Collaborated with design team to create intuitive user experiences",
            ],
        },
        {
            title: "Junior Developer",
            company: "First Company",
            period: "2016 - 2018",
            description:
                "Started career as a junior developer working on frontend development and bug fixes.",
            responsibilities: [
                "Developed and maintained responsive web applications",
                "Fixed bugs and improved application performance",
                "Participated in code reviews and team meetings",
            ],
        },
    ];

    // Handle next and previous navigation
    const handleNext = () => {
        setActiveStep((prevActiveStep) =>
            prevActiveStep < experiences.length - 1
                ? prevActiveStep + 1
                : prevActiveStep
        );
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) =>
            prevActiveStep > 0 ? prevActiveStep - 1 : prevActiveStep
        );
    };

    // Handle timeline step click
    const handleStepClick = (step) => {
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

    useEffect(() => {
        // Reset card scroll position when changing cards
        if (cardRef.current) {
            cardRef.current.scrollTop = 0;
        }
    }, [activeStep]);

    return (
        <Container maxWidth="lg">
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
                            }}
                        >
                            {experiences.map((experience, index) => (
                                <Step
                                    key={index}
                                    completed={index < activeStep}
                                >
                                    <TimelineStepLabel
                                        StepIconComponent={TimelineStepIcon}
                                        onClick={() => handleStepClick(index)}
                                        sx={{ cursor: "pointer" }}
                                    >
                                        {experience.period}
                                    </TimelineStepLabel>
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
                            }}
                        >
                            <AnimatePresence
                                initial={false}
                                custom={direction}
                                mode="wait"
                            >
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
                                >
                                    <Card
                                        sx={{
                                            p: { xs: 2, sm: 3 },
                                            height: "100%",
                                            overflow: "auto",
                                            position: "relative",
                                            zIndex: 1,
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
                            }}
                        >
                            <Button
                                onClick={() => {
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
                                onClick={() => {
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
