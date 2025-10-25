import { Link } from '@tanstack/react-router'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 border-b border-gray-700 px-6 py-3 flex items-center justify-between z-50 mb-10">
      <h1 className="text-blue-300 font-bold text-lg">Goat Agency</h1>
      <div className="flex gap-6 text-gray-300 text-sm">
        <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
        <Link to="/campaigns" className="hover:text-blue-400 transition-colors">Campaigns</Link>
        <Link to="/tasks" className="hover:text-blue-400 transition-colors">Tasks</Link>
      </div>
    </nav>
  )
}
