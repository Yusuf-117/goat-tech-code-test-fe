import { Link } from '@tanstack/react-router'

const CampaignCard = ({ id, name, description, status }: Campaign) => {
  const statusColors: Record<string, string> = {
    active: 'text-green-400',
    completed: 'text-blue-400',
    archived: 'text-gray-400',
  }

  return (
    <Link
      to="/campaigns/$campaignId"
      params={{ campaignId: String(id) }}
      className="block bg-gray-800/80 border border-gray-600 rounded-xl p-5 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-200"
    >
      <h2 className="text-xl font-semibold text-blue-200 mb-1">{name}</h2>
      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>
      <p className={`text-sm font-medium ${statusColors[status] || 'text-gray-300'}`}>
        Status: {status.replace('_', ' ')}
      </p>
    </Link>
  )
}

export default CampaignCard
