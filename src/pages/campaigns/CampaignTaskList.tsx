import { api } from '../../lib/api'

const CampaignTaskList = ({
  tasks,
  onEdit,
  onStatusUpdate,
}: {
  tasks: any[]
  onEdit: (task: any) => void
  onStatusUpdate: (id: number) => void
}) => {
  if (!tasks?.length) return <p className="text-gray-400">No tasks yet.</p>

  return (
    <div className="rounded bg-gray-700/50 p-3 space-y-2">
      {tasks.map((t) => (
        <div
          key={t.id}
          className="flex justify-between items-center bg-gray-800 p-2 rounded transition-all"
        >
          <div className="text-left">
            <div className="text-blue-200 font-medium">{t.title}</div>
            <div className="text-gray-400 text-sm">
              {t.status === 'done' ? (
                <span className="text-green-400">✓ Done</span>
              ) : (
                <span className="text-yellow-400 capitalize">{t.status}</span>
              )}{' '}
              • {t.priority}
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <button
              onClick={() => onEdit(t)}
              className="text-sm text-blue-300 hover:underline"
            >
              Edit
            </button>

            {t.status !== 'done' && (
              <button
                onClick={async () => {
                  await api.task(t.id, { status: 'done' }, 'PATCH')
                  onStatusUpdate(t.id)
                }}
                className="text-sm text-green-300 hover:underline"
              >
                Mark Done
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CampaignTaskList
