import React from 'react';

export default function QuestionBlock({ questionData }) {
    return (
        <div className="container flex gap-10 shadow-lg ml-10 mr-10 p-4">
            <div className="question-stats flex flex-col">
                <div className="flex items-center gap-2">
                    <p className="mr-1">{questionData.votes}</p>
                    <p className="mr-1">votes</p>
                </div>
                <div className="flex items-center gap-2">
                    <p className="mr-1">{questionData.views}</p>
                    <p className="mr-1">Views</p>
                </div>
                <div className="flex items-center gap-2">
                    <p className="mr-1">{questionData.answers}</p>
                    <p className="mr-1">Answers</p>
                </div>
                {/* Add more votes here if needed */}
            </div>
            <div className="question-content flex flex-col">
                <h2 className="text-blue-800 font-bold text-2xl">Docker Deployment not working !!!</h2>
                <p className="h6">
                    {questionData.description}
                </p>
            </div>
        </div>
    );
}
