import { Box, Container, Typography, Paper, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const TestimonialPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(2, 0),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

const TestimonialAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
}));

const Testimonials = () => {
  return (
    <Box sx={{ backgroundColor: '#f7f7f7', py: 5 }}>
      <Container>
        <Typography className='text-center' variant="h4" component="h2" gutterBottom>
          Testimonials
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TestimonialPaper elevation={3}>
              <TestimonialAvatar>
                <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '2rem', color: 'white' }} />
              </TestimonialAvatar>
              <Typography variant="h6" component="h3" gutterBottom>
                John Doe
              </Typography>
              <Typography variant="body1">
&quot;CodeOverflow has significantly improved my coding skills. The resources are top-notch and very easy to follow.&quot;
              </Typography>
            </TestimonialPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <TestimonialPaper elevation={3}>
              <TestimonialAvatar>
                <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '2rem', color: 'white' }} />
              </TestimonialAvatar>
              <Typography variant="h6" component="h3" gutterBottom>
                Jane Smith
              </Typography>
              <Typography variant="body1">
&quot;The best platform for learning web development! The tutorials are comprehensive and engaging.&quot;
              </Typography>
            </TestimonialPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <TestimonialPaper elevation={3}>
              <TestimonialAvatar>
                <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '2rem', color: 'white' }} />
              </TestimonialAvatar>
              <Typography variant="h6" component="h3" gutterBottom>
                Sam Wilson
              </Typography>
              <Typography variant="body1">
&quot;A fantastic resource for machine learning enthusiasts. The projects and guides are very detailed.&quot;
              </Typography>
            </TestimonialPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
