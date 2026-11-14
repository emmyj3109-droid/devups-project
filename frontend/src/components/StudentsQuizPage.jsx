import { useState } from "react";
const questionsByQuiz = {
  "JavaScript Quiz": [
    {
      prompt: "Which keyword declares a variable that can be reassigned?",
      options: ["let", "const", "static"],
      answer: "let",
    },
    {
      prompt: "Which method adds an item to the end of an array?",
      options: ["push()", "pop()", "shift()"],
      answer: "push()",
    },
  ],
  "System design 2 quiz": [
    {
      prompt: "What does a load balancer do?",
      options: [
        "Distributes requests across servers",
        "Stores passwords",
        "Writes application code",
      ],
      answer: "Distributes requests across servers",
    },
    {
      prompt: "What is horizontal scaling?",
      options: [
        "Adding more servers",
        "Making one server larger",
        "Reducing the number of users",
      ],
      answer: "Adding more servers",
    },
  ],
  "Basic System Design quiz": [
    {
      prompt: "What is a cache commonly used for?",
      options: [
        "Storing frequently used data for faster access",
        "Replacing every database",
        "Sending email",
      ],
      answer: "Storing frequently used data for faster access",
    },
    {
      prompt: "What is the main purpose of a database?",
      options: [
        "To store and organize data",
        "To style a web page",
        "To balance server traffic",
      ],
      answer: "To store and organize data",
    },
  ],
  "DevOps Academy: Session 1 Comprehensive Quiz": [
    {
      prompt: "What does CI stand for in software development?",
      options: [
        "Continuous Integration",
        "Code Inspection",
        "Central Internet",
      ],
      answer: "Continuous Integration",
    },
    {
      prompt: "What does a container package?",
      options: [
        "An application and its dependencies",
        "Only a web address",
        "Only a database table",
      ],
      answer: "An application and its dependencies",
    },
  ],
};
function StudentsQuizPage() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
const [activeQuiz, setActiveQuiz] = useState("JavaScript Quiz");
const questions = questionsByQuiz[activeQuiz];
  if (quizStarted) {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-[#1E293B]">
      <section className="mx-auto max-w-2xl">
        <button
          type="button"
          onClick={() => setQuizStarted(false)}
          className="mb-6 text-sm font-medium text-emerald-700"
        >
          â† Back to quizzes
        </button>

        <h1 className="text-2xl font-bold">{activeQuiz}</h1>
        <div className="mt-8">
  <p className="text-sm text-slate-500">
  Question {questionIndex + 1} of {questions.length}
</p>
  <h2 className="mt-2 text-xl font-semibold">
    {questions[questionIndex].prompt}
  </h2>

  <div className="mt-5 space-y-3">
   {questions[questionIndex].options.map((option) => (
  <label
    key={option}
    className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 p-4"
  >
    <input
      type="radio"
      name="answer"
      value={option}
      checked={selectedAnswer === option}
      onChange={() => setSelectedAnswer(option)}
      className="accent-[#10B981]"
    />
    <span>{option}</span>
  </label>
))}
   
   
  </div>
  <button
  type="button"
  disabled={!selectedAnswer}
  onClick={() =>
    setFeedback(
      selectedAnswer === questions[questionIndex].answer
  ? "Correct!"
  : "Not quite. Try again."
    )
  }
  className="mt-6 rounded-lg bg-[#10B981] px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
>
  Submit Answer
</button>

{feedback && <p className="mt-3 font-medium">{feedback}</p>}
{feedback === "Correct!" && questionIndex < questions.length - 1 && (
  <button
    type="button"
    onClick={() => {
      setQuestionIndex(questionIndex + 1);
      setSelectedAnswer("");
      setFeedback("");
    }}
    className="mt-4 rounded-lg bg-[#10B981] px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
  >
    Next Question
  </button>
)}
{feedback === "Correct!" && questionIndex === questions.length - 1 && (
  <p className="mt-4 font-semibold text-emerald-700">
    Quiz complete!
  </p>
)}
</div>
      </section>
    </main>
  );
}
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-[#1E293B]">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold">Available Quizzes</h1>
         <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
  <div className="flex items-start justify-between gap-4">
    <h2 className="text-lg font-semibold">JavaScript Quiz</h2>
    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-800">
  Available
</span>
  </div>

  <p className="mt-2 text-sm text-slate-600">
    Make sure youâ€™ve watched the JavaScript videos before taking the quiz.
  </p>

  <p className="mt-5 border-t border-slate-200 pt-4 text-sm text-slate-600">
    25 Minutes Time Limit
  </p>

 <button
  type="button"
  onClick={() => setQuizStarted(true)}
  className="mt-4 w-full rounded-lg bg-[#10B981] px-4 py-3 text-center font-semibold text-white hover:bg-emerald-700"
>
  Start Quiz
</button>
</article>
<article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
  <div className="flex items-start justify-between gap-4">
    <h2 className="text-lg font-semibold">System design 2 quiz</h2>
    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-800">
  Available
</span>
  </div>

  <p className="mt-2 text-sm text-slate-600">All the best</p>

  <p className="mt-5 border-t border-slate-200 pt-4 text-sm text-slate-600">
    19 Minutes Time Limit
  </p>

  <button
    type="button"
    onClick={() => {
  setActiveQuiz("System design 2 quiz");
  setQuizStarted(true);
}}
    className="mt-4 w-full rounded-lg bg-[#10B981] px-4 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
  >
    Start Quiz
  </button>
</article>
<article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
  <div className="flex items-start justify-between gap-4">
    <h2 className="text-lg font-semibold">Basic System Design quiz</h2>
    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-800">
      Available
    </span>
  </div>

  <p className="mt-2 text-sm text-slate-600">
    This is an essential quiz. Make sure youâ€™re prepared before taking it.
  </p>

  <p className="mt-5 border-t border-slate-200 pt-4 text-sm text-slate-600">
    25 Minutes Time Limit
  </p>

  <button
    type="button"
    onClick={() => {
      setActiveQuiz("Basic System Design quiz");
      setQuizStarted(true);
    }}
    className="mt-4 w-full rounded-lg bg-[#10B981] px-4 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
  >
    Start Quiz
  </button>
</article>
<article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
  <div className="flex items-start justify-between gap-4">
    <h2 className="text-lg font-semibold">
      DevOps Academy: Session 1 Comprehensive Quiz
    </h2>
    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-800">
      Available
    </span>
  </div>

  <p className="mt-2 text-sm text-slate-600">
    Based on the DevOps Academy introductory session meeting notes.
  </p>

  <p className="mt-5 border-t border-slate-200 pt-4 text-sm text-slate-600">
    9 Minutes Time Limit
  </p>

  <button
    type="button"
    onClick={() => {
      setActiveQuiz("DevOps Academy: Session 1 Comprehensive Quiz");
      setQuizStarted(true);
    }}
    className="mt-4 w-full rounded-lg bg-[#10B981] px-4 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
  >
    Start Quiz
  </button>
</article>
</div>
<section className="mt-12">
  <h2 className="text-2xl font-bold">Students</h2>
</section>
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<article className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
  <h3 className="text-lg font-semibold">Sample Student</h3>

  <p className="mt-2 text-sm text-slate-600">
    <span className="font-medium">Assigned task:</span> Frontend dashboard
  </p>

  <button
    type="button"
    className="mt-4 rounded-lg bg-[#10B981] px-4 py-2 font-semibold text-white transition-colors hover:bg-emerald-700"
  >
    Ask an Admin
  </button>
</article>
</div>
         </section>
    </main>
  );
}

export default StudentsQuizPage;