import { useState } from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import Profile from './Profile'
import Search from './Search'
import Login from './Login'

const Header = () => {
    const [loggin, setLoggin] = useState(false)

    return (
        <>
            <div className="flex justify-between">
                <Logo />
                <Search />
                <div>
                    {loggin ? <Profile /> : <Login />}
                    <Navbar />
                </div>

                {/* <div className="flex justify-end">
                    {loggin ? (
                        <Profile />
                    ) : (
                        <div className="flex justify-between gap-3">
                            <button
                                className="
                                py-2 
                                px-8 
                                font-semibold
                                rounded-sm 
                                hover:border-red-500 
                                transition-all 
                                duration-300"
                            >
                                Log In
                            </button>
                            <button
                                className="
                                bg-red-500 
                                text-white 
                                font-semibold 
                                rounded-sm 
                                py-2 
                                px-8
                                border-2
                                border-transparent
                                hover:text-red-500
                                hover:border-red-500
                                hover:bg-white
                                transition-all
                                duration-300
                                "
                            >
                                Sign Up
                            </button>
                        </div>
                    )}
                </div>
                <div className="flex justify-between py-4">
                    <Logo />
                    <Navbar />
                </div> */}
            </div>
        </>
    )
}

export default Header
