import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { BookOpen, LogOut, Search, ShoppingCart, Globe, Check, Menu, X } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
];

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('en');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
  }, []);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showLanguageMenu && !e.target.closest('[data-language-menu]')) {
        setShowLanguageMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showLanguageMenu]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const handleCartClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    setShowLanguageMenu(false);
    // Trigger language change event (you can use context to propagate this globally)
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: newLanguage } }));
  };

  return (
    <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50 h-[76px] flex items-center px-4 sm:px-8 transition-all duration-300 shadow-sm">
      <div className="flex items-center justify-between w-full gap-4 lg:gap-8 relative">
        
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-primary-100 rounded-xl group-hover:bg-primary-200 transition-colors">
              <BookOpen className="h-6 w-6 text-primary-600" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">PrimeLearn</span>
          </Link>
        </div>

        {/* Links (Left) */}
        <div className="hidden xl:flex items-center space-x-6">
          <Link to="/courses" className="text-gray-600 hover:text-primary-600 text-sm font-semibold transition-colors">Explore</Link>
          <Link to="/subscriptions" className="text-gray-600 hover:text-primary-600 text-sm font-semibold transition-colors">Subscriptions</Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl hidden md:block">
          <div className="relative flex items-center w-full h-11 rounded-2xl bg-gray-100/80 border border-transparent hover:bg-gray-100 hover:border-gray-200 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-100 focus-within:border-primary-500 transition-all duration-200 overflow-hidden">
            <div className="pl-4 pr-3 text-gray-400">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              placeholder="Search for courses, skills, or mentors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleSearch}
              className="w-full h-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 font-medium"
            />
          </div>
        </div>

        {/* Links (Right) & Icons */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/enterprise" className="text-gray-600 hover:text-primary-600 text-sm font-semibold transition-colors">Enterprise</Link>
          <Link to="/teach-with-us" className="text-gray-600 hover:text-primary-600 text-sm font-semibold transition-colors">Teach with us</Link>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-3 sm:space-x-5 ml-auto">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="lg:hidden text-gray-500 hover:text-primary-600 p-2 rounded-full hover:bg-primary-50 transition-colors"
            title="Toggle Menu"
            aria-label="Toggle menu"
          >
            {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <button 
            onClick={handleCartClick}
            className="text-gray-500 hover:text-primary-600 hover:bg-primary-50 p-2 rounded-full transition-all hidden sm:block relative"
            title="Shopping Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
          </button>

          {user ? (
            <div className="flex items-center space-x-3 sm:space-x-4 pl-2 border-l border-gray-200">
              <Link to="/dashboard" className="text-gray-600 hover:text-primary-600 text-sm font-semibold hidden sm:block">
                Dashboard
              </Link>
              <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
                <img src={user.avatar} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-primary-100 shadow-sm" />
              </div>

              {/* Language Selector for Logged-in Users */}
              <div className="relative hidden sm:block" data-language-menu>
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                  title="Change Language"
                >
                  <Globe className="h-5 w-5" />
                </button>
                
                {showLanguageMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="p-2">
                      {LANGUAGES.map(lang => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 rounded-lg transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                          </span>
                          {language === lang.code && (
                            <Check className="h-4 w-4 text-primary-600" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={handleLogout}
                className="p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors"
                title="Logout"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          ) : (
             <div className="flex items-center space-x-3 pl-2 sm:border-l sm:border-gray-200">
              <Link to="/login" className="btn-secondary text-sm font-semibold py-2 px-5 !rounded-xl hidden sm:block">
                Log in
              </Link>
              <Link to="/register" className="btn-primary text-sm font-semibold py-2 px-5 shadow-md shadow-primary-500/20 !rounded-xl">
                Sign up
              </Link>
              
              {/* Language Selector */}
              <div className="relative" data-language-menu>
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="p-2 text-gray-400 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-600 rounded-xl transition-all hidden sm:flex items-center gap-1"
                  title="Change Language"
                >
                  <Globe className="h-4 w-4" />
                </button>
                
                {showLanguageMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="p-2">
                      {LANGUAGES.map(lang => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 rounded-lg transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                          </span>
                          {language === lang.code && (
                            <Check className="h-4 w-4 text-primary-600" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {showMobileMenu && (
          <div className="absolute top-[72px] left-0 right-0 lg:hidden bg-white border border-gray-100 rounded-2xl shadow-xl p-4">
            <div className="flex flex-col space-y-1">
              <Link onClick={() => setShowMobileMenu(false)} to="/courses" className="px-3 py-2 rounded-lg font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-700">
                Explore
              </Link>
              <Link onClick={() => setShowMobileMenu(false)} to="/subscriptions" className="px-3 py-2 rounded-lg font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-700">
                Subscriptions
              </Link>
              <Link onClick={() => setShowMobileMenu(false)} to="/enterprise" className="px-3 py-2 rounded-lg font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-700">
                Enterprise
              </Link>
              <Link onClick={() => setShowMobileMenu(false)} to="/teach-with-us" className="px-3 py-2 rounded-lg font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-700">
                Teach with us
              </Link>

              {user ? (
                <Link onClick={() => setShowMobileMenu(false)} to="/dashboard" className="px-3 py-2 rounded-lg font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-700">
                  Dashboard
                </Link>
              ) : (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Link onClick={() => setShowMobileMenu(false)} to="/login" className="btn-secondary text-center text-sm">
                    Log in
                  </Link>
                  <Link onClick={() => setShowMobileMenu(false)} to="/register" className="btn-primary text-center text-sm">
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;
