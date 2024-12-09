// Estos cursos se usan porque momentaneamente el backend tiene errores para traer
// los cursos

import { Course } from '@/interfaces/course';

export const fakeCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description:
      'Learn the basics of HTML, CSS, and JavaScript to build your first website.',
    image: '',
    isFree: true,
    price: 0,
    type: 'Online',
    level: 'Beginner',
    language: 'English',
    contentPillars: ['Frontend', 'Backend', 'Responsive Design'],
    sectors: [{ id: '1', name: 'Education' }],
    functionalities: ['Web Development'],
    platforms: ['Udemy', 'Coursera'],
    platformsAndTool: ['VS Code', 'Git'],
    owner: {
      name: 'John Doe',
      organization: 'Tech Academy',
    },
    modules: [
      { id: 'm1', title: 'HTML Basics' },
      { id: 'm2', title: 'CSS Essentials' },
      { id: 'm3', title: 'JavaScript Introduction' },
    ],
  },
  {
    id: '2',
    title: 'Advanced Data Analytics',
    description:
      'Dive deep into data visualization, statistical modeling, and machine learning.',
    image: '',
    isFree: false,
    price: 149.99,
    type: 'Online',
    level: 'Advanced',
    language: 'English',
    contentPillars: ['Data Science', 'Statistics', 'Machine Learning'],
    sectors: [{ id: '1', name: 'Education' }],
    functionalities: ['Data Analysis'],
    platforms: ['edX', 'LinkedIn Learning'],
    platformsAndTool: ['Python', 'Tableau'],
    owner: {
      name: 'Jane Smith',
      organization: 'Data Insights Co.',
    },
    modules: [
      { id: 'm1', title: 'Data Cleaning and Preprocessing' },
      { id: 'm2', title: 'Statistical Modeling' },
      { id: 'm3', title: 'Machine Learning Applications' },
    ],
  },
  {
    id: '3',
    title: 'Photography Masterclass',
    description:
      'Master the art of photography, from composition to post-processing.',
    image: '',
    isFree: false,
    price: 99.99,
    type: 'Offline',
    level: 'Intermediate',
    language: 'English',
    contentPillars: ['Photography', 'Editing', 'Lighting'],
    sectors: [{ id: '1', name: 'Education' }],
    functionalities: ['Photography'],
    platforms: ['Skillshare'],
    platformsAndTool: ['Lightroom', 'Photoshop'],
    owner: {
      name: 'Emily Turner',
      organization: 'Creative Academy',
    },
    modules: [
      { id: 'm1', title: 'Camera Basics' },
      { id: 'm2', title: 'Understanding Lighting' },
      { id: 'm3', title: 'Post-Processing in Lightroom' },
    ],
  },
];
