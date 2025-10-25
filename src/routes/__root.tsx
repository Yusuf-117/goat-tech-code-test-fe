import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Navbar from '../components/layout/Navbar'

const RootLayout = () => (
  <div className="w-screen items-center text-center">
    <Navbar />
    <Outlet />
    {/* Uncomment this to enable the router devtools */}
    {/* <TanStackRouterDevtools /> */}
  </div>
)

export const Route = createRootRoute({ component: RootLayout })
