import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="py-4 px-6">
            <ul className="hidden lg:flex justify-center gap-x-4 items-center text-black/50">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/new'}>New</NavLink>
                <NavLink to={'/popular'}>Popular</NavLink>
                <NavLink to={'/trending'}>Trending</NavLink>
                <NavLink to={'/categories'}>Contact</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
