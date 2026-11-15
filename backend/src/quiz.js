// Quiz Mock Data
const quizQuestions = [
  {
    id: 1,
    question: 'Which keyword is used to declare a constant in JavaScript?',
    options: ['var', 'let', 'const', 'define'],
    answer: 'const',
  },
  {
    id: 2,
    question: 'What does API stand for?',
    options: [
      'Application Programming Interface',
      'Apple Program Install',
      'Applied Page Index',
      'Auto Process Input',
    ],
    answer: 'Application Programming Interface',
  },
  {
    id: 3,
    question: 'Which HTTP method is used to get data from a server?',
    options: ['GET', 'POST', 'DELETE', 'PUT'],
    answer: 'GET',
  },
];
// Quiz Controller
export const getQuiz = (req, res) => {
  res.status(200).json({ success: true, data: quizQuestions });
};