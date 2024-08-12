import React from "react";

const GameCard = ({ game }) => {
  return (
    <div className="bg-gray-600 text-black rounded-lg dark:bg-gray-200 p-4 shadow-md">
      <img
        src={game.background_image || "https://via.placeholder.com/300x200"}
        alt={game.name}
        className="w-full h-48 object-cover rounded-md mb-2"
      />
      <h3 className="text-xl font-semibold">{game.name}</h3>
      <p className="text-white dark:text-black">
        {game.description || "No description available"}
      </p>
    </div>
  );
};

export default GameCard;
