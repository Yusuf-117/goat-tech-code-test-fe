import { createRootRoute, Outlet, redirect } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Navbar from '../components/layout/Navbar'

export const Route = createRootRoute({
  // loader runs for *every* child route
  loader: async ({ location }) => {
    const user = localStorage.getItem('currentUser')
    const isLoginPage = location.pathname === '/login'

    if (!user && !isLoginPage) {
      throw redirect({ to: '/login' })
    }

    if (user && isLoginPage) {
      throw redirect({ to: '/' })
    }

    return {}
  },
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="w-screen items-center text-center">
    <Navbar />
    <Outlet />
    {/* Uncomment this to enable the router devtools */}
    {/* <TanStackRouterDevtools /> */}
  </div>
  )
}
