import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
     
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
            <NavLink to="/ABOUT_US">ABOUT US</NavLink>
          </li>
          <li>
            <NavLink to="/OUR_WORK<">OUR WORK</NavLink>
          </li>
          <li>
            <NavLink to="/CAMPAIGNS">CAMPAIGNS</NavLink>
          </li>
          <li>
            <NavLink to="/MEDIA_CENTER">MEDIA CENTER</NavLink>
          </li>
          <li>
            <NavLink to="/CONTACT_US">CONTACT US</NavLink>
          </li>
          
          <li>
            <NavLink to="/signin" className="signin-button">
              <FaSignInAlt /> Sign In
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </>
  );
};
