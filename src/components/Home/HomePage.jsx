// src/components/HomePage.js
import  { useEffect } from 'react';
import { Typography, Container, Box, Grid, Paper, Button } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faRobot} from '@fortawesome/free-solid-svg-icons';
// Import Testimonials component
import Testimonials from '../Testimonials/Testimonials';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'tailwindcss/tailwind.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003366', // Dark blue
    },
    secondary: {
      main: '#f5a623', // Orange
    },
  },
  typography: {
    h2: {
      fontWeight: 'bold',
    },
    h4: {
      fontWeight: 'bold',
    },
    h5: {
      fontWeight: 'bold',
    },
  },
});

const BackgroundBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #000, #00a)',
  padding: theme.spacing(10, 0),
  color: theme.palette.common.white,
  textAlign: 'center',
  minHeight: '100vh',
}));

const SectionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5, 2),
  backgroundColor: '#f5f5f5',
}));

const FeaturePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  minHeight: '250px',
}));

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BackgroundBox>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            🚀 Code Overflow
          </Typography>
          <Typography variant="h5" component="p" gutterBottom data-aos="fade-up" data-aos-delay="200">


Code Overflow is a platform for developers to learn and practice coding. We offer a wide range of tutorials, challenges, and projects to help you improve your coding skills. Whether you&apos;re a beginner or an experienced developer, you&apos;ll find something to challenge and inspire you on Code Overflow.


          </Typography>
          <Button variant="contained" color="secondary" size="large" data-aos="fade-up" data-aos-delay="400">
            Get Started
          </Button>
        </Container>
      </BackgroundBox>

      <SectionBox>
        <Container>
          <Typography variant="h4" component="h2" textAlign={'center'} gutterBottom data-aos="fade-right">
            Our Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <FeaturePaper elevation={3} data-aos="fade-up" data-aos-delay="100">
                <FontAwesomeIcon icon={faCode} size="3x" className="mb-4 text-indigo-500" />
                <Typography variant="h5" component="h3" gutterBottom>
                  Competitive Programming
                </Typography>
                <Typography component="p">
                  Improve your coding skills with our competitive programming challenges.
                </Typography>
              </FeaturePaper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeaturePaper elevation={3} data-aos="fade-up" data-aos-delay="200">
                <FontAwesomeIcon icon={faLaptopCode} size="3x" className="mb-4 text-green-500" />
                <Typography variant="h5" component="h3" gutterBottom>
                  Web Development
                </Typography>
                <Typography component="p">
                  Learn to build modern, responsive websites with our  web development tutorials.
                </Typography>
              </FeaturePaper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeaturePaper elevation={3} data-aos="fade-up" data-aos-delay="300">
                <FontAwesomeIcon icon={faRobot} size="3x" className="mb-4 text-red-500" />
                <Typography variant="h5" component="h3" gutterBottom>
                  Machine Learning
                </Typography>
                <Typography component="p">
                  Dive into the world of machine learning with our in-depth guides and projects.
                </Typography>
              </FeaturePaper>
            </Grid>
          </Grid>

          <Box textAlign="center" mt={4}>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </Box>
        </Container>
      </SectionBox>

      {/* Testimonials component */}
      <Testimonials />

   

  
    </ThemeProvider>
  );
};

export default HomePage;
