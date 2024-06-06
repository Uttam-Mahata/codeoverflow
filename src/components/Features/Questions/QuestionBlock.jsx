import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faCommentAlt, faEye } from '@fortawesome/free-solid-svg-icons';

QuestionBlock.propTypes = {
  questionData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    answers: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};

export default function QuestionBlock({ questionData }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Grid item xs={12} sm={6} md={4} data-aos="fade-up">
      <div className="container flex flex-col gap-4 shadow-lg p-4 rounded-lg bg-white">
     
        <div className="question-content flex flex-col mt-2">
          <h2 className="text-blue-800 font-bold text-2xl">{questionData.title}</h2>
          <div className="question-tags flex flex-wrap gap-2 mt-2">
            {questionData.tags.map((tag, index) => (
              <span key={index} className="bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm">
                {tag}
              </span>
            ))}
          </div>
          <p className="h6 text-gray-700 mt-2">
            {questionData.description}
          </p>
          <div className="question-stats flex justify-between items-center text-gray-700">
          <span className="flex items-center gap-2 text-lg font-bold">
            <FontAwesomeIcon icon={faThumbsUp} /> {questionData.votes} Votes
          </span>
          <span className="flex items-center gap-2 text-lg">
            <FontAwesomeIcon icon={faCommentAlt} /> {questionData.answers} Answers
          </span>
          <span className="flex items-center gap-2 text-lg">
            <FontAwesomeIcon icon={faEye} /> {questionData.views} Views
          </span>
        </div>
         

        </div>
      </div>
    </Grid>
  );
}
