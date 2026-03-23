import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="fixed w-full top-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl tracking-tight text-gray-900">EduLMS</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/courses" className="text-gray-600 hover:text-primary-600 font-medium px-3 py-2 rounded-md">
              Courses
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4 ml-4">
                <Link to="/dashboard" className="text-gray-600 hover:text-primary-600 font-medium">
                  Dashboard
                </Link>
                <div className="flex items-center space-x-2">
                  <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full border border-gray-200" />
                  <span className="font-medium text-sm hidden sm:block">{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition"
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <div className="flex space-x-2 ml-4">
                <Link to="/login" className="btn-secondary">
                  Login
                </Link>
                <Link to="/register" className="btn-primary">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
