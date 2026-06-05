'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold">
              R
            </div>
            <span className="hidden sm:inline">ResumePro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-foreground/70 hover:text-foreground transition">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-foreground/70 hover:text-foreground transition">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-foreground/70 hover:text-foreground transition">
              Testimonials
            </Link>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden sm:flex gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">
                  Get Started
                </Button>
              </Link>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            <Link href="#features" className="block text-sm font-medium text-foreground/70 hover:text-foreground transition py-2">
              Features
            </Link>
            <Link href="#pricing" className="block text-sm font-medium text-foreground/70 hover:text-foreground transition py-2">
              Pricing
            </Link>
            <Link href="#testimonials" className="block text-sm font-medium text-foreground/70 hover:text-foreground transition py-2">
              Testimonials
            </Link>
            <div className="flex flex-col gap-2 pt-3 border-t border-border">
              <Link href="/login">
                <Button variant="outline" size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
