import { createFileRoute, redirect } from '@tanstack/react-router'
import Dashboard from '../pages/Dashboard'

export const Route = createFileRoute('/')({
  loader: async () => {
    const user = localStorage.getItem('currentUser')
    if (!user) throw redirect({ to: '/login' })
    return {}
  },
  component: Dashboard,
})
