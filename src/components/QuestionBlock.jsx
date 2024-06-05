import PropTypes from 'prop-types';

QuestionBlock.propTypes = {
    questionData: PropTypes.shape({
        votes: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired, // Add prop validation for questionData.description
        // ... other prop validations
    }).isRequired,
};

export default function QuestionBlock({ questionData }) {
    return (
        <div className="container flex gap-10 shadow-lg ml-10 mr-10 p-4">
           

          

       

    
            <div className="question-content flex flex-col">
                <h2 className="text-blue-800 font-bold text-2xl">Docker Deployment not working !!!</h2>
                <p className="h6">
                    {questionData.description}
                </p>
            </div>
        </div>
    );
}
