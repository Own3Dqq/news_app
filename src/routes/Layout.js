import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { useUser } from '../store/store'

const Layout = () => {
    console.log(useUser())
    const { auth } = useUser((state) => state.user)
    console.log(auth)

    return (
        <>
            <div className="container mx-auto w-full h-full lg:w-10/12 text-black">
                <div className="py-6 border-b-2">
                    <Header auth={auth} />
                </div>
                <div className="py-5">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout
