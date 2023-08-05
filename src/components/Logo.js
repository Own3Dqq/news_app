import { Link } from "react-router-dom";

import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <>
      <Link to={"/"}>
        <img className="h-full w-full " src={logo} alt="Logo" />
      </Link>
    </>
  );
};

export default Logo;
