import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/ER.avif";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import Api from "../services/GlobalApi"; // Import your API functions

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Theme:", theme);
  }, [theme]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      Api.getAllGames
        .then((response) => {
          const results = response.data.results.filter((game) =>
            game.name.toLowerCase().includes(query.toLowerCase())
          );
          setSearchResults(results);
        })
        .catch((error) => {
          console.error("Error fetching games:", error);
        });
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="flex items-center justify-center p-3">
      <div className="flex items-center justify-center mt-20 relative">
        <Link to="/" className="w-1/5 h-1/5">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="flex bg-slate-200 p-2 w-[60%] mx-5 rounded-full items-center">
          <HiOutlineMagnifyingGlass />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search Games"
            className="bg-transparent outline-none px-2 py-1 w-full"
          />
        </div>
        <div>
          {theme === "light" ? (
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
          <Link to="/">
            <button className="px-4 py-2 bg-slate-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              Back
            </button>
          </Link>
        </div>
        {searchQuery && (
          <div className="absolute top-full left-0 w-[60%] mt-2 bg-white shadow-lg rounded-lg overflow-hidden z-10">
            {searchResults.length > 0 ? (
              <ul className="max-h-60 overflow-y-auto">
                {searchResults.map((game) => (
                  <li
                    key={game.id}
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                  >
                    <Link
                      to={`/games/${game.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      {game.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="py-2 px-4 text-gray-500">No results found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
