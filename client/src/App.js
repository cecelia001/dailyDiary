import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import AddEntry from "./components/Services.js"
import Error404View from './components/Error404View';
import ReadDiary from './components/Locations';
import Home from './components/Home';

import NavBar from "./components/NavBar.js"


function App() {

  const [days, setDays]= useState([])

  const navigate = useNavigate();

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
        navigate('/diary');
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

      <h1>Middlebury Health</h1>

        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/services" element={<AddEntry days={days} addEntryCb={addEntry} /> } />
            <Route path="/locations" element={<ReadDiary days={days} /> } />
            <Route path="*" element={<Error404View />} />
        </Routes>
    </div>
  );
}

export default App;
