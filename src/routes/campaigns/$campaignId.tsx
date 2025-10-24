import { createFileRoute } from '@tanstack/react-router'
import Campaign from '../../pages/campaigns/Campaign'
import { api } from '../../lib/api'

export const Route = createFileRoute('/campaigns/$campaignId')({
  loader: async ({ params: { campaignId } }) => {
    return api.campaigns(campaignId)
  },
  component: CampaignComponent,
})

function CampaignComponent() {
  const { campaign } = Route.useLoaderData()

  if (!campaign) {
    return <div>Campaign not found.</div>;
  }
  return <Campaign id={campaign.id} name={campaign.name} description={campaign.description} status={campaign.status} />
}