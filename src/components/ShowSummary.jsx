import React from 'react'
import './ShowSummary.css';

const ShowSummary = ({show}) => {
  return (
    <div className="show-summary">
      <h2>{show.show.name}</h2>
      <div className="imgdiv">
      <img src={show.show.image.medium} alt={show.show.name}/>
      </div>
      <p>{show.summary}</p>
    </div>
  )
}

export default ShowSummary;