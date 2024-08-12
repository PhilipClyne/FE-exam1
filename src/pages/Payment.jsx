import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handlePayment = () => {
    clearCart();
    navigate("/confirmation");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-black dark:text-white">
      <div className="w-full max-w-4xl p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center">Payment</h1>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty. Nothing to pay.</p>
        ) : (
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Order Summary</h2>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-4 p-4 border border-gray-300 dark:border-gray-700 rounded-lg"
                >
                  <img
                    src={
                      item.background_image ||
                      "https://via.placeholder.com/100x100"
                    }
                    alt={item.name}
                    className="w-[100px] h-[100px] object-cover rounded"
                  />
                  <div className="flex-grow ml-4">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-lg font-medium">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-2xl font-semibold mb-6">
              <span>Total Price:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handlePayment}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
