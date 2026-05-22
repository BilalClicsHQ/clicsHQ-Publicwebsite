import type { Metadata } from 'next'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'
import { SubscriptionTab } from '@/components/app/billing/SubscriptionTab'
import { InvoicesTab } from '@/components/app/billing/InvoicesTab'

export const metadata: Metadata = { title: 'Billing' }

export default function BillingPage() {
  return (
    <Tabs defaultValue="subscription">
      <TabsList>
        <TabsTrigger value="subscription">Subscription</TabsTrigger>
        <TabsTrigger value="invoices">Invoices</TabsTrigger>
      </TabsList>

      <TabsContent value="subscription"><SubscriptionTab /></TabsContent>
      <TabsContent value="invoices"><InvoicesTab /></TabsContent>
    </Tabs>
  )
}
