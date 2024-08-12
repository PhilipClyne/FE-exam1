import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalApi from "../services/GlobalApi";
import BannerGame from "../components/BannerGame";
import TredingGames from "../components/TredingGames";
import GamesByGenreId from "../components/GamesByGenreId";

const Home = () => {
  const [allGameList, setAllGameList] = useState([]);
  const [gameListByGenre, setGameListByGenre] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState("Action");

  useEffect(() => {
    getAllGameList();
    getGameListByGenreId(4);
  }, []);

  const getAllGameList = () => {
    GlobalApi.getAllGames.then((response) => {
      setAllGameList(response.data.results);
    });
  };

  const getGameListByGenreId = (id) => {
    console.log("Genre ID: ", id);
    GlobalApi.getGameListByGenreId(id).then((response) => {
      console.log("GamesByGenreId: ", response.data.results);
      setGameListByGenre(response.data.results);
    });
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <div className="grid grid-cols-4 px-8">
            {/* chỉ hiện khi trong responsive cho đt  */}
            <div className="hidden md:block">
              <GenreList
                genreID={(setGenreId) => getGameListByGenreId(setGenreId)}
                selectedGenreName={(name) => setSelectedGenreName(name)}
              />
            </div>
            <div className="col-span-4 md:col-span-3 p-8">
              {allGameList?.length > 0 ? (
                <div>
                  <BannerGame gameList={allGameList} />
                  <TredingGames gameList={allGameList} />
                  <GamesByGenreId
                    gameList={gameListByGenre}
                    selectedGenreName={selectedGenreName}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
