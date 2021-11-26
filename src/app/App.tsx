import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';
import Docs from '../pages/Docs/Docs';
import About from '../pages/About/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/docs" element={<Docs/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
