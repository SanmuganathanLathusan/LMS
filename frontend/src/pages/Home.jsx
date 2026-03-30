import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen, Star } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { COURSES } from '../data/courses';

const SPECIAL_OFFERS = [
  { id: 1, title: 'Summer Sale', discount: '50%', description: 'All courses half off this summer!', validity: 'Valid till June 30', color: 'from-orange-500 to-red-500 shadow-orange-500/30' },
  { id: 2, title: 'Bundle Deal', discount: '40%', description: 'Buy 3 courses, get 40% off total', validity: 'Limited time offer', color: 'from-blue-500 to-cyan-500 shadow-blue-500/30' },
  { id: 3, title: 'New Member', discount: '60%', description: 'First course purchase for new members', validity: 'One time use', color: 'from-green-500 to-emerald-500 shadow-green-500/30' },
  { id: 4, title: 'Referral Bonus', discount: '₹500', description: 'Earn ₹500 for each friend referred', validity: 'Unlimited earnings', color: 'from-purple-500 to-indigo-500 shadow-purple-500/30' }
];

const Home = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* Unique Background Mesh Gradients */}
        <div className="absolute inset-0 w-full h-full -z-10 bg-white overflow-hidden">
          <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-primary-200/50 mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-200/50 mix-blend-multiply filter blur-[100px] opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-32 left-[20%] w-[600px] h-[600px] rounded-full bg-sky-200/50 mix-blend-multiply filter blur-[120px] opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>
          
          {/* Subtle Grid Pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100/50 text-primary-600 font-medium text-sm mb-8 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Transform your future today</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-[1.1]">
              Master New Skills with <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">PrimeLearn</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-12 leading-relaxed">
              Join thousands of students learning modern web development, design, and more. 
              Elevate your career with world-class courses and expert instructors.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/courses" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 flex items-center justify-center gap-2 group">
                Explore Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/register" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border-2 border-gray-100 hover:border-gray-200 text-gray-700 font-semibold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2">
                Become an Instructor
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-left leading-tight ml-2">
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                  </div>
                  <span className="font-semibold text-gray-900">10k+</span> students
                </div>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-gray-400" />
                <span><strong className="text-gray-900">500+</strong> Premium Courses</span>
              </div>
            </div>
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
