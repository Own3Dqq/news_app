import { useDispatch } from 'react-redux'
import React from 'react'
import { Link } from 'react-router-dom'

const Auth = () => {
    return (
        <div className="flex justify-end mb-6 gap-x-2">
            <Link to={'/login'} className="py-2 px-5">
                Log In
            </Link>
            <Link
                to={'/sign'}
                className="py-2 px-4 bg-red-500 text-white rounded-sm"
            >
                Sign Up
            </Link>
        </div>
    )
}

export default Auth
