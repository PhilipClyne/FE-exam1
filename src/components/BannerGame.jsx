import React, { useEffect, useState } from "react";

const BannerGame = ({ gameList }) => {
  const [currentBanner, setCurrentBanner] = useState(null);
  const [fadeEffect, setFadeEffect] = useState(false);

  useEffect(() => {
    if (gameList?.length > 0) {
      const updateBanner = () => {
        setFadeEffect(true);
        setTimeout(() => {
          const randomIndex = Math.floor(Math.random() * gameList.length);
          setCurrentBanner(gameList[randomIndex]);
          setFadeEffect(false);
        }, 200); // Time duration for fade-out
      };

      updateBanner();
      const intervalId = setInterval(updateBanner, 5000); // Change banner every 5 seconds

      return () => clearInterval(intervalId); // Cleanup on component unmount
    }
  }, [gameList]);

  return (
    <div
      className={`relative transition-opacity duration-300 ease-in-out ${
        fadeEffect ? "opacity-0" : "opacity-100"
      }`}
    >
      {currentBanner && (
        <>
          <div className="absolute bottom-0 p-5 rounded-lg bg-gradient-to-t from-slate-900 to-transparent w-full">
            <h2 className="text-[24px] text-white font-bold">
              {currentBanner.name}
            </h2>
            <a href="/games">
              <button className="bg-orange-700 text-white px-2 p-1 rounded-lg">
                Play Now
              </button>
            </a>
          </div>
          <img
            src={currentBanner.background_image}
            className="md:h-full w-full object-cover rounded-lg"
            alt=""
          />
        </>
      )}
    </div>
  );
};

export default BannerGame;
