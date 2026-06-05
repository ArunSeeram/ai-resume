import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function RegisterPage() {
  const benefits = [
    'Unlimited resume analyses',
    'AI-powered feedback',
    'ATS optimization',
    'Job matching insights',
  ]

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
        <div className="w-full max-w-2xl grid md:grid-cols-2 gap-8">
          {/* Form */}
          <div>
            <div className="mb-8">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold mb-4">
                R
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Get Started
              </h1>
              <p className="text-foreground/60">
                Create your free account in seconds
              </p>
            </div>

            <Card className="p-8 border border-border/50">
              <form className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="h-10 bg-input border-border"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-10 bg-input border-border"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground font-medium">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="h-10 bg-input border-border"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm" className="text-foreground font-medium">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirm"
                    type="password"
                    placeholder="••••••••"
                    className="h-10 bg-input border-border"
                    required
                  />
                </div>

                <Button type="submit" className="w-full h-10 mt-6">
                  Create Account
                </Button>
              </form>

              <div className="mt-6 border-t border-border pt-6">
                <p className="text-center text-sm text-foreground/60">
                  Already have an account?{' '}
                  <Link href="/login" className="text-primary font-semibold hover:text-primary/80 transition">
                    Sign in
                  </Link>
                </p>
              </div>
            </Card>

            <p className="text-center text-xs text-foreground/50 mt-6">
              By creating an account, you agree to our{' '}
              <Link href="#" className="text-primary hover:text-primary/80 transition">
                Terms of Service
              </Link>
              {' '}and{' '}
              <Link href="#" className="text-primary hover:text-primary/80 transition">
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Benefits */}
          <div className="hidden md:flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Why Join ResumePro?
                </h2>
                <p className="text-foreground/60">
                  Get everything you need to create a winning resume
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{benefit}</span>
                  </div>
                ))}
              </div>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <p className="text-sm font-semibold text-foreground mb-2">
                  Free 14-Day Trial
                </p>
                <p className="text-sm text-foreground/60">
                  Get access to all premium features at no cost for 14 days. Cancel anytime.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
