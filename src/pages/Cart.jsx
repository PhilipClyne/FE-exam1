import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleConfirm = () => {
    // Navigate to the payment page
    navigate("/payment");
  };

  return (
    <div className="p-6 dark:bg-black dark:text-white">
      <h1 className="text-4xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4 p-4 border border-gray-300 dark:border-gray-700 rounded-lg"
            >
              <img
                src={
                  item.background_image || "https://via.placeholder.com/100x100"
                }
                alt={item.name}
                className="w-[100px] h-[100px] object-cover rounded"
              />
              <div className="flex-grow ml-4">
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-xl font-medium">${item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex mx-auto justify-center space-x-5">
            <button
              onClick={clearCart}
              className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Clear Cart
            </button>
            <button
              onClick={handleConfirm}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
