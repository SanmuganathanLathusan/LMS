import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import { COURSES } from '../data/courses';

const BACKGROUND_IMAGES = [
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1618477388954-7852f32655c7?w=1200&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?w=1200&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1618331835717-801e976710b2?w=1200&auto=format&fit=crop&q=60'
];

const SPECIAL_OFFERS = [
  { id: 1, title: 'Summer Sale', discount: '50%', description: 'All courses half off this summer!', validity: 'Valid till June 30', color: 'from-orange-500 to-red-500 shadow-orange-500/30' },
  { id: 2, title: 'Bundle Deal', discount: '40%', description: 'Buy 3 courses, get 40% off total', validity: 'Limited time offer', color: 'from-blue-500 to-cyan-500 shadow-blue-500/30' },
  { id: 3, title: 'New Member', discount: '60%', description: 'First course purchase for new members', validity: 'One time use', color: 'from-green-500 to-emerald-500 shadow-green-500/30' },
  { id: 4, title: 'Referral Bonus', discount: '₹500', description: 'Earn ₹500 for each friend referred', validity: 'Unlimited earnings', color: 'from-purple-500 to-indigo-500 shadow-purple-500/30' }
];

const Home = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section 
        className="bg-primary-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${BACKGROUND_IMAGES[backgroundIndex]}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transition: 'background-image 1s ease-in-out'
        }}
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
            Master New Skills with <span className="text-primary-300">PrimeLearn</span>
          </h1>
          <p className="max-w-2xl mx-auto items-center text-xl text-gray-100 mb-10 drop-shadow-md">
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

      {/* Special Offers Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-gray-800 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 tracking-tight text-center">Special Offers & Deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIAL_OFFERS.map(offer => (
              <div key={offer.id} className={`bg-gradient-to-br ${offer.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-white/10 group`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:translate-x-1 transition-transform">{offer.title}</h3>
                    <p className="text-sm opacity-90">{offer.description}</p>
                  </div>
                </div>
                <div className="border-t border-white border-opacity-20 pt-4 mt-4">
                  <div className="text-4xl font-extrabold mb-2 group-hover:scale-105 origin-left transition-transform">{offer.discount}</div>
                  <p className="text-xs opacity-75 italic">{offer.validity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4 bg-white sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Featured Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
