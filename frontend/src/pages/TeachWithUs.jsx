import { Link } from 'react-router-dom';
import { BookOpen, Users, DollarSign, TrendingUp, Star, Zap } from 'lucide-react';

const TeachWithUs = () => {
  const benefits = [
    { icon: Users, title: 'Reach Global Audience', description: 'Teach students from around the world' },
    { icon: DollarSign, title: 'Earn While Teaching', description: 'Earn competitive revenue from your courses' },
    { icon: TrendingUp, title: 'Grow Your Impact', description: 'Build your personal brand and authority' },
    { icon: Zap, title: 'Easy Course Creation', description: 'User-friendly tools to create video courses' }
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Share Your Expertise with <span className="text-primary-600">PrimeLearn</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Become an instructor and reach millions of students worldwide. Start earning from your knowledge today.
          </p>
          <Link to="/register" className="btn-primary text-lg px-8 py-3 inline-block">
            Start Teaching Now
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center tracking-tight">Why Teach with PrimeLearn?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="flex gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-extrabold mb-2">50K+</div>
              <p className="text-gray-300">Active Instructors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold mb-2">2M+</div>
              <p className="text-gray-300">Students Enrolled</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold mb-2">$10M+</div>
              <p className="text-gray-300">Instructor Earnings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold mb-2">120+</div>
              <p className="text-gray-300">Course Categories</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Share Your Knowledge?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of instructors earning from their passion.</p>
          <Link to="/register" className="btn-primary text-lg px-8 py-3 inline-block">
            Apply as an Instructor
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TeachWithUs;
