import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/ER.avif";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import Api from "../services/GlobalApi"; // Import your API functions
import { HiX } from "react-icons/hi";

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
    // truy cứu dữ liệu được nhập tỏng input
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
  const handleClearQuery = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <div className="flex items-center justify-center p-3">
      <div className="flex items-center justify-center mt-20 relative">
        <Link to="/" className="w-1/5 h-1/5">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="flex bg-slate-200 p-2 w-[60%] mx-5 rounded-full items-center relative">
          <HiOutlineMagnifyingGlass />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search Games"
            className="bg-transparent outline-none px-2 py-1 w-full"
          />
          {searchQuery && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-full mt-2 bg-white shadow-lg rounded-lg overflow-hidden z-10">
              {searchResults.length > 0 ? (
                <ul className="max-h-60 overflow-y-auto">
                  {/* hiện các tìm kiếm gần giống */}
                  {searchResults.map((game) => (
                    <li
                      key={game.id}
                      className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    >
                      {/* navigate nó đến trang detail */}
                      <Link
                        to={`/games/${game.id}`}
                        className="text-blue-500 hover:underline"
                      >
                        {/* hiện image của game */}
                        <div className="flex text-center">
                          <img
                            src={game.background_image}
                            alt=""
                            srcset=""
                            className="w-[10%] h-[10%] "
                          />
                          <h1 className="my-auto mx-5 ">{game.name}</h1>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="py-2 px-4 text-gray-500">No results found</p>
              )}
            </div>
          )}
          {searchQuery && (
            <button
              onClick={handleClearQuery}
              className="absolute right-2 p-1 text-gray-500 hover:text-gray-800"
              aria-label="Clear search query"
            >
              <HiX className="text-lg" />
            </button>
          )}
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
      </div>
    </div>
  );
};

export default Header;
