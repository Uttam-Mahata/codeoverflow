import { useEffect } from 'react';
import { Typography, Container, Box, Grid, Paper, Button } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  background: 'linear-gradient(135deg, #e0f7fa, #006064)',
  padding: theme.spacing(10, 0),
  color: theme.palette.common.white,
  textAlign: 'center',
}));

const SectionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5, 2),
  backgroundColor: '#f5f5f5',
}));

const FeaturePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BackgroundBox>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom data-aos="fade-up">
            CodeOverflow
          </Typography>
          <Typography variant="h5" component="p" gutterBottom data-aos="fade-up" data-aos-delay="200">
            Welcome to CodeOverflow, your one-stop platform for learning and mastering coding skills.
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
                <Typography variant="h5" component="h3" gutterBottom>
                  Web Development
                </Typography>
                <Typography component="p">
                  Learn to build modern, responsive websites with our comprehensive web development tutorials.
                </Typography>
              </FeaturePaper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeaturePaper elevation={3} data-aos="fade-up" data-aos-delay="300">
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
    </ThemeProvider>
  );
};

export default HomePage;
