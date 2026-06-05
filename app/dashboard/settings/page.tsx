'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Bell, Lock, User, Mail } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="p-6 sm:p-8 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Settings
        </h1>
        <p className="text-foreground/60">
          Manage your account and preferences
        </p>
      </div>

      {/* Account Settings */}
      <Card className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
          <User className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Account Settings</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-foreground font-medium">
              First Name
            </Label>
            <Input
              id="firstName"
              defaultValue="John"
              className="bg-input border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-foreground font-medium">
              Last Name
            </Label>
            <Input
              id="lastName"
              defaultValue="Doe"
              className="bg-input border-border"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-medium">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            defaultValue="john@example.com"
            className="bg-input border-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="title" className="text-foreground font-medium">
            Professional Title
          </Label>
          <Input
            id="title"
            defaultValue="Senior Developer"
            className="bg-input border-border"
          />
        </div>

        <Button className="w-full md:w-auto">
          Save Changes
        </Button>
      </Card>

      {/* Security Settings */}
      <Card className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
          <Lock className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Security</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <p className="font-semibold text-foreground">Password</p>
              <p className="text-sm text-foreground/60">Last changed 2 months ago</p>
            </div>
            <Button variant="outline">Change</Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <p className="font-semibold text-foreground">Two-Factor Authentication</p>
              <p className="text-sm text-foreground/60">Not enabled</p>
            </div>
            <Button variant="outline">Enable</Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <p className="font-semibold text-foreground">Active Sessions</p>
              <p className="text-sm text-foreground/60">1 device active</p>
            </div>
            <Button variant="outline">Manage</Button>
          </div>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
          <Bell className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Notifications</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <p className="font-semibold text-foreground">Analysis Complete</p>
              <p className="text-sm text-foreground/60">Get notified when your analysis is ready</p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <p className="font-semibold text-foreground">Weekly Summary</p>
              <p className="text-sm text-foreground/60">Get a weekly summary of your analyses</p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <p className="font-semibold text-foreground">Product Updates</p>
              <p className="text-sm text-foreground/60">Learn about new features and improvements</p>
            </div>
            <input type="checkbox" className="w-5 h-5" />
          </div>
        </div>
      </Card>

      {/* Email Preferences */}
      <Card className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
          <Mail className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Email Preferences</h2>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-foreground/60 mb-4">
            You&apos;re subscribed to the following mailing lists
          </p>
          <div className="flex items-center justify-between">
            <span className="text-foreground">Product announcements</span>
            <Button variant="outline" size="sm">Unsubscribe</Button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-foreground">Tips and tutorials</span>
            <Button variant="outline" size="sm">Unsubscribe</Button>
          </div>
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="p-6 sm:p-8 border border-red-500/20 bg-red-500/5 space-y-6">
        <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">Danger Zone</h2>

        <div className="space-y-4">
          <div>
            <p className="font-semibold text-foreground mb-2">Delete Account</p>
            <p className="text-sm text-foreground/60 mb-4">
              Permanently delete your account and all associated data
            </p>
            <Button variant="destructive">Delete Account</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
