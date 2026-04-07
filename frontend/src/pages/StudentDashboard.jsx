import { Link } from 'react-router-dom';
import { Award, BookOpen, Clock3, Trophy, Sparkles, Heart, Star, PlayCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { COURSES } from '../data/courses';

const StudentDashboard = () => {
  const { user } = useAuth();
  
  // Mock data for student
  const enrolledCourses = COURSES.slice(0, 3);
  const wishlistCourses = COURSES.slice(4, 6);
  const stats = {
    enrolled: enrolledCourses.length,
    hoursLearned: 27,
    certificates: 2,
    wishlist: wishlistCourses.length,
    reviews: 5,
    streak: 12
  };

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8 bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-wide text-blue-100 font-semibold">Student Dashboard</p>
              <h1 className="text-3xl font-extrabold mt-2">Welcome back, {user?.name || 'Learner'}!</h1>
              <p className="text-blue-100 mt-2">You've completed 75% of your goal this week. Keep it up!</p>
            </div>
            <Link to="/courses" className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-xl font-bold shadow-md transition-all self-start md:self-auto inline-flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Explore New Courses
            </Link>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: 'Enrolled', value: stats.enrolled, icon: BookOpen, color: 'text-blue-600' },
            { label: 'Hours', value: `${stats.hoursLearned}h`, icon: Clock3, color: 'text-emerald-600' },
            { label: 'Certificates', value: stats.certificates, icon: Award, color: 'text-purple-600' },
            { label: 'Wishlist', value: stats.wishlist, icon: Heart, color: 'text-pink-600' },
            { label: 'Reviews', value: stats.reviews, icon: Star, color: 'text-amber-500' },
            { label: 'Streak', value: `${stats.streak}d`, icon: Trophy, color: 'text-orange-500' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <stat.icon className={`h-6 w-6 ${stat.color} mb-2`} />
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-tight">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Main Content Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enrolled Courses */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">My Courses</h2>
                <Link to="/courses" className="text-sm font-semibold text-blue-600 hover:text-blue-700">View All</Link>
              </div>
              <div className="divide-y divide-gray-100">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="p-6 hover:bg-gray-50 transition-colors group">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="w-full sm:w-32 h-20 bg-gray-200 rounded-lg overflow-hidden relative">
                        <img src={course.image || `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80`} alt={course.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                          <PlayCircle className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">75% Done</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Instructor: {course.instructor}</p>
                        <div className="mt-4">
                          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: '75%' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area: Wishlist & Certificates */}
          <div className="space-y-8">
            {/* Recent Certificates */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                Certificates
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 border border-purple-100 rounded-xl bg-purple-50/30">
                  <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">React Mastery</p>
                    <p className="text-xs text-gray-500">Earned Mar 15, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl">
                  <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">UI/UX Fundamentals</p>
                    <p className="text-xs text-gray-500">Earned Jan 22, 2026</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors">
                View All Certificates
              </button>
            </div>

            {/* Wishlist Preview */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-600" />
                Wishlist
              </h2>
              <div className="space-y-4">
                {wishlistCourses.map(course => (
                  <div key={course.id} className="flex gap-3 items-center">
                    <div className="w-16 h-12 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                      <img src={`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&q=80`} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-gray-900 truncate">{course.title}</p>
                      <p className="text-xs text-gray-500">${course.price || '49.99'}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 text-sm font-semibold text-pink-600 hover:bg-pink-50 rounded-lg border border-pink-100 transition-colors">
                Go to Wishlist
              </button>
            </div>

             {/* Reviews Summary */}
             <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-500" />
                Your Reviews
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-amber-400 pl-4 py-2">
                  <p className="text-sm font-medium text-gray-800 line-clamp-2">"Excellent course! The React section was very clear and easy to follow."</p>
                  <div className="flex items-center mt-2 gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
                    <span className="text-[10px] text-gray-400 ml-2">2 days ago</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors">
                Manage All Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
