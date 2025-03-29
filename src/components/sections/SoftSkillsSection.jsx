import React, { useState } from "react";
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
    IconButton,
    Tooltip,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
    Psychology as PsychologyIcon,
    Lightbulb as LightbulbIcon,
    Forum as ForumIcon,
    Groups as GroupsIcon,
    TaskAlt as TaskAltIcon,
    Refresh as RefreshIcon,
    HandshakeOutlined as HandshakeIcon,
    Close as CloseIcon,
    Info as InfoIcon,
} from "@mui/icons-material";

const SoftSkillsSection = ({ itemVariants }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";
    const [expandedSkill, setExpandedSkill] = useState(null);

    const handleCardClick = (skill) => {
        setExpandedSkill(skill);
    };

    const handleCloseExpanded = (e) => {
        e.stopPropagation();
        setExpandedSkill(null);
    };

    const softSkills = [
        {
            skill: "Problem Solving",
            shortDescription:
                "Strong analytical and creative problem-solving abilities",
            longDescription:
                "Adept at tackling complex technical challenges through systematic analysis and innovative thinking. Consistently apply structured methodologies to decompose problems, identify root causes, and devise efficient solutions. Skilled in design thinking, algorithm optimization, and creating elegant solutions to multi-faceted problems. Demonstrated success in resolving critical production issues under pressure while maintaining code quality and system integrity.",
            icon: <LightbulbIcon sx={{ color: "#FFD700" }} />,
        },
        {
            skill: "Communication",
            shortDescription:
                "Excellent verbal and written communication skills",
            longDescription:
                "Exceptional communicator with proven ability to translate complex technical concepts into clear, accessible language for diverse audiences. Skilled in crafting comprehensive technical documentation, API specifications, and system architecture diagrams. Experienced in delivering engaging presentations, leading productive meetings, and facilitating technical workshops. Particularly effective at managing client expectations and maintaining transparent stakeholder communications throughout project lifecycles.",
            icon: <ForumIcon sx={{ color: "#4CAF50" }} />,
        },
        {
            skill: "Team Leadership",
            shortDescription:
                "Experience in leading and mentoring development teams",
            longDescription:
                "Proven team leader who inspires and motivates through collaborative guidance rather than directive management. Extensive experience mentoring junior developers, conducting effective code reviews, and creating growth opportunities for team members. Successfully led cross-functional teams of up to 8 developers through complex projects using agile methodologies. Strong advocate for inclusive team cultures, continuous learning, and balanced technical debt management. Skilled in conflict resolution and building consensus around architectural decisions.",
            icon: <GroupsIcon sx={{ color: "#2196F3" }} />,
        },
        {
            skill: "Project Management",
            shortDescription:
                "Skilled in managing complex projects and deadlines",
            longDescription:
                "Seasoned project manager with expertise in the full software development lifecycle. Proficient in agile methodologies including Scrum and Kanban, with experience serving as technical lead and scrum master. Skilled in creating realistic project timelines, identifying dependencies, and mitigating risks before they impact deliverables. Strong track record of delivering complex technical projects on schedule and within budget constraints while maintaining high code quality standards. Experience with project management tools and CI/CD implementation to streamline development workflows.",
            icon: <TaskAltIcon sx={{ color: "#9C27B0" }} />,
        },
        {
            skill: "Adaptability",
            shortDescription: "Quick to learn and adapt to new technologies",
            longDescription:
                "Highly adaptable professional with demonstrated ability to rapidly master new technologies, frameworks, and development paradigms. Consistently stay ahead of industry trends through self-directed learning and professional development. Experience pivoting development approaches mid-project to accommodate changing requirements or emerging technologies. Comfortable working in ambiguous environments and making decisions with incomplete information. Proven history of successfully transitioning between technology stacks while maintaining productivity and code quality.",
            icon: <RefreshIcon sx={{ color: "#FF5722" }} />,
        },
        {
            skill: "Collaboration",
            shortDescription:
                "Strong team player with cross-functional collaboration experience",
            longDescription:
                "Exceptional collaborator with extensive experience working effectively across organizational boundaries. Skilled in fostering productive relationships with product managers, designers, QA teams, DevOps engineers, and business stakeholders. Experience in remote and distributed team environments, with strong asynchronous communication practices. Adept at building bridges between technical and non-technical team members through active listening and empathy. Consistently contribute to positive team dynamics through knowledge sharing, pair programming, and constructive code reviews that focus on solutions rather than criticism.",
            icon: <HandshakeIcon sx={{ color: "#3F51B5" }} />,
        },
    ];

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
                            p: 4,
                            borderRadius: "16px",
                            boxShadow: isDarkMode
                                ? "0 0 2px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(0, 0, 0, 0.9), 0 -8px 24px rgba(0, 0, 0, 0.9)"
                                : "0 0 2px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.15), 0 -8px 24px rgba(0, 0, 0, 0.15)",
                            transform: "translate3d(0, 0, 0)",
                            WebkitTransform: "translate3d(0, 0, 0)",
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            position: "relative",
                            zIndex: 1,
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
                            sx={{ mb: 4 }}
                        >
                            <PsychologyIcon
                                sx={{
                                    mr: 1,
                                    verticalAlign: "middle",
                                    fontSize: "inherit",
                                }}
                            />
                            Soft Skills
                            <Tooltip
                                title="Click on cards to learn more"
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
                        <Divider sx={{ mb: 4 }} />

                        <Grid container spacing={3}>
                            {softSkills.map((skill, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 10,
                                        }}
                                        onClick={() => handleCardClick(skill)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <Card
                                            variant="outlined"
                                            sx={{
                                                height: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                cursor: "pointer",
                                                "&:hover": {
                                                    boxShadow: isDarkMode
                                                        ? "0 0 1px 0 rgba(0, 0, 0, 0.9), 0 0 2px 0 rgba(0, 0, 0, 0.8), 0 4px 8px -2px rgba(0, 0, 0, 0.6), 0 8px 16px -4px rgba(0, 0, 0, 0.4)"
                                                        : "0 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 2px 0 rgba(0, 0, 0, 0.15), 0 4px 8px -2px rgba(0, 0, 0, 0.1), 0 8px 16px -4px rgba(0, 0, 0, 0.05)",
                                                    bgcolor: isDarkMode
                                                        ? "rgba(255, 255, 255, 0.05)"
                                                        : "rgba(0, 0, 0, 0.02)",
                                                },
                                                "&:hover .skill-icon": {
                                                    transform:
                                                        "scale(1.2) rotate(5deg)",
                                                    filter: "drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))",
                                                },
                                            }}
                                        >
                                            <CardContent sx={{ p: 3 }}>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 2,
                                                        mb: 2,
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            transition:
                                                                "all 0.3s ease",
                                                        }}
                                                        className="skill-icon"
                                                    >
                                                        {skill.icon}
                                                    </Box>
                                                    <Typography
                                                        variant="h6"
                                                        component="h3"
                                                        fontWeight="bold"
                                                    >
                                                        {skill.skill}
                                                    </Typography>
                                                </Box>
                                                <Typography
                                                    variant="body1"
                                                    color={
                                                        isDarkMode
                                                            ? "grey.300"
                                                            : "text.secondary"
                                                    }
                                                >
                                                    {skill.shortDescription}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </motion.div>
            </motion.div>

            {/* Expanded soft skill view */}
            <AnimatePresence>
                {expandedSkill && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1000,
                            padding: "2rem",
                        }}
                        onClick={handleCloseExpanded}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: "calc(100% - 48px)",
                                maxWidth: "1200px",
                                height: "auto",
                                borderRadius: "16px",
                                backgroundColor: isDarkMode
                                    ? "rgba(0, 0, 0, 0.75)"
                                    : "rgba(255, 255, 255, 0.75)",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                            }}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <motion.div
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 50 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 25,
                            }}
                            style={{
                                width: "100%",
                                maxWidth: "800px",
                                maxHeight: "80vh",
                                overflow: "auto",
                                borderRadius: "16px",
                                boxShadow: isDarkMode
                                    ? "0 0 2px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(0, 0, 0, 0.9)"
                                    : "0 0 2px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.3)",
                                position: "relative",
                                zIndex: 1001,
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Card
                                sx={{
                                    height: "100%",
                                    borderRadius: "16px",
                                    backgroundColor:
                                        theme.palette.background.paper,
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            mb: 3,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 2,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    fontSize: "3rem",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                {expandedSkill.icon}
                                            </Box>
                                            <Typography
                                                variant="h3"
                                                fontWeight="bold"
                                            >
                                                {expandedSkill.skill}
                                            </Typography>
                                        </Box>

                                        <IconButton
                                            onClick={handleCloseExpanded}
                                            size="large"
                                            sx={{
                                                "&:hover": {
                                                    backgroundColor: isDarkMode
                                                        ? "rgba(255, 255, 255, 0.1)"
                                                        : "rgba(0, 0, 0, 0.05)",
                                                },
                                            }}
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                    </Box>

                                    <Divider sx={{ mb: 3 }} />

                                    <Typography
                                        variant="body1"
                                        paragraph
                                        sx={{ mb: 4, fontSize: "1.1rem" }}
                                    >
                                        {expandedSkill.longDescription}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    );
};

export default SoftSkillsSection;
