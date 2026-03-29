export const COURSES = [
  {
    id: 1,
    title: 'React for Beginners',
    instructor: 'Sarah Instructor',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
    price: 49.99,
    rating: 4.8,
    category: 'Development',
    level: 'Beginner',
    duration: '10h 30m',
    lessons: 42,
    students: 12400,
    description: 'Learn React fundamentals, component architecture, hooks, and routing to build modern frontend applications.'
  },
  {
    id: 2,
    title: 'Advanced Tailwind CSS',
    instructor: 'Mark Designer',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
    price: 39.99,
    rating: 4.9,
    category: 'Design',
    level: 'Intermediate',
    duration: '8h 15m',
    lessons: 36,
    students: 9800,
    description: 'Master layout systems, design tokens, responsive patterns, and advanced utility composition with Tailwind CSS.'
  },
  {
    id: 3,
    title: 'Fullstack Node.js',
    instructor: 'John Dev',
    thumbnail: 'https://images.unsplash.com/photo-1618477388954-7852f32655c7?w=800&auto=format&fit=crop&q=60',
    price: 89.99,
    rating: 4.7,
    category: 'Development',
    level: 'Advanced',
    duration: '18h 20m',
    lessons: 68,
    students: 15600,
    description: 'Build production APIs with Node.js, authentication, database modeling, and deployment best practices.'
  },
  {
    id: 4,
    title: 'UI/UX Design Masterclass',
    instructor: 'Alice Creative',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60',
    price: 59.99,
    rating: 4.9,
    category: 'Design',
    level: 'All levels',
    duration: '12h 05m',
    lessons: 50,
    students: 8900,
    description: 'Design user-centered products with solid research, wireframing, visual systems, and usability testing workflows.'
  },
  {
    id: 5,
    title: 'Python Data Science Mastery',
    instructor: 'Dr. Alan Math',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?w=800&auto=format&fit=crop&q=60',
    price: 99.99,
    rating: 4.8,
    category: 'Data Science',
    level: 'Intermediate',
    duration: '20h 40m',
    lessons: 74,
    students: 17400,
    description: 'Use Python, pandas, NumPy, and visualization tools to analyze data and communicate insights clearly.'
  },
  {
    id: 6,
    title: 'DevOps and CI/CD Essentials',
    instructor: 'Sam Operations',
    thumbnail: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?w=800&auto=format&fit=crop&q=60',
    price: 79.99,
    rating: 4.6,
    category: 'DevOps',
    level: 'Intermediate',
    duration: '14h 10m',
    lessons: 57,
    students: 11200,
    description: 'Learn CI/CD pipelines, containerization fundamentals, cloud deployment, and monitoring for reliable releases.'
  }
];

export const getCourseById = (id) => COURSES.find((course) => course.id === Number(id));
