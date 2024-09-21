import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar mb-0 pb-0">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <span>CRICKO</span>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon"></span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => 
                  isActive ? "nav-links active" : "nav-links"
                }
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => 
                  isActive ? "nav-links active" : "nav-links"
                }
                onClick={handleClick}
              >
                Tournaments
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) => 
                  isActive ? "nav-links active" : "nav-links"
                }
                onClick={handleClick}
              >
                LiveScore
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => 
                  isActive ? "nav-links active" : "nav-links"
                }
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose /> 
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;