// Mock data. Replace with an API call later.
// kind: 'link' shows "Open Link", 'file' shows "View". isNew: true until marked as viewed.
export const CATEGORIES = ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Backend', 'Other'];

export const initialMaterials = [
  { id: 1, title: 'PERN Stack Crash Course (Backend)', category: 'Backend', kind: 'link', isNew: true, description: '' },
  { id: 2, title: 'Reactjs class recording', category: 'React', kind: 'link', isNew: true, description: '' },
  { id: 3, title: 'Reactjs crash course', category: 'React', kind: 'link', isNew: false, description: '' },
  { id: 4, title: 'Everything you need to know about JavaScript', category: 'JavaScript', kind: 'link', isNew: true, description: '' },
  { id: 5, title: 'Introduction to JavaScript', category: 'JavaScript', kind: 'link', isNew: false, description: '' },
  { id: 6, title: 'GitHub Tutorial', category: 'Other', kind: 'link', isNew: true,
    description: 'This YouTube video explains git and GitHub, how to merge, and how to do pull requests so that you can work effectively as a team.' },
  { id: 7, title: 'Full HTML and CSS course', category: 'HTML/CSS', kind: 'link', isNew: false,
    description: 'The HTML and CSS materials we promised. It covers everything you need to know about HTML and CSS.' },
  { id: 8, title: 'Week 3 presentation slide', category: 'HTML/CSS', kind: 'file', isNew: true, description: '' },
  { id: 9, title: 'Basic System design course', category: 'Backend', kind: 'link', isNew: true,
    description: 'An introduction to system design. If you get confused, keep watching until the end and we will go over it in class.' },
  { id: 10, title: 'Onboarding session PDF', category: 'Other', kind: 'file', isNew: false, description: 'The slides used for the onboarding session.' },
];
