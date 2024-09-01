import { NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useState } from "react";

function Navbar() {
  const [menuVisible, setmenuVisible] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between py-5 font-normal">
        <div>
          <img src={assets.logo} className="w-36" />
        </div>

        <div>
          <ul className="flex sm:flex max-sm:hidden gap-5 text-md">
            <NavLink to={"/"} className="flex flex-col items-center gap-1">
              <p>Home</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>

            <NavLink to={"/about"} className="flex flex-col items-center gap-1">
              <p>About</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>

            <NavLink
              to={"/collection"}
              className="flex flex-col items-center gap-1"
            >
              <p>Collection</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>

            <NavLink
              to={"/products"}
              className="flex flex-col items-center gap-1"
            >
              <p>Products</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>

            <NavLink
              to={"/contact"}
              className="flex flex-col items-center gap-1"
            >
              <p>Contact</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          </ul>
        </div>

        <div className="flex gap-5 items-center">
          <NavLink
            to={"/collection"}
            className="flex flex-col items-center gap-1"
          >
            <img src={assets.search_icon} className="w-5" />
          </NavLink>

          <div className="group relative">
            <img src={assets.profile_icon} className="w-5" />

            {/* dropdown menu code  start here*/}

            <div className="group-hover:block hidden absolute dropdown-menu pt-4 right-0">
              <div className="flex flex-col gap-2 w-40 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>

            {/* dropdown menu code ends here */}
          </div>

          <NavLink
            to={"/cart"}
            className="flex flex-col items-center gap-1 relative"
          >
            <img src={assets.cart_icon} className=" w-5 min-w-5" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              10
            </p>
          </NavLink>

          <img
            onClick={() => setmenuVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt=""
          />
        </div>

        {/* side bar menu for small screens */}

        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            menuVisible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div className="flex items-center gap-4 p-3 cursor-pointer">
              <img
                onClick={() => setmenuVisible(false)}
                className="h-4 rotate-180 "
                src={assets.dropdown_icon}
              />
              <p>Close</p>
            </div>
            <NavLink
              onClick={() => setmenuVisible(false)}
              className="py-2 pl-6 border"
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setmenuVisible(false)}
              className="py-2 pl-6 border"
              to={"/about"}
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setmenuVisible(false)}
              className="py-2 pl-6 border"
              to={"/collection"}
            >
              Collection
            </NavLink>
            <NavLink
              onClick={() => setmenuVisible(false)}
              className="py-2 pl-6 border"
              to={"/contact"}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
