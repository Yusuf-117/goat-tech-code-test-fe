import { useState, useEffect } from 'react'
import { api } from '../../lib/api'
import { getUsers } from '../../lib/userCache'

const CampaignTaskForm = ({
  campaignId,
  editing,
  onSaved,
}: {
  campaignId: number
  editing: Task | null
  onSaved: () => void
}) => {

  const [form, setForm] = useState<Partial<Task>>({
    title: '',
    description: '',
    priority: 'medium',
    status: 'todo',
    due_date: '',
    assigned_to_id: null,
  })
  const [saving, setSaving] = useState(false)
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    getUsers().then(setUsers)

    if (editing) {
      setForm({
        title: editing.title || '',
        description: editing.description || '',
        priority: editing.priority || 'medium',
        status: editing.status || 'todo',
        due_date: editing.due_date ? editing.due_date.slice(0, 10) : '',
        assigned_to_id: editing.assigned_to_id || null,
      })
    } else {
      setForm({
        title: '',
        description: '',
        priority: 'medium',
        status: 'todo',
        due_date: '',
        assigned_to_id: null,
      })
    }
  }, [editing])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)

    const currentUser = localStorage.getItem('currentUser')

    const payload = {
      title: form.title,
      description: form.description || undefined,
      campaign_id: campaignId,
      priority: form.priority,
      status: form.status,
      due_date: form.due_date || undefined,
      assigned_to_id: form.assigned_to_id || null,
      ...(editing ? {} : { created_by_id: Number(currentUser) }),
    }

    try {
      if (editing) {
        await api.task(editing.id, payload, 'PATCH')
      } else {
        await api.campaignTasks(campaignId, payload)
      }
      onSaved()
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-blue-200">Title</label>
        <input
          className="w-full rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
          maxLength={200}
          placeholder="Task title..."
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-blue-200">Description</label>
        <textarea
          className="w-full rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={3}
          value={form.description ?? ''}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Optional description..."
        />
      </div>

      <div className="flex gap-3">
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-sm font-medium text-blue-200">Priority</label>
          <select
            className="rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 text-sm text-gray-100 focus:ring-2 focus:ring-blue-400"
            value={form.priority}
            onChange={(e) =>
              setForm({ ...form, priority: e.target.value as Task['priority'] })
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="flex-1 flex flex-col gap-1">
          <label className="text-sm font-medium text-blue-200">Status</label>
          <select
            className="rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 text-sm text-gray-100 focus:ring-2 focus:ring-blue-400"
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value as Task['status'] })
            }
          >
            <option value="todo">To Do</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div>

      {/* Row: due_date + assigned_to_id */}
      <div className="flex gap-3">
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-sm font-medium text-blue-200">Due Date</label>
          <input
            type="date"
            className="rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 text-sm text-gray-100 focus:ring-2 focus:ring-blue-400"
            value={form.due_date ?? ''}
            onChange={(e) => setForm({ ...form, due_date: e.target.value })}
          />
        </div>

        <div className="flex-1 flex flex-col gap-1">
          <label className="text-sm font-medium text-blue-200">Assigned To (User ID)</label>
          <select
            className="rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 text-sm text-gray-100 focus:ring-2 focus:ring-blue-400"
            value={form.assigned_to_id ?? ''}
            onChange={(e) =>
              setForm({
                ...form,
                assigned_to_id: e.target.value ? Number(e.target.value) : null,
              })
            }
          >
            <option value="">Unassigned</option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-2 mt-2">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 disabled:opacity-60"
        >
          {saving ? 'Saving...' : editing ? 'Save Changes' : 'Create Task'}
        </button>
      </div>
    </form>
  )
}

export default CampaignTaskForm
