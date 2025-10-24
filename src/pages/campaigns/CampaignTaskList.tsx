import TaskList from '../../components/tasks/TaskList'

const CampaignTaskList = ({
  tasks,
  onEdit,
  onStatusUpdate,
  onDelete,
}: {
  tasks: Task[]
  onEdit: (task: Task) => void
  onStatusUpdate: (id: number) => void
  onDelete: (id: number) => void
}) => {
  return (
    <TaskList
      tasks={tasks}
      onEdit={onEdit}
      onStatusUpdate={onStatusUpdate}
      onDelete={onDelete}
    />
  )
}

export default CampaignTaskList
