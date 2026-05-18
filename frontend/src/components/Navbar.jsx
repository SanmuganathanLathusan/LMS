import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  BookOpen, LogOut, Search, ShoppingCart, Globe, Check,
  Menu, X, ChevronDown, Bell, User, MessageSquare, Award, Tag
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', name: 'English',    flag: '🇺🇸' },
  { code: 'es', name: 'Español',    flag: '🇪🇸' },
  { code: 'fr', name: 'Français',   flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch',    flag: '🇩🇪' },
  { code: 'ja', name: '日本語',      flag: '🇯🇵' },
  { code: 'zh', name: '中文',        flag: '🇨🇳' },
  { code: 'hi', name: 'हिन्दी',     flag: '🇮🇳' },
  { code: 'pt', name: 'Português',  flag: '🇵🇹' },
  { code: 'ru', name: 'Русский',    flag: '🇷🇺' },
  { code: 'ar', name: 'العربية',    flag: '🇸🇦' },
];

const NAV_LINKS = [
  { to: '/courses',       label: 'Explore',       key: 'navbar.explore' },
  { to: '/subscriptions', label: 'Pricing',        key: 'navbar.subscriptions' },
  { to: '/enterprise',    label: 'Enterprise',     key: 'navbar.enterprise' },
  { to: '/teach-with-us', label: 'Teach',          key: 'navbar.teachWithUs' },
];

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [searchQuery, setSearchQuery]       = useState('');
  const [language, setLanguage]             = useState(i18n.language || 'en');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled]             = useState(false);
  const [showUserMenu, setShowUserMenu]     = useState(false);
  const [searchFocused, setSearchFocused]   = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'course', title: 'New Course Published', message: 'Advanced React & Next.js Masterclass is now live!', time: '5m ago', unread: true },
    { id: 2, type: 'message', title: 'Instructor Reply', message: 'Sarah Jenkins answered your question in Laravel Basics.', time: '2h ago', unread: true },
    { id: 3, type: 'award', title: 'Certificate Earned', message: 'Congratulations! You completed UI/UX Design Fundamentals.', time: '1d ago', unread: false },
    { id: 4, type: 'promo', title: 'Special Offer', message: 'Get 20% off on all Enterprise subscriptions this week.', time: '2d ago', unread: false },
  ]);
  const [notifTab, setNotifTab] = useState('all');

  const langMenuRef = useRef(null);
  const userMenuRef = useRef(null);
  const notifMenuRef = useRef(null);

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  const filteredNotifications = notifications.filter(n => notifTab === 'all' || n.unread);

  /* ── scroll effect ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── close mobile menu on route change ── */
  useEffect(() => { setShowMobileMenu(false); }, [location.pathname]);

  /* ── load saved language ── */
  useEffect(() => {
    const saved = localStorage.getItem('i18nextLng') || 'en';
    setLanguage(saved);
  }, []);

  /* ── click-outside handlers ── */
  useEffect(() => {
    const handler = (e) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target))
        setShowLanguageMenu(false);
      if (userMenuRef.current && !userMenuRef.current.contains(e.target))
        setShowUserMenu(false);
      if (notifMenuRef.current && !notifMenuRef.current.contains(e.target))
        setShowNotifications(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* ── lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showMobileMenu]);

  const handleLogout = () => { logout(); navigate('/'); };

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setSearchFocused(false);
    }
  };

  const handleCartClick  = () => navigate(user ? '/dashboard' : '/login');
  const handleLangChange = (code) => {
    setLanguage(code);
    i18n.changeLanguage(code);
    setShowLanguageMenu(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ── NAV BAR ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-lg border-b border-slate-100/50'
      }`}>
        <div className="section-container flex items-center justify-between w-full gap-4">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-md shadow-indigo-200 group-hover:shadow-lg group-hover:shadow-indigo-300 transition-all duration-200">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900 font-poppins">
              Prime<span className="text-indigo-600">Learn</span>
            </span>
          </Link>

          {/* ── Desktop Links (left) ── */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                  isActive(link.to)
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                {t(link.key, link.label)}
              </Link>
            ))}
          </div>

          {/* ── Search Bar ── */}
          <div className="flex-1 max-w-lg hidden md:block">
            <div className={`relative flex items-center h-10 rounded-full border transition-all duration-200 ${
              searchFocused
                ? 'bg-white border-indigo-300 shadow-md shadow-indigo-100/50 ring-2 ring-indigo-100'
                : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300'
            }`}>
              <Search className="absolute left-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder={t('navbar.searchPlaceholder', 'Search courses...')}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyPress={handleSearch}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full h-full bg-transparent pl-10 pr-4 text-sm text-slate-700 placeholder-slate-400 outline-none font-medium rounded-full"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 text-slate-400 hover:text-slate-600">
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* ── Right Controls ── */}
          <div className="flex items-center gap-2">

            {/* Cart */}
            <button
              onClick={handleCartClick}
              className="hidden sm:flex relative p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-150"
              title="Shopping Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>

            {user ? (
              /* ── Logged In State ── */
              <div className="flex items-center gap-2 pl-2 border-l border-slate-100">
                {/* Notification bell */}
                <div ref={notifMenuRef} className="relative hidden sm:block">
                  <button
                    onClick={() => setShowNotifications(v => !v)}
                    className={`p-2.5 rounded-xl transition-all relative flex ${
                      showNotifications 
                        ? 'text-indigo-600 bg-indigo-50' 
                        : 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50'
                    }`}
                    title="Notifications"
                  >
                    <Bell className="h-5 w-5" />
                    {unreadCount > 0 && (
                      <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-indigo-600 rounded-full border-2 border-white animate-pulse" />
                    )}
                  </button>

                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 animate-scale-in z-50 overflow-hidden">
                      {/* Header */}
                      <div className="px-4 py-2.5 border-b border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-slate-900">Notifications</span>
                          {unreadCount > 0 && (
                            <span className="bg-indigo-50 text-indigo-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                              {unreadCount} new
                            </span>
                          )}
                        </div>
                        {unreadCount > 0 && (
                          <button
                            onClick={markAllAsRead}
                            className="text-xs text-indigo-600 hover:text-indigo-700 font-semibold hover:underline transition-all"
                          >
                            Mark all read
                          </button>
                        )}
                      </div>

                      {/* Tabs */}
                      <div className="flex border-b border-slate-100 px-4 pt-1 gap-4 text-xs font-semibold">
                        <button
                          onClick={() => setNotifTab('all')}
                          className={`py-2 border-b-2 transition-all ${
                            notifTab === 'all'
                              ? 'border-indigo-600 text-indigo-600'
                              : 'border-transparent text-slate-400 hover:text-slate-600'
                          }`}
                        >
                          All
                        </button>
                        <button
                          onClick={() => setNotifTab('unread')}
                          className={`py-2 border-b-2 transition-all flex items-center gap-1.5 ${
                            notifTab === 'unread'
                              ? 'border-indigo-600 text-indigo-600'
                              : 'border-transparent text-slate-400 hover:text-slate-600'
                          }`}
                        >
                          Unread
                          {unreadCount > 0 && (
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                          )}
                        </button>
                      </div>

                      {/* Notification List */}
                      <div className="max-h-80 overflow-y-auto divide-y divide-slate-50">
                        {filteredNotifications.length === 0 ? (
                          <div className="py-8 text-center text-slate-400 text-sm">
                            <Bell className="h-8 w-8 mx-auto mb-2 opacity-20" />
                            No notifications found
                          </div>
                        ) : (
                          filteredNotifications.map(notif => {
                            const getIcon = (type) => {
                              switch(type) {
                                case 'course': return <BookOpen className="h-4 w-4 text-indigo-600" />;
                                case 'message': return <MessageSquare className="h-4 w-4 text-blue-600" />;
                                case 'award': return <Award className="h-4 w-4 text-amber-600" />;
                                default: return <Tag className="h-4 w-4 text-emerald-600" />;
                              }
                            };

                            const getBg = (type) => {
                              switch(type) {
                                case 'course': return 'bg-indigo-50';
                                case 'message': return 'bg-blue-50';
                                case 'award': return 'bg-amber-50';
                                default: return 'bg-emerald-50';
                              }
                            };

                            return (
                              <div
                                key={notif.id}
                                onClick={() => markAsRead(notif.id)}
                                className={`p-4 flex gap-3 hover:bg-slate-50/80 transition-all cursor-pointer relative ${
                                  notif.unread ? 'bg-indigo-50/20' : ''
                                }`}
                              >
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${getBg(notif.type)}`}>
                                  {getIcon(notif.type)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2 mb-0.5">
                                    <p className={`text-sm font-semibold truncate ${notif.unread ? 'text-slate-900 font-bold' : 'text-slate-700'}`}>
                                      {notif.title}
                                    </p>
                                    <span className="text-[10px] text-slate-400 font-medium flex-shrink-0">
                                      {notif.time}
                                    </span>
                                  </div>
                                  <p className="text-xs text-slate-500 line-clamp-2 pr-2">
                                    {notif.message}
                                  </p>
                                </div>
                                {notif.unread && (
                                  <span className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-600 rounded-full" />
                                )}
                              </div>
                            );
                          })
                        )}
                      </div>

                      {/* Footer */}
                      <div className="p-2 border-t border-slate-100 bg-slate-50/50 text-center">
                        <button
                          onClick={() => { setShowNotifications(false); navigate('/dashboard'); }}
                          className="text-xs font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
                        >
                          View all in Dashboard
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Language picker */}
                <div ref={langMenuRef} className="relative hidden sm:block">
                  <button
                    onClick={() => setShowLanguageMenu(v => !v)}
                    className="p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-150"
                  >
                    <Globe className="h-5 w-5" />
                  </button>
                  {showLanguageMenu && <LanguageDropdown languages={LANGUAGES} current={language} onChange={handleLangChange} />}
                </div>

                {/* User avatar dropdown */}
                <div ref={userMenuRef} className="relative">
                  <button
                    onClick={() => setShowUserMenu(v => !v)}
                    className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-50 transition-all"
                  >
                    <img
                      src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || 'U')}&background=6366f1&color=fff`}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full object-cover border-2 border-indigo-100 shadow-sm"
                    />
                    <ChevronDown className={`h-3.5 w-3.5 text-slate-400 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 py-1.5 animate-scale-in z-50">
                      <div className="px-4 py-2.5 border-b border-slate-50">
                        <p className="text-sm font-bold text-slate-900">{user.name || 'User'}</p>
                        <p className="text-xs text-slate-400 truncate">{user.email}</p>
                      </div>
                      <Link
                        to="/dashboard"
                        onClick={() => setShowUserMenu(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-colors"
                      >
                        <User className="h-4 w-4" />
                        Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        Log out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* ── Guest State ── */
              <div className="flex items-center gap-2 pl-2 border-l border-slate-100">
                <Link to="/login" className="hidden sm:block btn-secondary !py-2 !px-4 !text-sm">
                  {t('navbar.login', 'Log in')}
                </Link>
                <Link to="/register" className="btn-gradient !py-2 !px-4 !text-sm">
                  {t('navbar.signup', 'Sign up')}
                </Link>

                {/* Language picker (guest) */}
                <div ref={langMenuRef} className="relative hidden sm:block">
                  <button
                    onClick={() => setShowLanguageMenu(v => !v)}
                    className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl border border-slate-200 transition-all"
                  >
                    <Globe className="h-4 w-4" />
                  </button>
                  {showLanguageMenu && <LanguageDropdown languages={LANGUAGES} current={language} onChange={handleLangChange} />}
                </div>
              </div>
            )}

            {/* Mobile menu toggle */}
            <button
              onClick={() => setShowMobileMenu(v => !v)}
              className="lg:hidden p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all ml-1"
              aria-label="Toggle menu"
            >
              {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU OVERLAY ── */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
            onClick={() => setShowMobileMenu(false)}
          />

          {/* Drawer */}
          <div className="absolute top-[72px] left-0 right-0 bg-white border-b border-slate-100 shadow-xl mobile-menu-enter">
            {/* Mobile search */}
            <div className="px-4 py-3 border-b border-slate-50">
              <div className="relative flex items-center">
                <Search className="absolute left-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onKeyPress={handleSearch}
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>
            </div>

            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                    isActive(link.to)
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
                  }`}
                >
                  {t(link.key, link.label)}
                </Link>
              ))}
            </div>

            <div className="px-4 pb-4 border-t border-slate-50 pt-3">
              {user ? (
                <div className="space-y-1">
                  <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm text-slate-700 hover:bg-slate-50">
                    <User className="h-4 w-4 text-slate-400" /> Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm text-red-500 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" /> Log out
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <Link to="/login" className="btn-secondary text-center !text-sm">Log in</Link>
                  <Link to="/register" className="btn-gradient text-center !text-sm">Sign up</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* ── Language Dropdown Sub-component ── */
const LanguageDropdown = ({ languages, current, onChange }) => (
  <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 py-1.5 animate-scale-in z-50 max-h-72 overflow-y-auto">
    {languages.map(lang => (
      <button
        key={lang.code}
        onClick={() => onChange(lang.code)}
        className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
      >
        <span className="flex items-center gap-2.5">
          <span>{lang.flag}</span>
          <span className="font-medium">{lang.name}</span>
        </span>
        {current === lang.code && <Check className="h-4 w-4 text-indigo-500" />}
      </button>
    ))}
  </div>
);

export default Navbar;
