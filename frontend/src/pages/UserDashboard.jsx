import { Link } from 'react-router-dom';
import { Award, BookOpen, Clock3, Trophy, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { COURSES } from '../data/courses';

const UserDashboard = () => {
  const { user } = useAuth();
  const enrolledCourses = COURSES.slice(0, 3);
  const hoursLearned = 27;
  const certificates = 2;

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto space-y-8">
        <section className="rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-300 font-semibold">Welcome back</p>
              <h1 className="text-3xl font-extrabold mt-2">{user?.name || 'Learner Dashboard'}</h1>
              <p className="text-gray-300 mt-2">Continue your progress and unlock your next milestone.</p>
            </div>
            <Link to="/courses" className="btn-primary self-start md:self-auto inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Explore More Courses
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">Enrolled</span>
              <BookOpen className="h-5 w-5 text-primary-600" />
            </div>
            <p className="text-3xl font-extrabold text-gray-900">{enrolledCourses.length}</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">Hours Learned</span>
              <Clock3 className="h-5 w-5 text-primary-600" />
            </div>
            <p className="text-3xl font-extrabold text-gray-900">{hoursLearned}h</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">Certificates</span>
              <Award className="h-5 w-5 text-primary-600" />
            </div>
            <p className="text-3xl font-extrabold text-gray-900">{certificates}</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">Streak</span>
              <Trophy className="h-5 w-5 text-primary-600" />
            </div>
            <p className="text-3xl font-extrabold text-gray-900">12 days</p>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Continue Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 line-clamp-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{course.instructor}</p>
                <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-500 rounded-full" style={{ width: `${30 + course.id * 9}%` }} />
                </div>
                <p className="text-xs text-gray-500 mt-2">Progress: {Math.min(30 + course.id * 9, 96)}%</p>
                <Link to={`/courses/${course.id}`} className="inline-block mt-3 text-sm font-semibold text-primary-700 hover:text-primary-600">
                  Resume course
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserDashboard;