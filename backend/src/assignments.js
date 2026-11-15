// Assignments Mock Data
const assignments = [
  {
    id: 1,
    title: 'Build a Landing Page',
    details: 'Create a responsive landing page using HTML and CSS.',
    deadline: '2026-11-20',
  },
  {
    id: 2,
    title: 'JavaScript Basics Exercise',
    details: 'Solve 10 problems on arrays, loops and functions.',
    deadline: '2026-11-25',
  },
  {
    id: 3,
    title: 'REST API Project',
    details: 'Build a simple API with Express and mock JSON data.',
    deadline: '2026-12-02',
  },
];
// Assignments Controller
export const getAssignments = (req, res) => {
  res.status(200).json({ success: true, data: assignments });
};