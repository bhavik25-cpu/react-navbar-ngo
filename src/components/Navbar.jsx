import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="yellow-border">
        <p className="center-text">Welcome to NGO website</p>
      </div>
      <nav className="nav-header">
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to="/" className="title">
          NGO
        </Link>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/WHO-WE-ARE">WHO WE ARE</NavLink>
          </li>
          <li>
            <NavLink to="/FOR-ORGANIZATION">FOR ORGANIZATION</NavLink>
          </li>
          <li>
            <NavLink to="/FOR-YOUNG-PEOPLE">FOR YOUNG PEOPLE</NavLink>
          </li>
          <li>
            <NavLink to="/IMPEACT-REPORT">IMPEACT REPORT</NavLink>
          </li>
          <li>
            <NavLink to="/NEWS">NEWS</NavLink>
          </li>
          
          <li>
            <NavLink to="/signin" className="signin-button">
              <FaSignInAlt /> Sign In
            </NavLink>
          </li>
          <li>
            <NavLink to="/donate" className="yellow-button">
              Donate
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
