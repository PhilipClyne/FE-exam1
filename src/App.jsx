// src/App.js

import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext"; // Import CartProvider
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameDetail from "./pages/GameDetail";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import AllGames from "./components/AllGames";
import Confirmation from "./pages/Confirmation";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CartProvider>
        <div
          className={`${theme} 
          ${theme === "dark" ? "bg-black" : "bg-white"} `}
        >
          <Router>
            <Navbar />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games/:id" element={<GameDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/games" element={<AllGames />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
          </Router>
        </div>
      </CartProvider>
    </ThemeContext.Provider>
  );
}

export default App;
