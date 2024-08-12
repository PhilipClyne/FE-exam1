import React, { useEffect } from "react";

const TredingGames = ({ gameList }) => {
  useEffect(() => {
    console.log("Treding Games: ", gameList);
  });
  return (
    <div className="mt-5 hidden md:block">
      <h2 className="my-5 font-bold text-[30px] dark:text-white">
        Trending Games
      </h2>
      <div className="hidden md:grid md:grid-cols-3 gap-4 lg:grid-cols-4  ">
        {gameList.map(
          (game, index) =>
            index < 4 && (
              <div
                key={index}
                className="bg-slate-400 rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="h-[270px] rounded-t-lg object-cover"
                />
                <h2 className="text-center dark:text-white p-2 text-[20px] font-bold">
                  {game.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TredingGames;
