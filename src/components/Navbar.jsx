import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "../styles/Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

  const handleEsc = (e) => {

    if (e.key === "Escape") {

      setMenuOpen(false);

    }

  };

  window.addEventListener("keydown", handleEsc);

  return () => {

    window.removeEventListener("keydown", handleEsc);

  };

}, []);

useEffect(() => {

    if(menuOpen){

        document.body.style.overflow = "hidden";

    }

    else{

        document.body.style.overflow = "auto";

    }

    return () => {

        document.body.style.overflow = "auto";

    };

}, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (

    <nav className="navbar">

      {/* Logo */}

      <a href="#home" className="logo" onClick={closeMenu}>

        <img
          src="/images/logo.png"
          alt="Ultimate 7 Logo"
        />

        <h1>
          Ultimate <span>7</span>
        </h1>

      </a>

      {/* Desktop Menu */}

     <div className="nav-links">

      <a href="#home" className="nav-link">Home</a>

      <a href="#about" className="nav-link">About</a>

      <a href="#services" className="nav-link">Services</a>

      <a href="#membership" className="nav-link">Membership</a>

      <a href="#trainers" className="nav-link">Trainers</a>

      <a href="#gallery" className="nav-link">Gallery</a>

      <a href="#contact" className="nav-link">Contact</a>

     </div>

      {/* Desktop Button */}

      <button
        className="join-btn desktop-btn"
        onClick={() =>
          document
            .getElementById("membership")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Join Now
      </button>

      {/* Hamburger */}

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
      <div
       className="menu-overlay"
       onClick={closeMenu}
    ></div>
)}

      {/* Mobile Menu */}

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>

        <a href="#about" className="nav-link" onClick={closeMenu}>About</a>

        <a href="#services" className="nav-link" onClick={closeMenu}>Services</a>

        <a href="#membership" className="nav-link" onClick={closeMenu}>Membership</a>

        <a href="#trainers" className="nav-link" onClick={closeMenu}>Trainers</a>

        <a href="#gallery" className="nav-link" onClick={closeMenu}>Gallery</a>

        <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>

        <button
          className="join-btn"
          onClick={() => {

            document
              .getElementById("membership")
              .scrollIntoView({
                behavior:"smooth"
              });

            closeMenu();

          }}
        >
          Join Now
        </button>

      </div>

    </nav>

  );

}

export default Navbar;