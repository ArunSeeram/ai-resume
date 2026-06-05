import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle2, Zap, TrendingUp, Brain, FileText, Award } from 'lucide-react'
import Link from 'next/link'
import { AnimatedHeading, Typewriter } from '@/components/animated-heading'
import { HeroPreview } from '@/components/hero-preview'
import { LiveDemoSection } from '@/components/live-demo-section'

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced algorithms analyze your resume against industry standards and job requirements',
    },
    {
      icon: Zap,
      title: 'Instant Feedback',
      description: 'Get immediate, actionable insights to improve your resume in seconds',
    },
    {
      icon: TrendingUp,
      title: 'ATS Optimization',
      description: 'Ensure your resume passes Applicant Tracking Systems with our optimization tools',
    },
    {
      icon: FileText,
      title: 'Multiple Formats',
      description: 'Upload and analyze resumes in PDF, DOCX, and TXT formats',
    },
    {
      icon: Award,
      title: 'Industry Benchmarks',
      description: 'Compare your resume against top performers in your field',
    },
    {
      icon: CheckCircle2,
      title: 'Detailed Reports',
      description: 'Comprehensive analysis with scores, recommendations, and improvement areas',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      content: 'ResumePro helped me restructure my resume and I landed an interview at my dream company within weeks!',
      image: 'SC',
    },
    {
      name: 'Marcus Johnson',
      role: 'Software Engineer',
      content: 'The ATS optimization feature was game-changing. My resume now ranks in the top 5% for matching job descriptions.',
      image: 'MJ',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Lead',
      content: 'The AI feedback was incredibly specific and helped me highlight my best achievements effectively.',
      image: 'ER',
    },
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹249',
      description: 'Perfect for trying out ResumePro',
      features: [
        '3 resume analyses per month',
        'Basic ATS optimization',
        'Standard feedback',
        'Email support',
      ],
    },
    {
      name: 'Professional',
      price: '₹499',
      description: 'Most popular for job seekers',
      features: [
        'Unlimited resume analyses',
        'Advanced ATS optimization',
        'Detailed AI feedback',
        'Job matching insights',
        'Priority support',
        'Monthly reports',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For teams and organizations',
      features: [
        'Unlimited analyses per user',
        'Team management',
        'Custom integrations',
        'Dedicated support',
        'Analytics dashboard',
        'White-label options',
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
              Land Your Dream Job with{' '}
              <AnimatedHeading animationType="gradient" className="inline-block">
                AI-Powered Resume Analysis
              </AnimatedHeading>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-8 slide-up-text">
              <Typewriter text="Get instant, AI-driven feedback on your resume. Optimize for ATS systems, highlight your achievements, and stand out to recruiters." speed={30} />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto h-12 text-base">
                  Get Started Free
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 text-base">
                  Learn More
                </Button>
              </Link>
            </div>
            <p className="text-sm text-foreground/50 mt-4">
              No credit card required • Start analyzing in seconds
            </p>
          </div>

          {/* Hero Preview - Resume Analysis Demo */}
          <div className="mt-16 relative">
            <div className="mx-auto max-w-4xl">
              <HeroPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <LiveDemoSection />

      {/* Features Section */}
      <section id="features" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 slide-up-text">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <AnimatedHeading animationType="glow">
                Powerful Features for Success
              </AnimatedHeading>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Everything you need to create a resume that gets noticed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 slide-up-text">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <AnimatedHeading animationType="shimmer">
                Loved by Job Seekers
              </AnimatedHeading>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Join thousands who have successfully landed their dream jobs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-foreground/70 italic">&quot;{testimonial.content}&quot;</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 slide-up-text">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <AnimatedHeading animationType="bounce">
                Simple, Transparent Pricing
              </AnimatedHeading>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Choose the perfect plan for your job search journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`p-8 flex flex-col ${
                  plan.highlighted
                    ? 'border-primary border-2 shadow-lg relative'
                    : 'border border-border/50'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-foreground/60 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-foreground/60">/month</span>}
                </div>
                <Button
                  className="w-full mb-8"
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
        <div className="mx-auto max-w-4xl text-center slide-up-text">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <AnimatedHeading animationType="float">
              Ready to Transform Your Resume?
            </AnimatedHeading>
          </h2>
          <p className="text-lg text-foreground/60 mb-8">
            Join thousands of successful job seekers. Start your free analysis today.
          </p>
          <Link href="/register">
            <Button size="lg" className="h-12 text-base">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 sm:px-6 lg:px-8 py-12 bg-muted/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-semibold text-foreground mb-4">Product</p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="#" className="hover:text-foreground transition">Features</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Pricing</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Security</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-4">Company</p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="#" className="hover:text-foreground transition">About</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Careers</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-4">Resources</p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="#" className="hover:text-foreground transition">Docs</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Support</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-4">Legal</p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="#" className="hover:text-foreground transition">Privacy</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Terms</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-foreground/60">
              © 2024 ResumePro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
