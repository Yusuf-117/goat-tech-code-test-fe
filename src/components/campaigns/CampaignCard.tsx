import { Link } from '@tanstack/react-router'

const CampaignCard = ({id, name, description, status}: Campaign) => {
  return (
    <Link
      to={`/campaigns/${id}`}
      className="border p-4 rounded-sm border-gray-500 hover:shadow-lg hover:bg-gray-700 transition-all duration-200"
    >
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Status: {status}</p>
    </Link>
  )
}

export default CampaignCard
