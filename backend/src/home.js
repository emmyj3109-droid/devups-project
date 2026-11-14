// Home Dashboard Mock Data

const homeDashboard = {
  welcome: {
    title: 'Welcome back!',
    studentName: 'Student',
    message: 'Continue your learning journey with DevUps Academy.',
  },

  quickStats: {
    totalCourses: 5,
    completedCourses: 2,
    pendingAssignments: 3,
    upcomingClasses: 2,
  },

  navigationTabs: [
    { name: 'Home', path: '/dashboard', active: true },
    { name: 'Materials', path: '/materials', active: false },
    { name: 'Class', path: '/class', active: false },
    { name: 'Assignment', path: '/assignments', active: false },
    { name: 'Quiz', path: '/quiz', active: false },
  ],

  recentHighlights: [
    {
      id: 1,
      title: 'New learning material available',
      description: 'A new course material has been uploaded.',
      type: 'material',
    },
    {
      id: 2,
      title: 'Upcoming class',
      description: 'Check your schedule for upcoming classes.',
      type: 'class',
    },
    {
      id: 3,
      title: 'Assignment reminder',
      description: 'You have pending assignments to complete.',
      type: 'assignment',
    },
  ],
};

// Home Dashboard Controller

export const getHomeDashboard = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'application/json',
  });

  response.end(
    JSON.stringify({
      success: true,
      data: homeDashboard,
    })
  );
};