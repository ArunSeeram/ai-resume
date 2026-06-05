'use client'

import { useEffect, useState } from 'react'
import { CheckCircle2, AlertCircle, TrendingUp, Users, Target, Zap } from 'lucide-react'

export function HeroPreview() {
  const [animateScore, setAnimateScore] = useState(false)
  const [animateMetrics, setAnimateMetrics] = useState(false)

  useEffect(() => {
    setAnimateScore(true)
    setTimeout(() => setAnimateMetrics(true), 600)
  }, [])

  const impactStats = [
    { label: 'Resume Success Rate', value: '89%', icon: TrendingUp, color: 'text-green-500' },
    { label: 'Job Interviews Booked', value: '3.5x', icon: Users, color: 'text-blue-500' },
    { label: 'ATS Optimization', value: '94%', icon: Target, color: 'text-purple-500' },
  ]

  const analysisPoints = [
    { text: 'Missing Keywords', type: 'warning' },
    { text: 'Formatting Issues', type: 'warning' },
    { text: 'Strong Achievements', type: 'success' },
    { text: 'Good Structure', type: 'success' },
  ]

  return (
    <div className="glass rounded-2xl p-8 sm:p-12 border border-border/50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Resume Score Preview */}
        <div className={`mb-8 transition-all duration-700 ${animateScore ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Your Resume Score</h3>
            <span className="text-sm text-foreground/60">Out of 100</span>
          </div>
          
          {/* Score Circle */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20"></div>
              <div className="relative flex items-center justify-center w-36 h-36 rounded-full bg-card border-4 border-primary/30">
                <div className="text-center">
                  <div className="text-5xl font-bold gradient-text-animated">78</div>
                  <p className="text-sm text-foreground/60 mt-2">Good</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why This Matters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {impactStats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-card border border-border/50 text-center hover:shadow-lg transition-all duration-300"
                  style={{
                    animation: animateMetrics ? `slideUpText 0.6s ease-out forwards` : 'none',
                    animationDelay: `${idx * 100}ms`,
                  }}
                >
                  <Icon className={`mx-auto h-6 w-6 mb-2 ${stat.color}`} />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-foreground/60 mt-1">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Analysis Insights */}
        <div className={`transition-all duration-700 delay-300 ${animateScore ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <h4 className="font-semibold text-foreground">Analysis Insights</h4>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {analysisPoints.map((point, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 p-3 rounded-lg border transition-all duration-500 hover:shadow-md ${
                  point.type === 'success'
                    ? 'bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400'
                    : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-700 dark:text-yellow-400'
                }`}
                style={{
                  animation: animateMetrics ? `slideUpText 0.6s ease-out forwards` : 'none',
                  animationDelay: `${idx * 80}ms`,
                }}
              >
                {point.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                )}
                <span className="text-sm font-medium">{point.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30">
            <p className="text-sm text-foreground/70 mb-2">
              <span className="font-semibold text-foreground">Why Your Resume Matters:</span>
            </p>
            <ul className="space-y-1 text-xs text-foreground/60">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>75% of recruiters use ATS systems - poor formatting gets auto-rejected</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>6 seconds - average time recruiters spend reviewing each resume</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>Keyword optimization increases interview callbacks by 3x</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
