import React, { useContext } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-b-full w-full p-4 sm:w-4/5 sm:justify-around sm:rounded-full flex flex-col sm:flex-row items-center justify-between">
      <div className="flex items-center space-x-4">
        <a
          href="/"
          className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white"
        >
          Home
        </a>
      </div>

      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-4 sm:mt-0">
        <a
          href="/contact"
          className="text-base sm:text-lg text-gray-800 dark:text-white hover:underline"
        >
          Contact Us
        </a>
        <a
          href="/games"
          className="text-base sm:text-lg text-gray-800 dark:text-white hover:underline"
        >
          Products
        </a>
        <a
          href="/cart"
          className="text-base sm:text-lg text-gray-800 dark:text-white hover:underline"
        >
          Cart
        </a>
        {theme === "light" ? (
          <HiMoon
            className="text-2xl sm:text-3xl text-gray-800 dark:text-white cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="text-2xl sm:text-3xl text-gray-800 dark:text-white cursor-pointer"
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
