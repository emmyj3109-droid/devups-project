import { getAssignments } from './assignments.js';
import { getQuiz } from './quiz.js';
import { getStudents } from './students.js';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

//Students route 
app.get('/api/students', getStudents);

// Quiz route
app.get('/api/quiz', getQuiz);

// Assignments route
app.get('/api/assignments', getAssignments);


// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
