import { useMemo, useState } from 'react'
import TaskItem from './TaskItem'

type PriorityKey = 'HML' | 'MHL' | 'LHM'
type StatusKey = 'TID' | 'ITD' | 'DTI'
type DueKey = 'asc' | 'desc'

const priorityOrders: Record<PriorityKey, Task['priority'][]> = {
  HML: ['high', 'medium', 'low'],
  MHL: ['medium', 'high', 'low'],
  LHM: ['low', 'high', 'medium'],
}

const statusOrders: Record<StatusKey, Task['status'][]> = {
  TID: ['todo', 'in_progress', 'done'],
  ITD: ['in_progress', 'todo', 'done'],
  DTI: ['done', 'todo', 'in_progress'],
}

export default function TaskList({
  tasks,
  onEdit,
  onStatusUpdate,
  onDelete,
}: {
  tasks: Task[]
  onEdit: (task: Task) => void
  onStatusUpdate: (id: number) => void
  onDelete: (id: number) => void
}) {
  const [priorityKey, setPriorityKey] = useState<PriorityKey>('HML')
  const [dueKey, setDueKey] = useState<DueKey>('asc')
  const [statusKey, setStatusKey] = useState<StatusKey>('TID')

  const sortedTasks = useMemo(() => {
    const copy: Task[] = [...tasks]
    const st = statusOrders[statusKey]
    const pr = priorityOrders[priorityKey]

    copy.sort((a, b) => {
      const sA = st.indexOf(a.status)
      const sB = st.indexOf(b.status)
      if (sA < sB) return -1
      if (sA > sB) return 1

      const pA = pr.indexOf(a.priority)
      const pB = pr.indexOf(b.priority)
      if (pA < pB) return -1
      if (pA > pB) return 1

      const aDate = a.due_date ? new Date(a.due_date).getTime() : Infinity
      const bDate = b.due_date ? new Date(b.due_date).getTime() : Infinity
      if (aDate < bDate) return dueKey === 'asc' ? -1 : 1
      if (aDate > bDate) return dueKey === 'asc' ? 1 : -1

      return a.id - b.id
    })

    return copy
  }, [tasks, priorityKey, dueKey, statusKey])

  if (!tasks?.length) return <p className="text-gray-400">No tasks yet.</p>

  return (
    <div className="rounded bg-gray-700/50 p-3 space-y-3">
      <div className="flex flex-wrap justify-end gap-2">
        <select
          value={priorityKey}
          onChange={(e) => setPriorityKey(e.target.value as PriorityKey)}
          className="bg-gray-800 text-gray-200 text-sm rounded px-2 py-1"
        >
          <option value="HML">High, Medium, Low</option>
          <option value="MHL">Medium, High, Low</option>
          <option value="LHM">Low, High, Medium</option>
        </select>

        <select
          value={statusKey}
          onChange={(e) => setStatusKey(e.target.value as StatusKey)}
          className="bg-gray-800 text-gray-200 text-sm rounded px-2 py-1"
        >
          <option value="TID">ToDo, InProgress, Done</option>
          <option value="ITD">InProgress, ToDo, Done</option>
          <option value="DTI">Done, ToDo, InProgress</option>
        </select>

        <select
          value={dueKey}
          onChange={(e) => setDueKey(e.target.value as DueKey)}
          className="bg-gray-800 text-gray-200 text-sm rounded px-2 py-1"
        >
          <option value="asc">Due Date (closest first)</option>
          <option value="desc">Due Date (furthest first)</option>
        </select>
      </div>

      {sortedTasks.map((t) => (
        <TaskItem
          key={t.id}
          task={t}
          onEdit={onEdit}
          onStatusUpdate={onStatusUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
