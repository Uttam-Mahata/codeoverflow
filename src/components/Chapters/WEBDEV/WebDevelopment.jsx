import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from '@mui/material';
import webImg from '../../../../assets/images/webImg.png';

const WebDevelopment = () => {

  const handleKeyDown = (event) => {
    if (isMobile && event.key === 'Tab') {
      event.preventDefault();
      // Logic for mobile Tab navigation if needed
    }
  }


  return (
    <Container>
      <Box sx={{ mt: 4, mb: 6 }}>
        <Paper sx={{ p: 4 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" gutterBottom>
                Navigating the Terrains of Web Development for Success
              </Typography>
              <Typography variant="h6">
                We provide free resources and roadmaps for mastering Full Stack Development.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={webImg}
                alt="web-image"
                sx={{ width: '100%', borderRadius: 2 }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        Web Development Roadmap
      </Typography>

      {roadmapData.map((section, index) => (
        <RoadmapSection key={index} title={section.title} resources={section.resources} />
      ))}
    </Container>
  );
};

const RoadmapSection = ({ title, resources }) => (
  <Paper sx={{ p: 3, mb: 4 }}>
    <Typography variant="h5" gutterBottom>
      {title}
    </Typography>
    <Divider sx={{ mb: 2 }} />
    <List>
      {resources.map((resource, index) => (
        <ListItem key={index} sx={{ pl: 0 }}>
          <ListItemText primary={resource} />
        </ListItem>
      ))}
    </List>
  </Paper>
);

const roadmapData = [
  {
    title: '1. Basics of HTML, CSS, and JavaScript',
    resources: [
      'HTML Tutorial - W3Schools',
      'CSS Tutorial - MDN Web Docs',
      'JavaScript Guide - MDN Web Docs',
    ],
  },
  {
    title: '2. Version Control Systems (Git)',
    resources: ['Git Handbook - GitHub', 'Pro Git Book - Git SCM'],
  },
  {
    title: '3. Frontend Frameworks',
    resources: ['React Documentation', 'Vue.js Guide', 'Angular Documentation'],
  },
  {
    title: '4. Backend Development',
    resources: ['Node.js Documentation', 'Express.js Guide', 'Django Documentation'],
  },
  {
    title: '5. Databases',
    resources: ['SQL Tutorial - W3Schools', 'MongoDB University', 'PostgreSQL Tutorial'],
  },
  {
    title: '6. Deployment and DevOps',
    resources: ['Heroku Deployment Guide', 'AWS for Beginners', 'Docker Documentation'],
  },
];

export default WebDevelopment;
