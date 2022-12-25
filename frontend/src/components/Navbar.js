import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/styles.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-menu">
        <NavLink to="/profil" style={{ textDecoration: "none" }}>
          <li className="nav-list">Profil</li>
        </NavLink>
        <NavLink to="/cart" style={{ textDecoration: "none" }}>
          <li className="nav-list">Panier</li>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }}>
          <li className="nav-list">Déconnection</li>
        </NavLink>
      </ul>
      <h1>Maison d'édition</h1>
      <div className="newsletter">
        <h6>Newsletter</h6>
      </div>      
    </div>
  );
};

export default Navbar;
