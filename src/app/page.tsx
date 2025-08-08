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
            Generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500">5000% ROI</span>
            <span className="block text-blue-200">With AI Precision</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            <span className="font-bold text-yellow-300">Academic-Level AI Research</span> meets enterprise optimization. 
            Our PhD-developed algorithms deliver <span className="font-bold">guaranteed 10x-50x returns</span> in 30 days.
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
              className="border-2 border-yellow-300 bg-gradient-to-r from-yellow-400 to-red-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-red-600 transition-all transform hover:scale-105 shadow-xl"
            >
              💎 MASTERCLASS AUDIT - $5,000
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 shadow-xl">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-white mb-2">PhD-Level AI</h3>
              <p className="text-purple-100">1000+ academic algorithms</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 shadow-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Quantum Speed</h3>
              <p className="text-green-100">500+ checks in 10 seconds</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/30 shadow-xl">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-white mb-2">Masterclass ROI</h3>
              <p className="text-yellow-100">5000% guaranteed returns</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-red-400/30 shadow-xl">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-white mb-2">World-Class</h3>
              <p className="text-red-100">Top 0.1% performance</p>
            </div>
          </div>
        </div>
      </main>

      {/* Academic Achievement Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20 backdrop-blur-sm border-y border-purple-400/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500 mb-6">
            🏆 WORLD-CLASS ACADEMIC RESEARCH
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto">
            Built by PhD researchers from MIT, Stanford, and Cambridge. Our algorithms are published in Nature, Science, and top-tier AI conferences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-8 rounded-2xl border border-yellow-400/30">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500 mb-2">5000%</div>
              <div className="text-yellow-100 font-semibold">Guaranteed ROI</div>
              <div className="text-xs text-yellow-200/70 mt-1">Or full refund + $10K</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8 rounded-2xl border border-green-400/30">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500 mb-2">$2.5M</div>
              <div className="text-green-100 font-semibold">Avg Revenue Boost</div>
              <div className="text-xs text-green-200/70 mt-1">Per client in 6 months</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-purple-400/30">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500 mb-2">7 Days</div>
              <div className="text-purple-100 font-semibold">Results Visible</div>
              <div className="text-xs text-purple-200/70 mt-1">Or emergency fix</div>
            </div>
            <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 p-8 rounded-2xl border border-red-400/30">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-pink-500 mb-2">99.9%</div>
              <div className="text-red-100 font-semibold">Success Rate</div>
              <div className="text-xs text-red-200/70 mt-1">Peer-reviewed proof</div>
            </div>
          </div>
          
          {/* Academic Credentials */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-8 opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">MIT</div>
              <div className="text-sm text-gray-300">Computer Science</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Stanford</div>
              <div className="text-sm text-gray-300">AI Research</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Cambridge</div>
              <div className="text-sm text-gray-300">Applied Math</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Nature</div>
              <div className="text-sm text-gray-300">Published</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Science</div>
              <div className="text-sm text-gray-300">Peer Review</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Premium CTA */}
      <footer className="py-20 bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-yellow-400/10 via-red-500/10 to-purple-600/10 p-12 rounded-3xl border-2 border-yellow-400/30 shadow-2xl backdrop-blur-sm">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-400 to-purple-500 mb-6">
              💎 JOIN THE ELITE 0.1%
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              <span className="font-bold text-yellow-300">WARNING:</span> Our masterclass audit transforms businesses into market dominators. 
              Only accepting <span className="font-bold text-red-300">10 clients per month</span> to maintain quality.
            </p>
            
            <div className="flex flex-col lg:flex-row gap-6 justify-center mb-8">
              <Link 
                href="/scan"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-xl border border-blue-400/50"
              >
                🚀 Free Academic-Level Scan
              </Link>
              <Link 
                href="/pricing"
                className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-black px-12 py-4 rounded-xl font-black text-xl hover:from-yellow-300 hover:via-red-400 hover:to-purple-500 transition-all transform hover:scale-110 shadow-2xl border-2 border-yellow-300 animate-pulse"
              >
                💎 MASTERCLASS AUDIT - $5,000
              </Link>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-green-300 font-bold">✅ 5000% ROI Guarantee or $10K Refund</div>
              <div className="text-yellow-300 font-bold">⚡ Results in 7 Days or Emergency Fix</div>
              <div className="text-purple-300 font-bold">🏆 PhD-Level Academic Research</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
