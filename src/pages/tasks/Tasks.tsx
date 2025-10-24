import { useEffect, useState } from 'react'
import { api } from '../../lib/api'
import TaskList from '../../components/tasks/TaskList'
import CampaignTaskForm from '../campaigns/CampaignTaskForm'
import { useTaskActions } from '../../hooks/useTaskActions'

const Tasks = () => {
  const [tasks, setTasks] = useState<any[]>([])
  const [editing, setEditing] = useState<any | null>(null)
  const [isModalOpen, setModalOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const { handleTaskStatusUpdate, handleTaskDelete } = useTaskActions(setTasks)

  async function loadAllTasks() {
    const resp = await api.campaigns()
    const campaigns = resp.campaigns || []

    // Fetch each campaign’s full data (to get its tasks)
    const results = await Promise.all(
      campaigns.map(async (c: any) => {
        const full = await api.campaigns(c.id)
        return (full.campaign.tasks || []).map((t: any) => ({
          ...t,
          campaign_name: full.name,
          campaign_id: full.id,
        }))
      })
    )

    setTasks(results.flat())
  }

  useEffect(() => {
    if (!loaded) {
      loadAllTasks()
      setLoaded(true)
    }
  }, [loaded])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-950 p-8 text-gray-200">
      <div className="max-w-4xl mx-auto bg-gray-800/80 rounded-xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-blue-300">All Tasks</h1>
        </div>

        <TaskList
          tasks={tasks}
          onEdit={(task) => {
            setEditing(task)
            setModalOpen(true)
          }}
          onStatusUpdate={handleTaskStatusUpdate}
          onDelete={handleTaskDelete}
        />
      </div>

      {isModalOpen && editing && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md shadow-lg relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <h3 className="text-lg font-semibold text-blue-200 mb-4">Edit Task</h3>
            <CampaignTaskForm
              campaignId={editing.campaign_id}
              editing={editing}
              onSaved={() => {
                setModalOpen(false)
                setEditing(null)
                loadAllTasks()
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Tasks
