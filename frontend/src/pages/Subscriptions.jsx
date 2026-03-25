import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const Subscriptions = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Get started with essential features',
      features: [
        { text: 'Access to free courses', included: true },
        { text: 'Browsable course library', included: true },
        { text: 'Community forums', included: true },
        { text: 'Certificate of completion', included: false },
        { text: 'Unlimited course access', included: false },
        { text: 'Offline downloads', included: false },
        { text: 'Priority support', included: false }
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Most popular for serious learners',
      features: [
        { text: 'Unlimited course access', included: true },
        { text: 'HD video quality', included: true },
        { text: 'Downloadable resources', included: true },
        { text: 'Certificate of completion', included: true },
        { text: 'Offline downloads', included: true },
        { text: 'Priority email support', included: true },
        { text: 'Live & interactive classes', included: false }
      ],
      cta: 'Subscribe Now',
      highlighted: true
    },
    {
      name: 'Premium',
      price: '$79',
      period: '/month',
      description: 'Complete learning experience',
      features: [
        { text: 'Everything in Professional', included: true },
        { text: 'Live & interactive classes', included: true },
        { text: 'One-on-one mentoring', included: true },
        { text: 'Course projects & assignments', included: true },
        { text: 'Priority support 24/7', included: true },
        { text: 'Exclusive member community', included: true },
        { text: 'Career guidance sessions', included: true }
      ],
      cta: 'Subscribe Now',
      highlighted: false
    }
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600">
            Flexible subscription plans designed for every learning style and budget
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 bg-white sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-lg border-2 transition-all duration-300 ${
                  plan.highlighted
                    ? 'border-primary-500 shadow-2xl transform scale-105 bg-gradient-to-br from-primary-50 to-white'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div className="p-8">
                  {plan.highlighted && (
                    <div className="mb-4 inline-block px-4 py-1 bg-primary-500 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h2>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
                  </div>

                  <Link
                    to="/register"
                    className={`block w-full py-3 px-4 rounded-lg font-semibold text-center transition-all mb-8 ${
                      plan.highlighted
                        ? 'btn-primary'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  <div className="space-y-4">
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time. No cancellation fees or long-term commitments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">Yes! Get 7 days free trial for Professional and Premium plans before committing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I upgrade or downgrade?</h3>
              <p className="text-gray-600">Absolutely. Change your plan anytime based on your learning needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscriptions;
