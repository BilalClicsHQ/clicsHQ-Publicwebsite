import type { Metadata } from 'next'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'
import { ProfileTab } from '@/components/app/settings/ProfileTab'
import { PreferencesTab } from '@/components/app/settings/PreferencesTab'
import { NotificationsTab } from '@/components/app/settings/NotificationsTab'
import { SecurityTab } from '@/components/app/settings/SecurityTab'

export const metadata: Metadata = { title: 'Settings' }

export default function SettingsPage() {
  return (
    <Tabs defaultValue="profile">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="preferences">Preferences</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>

      <TabsContent value="profile"><ProfileTab /></TabsContent>
      <TabsContent value="preferences"><PreferencesTab /></TabsContent>
      <TabsContent value="notifications"><NotificationsTab /></TabsContent>
      <TabsContent value="security"><SecurityTab /></TabsContent>
    </Tabs>
  )
}
