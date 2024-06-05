import { Button, Tabs, Tab, Badge, Grid, useMediaQuery } from '@mui/material';
import QuestionBlock from '../QuestionBlock';
import { useTheme } from '@mui/material/styles';

const QuestionsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleKeyDown = (event) => {
    if (isMobile && event.key === 'Tab') {
      event.preventDefault();
      // Logic for mobile Tab navigation if needed

      // Example: Focus on the first question block
      document.querySelector('.questions-container .questions .question-block').focus();
      
    }
  };

  const question = {
    title: 'Docker Deployment always fails - Massive Container Size',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus officiis sint accusantium, voluptatem et cumque corporis! Corporis quibusdam dicta iste! Recusandae alias, sapiente esse, odio provident asperiores perspiciatis soluta nisi, ratione earum dolore unde quo molestiae est magni eligendi iste.',
    tags: ["docker", "devops", "intermediate"],
    answers: 4,
    votes: 3,
    views: 10
  };

  return (
    <div className="questions-container" onKeyDown={handleKeyDown} tabIndex="0">
      <Grid container spacing={2} className="top-bar mt-10">
        <Grid item xs={12} sm={8} md={10}>
          <h1 className="text-3xl">All Questions</h1>
        </Grid>
        <Grid item xs={12} sm={4} md={2} className="flex justify-end">
          <Button variant="contained">Ask Question</Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="mt-5" alignItems="center">
        <Grid item xs={12} sm={4}>
          <h1>5564 Questions</h1>
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
          <Button variant="outlined">Filter</Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="questions mt-5">
        {[...Array(6)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <QuestionBlock questionData={question} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default QuestionsPage;
