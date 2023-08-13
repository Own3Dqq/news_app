import { useState } from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import Profile from './Profile'
import Search from './Search'
import Login from './Login'

const Header = () => {
    const [loggin] = useState(false)

    return (
        <>
            <div className="flex justify-between">
                <Logo />
                <Search />
                <div>
                    {loggin ? <Profile /> : <Login />}
                    <Navbar />
                </div>
            </div>
        </>
    )
}

export default Header
