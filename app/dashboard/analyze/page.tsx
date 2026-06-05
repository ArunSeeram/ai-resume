'use client'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Upload, FileUp, X, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function AnalyzePage() {
  const router = useRouter()
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [jobDescription, setJobDescription] = useState('')
  const [dragActive, setDragActive] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [error, setError] = useState('')

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0])
    }
  }
const handleAnalyze = async () => {
  if (!uploadedFile || !jobDescription.trim()) {
    setError('Please upload a resume and enter a job description')
    return
  }

  setIsAnalyzing(true)
  setError('')

  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const token = localStorage.getItem('token')

    // Upload Resume
    const formData = new FormData()
    formData.append('resume', uploadedFile)

  

const uploadResponse = await axios.post(
  `${API_URL}/resume/upload`,
  formData,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
)

    const resumeText = uploadResponse.data.text

    // Analyze Resume
    const analyzeResponse = await axios.post(
  `${API_URL}/resume/analyze`,
  {
    resumeText,
    jobDescription,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
)
    const data = analyzeResponse.data

    console.log('Analysis Data:', data)

    sessionStorage.setItem(
      'analysisData',
      JSON.stringify(data)
    )

    router.push('/dashboard/results')
  } catch (err: any) {
    console.error(err)

    setError(
      err?.response?.data?.message ||
      err?.message ||
      'Analysis failed'
    )
  } finally {
    setIsAnalyzing(false)
  }
}

  return (
    <div className="p-6 sm:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Upload Your Resume
        </h1>
        <p className="text-foreground/60">
          Upload your resume in PDF, DOCX, or TXT format to get started
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Upload Area */}
        <div className="lg:col-span-2 space-y-6">
          <Card
            className={`p-8 text-center border-2 transition-all cursor-pointer ${
              dragActive
                ? 'border-primary bg-primary/5'
                : uploadedFile
                  ? 'border-green-500 bg-green-5'
                  : 'border-dashed border-primary/30 hover:border-primary/50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".pdf,.docx,.doc,.txt"
              onChange={handleChange}
            />

            {uploadedFile ? (
              <>
                <FileUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <p className="text-lg font-semibold text-foreground mb-1">
                  {uploadedFile.name}
                </p>
                <p className="text-sm text-foreground/60 mb-4">
                  {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
                <div className="flex gap-3 justify-center">
                  <Button
                    variant="outline"
                    onClick={() => setUploadedFile(null)}
                    disabled={isAnalyzing}
                  >
                    <X size={18} className="mr-2" />
                    Change File
                  </Button>
                  <Button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing || !jobDescription.trim()}
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 size={18} className="mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      'Start Analysis'
                    )}
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Upload className="h-12 w-12 text-primary/60 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Drop your resume here
                </h3>
                <p className="text-foreground/60 mb-6">
                  or click to browse files
                </p>
                <Button
  type="button"
  onClick={() => document.getElementById('file-upload')?.click()}
>
  Choose File
</Button>
              </>
            )}
          </Card>

          {/* Job Description Section */}
          <Card className="p-6 bg-accent/5 border border-accent/30">
            <label className="block mb-4">
              <p className="text-sm font-semibold text-foreground mb-2">
                Job Description (Required)
              </p>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job description you're applying for. This helps us match your resume against the specific requirements..."
                className="w-full h-32 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </label>
            <p className="text-xs text-foreground/50">
              Your job description helps us identify missing keywords, required skills, and provide targeted improvement suggestions.
            </p>
          </Card>

          {/* Error Message */}
          {error && (
            <Card className="p-4 bg-red-500/10 border border-red-500/30">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </Card>
          )}

          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Supported formats:</p>
            <ul className="text-sm text-foreground/60 space-y-1">
              <li>• PDF (.pdf)</li>
              <li>• Microsoft Word (.docx, .doc)</li>
              <li>• Text (.txt)</li>
            </ul>
            <p className="text-xs text-foreground/50 mt-4">
              Maximum file size: 10 MB
            </p>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-4">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="font-semibold text-foreground mb-3">
              What We Analyze
            </h3>
            <ul className="text-sm text-foreground/70 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>ATS compatibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Content quality</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Keywords &amp; skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Formatting issues</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Improvement tips</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 border border-border/50">
            <h3 className="font-semibold text-foreground mb-3">
              Analysis Timeline
            </h3>
            <ul className="text-sm text-foreground/70 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">1</span>
                <span>Upload your resume</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">2</span>
                <span>AI processes content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">3</span>
                <span>Get detailed report</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">4</span>
                <span>Implement feedback</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}
