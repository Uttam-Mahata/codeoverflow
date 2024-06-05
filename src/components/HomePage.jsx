 
import { Typography, Container, Box, Grid, Paper, Button } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const BackgroundBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #fff, #1a4f11)',
  padding: theme.spacing(10, 0),
  color: theme.palette.common.white,
  textAlign: 'center',
}));

const SectionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5, 2),
}));

const FeaturePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <BackgroundBox>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            CodeOverflow
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Welcome to CodeOverflow, your one-stop platform for learning and mastering coding skills.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Get Started
          </Button>
        </Container>
      </BackgroundBox>
      <SectionBox>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Our Features
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <FeaturePaper elevation={3}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Competitive Programming
                </Typography>
                <Typography component="p">
                  Improve your coding skills with our competitive programming challenges.
                </Typography>
              </FeaturePaper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeaturePaper elevation={3}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Web Development
                </Typography>
                <Typography component="p">
                  Learn to build modern, responsive websites with our comprehensive web development tutorials.
                </Typography>
              </FeaturePaper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeaturePaper elevation={3}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Machine Learning
                </Typography>
                <Typography component="p">
                  Dive into the world of machine learning with our in-depth guides and projects.
                </Typography>
              </FeaturePaper>
            </Grid>
          </Grid>
        </Container>
      </SectionBox>
    </ThemeProvider>
  );
};

export default HomePage;


// const HomePage = () => {
//   return (
//     <div>
//       <h1>CodeOverflow</h1>
//       <p>Welcome to CodeOverflow</p>
//     </div>
//   );
// };

// export default HomePage;
