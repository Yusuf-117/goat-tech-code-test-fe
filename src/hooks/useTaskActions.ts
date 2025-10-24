import { useCallback } from 'react'

export function useTaskActions(setTasks: React.Dispatch<React.SetStateAction<any[]>>) {
  const handleTaskStatusUpdate = useCallback((id: number) => {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, status: 'done' } : t)))
  }, [setTasks])

  const handleTaskDelete = useCallback((id: number) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }, [setTasks])

  return { handleTaskStatusUpdate, handleTaskDelete }
}
