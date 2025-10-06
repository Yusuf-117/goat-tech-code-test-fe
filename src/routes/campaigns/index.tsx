import { createFileRoute } from '@tanstack/react-router'
import Campaigns from '../../pages/campaigns/Campaigns'

export const Route = createFileRoute('/campaigns/')({
  loader: async () => {
    return fetch('http://localhost:3000/api/v1/campaigns').then(res => res.json())
  },
  component: CampaignsPage,
})

function CampaignsPage() {
  const { campaigns } = Route.useLoaderData()

  return <Campaigns campaigns={campaigns} />
}