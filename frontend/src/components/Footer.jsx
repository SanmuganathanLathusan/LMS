import { Link } from 'react-router-dom';
import { BookOpen, Twitter, Github, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';

const FOOTER_LINKS = {
  'Learn': [
    { label: 'Explore Courses', to: '/courses' },
    { label: 'Subscriptions',   to: '/subscriptions' },
    { label: 'Free Courses',    to: '/courses' },
    { label: 'Certifications',  to: '/courses' },
  ],
  'Teach': [
    { label: 'Become Instructor', to: '/teach-with-us' },
    { label: 'How It Works',      to: '/teach-with-us' },
    { label: 'Instructor Login',  to: '/login' },
    { label: 'Earnings',          to: '/teach-with-us' },
  ],
  'Company': [
    { label: 'Enterprise',   to: '/enterprise' },
    { label: 'About Us',     to: '/' },
    { label: 'Careers',      to: '/' },
    { label: 'Contact',      to: '/enterprise' },
  ],
};

const SOCIALS = [
  { Icon: Twitter,   href: '#', label: 'Twitter'   },
  { Icon: Github,    href: '#', label: 'GitHub'    },
  { Icon: Linkedin,  href: '#', label: 'LinkedIn'  },
  { Icon: Instagram, href: '#', label: 'Instagram' },
];

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400">
    {/* Newsletter */}
    <div className="border-b border-slate-800">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-lg font-poppins mb-1">Stay in the loop</h3>
            <p className="text-slate-400 text-sm">Get the latest courses and offers delivered to your inbox.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-64 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500 transition-colors"
            />
            <button className="btn-gradient !py-2.5 !px-5 flex-shrink-0">
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Main footer */}
    <div className="section-container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand column */}
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-extrabold text-white font-poppins">
              Prime<span className="text-indigo-400">Learn</span>
            </span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
            The premium learning platform trusted by 10,000+ students and 500+ instructors worldwide.
          </p>
          {/* Socials */}
          <div className="flex gap-2">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label}
                className="footer-social-btn" target="_blank" rel="noopener noreferrer">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          {/* Contact */}
          <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
            <Mail className="h-4 w-4 text-indigo-400" />
            <a href="mailto:hello@primelearn.com" className="hover:text-white transition-colors">hello@primelearn.com</a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([section, links]) => (
          <div key={section}>
            <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
            <ul className="space-y-2.5">
              {links.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="footer-link hover:text-indigo-400">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-slate-800">
      <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} PrimeLearn. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Cookie Settings</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
