
import logo from "../assets/Netflix_Logo_PMS.png";
import d_arrow from "../assets/down.png";
import Login from "./Login";
import bell from "../assets/bell.png";

const Navbar = () => {

  return (
    <div className="flex p-2 items-center ">
      {/* Logo */}
      <div>
        <img className="h-20 ml-30" src={logo} alt="Logo" />
      </div>

      {/* Right Section (Language & Sign In) */}
      <div className="flex items-center ml-200 space-x-4 mr-35">
        {/* Language Selector */}
        <div className="border border-amber-50 flex items-center justify-center h-8 w-[120px] rounded">
          <p className="text-md text-white">English</p>
          <img className="w-3 h-3 ml-2" src={d_arrow} alt="Dropdown Arrow" />
        </div>

        {/* Sign In Button */}
        <div className="flex items-center">
          <img className="w-7 h-7 cursor-pointer" src={bell} alt="" />

          <p className="text-white ml-4 text-base  cursor-pointer">Account</p>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
