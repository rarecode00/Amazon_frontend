import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        lazy: () => import('../views/dashboard')
    },
    {
        path: "/login",
        lazy: () => import('../views/login')
    },
    {
        path: "/signup",
        lazy: () => import('../views/signup')
    },
])

export default router