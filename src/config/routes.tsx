import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        lazy: () => import('../views/index'),
        children: [{
            path: "/dashboard",
            lazy: () => import('../views/dashboard')
        }, {
            path: "/add-product",
            lazy: () => import('../components/addProduct')
        }
        ],
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