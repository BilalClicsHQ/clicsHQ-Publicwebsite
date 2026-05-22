import type { Metadata } from 'next'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'
import { ChatView } from '@/components/app/ai/ChatView'
import { AgentsView } from '@/components/app/ai/AgentsView'

export const metadata: Metadata = { title: 'Clics AI' }

export default function ClicsAIPage() {
  return (
    <Tabs defaultValue="chat">
      <TabsList>
        <TabsTrigger value="chat">Chat</TabsTrigger>
        <TabsTrigger value="agents">AI Agents</TabsTrigger>
      </TabsList>

      <TabsContent value="chat">
        <ChatView />
      </TabsContent>
      <TabsContent value="agents">
        <AgentsView />
      </TabsContent>
    </Tabs>
  )
}
