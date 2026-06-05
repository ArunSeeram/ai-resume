'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Upload, TrendingUp, FileText, Award } from 'lucide-react'
import Link from 'next/link'

export default function DashboardHome() {
  const recentAnalyses = [
    {
      id: 1,
      name: 'Senior Developer Resume.pdf',
      date: '2 days ago',
      score: 78,
      status: 'Complete',
    },
    {
      id: 2,
      name: 'Product Manager Resume.docx',
      date: '1 week ago',
      score: 85,
      status: 'Complete',
    },
    {
      id: 3,
      name: 'Updated Resume.pdf',
      date: '2 weeks ago',
      score: 72,
      status: 'Complete',
    },
  ]

  const stats = [
    {
      icon: FileText,
      label: 'Total Analyses',
      value: '12',
      change: '+2 this month',
    },
    {
      icon: TrendingUp,
      label: 'Avg Score',
      value: '81%',
      change: '+5% from last month',
    },
    {
      icon: Award,
      label: 'Best Score',
      value: '92%',
      change: 'Senior Role Resume',
    },
  ]

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Welcome Back, John
          </h1>
          <p className="text-foreground/60">
            Analyze your resume and get AI-powered feedback
          </p>
        </div>
        <Link href="/dashboard/analyze">
          <Button size="lg" className="h-11">
            <Upload size={20} className="mr-2" />
            Upload Resume
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm text-foreground/60 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-foreground mb-2">{stat.value}</p>
              <p className="text-xs text-primary font-medium">{stat.change}</p>
            </Card>
          )
        })}
      </div>

      {/* Recent Analyses */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-1">
            Recent Analyses
          </h2>
          <p className="text-sm text-foreground/60">
            View your latest resume analysis results
          </p>
        </div>

        <div className="space-y-3">
          {recentAnalyses.map((analysis) => (
            <Card key={analysis.id} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <Link
                    href={`/dashboard/results/${analysis.id}`}
                    className="text-base font-medium text-foreground hover:text-primary transition"
                  >
                    {analysis.name}
                  </Link>
                  <p className="text-sm text-foreground/60 mt-1">{analysis.date}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-foreground">{analysis.score}</p>
                    <p className="text-xs text-foreground/60">Out of 100</p>
                  </div>
                  <Link href={`/dashboard/results/${analysis.id}`}>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Upload Prompt */}
      <Card className="p-8 text-center border-2 border-dashed border-primary/30 hover:border-primary/50 transition cursor-pointer">
        <Upload className="h-12 w-12 text-primary/60 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Upload a Resume
        </h3>
        <p className="text-foreground/60 mb-4">
          Drag and drop your resume or click to browse
        </p>
        <Link href="/dashboard/analyze">
          <Button variant="outline">
            Choose File
          </Button>
        </Link>
      </Card>
    </div>
  )
}
