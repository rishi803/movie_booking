import React, { useEffect, useState } from 'react';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import './App.css';
const App = () => {
  const [shows, setShows] = useState([]);
  const [selectedShow,setSelectedShow] = useState(null);

  const handleShowClick = (showId) =>{
     const show=shows.find((s)=>s.id===showId);
     setSelectedShow(show);
  }

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all') 
      .then(response => response.json())
      .then(data => setShows(data));
      console.log(shows);
  }, []);

  return (
    <div className="main-app">
    {selectedShow ? (
      <ShowSummary show={selectedShow} />
    ) : (
      <div className="main">
      <ShowList shows={shows} onShowClick={handleShowClick} />
   </div>
    )}
  </div>
  );
}

export default App;
