import TaskItem from './TaskItem'

const TaskList = ({
  tasks,
  onEdit,
  onStatusUpdate,
  onDelete,
}: {
  tasks: any[]
  onEdit: (task: any) => void
  onStatusUpdate: (id: number) => void
  onDelete: (id: number) => void
}) => {
  if (!tasks?.length) return <p className="text-gray-400">No tasks yet.</p>

  return (
    <div className="rounded bg-gray-700/50 p-3 space-y-2">
      {tasks.map((t) => (
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

export default TaskList
