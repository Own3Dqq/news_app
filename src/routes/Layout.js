import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <div className="container mx-auto w-full h-full lg:w-10/12  py-6 text-black">
        <Header />
        <main className="my-5 ">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
