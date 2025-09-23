
import './index.css'
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome.jsx';
import FindDog from './components/FindDog.jsx';
import ShowDog from './components/ShowDog.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Routes>
  <Route element={<App />}/>
  <Route path="/" element={<Welcome/>} />;
  <Route path="/dogs" element={<FindDog/>} />;
  <Route path="/dogs/:chipNumber" element={<ShowDog/>} />
 </Routes>
 </BrowserRouter>
);
