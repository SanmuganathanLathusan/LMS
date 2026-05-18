import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, X, ChevronDown, Zap, Shield, Clock, HeadphonesIcon, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

/* ── Scroll reveal ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const PLANS = [
  {
    name: 'Free', price: '$0', period: '', description: 'Get started with essential features',
    highlighted: false, badge: null,
    features: [
      { text: 'Access to free courses',    ok: true },
      { text: 'Browsable course library',  ok: true },
      { text: 'Community forums',          ok: true },
      { text: 'Certificate of completion', ok: false },
      { text: 'Unlimited course access',   ok: false },
      { text: 'Offline downloads',         ok: false },
      { text: 'Priority support',          ok: false },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Professional', price: '$29', period: '/mo', description: 'Most popular for serious learners',
    highlighted: true, badge: 'Most Popular',
    features: [
      { text: 'Unlimited course access',    ok: true },
      { text: 'HD video quality',           ok: true },
      { text: 'Downloadable resources',     ok: true },
      { text: 'Certificate of completion',  ok: true },
      { text: 'Offline downloads',          ok: true },
      { text: 'Priority email support',     ok: true },
      { text: 'Live & interactive classes', ok: false },
    ],
    cta: 'Subscribe Now',
  },
  {
    name: 'Premium', price: '$79', period: '/mo', description: 'Complete learning experience',
    highlighted: false, badge: 'Best Value',
    features: [
      { text: 'Everything in Professional',   ok: true },
      { text: 'Live & interactive classes',   ok: true },
      { text: 'One-on-one mentoring',         ok: true },
      { text: 'Course projects & assignments',ok: true },
      { text: 'Priority support 24/7',        ok: true },
      { text: 'Exclusive member community',   ok: true },
      { text: 'Career guidance sessions',     ok: true },
    ],
    cta: 'Subscribe Now',
  },
];

const FAQS = [
  { q: 'Can I cancel anytime?',         a: 'Yes, you can cancel your subscription at any time. No cancellation fees or long-term commitments.' },
  { q: 'Is there a free trial?',        a: 'Yes! Get 7 days free trial for Professional and Premium plans before committing.' },
  { q: 'Can I upgrade or downgrade?',   a: 'Absolutely. Change your plan anytime based on your learning needs.' },
  { q: 'Are certificates recognized?',  a: 'Our certificates are recognized by 500+ top companies including Google, Microsoft, and Amazon.' },
  { q: 'How do I access my courses?',   a: 'After subscribing, all your courses are available in your dashboard on any device, anytime.' },
];

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'border-indigo-100' : ''}`}>
      <button className="faq-trigger" onClick={() => setOpen(v => !v)}>
        <span className={open ? 'text-indigo-600' : ''}>{faq.q}</span>
        <ChevronDown className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 text-slate-400 ${open ? 'rotate-180 text-indigo-500' : ''}`} />
      </button>
      <div className={`faq-content ${open ? 'max-h-48' : 'max-h-0'}`}>
        <p className="px-6 pb-5 text-slate-500 leading-relaxed text-sm">{faq.a}</p>
      </div>
    </div>
  );
}

const Subscriptions = () => {
  useReveal();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [billing, setBilling] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [email, setEmail] = useState(user?.email || '');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user?.email) setEmail(user.email);
  }, [user]);

  const handlePlanClick = (plan) => {
    if (plan.price === '$0') {
      navigate(user ? '/dashboard' : '/register');
      return;
    }
    const finalPrice = billing === 'annual' && plan.price !== '$0'
      ? Math.round(parseInt(plan.price.slice(1)) * 0.8)
      : parseInt(plan.price.slice(1));

    setSelectedPlan({ ...plan, finalPrice });
    setSuccess(false);
    setError('');
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('lms_token');
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      };
      if (token) headers['Authorization'] = `Bearer ${token}`;

      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          email,
          plan_name: selectedPlan.name,
          billing_cycle: billing,
          price: selectedPlan.finalPrice
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Subscription failed');
      }
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 relative">

      {/* ── Subscription Modal ── */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-scale-up">
            <button onClick={() => setSelectedPlan(null)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600">
              <X className="h-6 w-6" />
            </button>

            {success ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-poppins">Subscription Active!</h3>
                <p className="text-slate-600 text-sm">
                  Welcome to the {selectedPlan.name} plan. You now have full access to premium features.
                </p>
                <button
                  onClick={() => { setSelectedPlan(null); navigate('/dashboard'); }}
                  className="w-full mt-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all"
                >
                  Go to Dashboard
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-poppins mb-1">Confirm Subscription</h3>
                  <p className="text-slate-500 text-sm">You are subscribing to the <span className="font-bold text-indigo-600">{selectedPlan.name}</span> plan ({billing}).</p>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-semibold">
                    {error}
                  </div>
                )}

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <span className="font-semibold text-slate-700">Total Due:</span>
                  <span className="text-2xl font-black text-slate-900">${selectedPlan.finalPrice}{billing === 'monthly' ? '/mo' : '/yr'}</span>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Payment Method</label>
                  <div className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-sm text-slate-600">
                    <span className="flex items-center gap-2">💳 Visa ending in 4242</span>
                    <span className="text-xs text-indigo-600 font-semibold cursor-pointer">Change</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-900/30 flex items-center justify-center gap-2 text-base"
                >
                  {loading ? 'Processing...' : `Pay $${selectedPlan.finalPrice} & Subscribe`}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ── Hero ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-violet-900 to-indigo-900" />
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-blob delay-300" />

        <div className="section-container relative z-10 text-center">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-indigo-200 font-semibold text-sm mb-8">
            <Zap className="h-4 w-4" /> Flexible plans for every learner
          </div>
          <h1 className="reveal section-title text-white mb-4 font-poppins text-5xl sm:text-6xl">
            Choose Your <span className="text-indigo-300">Perfect Plan</span>
          </h1>
          <p className="reveal section-subtitle text-indigo-200 max-w-2xl mx-auto">
            Flexible subscription plans designed for every learning style and budget
          </p>

          {/* Billing toggle */}
          <div className="reveal mt-10 inline-flex items-center gap-1 bg-white/10 border border-white/20 rounded-full p-1">
            {['monthly', 'annual'].map(b => (
              <button key={b} onClick={() => setBilling(b)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 capitalize ${
                  billing === b ? 'bg-white text-indigo-700 shadow-md' : 'text-white hover:bg-white/10'
                }`}>
                {b}{b === 'annual' ? ' (Save 20%)' : ''}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing cards ── */}
      <section className="py-20 px-4">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {PLANS.map((plan, i) => (
              <div
                key={i}
                className={`reveal relative rounded-2xl border-2 transition-all duration-300 ${
                  plan.highlighted
                    ? 'pricing-popular border-transparent bg-white shadow-2xl shadow-indigo-200/40 md:scale-105'
                    : 'border-slate-200 bg-white hover:border-indigo-200 hover:shadow-lg'
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {plan.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white ${
                    plan.highlighted ? 'bg-gradient-to-r from-indigo-600 to-violet-600' : 'bg-slate-700'
                  }`}>
                    {plan.badge}
                  </div>
                )}

                <div className="p-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-1 font-poppins">{plan.name}</h2>
                  <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-extrabold text-slate-900 font-poppins">
                      {billing === 'annual' && plan.price !== '$0'
                        ? `$${Math.round(parseInt(plan.price.slice(1)) * 0.8)}`
                        : plan.price}
                    </span>
                    {plan.period && <span className="text-slate-400 text-base">{plan.period}</span>}
                  </div>

                  <button
                    onClick={() => handlePlanClick(plan)}
                    className={`block w-full py-3 px-5 rounded-xl font-semibold text-center text-sm transition-all mb-8 ${
                      plan.highlighted
                        ? 'btn-gradient'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                    }`}
                  >
                    {plan.cta}
                  </button>

                  <div className="space-y-3.5">
                    {plan.features.map((f, fi) => (
                      <div key={fi} className="flex items-center gap-3 text-sm">
                        {f.ok
                          ? <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0"><Check className="h-3 w-3 text-emerald-600" /></div>
                          : <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0"><X className="h-3 w-3 text-slate-400" /></div>}
                        <span className={f.ok ? 'text-slate-700 font-medium' : 'text-slate-400'}>{f.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust badges ── */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { Icon: Shield,          label: 'SSL Secured',       sub: 'Bank-level security' },
              { Icon: Clock,           label: '7-Day Trial',        sub: 'No credit card needed' },
              { Icon: Zap,             label: 'Instant Access',     sub: 'Start in seconds' },
              { Icon: HeadphonesIcon,  label: '24/7 Support',       sub: 'Always here to help' },
            ].map(({ Icon, label, sub }, i) => (
              <div key={i} className="reveal flex flex-col items-center gap-2" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <p className="font-semibold text-slate-800">{label}</p>
                <p className="text-xs text-slate-400">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20">
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="section-title mb-3">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about our plans</p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                <FaqItem faq={faq} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscriptions;
