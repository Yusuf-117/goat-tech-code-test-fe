import DashboardCard from '../components/dashboard/DashboardCard'

const Dashboard = () => {
  const links = [
    {
      label: 'Campaigns',
      description: 'View and manage campaigns and tasks related to them',
      to: '/campaigns',
      img_path: 'src/assets/dashboard-images/campaigns.png',
    },
    {
      label: 'Tasks',
      description: 'View and manage all tasks related to campaigns',
      to: '/tasks',
      img_path: 'src/assets/dashboard-images/tasks.png',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-blue-950">
      <div className="w-full max-w-2xl p-8 rounded-xl shadow-lg bg-gray-800/90 flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-center text-blue-300 mb-2">
          Campaign Management Dashboard
        </h1>
        <p className="text-center text-gray-300 mb-6">
          Manage your campaigns and tasks efficiently from one place.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((link) => (
            <DashboardCard
              key={link.to}
              label={link.label}
              description={link.description}
              to={link.to}
              img_path={link.img_path}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
