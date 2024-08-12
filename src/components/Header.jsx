import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/ER.avif";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Theme:", theme);
  });
  return (
    <div className="flex items-center justify-center p-3">
      <div className="flex items-center justify-center mt-20 ">
        <a href="/" className="w-1/5 h-1/5">
          <img src={Logo} alt="" />
        </a>
        <div className="flex bg-slate-200 p-2 w-[60%] mx-5 rounded-full items-center">
          <HiOutlineMagnifyingGlass />
          <input
            type="text"
            placeholder="Search Games"
            className="bg-transparent outline-none"
          />
        </div>
        <div>
          {theme == "light" ? (
            <HiMoon
              className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
              onClick={() => {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
              }}
            />
          ) : (
            <HiSun
              className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
              onClick={() => {
                setTheme("light");
                localStorage.setItem("theme", "light");
              }}
            />
          )}
        </div>
        <div className="px-10">
          <a href="/">
            <button className="px-4 py-2 bg-slate-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              Back
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
