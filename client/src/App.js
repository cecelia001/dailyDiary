import React, { useState, useEffect } from 'react';
import './App.css';

import AddEntry from "./components/AddEntry.js"


function App() {

  const [days, setDays]= useState([])

  useEffect(()=> {
    getDays();
  }, []);

  async function getDays(){
    try {
      let response = await fetch ('/days');
      if (response.ok){
        let data = await response.json();
        setDays(data);
      } else {
        console.log(`server error: ${response.status}: ${response.statusText}`);
      } 
      } catch(err){
        console.log(`network error: ${err.message}`)
      }
  };


  return (
    <div className="App">
      <nav> Add Nav Bar</nav>
      <h1>dailyDiary</h1>
      <h2> Daily inspiration quote</h2>  {/* make a component */}
      <AddEntry days={days} />
    </div>
  );
}

export default App;
