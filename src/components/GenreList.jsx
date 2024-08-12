import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";

const GenreList = ({ genreID, selectedGenreName }) => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((response) => {
      // console.log(response.data.results);
      setGenreList(response.data.results);
    });
  };
  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>

      {genreList.map((genre, index) => (
        <div
          key={genre.id}
          onClick={() => {
            setActiveIndex(index);
            genreID(genre.id);
            selectedGenreName(genre.name);
          }}
          className={` dark:text-white flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 group rounded-lg hover:dark:bg-gray-600
            ${activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null}`}
        >
          <img
            src={genre.image_background}
            className="w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300"
            alt=""
          />
          <h3 className="dark:white text-[18px] group-hover:font-bold">
            {genre.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
