import { Link } from '@tanstack/react-router'

const Navbar = () => {
  const user = localStorage.getItem('currentUser')
  const name = localStorage.getItem('currentUserName')

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentUserName')
    window.location.href = '/login'
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-gray-200 px-6 py-3 flex justify-between items-center shadow-md z-50">
      {/* Left side */}
      <div className="flex items-center gap-6">
        <Link to="/"><h1 className="text-blue-300 font-bold text-lg hover:text-blue-400">Goat Agency</h1></Link>
        <Link to="/campaigns" className="hover:text-blue-300">Campaigns</Link>
        <Link to="/tasks" className="hover:text-blue-300">Tasks</Link>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4 text-sm text-gray-400">
        {user ? (
          <>
            <span>
              Logged in as <span className="text-blue-300">{name || `User #${user}`}</span>
            </span>
            <button
              onClick={handleLogout}
              className="text-red-400 hover:text-red-300 font-medium"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="text-blue-300 hover:underline">
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
