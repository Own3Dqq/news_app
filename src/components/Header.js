import Logo from './Logo'
import Navbar from './Navbar'
import Profile from './Profile'
import Search from './Search'
import Auth from './Auth'

import { useAuth } from '../hooks/useAuth'

const Header = () => {
    const { isAuth, email } = useAuth()
    return (
        <>
            <div className="flex justify-between">
                <Logo />
                <Search />
                <div>
                    {isAuth ? <Profile email={email} /> : <Auth />}
                    <Navbar />
                </div>
            </div>
        </>
    )
}

export default Header
