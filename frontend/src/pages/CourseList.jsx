import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { COURSES } from '../data/courses';

const CourseList = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = (searchParams.get('search') || '').trim().toLowerCase();

  const filteredCourses = useMemo(() => {
    if (!searchQuery) {
      return COURSES;
    }

    return COURSES.filter((course) => {
      const searchableText = `${course.title} ${course.instructor} ${course.category}`.toLowerCase();
      return searchableText.includes(searchQuery);
    });
  }, [searchQuery]);

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Explore Courses</h1>
          {searchQuery ? (
            <p className="mt-2 text-gray-600">
              Showing results for <span className="font-semibold text-gray-900">"{searchParams.get('search')}"</span>
            </p>
          ) : (
            <p className="mt-2 text-gray-600">Discover practical courses from industry professionals.</p>
          )}
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900">No courses found</h2>
            <p className="mt-2 text-gray-600">Try another keyword or browse all available courses.</p>
            <Link
              to="/courses"
              className="inline-block mt-5 px-5 py-2.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
            >
              Clear Search
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseList;
