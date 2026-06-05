'use client'

export const dynamic = 'force-dynamic'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  ArrowLeft,
  Download,
  Share2,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Loader2,
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'



interface AnalysisResult {
  matchScore: number
  matchingSkills: string[]
  missingSkills: string[]
  strengths: string[]
  weaknesses: string[]
  improvements: string[]
  interviewQuestions: string[]
}

function getSeverityColor(severity: string) {
  switch (severity) {
    case 'high':
      return 'bg-red-100 text-red-700'
    case 'medium':
      return 'bg-yellow-100 text-yellow-700'
    default:
      return 'bg-blue-100 text-blue-700'
  }
}

export default function ResultsPage() {
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    try {
      const sessionData = sessionStorage.getItem('analysisData')

      if (sessionData) {
        setAnalysis(JSON.parse(sessionData))
      } else {
        setError('No analysis found')
      }
    } catch (err) {
      console.error(err)
      setError('Failed to load analysis')
    } finally {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return (
      <div className="p-6 sm:p-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <Loader2 className="h-12 w-12 text-primary animate-spin mx-auto mb-4" />
            <p className="text-foreground/60">
              Analyzing your resume...
            </p>
          </div>
        </div>
      </div>
    )
  }



  if (error || !analysis) {
    return (
      <div className="p-6 sm:p-8 max-w-7xl mx-auto">
        <Link
          href="/dashboard/analyze"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-4"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back to analyze</span>
        </Link>
        <Card className="p-8 bg-red-500/10 border border-red-500/30">
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </Card>
      </div>
    )
  }

  const analyses = {
  score: analysis.matchScore,
  atsScore: analysis.matchScore,
  strengths: analysis.strengths || [],
  missingSkills: analysis.missingSkills || [],
  requiredSkills: analysis.matchingSkills || [],
  interviewQuestions: analysis.interviewQuestions || [],
  improvements: (analysis.improvements || []).map((item: string) => ({
    title: item,
    description: item,
    severity: 'medium',
    impact: 'Improves resume quality'
  })),
  sections: [],
  keywords: {
    found: analysis.matchingSkills || [],
    missing: analysis.missingSkills || []
  },
  fileName: 'Resume',
  analyzedDate: new Date().toLocaleDateString()
}

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-4"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back to dashboard</span>
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Resume Analysis Results
            </h1>
            <p className="text-foreground/60">
              {analyses.fileName} • Analyzed {analyses.analyzedDate}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download size={18} className="mr-2" />
              Export Report
            </Button>
            <Button variant="outline" size="sm">
              <Share2 size={18} className="mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Overall Score */}
      <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground/60 mb-2">Overall Score</p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-5xl font-bold text-primary">{analyses.score}</span>
              <span className="text-2xl text-foreground/60">/100</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-foreground/60 mb-1">ATS Score</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-accent">{analyses.atsScore}%</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-foreground/60 mb-1">Match Status</p>
                <p className="text-sm font-semibold text-green-600">Well Optimized</p>
              </div>
            </div>
            <p className="text-sm text-foreground/60">Great! Your resume is competitive and ATS-friendly.</p>
          </div>
          <div className="hidden md:flex items-center justify-center h-32 w-32">
            <div className="relative h-24 w-24">
              <svg className="h-24 w-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-border"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray={`${(analyses.score / 100) * 283} 283`}
                  className="text-primary transition-all"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-foreground">{analyses.score}%</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Section Scores */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Section Analysis</h2>
            <div className="space-y-3">
              {analyses.sections.map((section) => (
                <Card key={section.name} className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-foreground">{section.name}</h3>
                    <span className="text-lg font-bold text-primary">{section.score}%</span>
                  </div>
                  <p className="text-sm text-foreground/60">{section.feedback}</p>
                  <div className="mt-3 h-2 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      style={{ width: `${section.score}%` }}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Improvements */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Recommended Improvements</h2>
            <div className="space-y-3">
              {analyses.improvements.map((improvement, idx) => (
                <Card key={idx} className={`p-4 border-l-4 ${
                  improvement.severity === 'high'
                    ? 'border-l-red-500'
                    : improvement.severity === 'medium'
                      ? 'border-l-yellow-500'
                      : 'border-l-blue-500'
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{improvement.title}</h3>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${getSeverityColor(improvement.severity)}`}>
                      {improvement.severity}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/60 mb-3">{improvement.description}</p>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-primary" />
                    <span className="text-sm font-medium text-primary">{improvement.impact}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Keywords Found */}
          <Card className="p-6 border border-green-500/20 bg-green-500/5">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle2 size={20} className="text-green-500" />
              Keywords Found
            </h3>
            <div className="flex flex-wrap gap-2">
              {analyses.keywords.found.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </Card>

          {/* Missing Keywords */}
          <Card className="p-6 border border-orange-500/20 bg-orange-500/5">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <AlertCircle size={20} className="text-orange-500" />
              Missing Keywords
            </h3>
            <div className="flex flex-wrap gap-2">
              {analyses.keywords.missing.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1 bg-orange-500/20 text-orange-700 dark:text-orange-400 rounded-full text-sm font-medium"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </Card>

          {/* Required Skills */}
          <Card className="p-6 border border-blue-500/20 bg-blue-500/5">
            <h3 className="font-semibold text-foreground mb-4">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {analyses.requiredSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-500/20 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          {/* Missing Skills */}
          <Card className="p-6 border border-purple-500/20 bg-purple-500/5">
            <h3 className="font-semibold text-foreground mb-4">Missing Skills</h3>
            <div className="flex flex-wrap gap-2">
              {analyses.missingSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-purple-500/20 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          {/* Interview Questions */}
          <Card className="p-6 lg:col-span-3">
            <h3 className="font-semibold text-foreground mb-4">Potential Interview Questions</h3>
            <div className="space-y-3">
              {analyses.interviewQuestions.map((question, idx) => (
                <div key={idx} className="p-3 bg-background border border-border/50 rounded">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold text-primary mr-2">{idx + 1}.</span>
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Next Steps */}
          <Card className="p-6 lg:col-span-3">
            <h3 className="font-semibold text-foreground mb-4">Next Steps</h3>
            <ol className="text-sm text-foreground/70 space-y-3">
              <li className="flex gap-3">
                <span className="font-bold text-primary">1</span>
                <span>Review high-priority improvements</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">2</span>
                <span>Add missing keywords naturally</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">3</span>
                <span>Quantify your achievements</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">4</span>
                <span>Re-analyze after changes</span>
              </li>
            </ol>
            <Button className="w-full mt-4">
              Upload Updated Resume
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
