import Logo from './Logo'
import Navbar from './Navbar'
import Profile from './Profile'
import Search from './Search'
import Auth from './Auth'
import { useDispatch } from 'react-redux'
import { useAuth } from '../hooks/useAuth'
import { removeUser } from '../store/slices/userSlice'

const Header = () => {
    const dispatch = useDispatch()
    const { isAuth, email } = useAuth()
    return (
        <>
            <div className="flex justify-between">
                <Logo />
                <Search />

                <div>
                    {isAuth ? (
                        <div>
                            <button
                                className="text-red"
                                onClick={() => dispatch(removeUser())}
                            >
                                Log out from {email}
                            </button>
                        </div>
                    ) : (
                        <Auth />
                    )}
                    <Navbar />
                </div>
            </div>
        </>
    )
}

export default Header
