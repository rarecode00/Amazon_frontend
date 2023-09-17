import {createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        lazy: () => import('../views/dashboard')
    }
])

export default router