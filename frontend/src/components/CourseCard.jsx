import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';

const CourseCard = ({ course }) => {
  return (
    <div className="card flex flex-col h-full bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/courses/${course.id}`} className="block relative aspect-video overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md shadow-sm text-sm font-bold text-gray-900">
          ${course.price}
        </div>
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 px-2 py-1 rounded">
            {course.category || 'Course'}
          </span>
          <div className="flex items-center text-yellow-500 text-sm">
            <Star className="w-4 h-4 fill-current mr-1" />
            <span className="font-medium text-gray-700">{course.rating}</span>
          </div>
        </div>
        
        <Link to={`/courses/${course.id}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-primary-600">
            {course.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mb-4">{course.instructor}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {course.duration || 'Self-paced'}
          </div>
          <Link to={`/courses/${course.id}`} className="text-primary-600 font-medium text-sm hover:underline">
            View Details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
