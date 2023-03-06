import React, { useState, useEffect } from "react";

import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.pageYOffset > 0);
    }

     window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isScrolled ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">Fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Become a Seller</span>
          <span>Sign In</span>
          <button>Join</button>
        </div>
      </div>

      {isScrolled && (
        <>
          <hr />

          <div className="menu">
            <span>Test</span>
            <span>Test2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
