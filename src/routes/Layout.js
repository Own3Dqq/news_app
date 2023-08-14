import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout = () => {
    return (
        <>
            <div className="container mx-auto w-full h-full lg:w-10/12 text-black">
                <div className="py-6 border-b-2">
                    <Header />
                </div>
                <div className="py-5">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout
