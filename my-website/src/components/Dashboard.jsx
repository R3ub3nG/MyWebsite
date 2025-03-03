import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Paper, 
  Typography, 
  Avatar, 
  Divider,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
  AppBar,
  Toolbar
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Code as CodeIcon, 
  School as SchoolIcon,
  Work as WorkIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon
} from '@mui/icons-material';
import ThemeToggle from './ThemeToggle';

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Dashboard = ({ toggleColorMode }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  // Gradient background that works in both light and dark modes
  const headerGradient = isDarkMode 
    ? 'linear-gradient(to right, #1a237e, #283593)' 
    : 'linear-gradient(to right, #e0f7fa, #bbdefb)';

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>
          <ThemeToggle toggleColorMode={toggleColorMode} />
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div variants={itemVariants}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                mb: 4,
                background: headerGradient,
                color: isDarkMode ? 'white' : 'inherit'
              }}
            >
              <Avatar 
                sx={{ 
                  width: 120, 
                  height: 120, 
                  mr: { xs: 0, md: 4 },
                  mb: { xs: 2, md: 0 },
                  border: `4px solid ${isDarkMode ? '#424242' : 'white'}`
                }}
                alt="Your Name"
                src="/path-to-your-photo.jpg" // Replace with your photo path
              />
              <Box>
                <Typography variant="h4" component="h1" gutterBottom>
                  Your Name
                </Typography>
                <Typography variant="h6" color={isDarkMode ? "grey.300" : "text.secondary"} gutterBottom>
                  Software Developer
                </Typography>
                <Typography variant="body1">
                  Passionate about creating elegant solutions to complex problems.
                  I specialize in web development, machine learning, and building intuitive user interfaces.
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <IconButton color="primary" aria-label="github" component="a" href="https://github.com/yourusername">
                    <GitHubIcon />
                  </IconButton>
                  <IconButton color="primary" aria-label="linkedin" component="a" href="https://linkedin.com/in/yourusername">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton color="primary" aria-label="email" component="a" href="mailto:your.email@example.com">
                    <EmailIcon />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </motion.div>

          {/* Main Content */}
          <Grid container spacing={4}>
            {/* Skills Section */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    <CodeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Skills
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  
                  <Grid container spacing={2}>
                    {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Material UI'].map((skill) => (
                      <Grid item xs={6} key={skill}>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography variant="body1">{skill}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>

            {/* Experience Section */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    <WorkIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Experience
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <WorkIcon />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Senior Developer" 
                        secondary={
                          <>
                            <Typography component="span" variant="body2" color={isDarkMode ? "grey.300" : "text.primary"}>
                              Company Name
                            </Typography>
                            {" — 2021 - Present"}
                          </>
                        } 
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <WorkIcon />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Web Developer" 
                        secondary={
                          <>
                            <Typography component="span" variant="body2" color={isDarkMode ? "grey.300" : "text.primary"}>
                              Previous Company
                            </Typography>
                            {" — 2018 - 2021"}
                          </>
                        } 
                      />
                    </ListItem>
                  </List>
                </Paper>
              </motion.div>
            </Grid>

            {/* Education Section */}
            <Grid item xs={12}>
              <motion.div variants={itemVariants}>
                <Paper elevation={2} sx={{ p: 3 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    <SchoolIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Education
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Card variant="outlined" sx={{ height: '100%' }}>
                        <CardContent>
                          <Typography variant="h6" component="div">
                            Bachelor of Science in Computer Science
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color={isDarkMode ? "grey.300" : "text.secondary"}>
                            University Name
                          </Typography>
                          <Typography variant="body2">
                            2014 - 2018
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Card variant="outlined" sx={{ height: '100%' }}>
                        <CardContent>
                          <Typography variant="h6" component="div">
                            Relevant Certifications
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color={isDarkMode ? "grey.300" : "text.secondary"}>
                            Various Institutions
                          </Typography>
                          <Typography variant="body2">
                            • AWS Certified Developer<br />
                            • Google Cloud Professional<br />
                            • React Advanced Certification
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>

            {/* Projects Section */}
            <Grid item xs={12}>
              <motion.div variants={itemVariants}>
                <Paper elevation={2} sx={{ p: 3 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    <CodeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Featured Projects
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  
                  <Grid container spacing={3}>
                    {[1, 2, 3].map((project) => (
                      <Grid item xs={12} md={4} key={project}>
                        <motion.div 
                          whileHover={{ scale: 1.03 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Card sx={{ height: '100%' }}>
                            <CardContent>
                              <Typography variant="h6" component="div">
                                Project {project}
                              </Typography>
                              <Typography sx={{ mb: 1.5 }} color={isDarkMode ? "grey.300" : "text.secondary"}>
                                React • Node.js • MongoDB
                              </Typography>
                              <Typography variant="body2">
                                A brief description of this amazing project and what technologies were used to build it.
                              </Typography>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </>
  );
};

export default Dashboard; 