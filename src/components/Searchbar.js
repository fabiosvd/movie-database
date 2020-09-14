import React from 'react'

const Searchbar = ({ handleInput, search }) => {
  
  return (
    <>
      <div className="row justify-content-center">
        <div className="search-title">
          <h1>Find Movies, TV shows and more</h1>
        </div>
      </div>
        <div className="search__form">
          <input 
          type="text" 
          placeholder="Start typing..." 
          onChange = {handleInput} 
          onKeyPress={search}/>
          <button className="btn">GO</button>
        </div>
    </>
  )
}

export default Searchbar
