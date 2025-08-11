'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

export default function RoiCalculatorPage() {
  const [monthlyTraffic, setMonthlyTraffic] = useState<number>(50000)
  const [conversionRate, setConversionRate] = useState<number>(2.0)
  const [averageOrderValue, setAverageOrderValue] = useState<number>(75)
  const [expectedMultiplier, setExpectedMultiplier] = useState<number>(1.5)

  const currentMonthlyRevenue = useMemo(() => {
    const conversions = monthlyTraffic * (conversionRate / 100)
    return conversions * averageOrderValue
  }, [monthlyTraffic, conversionRate, averageOrderValue])

  const projectedMonthlyRevenue = useMemo(() => {
    return currentMonthlyRevenue * expectedMultiplier
  }, [currentMonthlyRevenue, expectedMultiplier])

  const delta = projectedMonthlyRevenue - currentMonthlyRevenue

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white">
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold">Fixer Digital Agent</span>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              <Link href="/scan" className="text-white/80 hover:text-white transition-colors">Free Scan</Link>
              <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">Pricing</Link>
              <Link href="/calculator" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">ROI Calculator</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">ROI Calculator</h1>
        <p className="text-blue-100 mb-8">Estimate monthly revenue uplift from traffic, conversion, AOV, and a projected performance multiplier.</p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white/10 border border-white/20 rounded-xl p-5">
              <label className="block text-sm text-blue-100 mb-2">Monthly Traffic</label>
              <input
                type="number"
                className="w-full rounded-md bg-white/90 text-black px-3 py-2 focus:outline-none"
                value={monthlyTraffic}
                min={0}
                onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
              />
            </div>

            <div className="bg-white/10 border border-white/20 rounded-xl p-5">
              <label className="block text-sm text-blue-100 mb-2">Conversion Rate (%)</label>
              <input
                type="number"
                step="0.1"
                className="w-full rounded-md bg-white/90 text-black px-3 py-2 focus:outline-none"
                value={conversionRate}
                min={0}
                onChange={(e) => setConversionRate(Number(e.target.value))}
              />
            </div>

            <div className="bg-white/10 border border-white/20 rounded-xl p-5">
              <label className="block text-sm text-blue-100 mb-2">Average Order Value ($)</label>
              <input
                type="number"
                step="1"
                className="w-full rounded-md bg-white/90 text-black px-3 py-2 focus:outline-none"
                value={averageOrderValue}
                min={0}
                onChange={(e) => setAverageOrderValue(Number(e.target.value))}
              />
            </div>

            <div className="bg-white/10 border border-white/20 rounded-xl p-5">
              <label className="block text-sm text-blue-100 mb-2">Expected Multiplier (e.g., 1.0 - 3.0)</label>
              <input
                type="number"
                step="0.1"
                className="w-full rounded-md bg-white/90 text-black px-3 py-2 focus:outline-none"
                value={expectedMultiplier}
                min={0}
                onChange={(e) => setExpectedMultiplier(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-2xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <div className="space-y-3 text-blue-50">
                <div className="flex justify-between">
                  <span>Current Monthly Revenue</span>
                  <span className="font-semibold">${currentMonthlyRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between">
                  <span>Projected Monthly Revenue</span>
                  <span className="font-semibold">${projectedMonthlyRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="border-t border-white/20 my-3" />
                <div className="flex justify-between text-yellow-200">
                  <span>Estimated Monthly Uplift</span>
                  <span className="font-bold">${delta.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-blue-200/80">
              Assumptions: conversions = traffic × (CR/100), revenue = conversions × AOV.
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}