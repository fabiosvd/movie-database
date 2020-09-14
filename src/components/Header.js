import React from 'react'
import Searchbar from '../components/Searchbar';
import Navbar from '../components/Navbar';
const Header = ({handleInput, search}) => {
  return (
    <div>
      <header className="header">
        <div className="container">
          {/* <div className="row">
            <a href="#" className="logo">
              <img src="/img/logo.png" alt=""></img>
              <span>FsdMovies.to</span>
            </a>
          </div> */}
          <Navbar />
          <Searchbar handleInput={handleInput} search={search} />
        </div>
      </header>
    </div>
  )
}

export default Header
