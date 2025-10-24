import { createFileRoute } from '@tanstack/react-router'
import Campaigns from '../../pages/campaigns/Campaigns'
import { api } from '../../lib/api'

export const Route = createFileRoute('/campaigns/')({
  loader: async () => {
    return await api.campaigns()
  },
  component: CampaignsPage,
})

function CampaignsPage() {
  const { campaigns } = Route.useLoaderData()

  return <Campaigns campaigns={campaigns} />
}