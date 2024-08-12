import React, { useContext } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-white dark:bg-gray-900 shadow-md rounded-b-lg p-2 sm:p-3 flex items-center justify-between">
      <Link
        to="/"
        className="text-lg font-semibold text-gray-800 dark:text-white"
      >
        Home
      </Link>

      <div className="flex items-center space-x-4 sm:space-x-6">
        <Link
          to="/contact"
          className="text-sm sm:text-base text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Contact Us
        </Link>
        <Link
          to="/games"
          className="text-sm sm:text-base text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Products
        </Link>
        <Link
          to="/cart"
          className="text-sm sm:text-base text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Cart
        </Link>
      </div>

      <div className="flex items-center space-x-2">
        {theme === "light" ? (
          <HiMoon
            className="text-xl sm:text-2xl text-gray-800 dark:text-white cursor-pointer transition-colors hover:text-gray-600 dark:hover:text-gray-300"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="text-xl sm:text-2xl text-gray-800 dark:text-white cursor-pointer transition-colors hover:text-gray-600 dark:hover:text-gray-300"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
