import { useEffect, useState } from 'react'
import { api } from '../../lib/api'
import CampaignTaskList from './CampaignTaskList'
import CampaignTaskForm from './CampaignTaskForm'
import { useTaskActions } from '../../hooks/useTaskActions'


const Campaign = ({ id, name, description, status }: Campaign) => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [editing, setEditing] = useState<Task | null>(null)
  const [isModalOpen, setModalOpen] = useState(false)

  async function loadTasks() {
    const data = await api.campaignTasks(id)
    const tasksWithMeta = (data.tasks || []).map((t: Task) => ({
      ...t,
      assigned_to_name: t.assigned_to?.name || '',
    }))
    setTasks(tasksWithMeta)
  }
  

  

  const { handleTaskStatusUpdate, handleTaskDelete } = useTaskActions(setTasks)
  

  useEffect(() => {
    if (id) loadTasks()
  }, [id])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-blue-950">
      <div className="w-full max-w-2xl p-8 rounded-xl shadow-lg bg-gray-800/90 flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-center text-blue-300 mb-2">
          Campaign and Task Management
        </h1>
        <div className="mt-8">
          <h2 className="text-2xl text-center text-blue-200 mb-4">{name}</h2>
          <p className="text-gray-300 mb-2">{description}</p>
          <p className="text-gray-400">Status: {status}</p>
        </div>
        <section>
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-blue-200">Campaign Tasks</h2>
            <button
              className="btn btn-sm"
              onClick={() => {
                setEditing(null)
                setModalOpen(true)
              }}
            >+ New Task
            </button>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-blue-200 mb-3">Campaign Tasks</h2>
          <CampaignTaskList
            tasks={tasks}
            onEdit={(task: Task) => {
              setEditing(task)
              setModalOpen(true)
            }}
            onStatusUpdate={handleTaskStatusUpdate}
            onDelete={handleTaskDelete}
          />
        </section>

      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md shadow-lg relative">
            <button onClick={() => setModalOpen(false)} className="absolute top-2 right-3 text-gray-400 hover:text-gray-200"><svg
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
            <h3 className="text-lg font-semibold text-blue-200 mb-4">{editing ? 'Edit Task' : 'New Task'}</h3>
            <CampaignTaskForm
              campaignId={id}
              editing={editing}
              onSaved={() => {
                setModalOpen(false)
                setEditing(null)
                loadTasks()
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Campaign
