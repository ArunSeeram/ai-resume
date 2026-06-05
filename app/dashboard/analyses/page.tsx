'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FileText, Trash2, MoreVertical } from 'lucide-react'
import Link from 'next/link'

export default function AnalysesPage() {
  const analyses = [
    {
      id: 1,
      name: 'Senior Developer Resume.pdf',
      date: '2 days ago',
      score: 78,
      status: 'Complete',
      size: '2.4 MB',
    },
    {
      id: 2,
      name: 'Product Manager Resume.docx',
      date: '1 week ago',
      score: 85,
      status: 'Complete',
      size: '1.8 MB',
    },
    {
      id: 3,
      name: 'Updated Resume.pdf',
      date: '2 weeks ago',
      score: 72,
      status: 'Complete',
      size: '2.1 MB',
    },
    {
      id: 4,
      name: 'Marketing Manager.docx',
      date: '3 weeks ago',
      score: 88,
      status: 'Complete',
      size: '1.5 MB',
    },
    {
      id: 5,
      name: 'Early Draft.pdf',
      date: '1 month ago',
      score: 65,
      status: 'Complete',
      size: '1.9 MB',
    },
    {
      id: 6,
      name: 'Design Portfolio Resume.pdf',
      date: '2 months ago',
      score: 92,
      status: 'Complete',
      size: '3.2 MB',
    },
  ]

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600 dark:text-green-400'
    if (score >= 75) return 'text-blue-600 dark:text-blue-400'
    return 'text-yellow-600 dark:text-yellow-400'
  }

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            All Analyses
          </h1>
          <p className="text-foreground/60">
            View and manage your resume analysis history
          </p>
        </div>
        <Link href="/dashboard/analyze">
          <Button size="lg">
            Upload New Resume
          </Button>
        </Link>
      </div>

      {/* Analyses Table */}
      <Card className="border border-border/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="text-left px-4 sm:px-6 py-4 font-semibold text-foreground">File Name</th>
                <th className="text-left px-4 sm:px-6 py-4 font-semibold text-foreground">Date</th>
                <th className="text-center px-4 sm:px-6 py-4 font-semibold text-foreground">Score</th>
                <th className="text-right px-4 sm:px-6 py-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {analyses.map((analysis, idx) => (
                <tr
                  key={analysis.id}
                  className={`border-b border-border hover:bg-muted/30 transition ${
                    idx === analyses.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  <td className="px-4 sm:px-6 py-4">
                    <Link
                      href={`/dashboard/results/${analysis.id}`}
                      className="flex items-center gap-3 hover:text-primary transition"
                    >
                      <FileText size={18} className="text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground truncate">
                          {analysis.name}
                        </p>
                        <p className="text-xs text-foreground/60">{analysis.size}</p>
                      </div>
                    </Link>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-foreground/60">
                    {analysis.date}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-center">
                    <Link href={`/dashboard/results/${analysis.id}`}>
                      <span className={`font-bold text-lg ${getScoreColor(analysis.score)}`}>
                        {analysis.score}
                      </span>
                    </Link>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/dashboard/results/${analysis.id}`}>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </Link>
                      <button className="p-2 hover:bg-muted rounded-lg transition">
                        <MoreVertical size={18} className="text-foreground/60" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <Button variant="outline" disabled>
          Previous
        </Button>
        <Button variant="outline" className="px-3">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">
          Next
        </Button>
      </div>
    </div>
  )
}
