import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, BookOpen, ArrowRight } from 'lucide-react';

const Login = () => {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw]     = useState(false);
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

  const { login }  = useAuth();
  const navigate   = useNavigate();
  const location   = useLocation();
  const from       = location.state?.from?.pathname || '/dashboard';
  const successMsg = location.state?.message;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err || 'Failed to login. Try student@lms.com / password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* ── Left decorative panel ── */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-violet-900 to-indigo-900" />
        <div className="absolute inset-0 hero-grid opacity-30" />
        {/* Blobs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-violet-500/30 rounded-full blur-3xl animate-blob delay-300" />

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <Link to="/" className="flex items-center gap-2.5 mb-16">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-extrabold font-poppins">Prime<span className="text-indigo-300">Learn</span></span>
          </Link>
          <h2 className="text-4xl font-bold font-poppins mb-4 leading-tight">
            Welcome back to<br />your learning journey
          </h2>
          <p className="text-indigo-200 text-lg leading-relaxed mb-10">
            Pick up right where you left off. Your courses are waiting.
          </p>
          <div className="space-y-4">
            {['Access 500+ premium courses', 'Track your progress anywhere', 'Earn industry certificates'].map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-indigo-100">
                <div className="w-6 h-6 rounded-full bg-indigo-500/40 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right form panel ── */}
      <div className="flex-1 flex items-center justify-center bg-slate-50 px-6 py-16">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <Link to="/" className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-extrabold font-poppins text-slate-900">Prime<span className="text-indigo-600">Learn</span></span>
          </Link>

          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 p-8 border border-slate-100 animate-fade-in-up">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-slate-900 font-poppins">Sign in to your account</h1>
              <p className="text-slate-400 text-sm mt-1">Enter your credentials to continue</p>
            </div>

            {/* Alerts */}
            {successMsg && (
              <div className="mb-5 flex items-center gap-2.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm p-3.5 rounded-xl">
                {successMsg}
              </div>
            )}
            {error && (
              <div className="mb-5 bg-red-50 border border-red-200 text-red-600 text-sm p-3.5 rounded-xl">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="student@lms.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="input-field pl-10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between mb-1.5">
                  <label className="text-sm font-semibold text-slate-700">Password</label>
                  <Link to="/forgot-password" className="text-xs text-indigo-600 hover:text-indigo-500 font-medium">Forgot password?</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type={showPw ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="input-field pl-10 pr-11"
                  />
                  <button type="button" onClick={() => setShowPw(v => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                    {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-gradient py-3.5 text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"/>
                      <path fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" className="opacity-75"/>
                    </svg>
                    Signing in…
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Sign In <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Don't have an account?{' '}
              <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
                Create one free →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
