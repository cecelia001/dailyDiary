import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import AddEntry from "./components/AddEntry.js"
import Error404View from './components/Error404View';
import ReadDiary from './components/ReadDiary';
import Home from './components/Home';

import NavBar from "./components/NavBar.js"


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

  async function addEntry(formData){
    let options = {
      method: "POST",
      headers: { "content-Type" : "application/json" },
      body: JSON.stringify({
          date: formData.date,
          entry: formData.entry,
          accomplish: formData.accomplish,
      })
  };

    try{
      let response = await fetch ('/days', options)
      if (response.ok){
        let data = await response.json();
        setDays(data);
      } else {
        console.log(`server error: ${response.status}: ${response.statusText}`);
      }
    } catch(err) {
      console.log(`network error: ${err.message}`)
    }
  }

  return (
    <div className="App">
       <NavBar />

      <h1>dailyDiary</h1>

        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/entry" element={<AddEntry days={days} addEntryCb={addEntry} /> } />
            <Route path="/diary" element={<ReadDiary days={days} /> } />
            <Route path="*" element={<Error404View />} />
        </Routes>
    </div>
  );
}

export default App;
