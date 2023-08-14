import { useState } from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import Profile from './Profile'
import Search from './Search'
import Auth from './Auth'

const Header = ({ auth }) => {
    return (
        <>
            <div className="flex justify-between">
                <Logo />
                <Search />
                <div>
                    {auth ? <Profile /> : <Auth />}
                    <Navbar />
                </div>
            </div>
        </>
    )
}

export default Header
