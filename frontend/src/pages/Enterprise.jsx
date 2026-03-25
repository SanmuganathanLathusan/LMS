import { Link } from 'react-router-dom';
import { Building2, Users, BarChart3, Zap, Phone, Mail } from 'lucide-react';

const Enterprise = () => {
  const features = [
    {
      icon: Users,
      title: 'Unlimited Team Access',
      description: 'Provide all your employees access to thousands of courses'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track learning progress and ROI with detailed reporting'
    },
    {
      icon: Zap,
      title: 'Custom Content',
      description: 'Create and host your own branded training courses'
    },
    {
      icon: Building2,
      title: 'Dedicated Support',
      description: 'Get priority support and onboarding assistance'
    }
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-primary-900 to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Enterprise Learning Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Scale your workforce development with custom learning experiences tailored for your organization
          </p>
          <a href="#contact" className="btn-primary text-lg px-8 py-3 inline-block">
            Schedule a Demo
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center tracking-tight">Powerful Features for Enterprises</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex gap-4 p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <Icon className="h-10 w-10 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-primary-50 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose PrimeLearn Enterprise?</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-500">
              <h3 className="font-semibold text-gray-900 mb-2">Industry-Leading Content</h3>
              <p className="text-gray-600">Access premium courses created by industry experts across all major domains</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-500">
              <h3 className="font-semibold text-gray-900 mb-2">Seamless Integration</h3>
              <p className="text-gray-600">Integrate with your existing HR and learning management systems effortlessly</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-500">
              <h3 className="font-semibold text-gray-900 mb-2">Security & Compliance</h3>
              <p className="text-gray-600">Enterprise-grade security with SOC 2 compliance and advanced data protection</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-primary-500">
              <h3 className="font-semibold text-gray-900 mb-2">Dedicated Success Team</h3>
              <p className="text-gray-600">Work with dedicated learning consultants to achieve your organization's goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-primary-600 mb-2">500+</div>
              <p className="text-gray-600">Enterprise Clients</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-primary-600 mb-2">10M+</div>
              <p className="text-gray-600">Learners Trained</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-primary-600 mb-2">95%</div>
              <p className="text-gray-600">Retention Rate</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-primary-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-900 text-white sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Organization?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Get in touch with our team to discuss your enterprise learning needs
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:enterprise@primelearn.com"
              className="flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </a>
            <button className="flex items-center justify-center gap-2 border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              <Phone className="h-5 w-5" />
              Schedule Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;
