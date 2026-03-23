import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';

const MOCK_COURSES = [
  { id: 1, title: 'React for Beginners', instructor: 'Sarah Instructor', thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60', price: 49.99, rating: 4.8 },
  { id: 2, title: 'Advanced Tailwind CSS', instructor: 'Mark Designer', thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60', price: 39.99, rating: 4.9 },
  { id: 3, title: 'Fullstack Node.js', instructor: 'John Dev', thumbnail: 'https://images.unsplash.com/photo-1618477388954-7852f32655c7?w=800&auto=format&fit=crop&q=60', price: 89.99, rating: 4.7 }
];

const Home = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="bg-primary-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Master New Skills with <span className="text-primary-600">EduLMS</span>
          </h1>
          <p className="max-w-2xl mx-auto items-center text-xl text-gray-600 mb-10">
            Join thousands of students learning modern web development, design, and more. 
            Start your learning journey today!
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/courses" className="btn-primary text-lg px-8 py-3">
              Explore Courses
            </Link>
            <Link to="/register" className="btn-secondary text-lg px-8 py-3">
              Become an Instructor
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4 bg-white sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Featured Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_COURSES.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
