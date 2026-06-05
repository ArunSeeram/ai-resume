'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const fillDemoCredentials = () => {
    setEmail('demo@resumepro.com')
    setPassword('DemoPassword123!')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Demo: Navigate to dashboard
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b border-border px-4 sm:px-6 lg:px-8 py-4">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to home</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold mb-4">
              R
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Welcome Back
            </h1>
            <p className="text-foreground/60">
              Sign in to your ResumePro account
            </p>
          </div>

          <Card className="p-8 border border-border/50">
            {/* Demo Credentials Box */}
            <div className="mb-6 p-4 bg-accent/10 border border-accent/30 rounded-lg">
              <p className="text-sm font-semibold text-foreground mb-3">Demo Credentials</p>
              <div className="space-y-2 text-sm mb-3">
                <p className="text-foreground/70"><span className="font-medium">Email:</span> demo@resumepro.com</p>
                <p className="text-foreground/70"><span className="font-medium">Password:</span> DemoPassword123!</p>
              </div>
              <Button
                type="button"
                onClick={fillDemoCredentials}
                variant="outline"
                size="sm"
                className="w-full"
              >
                Auto-fill Demo Credentials
              </Button>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-10 bg-input border-border"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-foreground font-medium">
                    Password
                  </Label>
                  <Link href="/forgot-password" className="text-sm text-primary hover:text-primary/80 transition">
                    Forgot?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="h-10 bg-input border-border"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full h-10">
                Sign In
              </Button>
            </form>

            <div className="mt-6 border-t border-border pt-6">
              <p className="text-center text-sm text-foreground/60">
                Don&apos;t have an account?{' '}
                <Link href="/register" className="text-primary font-semibold hover:text-primary/80 transition">
                  Create one
                </Link>
              </p>
            </div>
          </Card>

          <p className="text-center text-xs text-foreground/50 mt-6">
            By signing in, you agree to our{' '}
            <Link href="#" className="text-primary hover:text-primary/80 transition">
              Terms of Service
            </Link>
            {' '}and{' '}
            <Link href="#" className="text-primary hover:text-primary/80 transition">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
