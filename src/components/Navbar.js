import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul className="hidden lg:flex justify-center gap-x-4 items-center text-black/50">
                <NavLink className="hover:text-red-500" to={'/'}>
                    Home
                </NavLink>
                <NavLink className="hover:text-red-500" to={'/new'}>
                    New
                </NavLink>
                <NavLink className="hover:text-red-500" to={'/popular'}>
                    Popular
                </NavLink>
                <NavLink className="hover:text-red-500" k to={'/trending'}>
                    Trending
                </NavLink>
                <NavLink className="hover:text-red-500" to={'/contact'}>
                    Contact
                </NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
