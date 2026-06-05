'use client'

import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Menu } from 'lucide-react'

interface DashboardHeaderProps {
  onMenuClick: () => void
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="h-16 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 flex items-center justify-between px-6">
      <button
        onClick={onMenuClick}
        className="md:hidden p-2 hover:bg-muted rounded-lg transition"
      >
        <Menu size={20} />
      </button>

      <div className="flex-1" />

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button size="sm" variant="outline">
          Upgrade
        </Button>
      </div>
    </header>
  )
}
