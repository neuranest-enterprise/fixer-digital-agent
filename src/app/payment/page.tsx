'use client';

import React, { useState } from 'react';
import { StripePaymentProcessor } from '../../lib/stripe-client';

/**
 * 💳 STRIPE PAYMENT INTEGRATION
 * World-class payment processing for Masterclass Audits
 */

export default function PaymentPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('masterclass');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerName, setCustomerName] = useState('');

  const plans = {
    masterclass: {
      name: 'Masterclass Audit',
      price: 5000,
      description: 'Complete business transformation with AI Co-Pilot',
      features: [
        '🔬 Quantum Deep Scan & Diagnostics',
        '🏆 Competitive Landscape Analysis',
        '🦠 Viral Content Blueprint',
        '🗺️ 90-Day Growth Roadmap',
        '💼 $5,000 Executive Summary',
        '🤖 AI Co-Pilot Access',
        '📄 Diamond-Quality PDF Reports',
        '🎥 Professional Video Reports',
        '💰 Multifold ROI Guarantee'
      ]
    },
    enterprise: {
      name: 'Enterprise Solution',
      price: 15000,
      description: 'Full-scale enterprise transformation',
      features: [
        '🌟 Everything in Masterclass',
        '🏢 Multi-site analysis',
        '👥 Team collaboration tools',
        '🔧 Custom AI model training',
        '📊 Advanced analytics dashboard',
        '📞 Dedicated account manager',
        '🚀 Custom integrations',
        '💼 SLA guarantees'
      ]
    }
  };

  const handlePayment = async () => {
    if (!customerEmail || !customerName) {
      alert('Please fill in your name and email');
      return;
    }

    setIsProcessing(true);

    try {
      // Create Stripe customer
      const customer = await StripePaymentProcessor.createCustomer(customerEmail, customerName);
      console.log('Customer created:', customer.id);

      // Create payment intent
      const paymentIntent = await StripePaymentProcessor.createPaymentIntent(
        plans[selectedPlan as keyof typeof plans].price
      );
      console.log('Payment intent created:', paymentIntent.id);

      // In a real implementation, you would use Stripe Elements here
      // For demo purposes, we'll simulate a successful payment
      setTimeout(() => {
        setPaymentSuccess(true);
        setIsProcessing(false);
      }, 3000);

    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-green-800 to-emerald-900 rounded-3xl p-12 border border-green-500/30 shadow-2xl">
            <div className="text-8xl mb-6">🎉</div>
            <h1 className="text-4xl font-bold text-white mb-6">
              Payment Successful!
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Welcome to the NeuraNest Enterprise family! Your {plans[selectedPlan as keyof typeof plans].name} is ready.
            </p>
            
            <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 p-6 rounded-2xl mb-8 border border-green-400/20">
              <h3 className="text-green-300 font-bold mb-4">What happens next?</h3>
              <ul className="text-green-100 text-left space-y-2">
                <li>✅ Your AI Co-Pilot is now activated</li>
                <li>✅ Quantum analysis tools are unlocked</li>
                <li>✅ Executive summary reports available</li>
                <li>✅ 90-day growth roadmap being generated</li>
                <li>✅ Dedicated support team assigned</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/scan'}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl"
              >
                🔬 Start Quantum Analysis
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105"
              >
                🏠 Return to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            💎 Secure Payment
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Join the elite 0.1% with our <span className="font-bold text-yellow-300">quantum-level</span> business transformation
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Plan Selection */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-8">Choose Your Transformation</h2>
            
            {Object.entries(plans).map(([key, plan]) => (
              <div
                key={key}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border cursor-pointer transition-all transform hover:scale-105 ${
                  selectedPlan === key 
                    ? 'border-yellow-400 shadow-2xl shadow-yellow-400/20' 
                    : 'border-slate-700 hover:border-purple-400'
                }`}
                onClick={() => setSelectedPlan(key)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <div className="text-3xl font-bold text-yellow-400">
                    ${plan.price.toLocaleString()}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-gray-300 text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {selectedPlan === key && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-xl border border-yellow-400/30">
                    <div className="text-yellow-300 font-bold text-center">
                      ✅ Selected Plan
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Payment Form */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8">Complete Your Order</h2>
            
            {/* Customer Information */}
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-white font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-400 focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-400 focus:outline-none"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-2xl border border-purple-400/20 mb-8">
              <h3 className="text-white font-bold mb-4">Order Summary</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">{plans[selectedPlan as keyof typeof plans].name}</span>
                <span className="text-white font-bold text-xl">
                  ${plans[selectedPlan as keyof typeof plans].price.toLocaleString()}
                </span>
              </div>
              <div className="border-t border-gray-600 mt-4 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-yellow-400 font-bold text-2xl">
                    ${plans[selectedPlan as keyof typeof plans].price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <h3 className="text-white font-bold mb-4">Payment Method</h3>
              <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">💳</div>
                  <div>
                    <div className="text-white font-semibold">Stripe Secure Payment</div>
                    <div className="text-gray-400 text-sm">All major credit cards accepted</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-4 rounded-xl border border-green-400/20 mb-8">
              <div className="text-center">
                <div className="text-green-300 font-bold mb-2">🛡️ Our Guarantees</div>
                <div className="text-green-100 text-sm space-y-1">
                  <div>✅ Multifold ROI or full refund</div>
                  <div>✅ 30-day money-back guarantee</div>
                  <div>✅ Enterprise-grade security</div>
                  <div>✅ 24/7 dedicated support</div>
                </div>
              </div>
            </div>

            {/* Payment Button */}
            <button
              onClick={handlePayment}
              disabled={isProcessing || !customerEmail || !customerName}
              className="w-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 hover:from-yellow-300 hover:via-red-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl disabled:opacity-50 disabled:transform-none"
            >
              {isProcessing ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Processing Payment...</span>
                </div>
              ) : (
                `💎 Complete Payment - $${plans[selectedPlan as keyof typeof plans].price.toLocaleString()}`
              )}
            </button>

            {/* Security Notice */}
            <div className="mt-6 text-center">
              <div className="text-gray-400 text-xs">
                🔒 Secured by Stripe • SSL Encrypted • PCI Compliant
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}