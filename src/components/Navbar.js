import React from "react";

const Navbar = () => {
  return (
    <div className="row justify-content-center">
      <a href="" className="logo">
        <img src="/img/logo.png" alt=""></img>
        <span>FsdMovies.to</span>
      </a>
      <nav className="nav-bar">
        <ul className="nav-bar">
          <li className="nav-bar">Home</li>
          <li className="nav-bar">Genre</li>
          <li className="nav-bar">Country</li>
          <li className="nav-bar">Movies</li>
          <li className="nav-bar">TV Shows</li>
          <li className="nav-bar">Top IMDB</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
