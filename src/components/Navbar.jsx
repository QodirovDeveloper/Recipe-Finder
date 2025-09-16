import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar()
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      className="border-b border-black/20 bg-neutral-100/70 z-99999 fixed left-0 right-0 top-0 backdrop-blur-sm"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container z-9999 mx-auto pl-3 pr-3 max-w-[1350px]">
        <div className="flex items-center justify-between text-neutral-900 py-2">
          <Link to="/">
            <img src="/images/logo.svg" className="sm:w-52 w-40" alt="logo" />
          </Link>
          <nav className="md:flex hidden">
            <ul className="flex gap-10 text-7 font-semibold">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `transition border-b-3 outline-none ${isActive
                      ? "border-neutral-900 "
                      : "border-transparent hover:border-neutral-600"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `transition border-b-3 ${isActive
                      ? "border-orange-500 "
                      : "border-transparent hover:border-orange-500 "
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/recipes"
                  className={({ isActive }) =>
                    `transition border-b-3 ${isActive
                      ? "border-orange-500 "
                      : "border-transparent hover:border-orange-500 "
                    }`
                  }
                >
                  Recipes
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="">
            <Link to={"/recipes"} className="btn py-3 px-4 font-bold md:flex hidden">
              Browse recipes
            </Link>

            <button
              onClick={handleToggle}
              className="sm:py-3 sm:px-4 py-2 px-3 bg-neutral-200 rounded-sm md:hidden cursor-pointer"
            >
              <img src="./images/icon-hamburger-menu.svg" alt="menu" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-4 text-7 font-semibold p-3 m-3 rounded-md bg-neutral-0">
              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `transition border-b-2 outline-none ${isActive
                      ? "border-neutral-900 "
                      : "border-transparent hover:border-neutral-600"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `transition border-b-2 ${isActive
                      ? "border-orange-500 "
                      : "border-transparent hover:border-orange-500 "
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/recipes"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `transition border-b-2 ${isActive
                      ? "border-orange-500 "
                      : "border-transparent hover:border-orange-500 "
                    }`
                  }
                >
                  Recipes
                </NavLink>
              </li>
              <button className="btn py-3 px-4 w-full font-bold">
                Browse recipes
              </button>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
