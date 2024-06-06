import { Button, Tabs, Tab, Badge, Grid, useMediaQuery } from '@mui/material';
import QuestionBlock from './QuestionBlock';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const QuestionsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleKeyDown = (event) => {
    if (isMobile && event.key === 'Tab') {
      event.preventDefault();
      // Logic for mobile Tab navigation if needed
    }
  };

  const question = {
    title: 'Docker Deployment always fails - Massive Container Size',
    description:
      'I am trying to deploy a simple Node.js application using Docker. The deployment always fails due to the massive size of the container. I have tried optimizing the Dockerfile but no luck. Any suggestions?',
    tags: ["docker", "devops", "intermediate"],
    answers: 4,
    votes: 3,
    views: 10
  };

  return (
    <div className="questions-container p-4 mt-4 relative" onKeyDown={handleKeyDown} tabIndex="0">
               <h1 className="text-3xl text-center">All Questions</h1>

      <Grid container spacing={2} className="top-bar mt-10">
       
       
        <Grid item xs={12} sm={2} className="flex justify-end">
          <Button
            variant="contained"
            color="primary"
            style={{
              borderRadius: '50%',
              width: '56px',
              height: '56px',
              minWidth: '56px',
              minHeight: '56px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              zIndex: 1000,
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="mt-5" alignItems="center">
        <Grid item xs={12} sm={4} className="flex justify-start">
          <Button
            variant="outlined"
            color='primary'
          >
            FILTER
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Tabs textColor="primary" indicatorColor="primary" variant={isMobile ? 'scrollable' : 'standard'}>
            <Tab label="Newest" />
            <Tab label="Active" />
            <Tab label={<Badge color="primary">Bountied</Badge>} />
            <Tab label="Unanswered" />
            <Tab label="More" />
          </Tabs>
        </Grid>
        <Grid item xs={12} sm={2} className="flex justify-end">
          <h1>5564 Questions</h1>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="questions mt-5">
        {[...Array(6)].map((_, index) => (
          <QuestionBlock key={index} questionData={question} />
        ))}
      </Grid>
    </div>
  );
};

export default QuestionsPage;
