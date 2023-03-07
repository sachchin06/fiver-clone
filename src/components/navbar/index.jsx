import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const { pathname } = useLocation()
 
  const currentUser = {
    id: 1,
    username: "Sachchin Ram",
    isSeller: true,
  };

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.pageYOffset > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isScrolled || pathname !=='/' ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link"> 
            <span className="text">Fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          <span>Sign In</span>
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpenMenu(!openMenu)}>
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span>{currentUser.username}</span>

              {openMenu && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className='link' to='/mygigs'>
                        <span>Gigs</span>
                      </Link>
                      <Link className='link' to='/add'>
                        <span>Add New Gig</span>
                      </Link>
                    </>
                  )} 
                  <Link className='link' to='/orders'>
                    <span>Orders</span>
                  </Link>
                  <Link className='link' to='messages'>
                    <span>Messages</span>
                  </Link>
                  <Link className='link' to='/logout'>
                    <span>Logout</span>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {(isScrolled || pathname !=='/') && (
        <>
          <hr />

          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
