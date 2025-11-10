'use client';

import React, { useState } from 'react';
import Link from 'next/link';

/**
 * 💎 PREMIUM PRICING PAGE
 * World-class subscription plans for maximum revenue generation
 */

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'free',
      name: 'Free Scan',
      price: { monthly: 0, annual: 0 },
      description: 'Get a taste of our revolutionary AI analysis',
      features: [
        '✅ Basic website scan (50+ checks)',
        '✅ Performance overview',
        '✅ 3 key recommendations',
        '✅ Basic PDF report',
        '❌ Advanced AI insights',
        '❌ Competitor analysis',
        '❌ Revenue projections',
        '❌ Video reports'
      ],
      cta: 'Start Free Scan',
      popular: false,
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: { monthly: 497, annual: 4970 },
      description: 'Advanced AI analysis for growing businesses',
      features: [
        '🧠 Advanced AI scanning (500+ checks)',
        '📊 Comprehensive performance analysis',
        '🎯 Conversion optimization insights',
        '📈 Revenue projection modeling',
        '📋 Professional PDF reports',
        '💬 Email support',
        '🔄 Monthly scans',
        '❌ Video reports',
        '❌ Personal consultation'
      ],
      cta: 'Start Professional',
      popular: true,
      color: 'from-blue-600 to-purple-600'
    },
    {
      id: 'masterclass',
      name: 'Masterclass Audit',
      price: { monthly: 2497, annual: 24970 },
      description: 'The ultimate AI-powered business transformation',
      features: [
        '💎 Full AI arsenal (1000+ algorithms)',
        '🏆 Complete business analysis',
        '🎥 Professional video reports',
        '📞 Personal strategy consultation',
        '🚀 Implementation roadmap',
        '💰 Revenue multiplication guarantee',
        '⚡ Priority support (24/7)',
        '🔄 Unlimited scans',
        '🎯 Custom optimization strategy',
        '📊 Competitor deep-dive analysis'
      ],
      cta: 'Book Masterclass Audit',
      popular: false,
      color: 'from-yellow-400 via-red-500 to-purple-600',
      guarantee: 'Multifold ROI Guarantee or Full Refund + $5,000'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: { monthly: 'Custom', annual: 'Custom' },
      description: 'For Fortune 500 companies and market leaders',
      features: [
        '🌟 White-label solution',
        '🏢 Multi-site management',
        '👥 Team collaboration tools',
        '🔧 Custom AI model training',
        '📊 Advanced analytics dashboard',
        '🔒 Enterprise security',
        '📞 Dedicated account manager',
        '🚀 Custom integrations',
        '📈 Unlimited everything',
        '💼 SLA guarantees'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-purple-600 via-pink-600 to-red-600'
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    
    if (planId === 'free') {
      // Redirect to free scan
      window.location.href = '/scan';
    } else if (planId === 'masterclass' || planId === 'enterprise') {
      // Redirect to payment page
      window.location.href = '/payment';
    } else {
      // For professional plan, could implement subscription flow
      console.log(`Selected plan: ${planId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            💎 Investment Plans
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Choose your path to <span className="font-bold text-yellow-300">business domination</span>
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white font-bold' : 'text-blue-200'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex items-center h-8 rounded-full w-16 bg-blue-600 transition-colors focus:outline-none"
            >
              <span
                className={`inline-block w-6 h-6 transform bg-white rounded-full transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'annual' ? 'text-white font-bold' : 'text-blue-200'}`}>
              Annual
              <span className="ml-2 px-2 py-1 bg-green-600 text-white text-xs rounded-full">2 Months FREE</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Trust Signals */}
        <div className="text-center mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-300 text-sm">Businesses Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">$50M+</div>
              <div className="text-gray-300 text-sm">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">99.2%</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-gray-300 text-sm">Support Available</div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 shadow-2xl transition-all hover:scale-105 ${
                plan.popular 
                  ? 'ring-2 ring-blue-500 ring-opacity-50 transform scale-105' 
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  {typeof plan.price.monthly === 'number' ? (
                    <>
                      <div className="text-4xl font-bold text-white">
                        ${billingCycle === 'monthly' ? plan.price.monthly : typeof plan.price.annual === 'number' ? Math.floor(plan.price.annual / 12) : 'Custom'}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {billingCycle === 'monthly' ? 'per month' : 'per month (billed annually)'}
                      </div>
                      {billingCycle === 'annual' && typeof plan.price.monthly === 'number' && plan.price.monthly > 0 && typeof plan.price.annual === 'number' && (
                        <div className="text-green-400 text-sm">
                          Save ${(plan.price.monthly * 12 - plan.price.annual).toLocaleString()}/year
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-4xl font-bold text-white">
                      {plan.price.monthly}
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-300">
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.guarantee && (
                <div className="bg-gradient-to-r from-green-800/20 to-emerald-800/20 p-3 rounded-xl mb-6 border border-green-400/20">
                  <div className="text-green-300 text-xs font-bold text-center">
                    🛡️ {plan.guarantee}
                  </div>
                </div>
              )}

              <button
                onClick={() => handlePlanSelect(plan.id)}
                className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-xl`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 border border-slate-700 shadow-2xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">How does the guarantee work?</h3>
                <p className="text-gray-300">
                  Our Masterclass Audit comes with a full multifold ROI guarantee. If you don&apos;t see at least 
                  5x return on your investment within 6 months, we&apos;ll refund your money plus pay you $5,000 
                  for your time.
                </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-3">What makes your AI different?</h3>
                <p className="text-gray-300">
                  Our AI system uses 1000+ proprietary algorithms developed by PhD researchers from MIT, 
                  Stanford, and Cambridge. It&apos;s the only system that combines technical analysis, 
                  behavioral psychology, and revenue optimization.
                </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Can I upgrade or downgrade anytime?</h3>
              <p className="text-gray-300">
                Yes! You can change your plan at any time. Upgrades take effect immediately, 
                and downgrades take effect at your next billing cycle. No cancellation fees.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Do you offer custom solutions?</h3>
              <p className="text-gray-300">
                Absolutely. Our Enterprise plan includes custom AI model training, white-label solutions, 
                and dedicated account management. Contact our sales team for a tailored proposal.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have multiplied their revenue with our revolutionary AI platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/scan"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-xl"
            >
              🚀 Start with Free Scan
            </Link>
            <button
              onClick={() => handlePlanSelect('masterclass')}
              className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:via-red-400 hover:to-purple-500 transition-all transform hover:scale-105 shadow-xl"
            >
              💎 Book Masterclass Audit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}