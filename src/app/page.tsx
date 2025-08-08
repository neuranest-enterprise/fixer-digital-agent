import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Fixer Digital Agent</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/scan" className="text-white/80 hover:text-white transition-colors">
                Free Scan
              </Link>
              <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/pricing" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Stop Losing Customers to
            <span className="block text-blue-200">Competitors</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get AI-powered website optimization that drives real results. 
            Increase traffic by 100-300% and boost conversions within 90 days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/scan"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              🚀 Get Free Website Scan
            </Link>
            <Link 
              href="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              💰 Premium Audit - $2,000
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-blue-100">200+ checks in under 30 seconds</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-2">Actionable Insights</h3>
              <p className="text-blue-100">Step-by-step optimization plan</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-blue-100">500+ businesses, 10x growth</p>
            </div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Join 500+ Growing Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-200 mb-2">287%</div>
              <div className="text-white">Average Traffic Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-200 mb-2">$50K</div>
              <div className="text-white">Monthly Revenue Boost</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-200 mb-2">45 Days</div>
              <div className="text-white">Time to See Results</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Dominate Your Market?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Start with a free scan, then upgrade to our $2,000 premium audit
          </p>
          <Link 
            href="/scan"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-12 py-4 rounded-lg font-bold text-xl hover:from-green-500 hover:to-blue-600 transition-all transform hover:scale-105 inline-block"
          >
            🎯 Start Free Scan Now
          </Link>
        </div>
      </footer>
    </div>
  )
}
