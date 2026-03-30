import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';

const CourseCard = ({ course }) => {
  return (
    <div className="card flex flex-col h-full bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
      <Link to={`/courses/${course.id}`} className="block relative aspect-video overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm text-sm font-bold text-gray-900 z-10">
          ${course.price}
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50/80 px-2.5 py-1 rounded-md border border-primary-100">
            {course.category || 'Course'}
          </span>
          <div className="flex items-center text-yellow-500 bg-yellow-50 px-2py-1 rounded-md text-sm">
            <Star className="w-4 h-4 fill-current mr-1" />
            <span className="font-bold text-gray-800">{course.rating}</span>
          </div>
        </div>
        
        <Link to={`/courses/${course.id}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 transition-colors group-hover:text-primary-600">
            {course.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 font-medium mb-4">{course.instructor}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center text-sm font-medium text-gray-500">
            <Clock className="w-4 h-4 mr-1.5 text-gray-400" />
            {course.duration || 'Self-paced'}
          </div>
          <Link to={`/courses/${course.id}`} className="text-primary-600 font-semibold text-sm bg-primary-50 hover:bg-primary-100 px-4 py-2 rounded-lg transition-colors">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
