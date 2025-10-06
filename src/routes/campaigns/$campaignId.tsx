import { createFileRoute } from '@tanstack/react-router'
import Campaign from '../../pages/campaigns/Campaign'

export const Route = createFileRoute('/campaigns/$campaignId')({
  loader: async ({ params: { campaignId } }) => {
    return fetch(`http://localhost:3000/api/v1/campaigns/${campaignId}`).then(res => res.json())
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