import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import GameCard from "../components/GameCard"; // Ensure this component exists
import Video from "./Video";

const AllGames = () => {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    fetchAllGames();
  }, []);

  const fetchAllGames = async () => {
    try {
      const response = await GlobalApi.getAllGames;
      setGameList(response.data.results);
    } catch (error) {
      console.error("Error fetching all games:", error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-black dark:bg-slate-800 ">
      <div className="flex w-5/12 object-contain justify-center items-center m-auto rounded-lg">
        <Video />
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">All Games</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gameList.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllGames;
