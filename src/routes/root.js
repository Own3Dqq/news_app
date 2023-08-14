// Import BrowserRouter
import { createBrowserRouter } from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home/Home'
import NewPosts from '../pages/NewPosts/NewPosts'
import Popular from '../pages/Popular/Popular'
import Trending from '../pages/Trending/Trending'
import Contact from '../pages/Contact/Contact'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import LoginPage from '../pages/Auth/LoginPage'
import RegistrationPage from '../pages/Auth/RegistrationPage'
import ArticlePage from '../pages/Article/ArticlePage'

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
            //Article
            {
                path: '/article/:id',
                element: <ArticlePage />,
            },
            //About
            {
                path: '/new',
                element: <NewPosts />,
            },
            /* Popular */
            {
                path: '/popular',
                element: <Popular />,
            },
            /* Trendin */
            {
                path: '/trending',
                element: <Trending />,
            },
            /* Contact */
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/sign',
                element: <RegistrationPage />,
            },
        ],
    },
])

export default router
