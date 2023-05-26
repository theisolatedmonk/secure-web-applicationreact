"use client"
import { link } from 'fs';
import React, { useState } from 'react';

interface Question {
  id: number;
  text: string;
}

const questions: Question[] = [
  { id: 1, text: '1. Do you use strong passwords for all of your online accounts?' },
  { id: 2, text: '2. Do you change your passwords regularly?' },
  { id: 3, text: '3. Do you use a password manager to help you keep track of your passwords?' },
  { id: 4, text: '4. Do you avoid using personal information in your online usernames?' },
  { id: 5, text: '5. Do you only use secure websites?' },
//   { id: 6, text: '6. Do you keep your software up to date?' },
//   { id: 7, text: '7. Do you use a firewall and antivirus software?' },
//   { id: 8, text: '8. Are you careful about what information you share online?' },
//   { id: 9, text: '9. Do you know how to report a security breach?' },
//   { id: 10, text: '10. Do you know the signs that your identity may have been stolen?' },
//   { id: 11, text: '11. Do you know what to do if you think your identity has been stolen?' },
//   { id: 12, text: '12. Do you use strong passwords for your social media accounts?' },
//   { id: 13, text: '13. Do you avoid sharing your full name, date of birth, or home address on social media?' },
//   { id: 14, text: '14. Are you careful about what photos and videos you share on social media?' },
//   { id: 15, text: '15. Do you friend or follow strangers on social media?' },
//   { id: 16, text: '16. Are your social media privacy settings tight?' },
//   { id: 17, text: '17. Do you report any suspicious activity to the social media platform?' },
//   { id: 18, text: '18. Do you have a plan in place in case your identity is stolen?' },
//   { id: 19, text: '19. Are you aware of the latest scams and phishing attacks?' },
//   { id: 20, text: '20. Do you enable two-factor authentication for your online accounts whenever possible?' },
//   { id: 21, text: '21. Do you regularly review your online account activity and check for any unauthorized access or suspicious transactions?' },
//   { id: 22, text: '22. Do you avoid clicking on suspicious links or opening email attachments from unknown sources?' },
//   { id: 23, text: '23. Do you use different passwords for each of your online accounts?' },
//   { id: 24, text: '24. Do you regularly backup important data and files to prevent loss in case of a security breach or device failure?' },
//   { id: 25, text: '25. Do you educate yourself about common cybersecurity threats and stay updated on best practices for online safety?' },
  // Add the remaining questions here
];

const Question: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const totalQuestions = questions.length;
    const answeredQuestions = Object.keys(answers).length;

    if (answeredQuestions !== totalQuestions) {
      return;
    }

    const yesCount = Object.values(answers).filter((answer) => answer === 'Yes').length;
    const calculatedScore = (yesCount / totalQuestions) * 100;

    setScore(calculatedScore);
  };

  const getMessage = (): string => {
    if (score >= 0 && score <= 25) {
      return 'You are not secure. Please learn Cyber Security.';
    } else if (score > 25 && score <= 50) {
      return 'You are not enough secure. Please learn Cyber Security.';
    } else if (score > 50 && score <= 75) {
      return 'You are moderately secure. Please learn Cyber Security.';
    } else {
      return 'You are secure. Please stay updated with Cyber Security for future security.';
    }
  };

  const isSubmitDisabled = Object.keys(answers).length !== questions.length;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-4">Online Security Assessment</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div key={question.id} className="my-4">
            <h3 className="text-lg font-semibold">{question.text}</h3>
            <div className="flex items-center">
              <input
                type="radio"
                id={`yes_${question.id}`}
                name={`question_${question.id}`}
                value="Yes"
                onChange={() => handleAnswerChange(question.id, 'Yes')}
                className="mr-2"
              />
              <label htmlFor={`yes_${question.id}`}>Yes</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id={`no_${question.id}`}
                name={`question_${question.id}`}
                value="No"
                onChange={() => handleAnswerChange(question.id, 'No')}
                className="mr-2"
              />
              <label htmlFor={`no_${question.id}`}>No</label>
            </div>
          </div>
        ))}
        <button type="submit" disabled={isSubmitDisabled} className="bg-blue-500 focus:bg-gray-800 text-white px-4 py-2 mt-4 rounded">
          Submit
        </button>
      </form>
      {score > 0 && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold">Your Score: {score}%</h2>
          <p className="mt-2">{getMessage()}</p>
        </div>
      )}
    </div>
  );
};

export default Question;


