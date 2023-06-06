import React from 'react';
import './ShowList.css';

const ShowList = ({ shows, onShowClick }) => {
  return (
<>
    <h2>Show List</h2>
    <br/>
    <br/>
    <div className="show-list">
     
      {shows.map((show) => (
        <div key={show.show.id} className="show-card">
            <div className="back">
          <h3>{show.show.name}</h3>
          <p>Genre: {show.show.genres}</p>
          <p>Language: {show.show.language}</p>
         
         <img src={show.show.image.medium} alt={show.show.name}/>
 
          <button className='my-5'> <a href={show.show.url} target="_blank" rel="noopener noreferrer">
              View Original
            </a></button>
        </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ShowList;
