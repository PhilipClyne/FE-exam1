import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../services/GlobalApi";

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchGameDetail = async () => {
      try {
        const response = await GlobalApi.getGameDetail(id);
        setGame(response.data);
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    };
    fetchGameDetail();
  }, [id]);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push({
      id: game.id,
      name: game.name,
      background_image: game.background_image,
      price: game.price || 59.99,
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Added to cart successfully");
  };

  const toggleReadMore = () => setIsExpanded((prev) => !prev);

  if (!game) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto p-4 sm:p-6 min-h-screen bg-gray-100 dark:bg-slate-800 dark:text-white">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">
        {game.name}
      </h1>
      <img
        src={game.background_image || "https://via.placeholder.com/600x400"}
        alt={game.name}
        className="w-full h-auto object-cover rounded-lg mb-4 sm:mb-6"
      />
      <div
        className={`text-base sm:text-lg leading-relaxed text-justify mb-4 overflow-hidden transition-max-height duration-300 ${
          isExpanded ? "max-h-screen" : "max-h-36"
        }`}
      >
        {game.description_raw || "Description not available."}
      </div>
      <button
        className="text-blue-600 dark:text-blue-400 hover:underline mb-4 sm:mb-6"
        onClick={toggleReadMore}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </button>
      <h2 className="text-xl sm:text-2xl mb-2">
        Rating: {game.rating || "N/A"}
      </h2>
      <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6">
        Released: {game.released || "N/A"}
      </h2>
      <button
        onClick={handleAddToCart}
        className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default GameDetail;
