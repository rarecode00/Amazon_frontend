import {createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        lazy: () => import('../views/dashboard')
    },
    {
        path:"/login",
        lazy: () => import('../views/login')
    }
])

export default router