import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.svg'

const Logo = () => {
    return (
        <>
            <Link className="flex self-end w-[60px] h-[60px]" to={'/'}>
                <img className="h-full w-full " src={logo} alt="Logo" />
            </Link>
        </>
    )
}

export default Logo
