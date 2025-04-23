// /app/page.tsx — main entry point for CreatorHub

'use client'

import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import BioLink from '@/components/LinkInBio'
import BrandOutreach from '@/components/BrandOutreach'
import AnalyticsDashboard from '@/components/AnalyticsDashboard'
import CreatorHubApp from '@/components/CreatorCalendar'
import PartnershipTracker from '@/components/PartnershipTracker'

export default function Home() {
  const [activeTab, setActiveTab] = useState('calendar')

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🎯 CreatorHub</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="flex gap-2 mb-4">
          <TabsTrigger value="calendar">📅 Calendar</TabsTrigger>
          <TabsTrigger value="analytics">📊 Analytics</TabsTrigger>
          <TabsTrigger value="link">🔗 Bio Link</TabsTrigger>
          <TabsTrigger value="outreach">🤝 Brand Outreach</TabsTrigger>
          <TabsTrigger value="partnerships">📦 Partnerships</TabsTrigger>
        </TabsList>

        <TabsContent value="calendar">
          <CreatorHubApp />
        </TabsContent>

        <TabsContent value="analytics">
          <AnalyticsDashboard posts={[]} />
        </TabsContent>

        <TabsContent value="link">
          <BioLink />
        </TabsContent>

        <TabsContent value="outreach">
          <BrandOutreach />
        </TabsContent>

        <TabsContent value="partnerships">
          <PartnershipTracker />
        </TabsContent>
      </Tabs>
    </main>
  )
}
