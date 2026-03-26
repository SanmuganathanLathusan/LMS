import { Link, useNavigate, useParams } from 'react-router-dom';
import { Star, Clock, Users, BookOpen, ArrowLeft, ShieldCheck } from 'lucide-react';
import { getCourseById } from '../data/courses';
import { useAuth } from '../context/AuthContext';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const course = getCourseById(id);

  if (!course) {
    return (
      <div className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center rounded-2xl bg-white border border-gray-200 p-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Course not found</h1>
          <p className="mt-3 text-gray-600">The course you are looking for does not exist or may have been removed.</p>
          <Link to="/courses" className="inline-block mt-6 btn-primary">Back to Courses</Link>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    if (!user) {
      navigate('/login', { state: { from: { pathname: `/courses/${course.id}` } } });
      return;
    }

    navigate('/dashboard');
  };

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8 bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto">
        <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-600 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to all courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
            <div className="aspect-video overflow-hidden">
              <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-7">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                  {course.category}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                  {course.level}
                </span>
              </div>

              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{course.title}</h1>
              <p className="mt-2 text-gray-600">Created by {course.instructor}</p>

              <div className="mt-5 flex flex-wrap gap-5 text-sm text-gray-700">
                <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-yellow-500 fill-yellow-400" />{course.rating} rating</span>
                <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-gray-500" />{course.duration}</span>
                <span className="inline-flex items-center gap-2"><BookOpen className="h-4 w-4 text-gray-500" />{course.lessons} lessons</span>
                <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-gray-500" />{course.students.toLocaleString()} students</span>
              </div>

              <div className="mt-7 pt-6 border-t border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3">About this course</h2>
                <p className="text-gray-700 leading-7">{course.description}</p>
              </div>
            </div>
          </section>

          <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm h-fit lg:sticky lg:top-24">
            <div className="text-4xl font-extrabold text-gray-900">${course.price}</div>
            <p className="text-sm text-gray-500 mt-1">One-time purchase, lifetime access</p>

            <button onClick={handleEnroll} className="w-full btn-primary mt-6 py-3">
              {user ? 'Go to Dashboard' : 'Login to Enroll'}
            </button>

            <div className="mt-6 rounded-xl bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Included with this course</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600" />Lifetime content access</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600" />Completion certificate</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600" />Downloadable resources</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600" />Access on mobile and desktop</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
