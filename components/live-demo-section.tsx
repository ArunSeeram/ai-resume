'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, AlertCircle, Zap, TrendingUp } from 'lucide-react'

export function LiveDemoSection() {
  const [selectedResume, setSelectedResume] = useState<'before' | 'after'>('before')

  const beforeAnalysis = {
    score: 42,
    rating: 'Poor',
    issues: [
      { text: 'Missing relevant keywords', severity: 'critical' },
      { text: 'Poor formatting structure', severity: 'critical' },
      { text: 'No quantifiable achievements', severity: 'warning' },
      { text: 'Weak action verbs', severity: 'warning' },
    ],
    atsScore: 35,
  }

  const afterAnalysis = {
    score: 87,
    rating: 'Excellent',
    improvements: [
      { text: 'Added industry keywords', success: true },
      { text: 'Restructured for ATS compatibility', success: true },
      { text: 'Quantified all achievements', success: true },
      { text: 'Enhanced with power verbs', success: true },
    ],
    atsScore: 94,
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-primary/5 to-accent/5">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up-text">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <p className="text-sm font-semibold text-primary">Live Demo</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See the Transformation
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Watch how ResumePro analyzes and optimizes your resume in real-time
          </p>
        </div>

        {/* Demo Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            onClick={() => setSelectedResume('before')}
            variant={selectedResume === 'before' ? 'default' : 'outline'}
            className="px-8 h-11"
          >
            Before Analysis
          </Button>
          <Button
            onClick={() => setSelectedResume('after')}
            variant={selectedResume === 'after' ? 'default' : 'outline'}
            className="px-8 h-11"
          >
            After Optimization
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Before/After Comparison */}
          <div className="space-y-6">
            {selectedResume === 'before' ? (
              // Before Analysis
              <Card className="p-8 border-destructive/50 bg-destructive/5">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Resume Score</p>
                    <div className="flex items-center gap-3">
                      <div className="text-5xl font-bold text-destructive">
                        {beforeAnalysis.score}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-destructive">
                          {beforeAnalysis.rating}
                        </p>
                        <p className="text-xs text-foreground/50">Needs Work</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  <p className="text-sm font-semibold text-foreground">Issues Found:</p>
                  {beforeAnalysis.issues.map((issue, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/70">{issue.text}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-semibold text-foreground">ATS Score</p>
                    <p className="text-xs font-bold text-destructive">{beforeAnalysis.atsScore}%</p>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-destructive h-full rounded-full transition-all duration-500"
                      style={{ width: `${beforeAnalysis.atsScore}%` }}
                    />
                  </div>
                </div>
              </Card>
            ) : (
              // After Analysis
              <Card className="p-8 border-primary/50 bg-primary/5">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Resume Score</p>
                    <div className="flex items-center gap-3">
                      <div className="text-5xl font-bold text-primary">
                        {afterAnalysis.score}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary">
                          {afterAnalysis.rating}
                        </p>
                        <p className="text-xs text-foreground/50">Ready to Submit</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  <p className="text-sm font-semibold text-foreground">Optimizations Applied:</p>
                  {afterAnalysis.improvements.map((improvement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/70">{improvement.text}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-semibold text-foreground">ATS Score</p>
                    <p className="text-xs font-bold text-primary">{afterAnalysis.atsScore}%</p>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full transition-all duration-500"
                      style={{ width: `${afterAnalysis.atsScore}%` }}
                    />
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Impact Metrics */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">45</div>
                <p className="text-sm text-foreground/60">Points Improvement</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">+59%</div>
                <p className="text-sm text-foreground/60">ATS Compatibility</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">3.5x</div>
                <p className="text-sm text-foreground/60">More Interviews</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">94%</div>
                <p className="text-sm text-foreground/60">ATS Optimization</p>
              </Card>
            </div>

            {/* Key Insights */}
            <Card className="p-6 bg-accent/10 border-accent/30">
              <div className="flex gap-3 mb-4">
                <Zap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="font-semibold text-foreground">Key Insights</p>
              </div>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>✓ Formatting optimizations passed 94% of ATS systems</li>
                <li>✓ Added 23 high-impact keywords from job descriptions</li>
                <li>✓ Restructured achievements with quantifiable metrics</li>
                <li>✓ Ready for top 500 companies' recruiting systems</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-foreground/60 mb-6">
            Start optimizing your resume and land more interviews today
          </p>
          <Button size="lg" className="h-12 text-base">
            Analyze Your Resume Free
          </Button>
        </div>
      </div>
    </section>
  )
}
