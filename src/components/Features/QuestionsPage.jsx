import { Typography, Container, Box, Grid, Paper, Button } from '@mui/material';
import { Tabs, Tab, Badge } from '@mui/material';
import QuestionBlock from '../QuestionBlock';
const QuestionsPage = () => {

  const question = {
    title: 'Docker Deployment always fails - Massive Container Size',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus officiis sint accusantium, voluptatem et cumque corporis! Corporis quibusdam dicta iste! Recusandae alias, sapiente esse, odio provident asperiores perspiciatis soluta nisi, ratione earum dolore unde quo molestiae est magni eligendi iste.',
    tags: ["docker", "devops", "intermediate"],
    answers: 4,
    votes: 3,
    views: 10
  }



  return (
    <div className="questions-container">
      <div className="top-bar flex justify-around mt-10">
        <h1 className="text-3xl">All Questions</h1>
        <Button variant="contained">Ask Question</Button>
      </div>
      <div className="flex justify-around items-center mt-5">
        <h1>5564 Questions</h1>
        <Tabs
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Newest" />
          <Tab label="Active" />
          <Tab
            label={
              <Badge color="primary">
                Bountied
              </Badge>
            }
          />
          <Tab label="Unanswered" />
          <Tab label="More" />
        </Tabs>
        <Button variant="outlined">Filter</Button>
      </div>
      <div className="questions flex flex-col gap-10">
        <QuestionBlock questionData={question} />
        <QuestionBlock questionData={question} />
        <QuestionBlock questionData={question} />
        <QuestionBlock questionData={question} />
        <QuestionBlock questionData={question} />
        <QuestionBlock questionData={question} />
      </div>
    </div>
  );
};

export default QuestionsPage;
