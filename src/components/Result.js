import React from 'react'

function Result({ result, openPopup }) {
  return (
    <div className="movie-card" onClick={() => openPopup(result.imdbID)} >
      <div className="movie-card--poster">
        <div className="movie-card-quality">HD</div>
        <img src={result.Poster}></img>
      </div>
      <div className="movie-card--detail">
        <h3 className="movie-name">
          <a href="">{result.Title}</a>
        </h3>
        <div className="movie-info">
          <span className="movie-info--date">{result.Year}</span>
          <span className="movie-info--dot"></span>
          <span className="movie-info--duration">{result.Type}</span>
          {/* <span className="movie-info--type">{result.Runtime}</span> */}
        </div>
      </div>
    </div>
  )
}

export default Result
