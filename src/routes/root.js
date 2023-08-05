// Import BrowserRouter
import { createBrowserRouter } from 'react-router-dom'

//
import Layout from './Layout'
import Home from '../pages/Home/Home'
import NewPosts from '../pages/NewPosts/NewPosts'
import Popular from '../pages/Popular/Popular'
import Trending from '../pages/Trending/Trending'
import Contact from '../pages/Contact/Contact'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

// Create React Router
const router = createBrowserRouter([
    //Home
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            //Home
            {
                path: '',
                element: <Home />,
            },
            //About
            {
                path: '/new',
                element: <NewPosts />,
            },
            {
                path: '/popular',
                element: <Popular />,
            },
            {
                path: '/trending',
                element: <Trending />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
])

export default router
