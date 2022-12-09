import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart.js";
import Home from "./Home.js";
import Profil from "./Profil.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        {" "}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profil" element={<Profil />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
