import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const GamesByGenreId = ({ gameList, selectedGenreName }) => {
  useEffect(() => {
    // console.log("GameList Popular: ", gameList);
  });
  return (
    <div>
      <h2 className="my-5 font-bold text-[30px] dark:text-white">
        {selectedGenreName} Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gameList.map((game, index) => (
          <Link to={`/game/${game.id}`} key={index}>
            <div className="bg-gray-600 p-3 rounded-lg pb-8 h-full hover:scale-110 duration-300 ease-in-out cursor-pointer">
              <img
                src={game.background_image}
                className="w-[320px] h-[320px] rounded-lg object-cover"
                alt={game.name}
              />
              <h2 className="block h-16 text-[20px] text-center dark:text-white font-bold">
                {game.name}
              </h2>
              <h2 className="text-center text-gray-500 dark:text-gray-300">
                ⭐{game.rating} 💭{game.reviews_count} 🔥
                {game.suggestions_count}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GamesByGenreId;
