const Campaign = ({ name, description, status }: Campaign) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-blue-950">
      <div className="w-full max-w-2xl p-8 rounded-xl shadow-lg bg-gray-800/90 flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-center text-blue-300 mb-2">
          Campaign and Task Management
        </h1>
        <div className="mt-8">
          <h2 className="text-2xl text-center text-blue-200 mb-4">{name}</h2>
          <p className="text-gray-300 mb-2">{description}</p>
          <p className="text-gray-400">Status: {status}</p>
        </div>
        <h2 className="font-bold text-blue-200 mt-12">Campaign Tasks</h2>
      </div>
    </div>
  )
}

export default Campaign
