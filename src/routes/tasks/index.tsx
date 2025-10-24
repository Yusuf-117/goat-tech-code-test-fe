import { createFileRoute } from '@tanstack/react-router'
import Tasks from '../../pages/tasks/Tasks'

export const Route = createFileRoute('/tasks/')({
  component: Tasks,
})
