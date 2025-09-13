import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="border-b border-black/20">
      <div className="container mx-auto pl-3 pr-3 max-w-[1390px] py-5">
        <div className="flex items-center justify-between text-neutral-900">
          <Link to="/">
            <img src="/images/logo.svg" alt="logo" />
          </Link>
          <ul className="flex gap-10 max-md:hidden">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition border-b-2 outline-none ${
                  isActive
                    ? "border-neutral-900 "
                    : "border-transparent hover:border-neutral-600"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition border-b-2 ${
                  isActive
                    ? "border-orange-500 "
                    : "border-transparent hover:border-orange-500 "
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                `transition border-b-2 ${
                  isActive
                    ? "border-orange-500 "
                    : "border-transparent hover:border-orange-500 "
                }`
              }
            >
              Recipes
            </NavLink>
          </ul>
          <div className="">
            <button className="btn py-3 px-4 max-md:hidden">
              Browse recipes
            </button>
            <button className=" py-3 px-4 p-3 bg-neutral-200 rounded-sm md:hidden">
              <img src="./images/icon-hamburger-menu.svg" alt="menu" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
