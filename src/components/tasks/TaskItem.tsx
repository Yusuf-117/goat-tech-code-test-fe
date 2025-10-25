import { api } from '../../lib/api'

const TaskItem = ({
    task,
    onEdit,
    onStatusUpdate,
    onDelete,
}: {
    task: any
    onEdit: (task: any) => void
    onStatusUpdate: (id: number) => void
    onDelete: (id: number) => void
}) => {
    return (
        <div className="flex justify-between items-center bg-gray-800 p-2 rounded transition-all">
            <div className="text-left">
                <div className="text-blue-200 font-medium">{task.title}</div>
                <div className="text-gray-400 text-sm">
                    {task.status === 'done' ? (
                        <span className="text-green-400">✓ Done</span>
                    ) : (
                        <span className="text-yellow-400 capitalize">{task.status}</span>
                    )}{' '}
                    • {task.priority}
                    {task.campaign_name && (
                        <>
                            {' '}• <span className="text-gray-500">{task.campaign_name}</span>
                        </>
                    )}
                </div>
                {(task.assigned_to_name && task.status === "done") && (
                <div className="text-gray-400 text-sm">
                    Completed by {task.assigned_to_name}
                </div>
                )}
            </div>

            <div className="flex gap-3 items-center">
                <button
                    onClick={() => onEdit(task)}
                    className="text-sm text-blue-300 hover:underline"
                >
                    Edit
                </button>

                {task.status !== 'done' && (
                    <button
                        onClick={async () => {
                            await api.task(task.id, { status: 'done', assigned_to_id: Number(localStorage.getItem('currentUser')) }, 'PATCH')
                            onStatusUpdate(task.id)
                        }}
                        className="text-sm text-green-300 hover:underline"
                    >
                        Mark Done
                    </button>
                )}

                <button
                    onClick={async () => {
                        await api.task(task.id, undefined, 'DELETE')
                        onDelete(task.id)
                    }}
                    className="text-sm text-red-400 hover:underline"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TaskItem
