import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, BookOpen, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail]       = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setError('');
    setLoading(true);

    // Simulate API call for password reset
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
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
          <h2 className="text--4xl font-bold font-poppins mb-4 leading-tight">
            Secure Password<br />Recovery
          </h2>
          <p className="text-indigo-200 text-lg leading-relaxed mb-10">
            Don't worry, it happens to the best of us. We'll get you back into your account securely.
          </p>
          <div className="space-y-4">
            {[
              'Instant reset link delivery',
              'Bank-grade 256-bit encryption',
              '24/7 dedicated student support'
            ].map((f, i) => (
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
            {!submitted ? (
              <>
                <div className="mb-8">
                  <h1 className="text-2xl font-bold text-slate-900 font-poppins">Forgot Password?</h1>
                  <p className="text-slate-400 text-sm mt-1">
                    Enter the email address associated with your account and we'll send you a link to reset your password.
                  </p>
                </div>

                {error && (
                  <div className="mb-5 bg-red-50 border border-red-200 text-red-600 text-sm p-3.5 rounded-xl">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
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
                        Sending reset link…
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Reset Link <ArrowRight className="h-4 w-4" />
                      </span>
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link to="/login" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
                    <ArrowLeft className="h-4 w-4" /> Back to Sign In
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center py-6 animate-scale-in">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-emerald-50/50 shadow-md">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 font-poppins mb-2">Check your email</h2>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  We've sent a password reset link to <span className="font-semibold text-slate-700">{email}</span>. Please check your inbox and spam folder.
                </p>

                <div className="space-y-3">
                  <button
                    onClick={() => { setSubmitted(false); setEmail(''); }}
                    className="w-full btn-secondary py-3 text-sm"
                  >
                    Try another email address
                  </button>
                  <Link
                    to="/login"
                    className="w-full btn-gradient py-3 text-sm flex items-center justify-center gap-2"
                  >
                    Return to Sign In <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
