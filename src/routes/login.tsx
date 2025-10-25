import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { api } from '../lib/api'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

function LoginPage() {
  const navigate = useNavigate()
  const [users, setUsers] = useState<User[]>([])
  const [selected, setSelected] = useState<string>('')

  useEffect(() => {
    api.users().then((res) => setUsers(res.users)).catch(console.error)

  }, [])

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (!selected) return
    localStorage.setItem('currentUser', selected)
    navigate({ to: '/' }) // redirect home
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-950 text-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800/90 p-8 rounded-xl shadow-lg w-full max-w-sm space-y-4"
      >
        <h1 className="text-2xl font-bold text-blue-300 text-center">Login</h1>

        <div>
          <label className="text-sm block mb-1 text-blue-200">Select User</label>
          <select
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">-- Choose User --</option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={!selected}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white py-2 rounded-lg font-medium transition"
        >
          Log In
        </button>
      </form>
    </div>
  )
}
