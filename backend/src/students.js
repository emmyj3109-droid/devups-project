// Students Mock Data
const students = [
  { id: 1, name: 'Amina Yusuf', role: 'Frontend developer' },
  { id: 2, name: 'Chidi Okafor', role: 'UI designer' },
  { id: 3, name: 'Fatima Bello', role: 'Tester' },
  { id: 4, name: 'David Adeyemi', role: 'Backend developer' },
];
// Students Controller
export const getStudents = (req, res) => {
  res.status(200).json({ success: true, data: students });
};