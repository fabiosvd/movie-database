import React from 'react'
import Result from '../components/Result';

function Results({ results, openPopup }) {
  return (
    <div className = "container">
      <div className="row">
        <div className="movies-title">
        <h2>Results:</h2>
        </div>
      </div>
      <div className="row">
        <div className="movies">
          {results.map(result => (
            <Result key={result.id} result={result} openPopup={openPopup}/>
          ))}
        </div>
      </div>
    </div>


  )
}

export default Results
