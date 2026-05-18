import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CourseList from './pages/CourseList';
import CourseDetail from './pages/CourseDetail';
import Subscriptions from './pages/Subscriptions';
import Enterprise from './pages/Enterprise';
import TeachWithUs from './pages/TeachWithUs';
import ForgotPassword from './pages/ForgotPassword';
import ProtectedRoute from './components/ProtectedRoute';

/* Pages that have their own full-height layouts (no footer) */
const NO_FOOTER_ROUTES = ['/login', '/register', '/forgot-password'];
/* Pages that should not show the navbar (full-page auth) */
const NO_NAVBAR_ROUTES = ['/login', '/register', '/forgot-password'];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();
  const showNavbar = !NO_NAVBAR_ROUTES.includes(location.pathname);
  const showFooter = !NO_FOOTER_ROUTES.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {showNavbar && <Navbar />}

      <main className={`flex-grow ${showNavbar ? 'pt-[72px]' : ''}`}>
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/login"        element={<Login />} />
          <Route path="/register"     element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/courses"      element={<CourseList />} />
          <Route path="/courses/:id"  element={<CourseDetail />} />
          <Route path="/subscriptions"element={<Subscriptions />} />
          <Route path="/enterprise"   element={<Enterprise />} />
          <Route path="/teach-with-us"element={<TeachWithUs />} />

          <Route path="/dashboard" element={
            <ProtectedRoute><Dashboard /></ProtectedRoute>
          } />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {showFooter && <Footer />}
    </div>
  );
}

export default App;
