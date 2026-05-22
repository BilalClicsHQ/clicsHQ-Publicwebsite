import type { Metadata } from 'next'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'
import { MembersView } from '@/components/app/teams/MembersView'
import { TeamsView } from '@/components/app/teams/TeamsView'

export const metadata: Metadata = { title: 'Teams' }

export default function TeamsPage() {
  return (
    <Tabs defaultValue="member">
      <TabsList>
        <TabsTrigger value="member">Member</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>

      <TabsContent value="member"><MembersView /></TabsContent>
      <TabsContent value="team"><TeamsView /></TabsContent>
    </Tabs>
  )
}
