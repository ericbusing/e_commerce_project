import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home.js";
import Profil from "./pages/Profil.js";

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
