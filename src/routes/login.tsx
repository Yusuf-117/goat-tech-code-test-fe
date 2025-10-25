import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { getUsers } from '../lib/userCache'

const LoginPage = () => {
  const [users, setUsers] = useState<User[]>([])
  const [selected, setSelected] = useState('')

  useEffect(() => {
    getUsers().then(setUsers)
  }, [])

  const handleLogin = () => {
    if (!selected) return
    const user = users.find(u => u.id === Number(selected))
    localStorage.setItem('currentUser', selected)
    localStorage.setItem('currentUserName', user?.name || '')
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-950">
      <div className="bg-gray-800 p-6 rounded-xl w-full max-w-sm shadow-lg text-center">
        <h2 className="text-xl font-bold text-blue-300 mb-4">Login</h2>

        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 text-gray-100 mb-4"
        >
          <option value="">Select user...</option>
          {users.map(u => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>

        <button
          onClick={handleLogin}
          className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
        >
          Sign In
        </button>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/login')({
  component: LoginPage,
})
