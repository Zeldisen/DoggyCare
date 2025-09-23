import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Outlet } from 'react-router-dom';


import './App.css'
import Welcome from './components/Welcome';


function App() {

  

  return (
    <>
        <div className="layout">
      <header className="header">
        <h1>Doggy DayCare</h1>
        <nav className="nav">
          <Link to="/">Välkommen</Link>
          <Link to="/dogs">Katalog</Link>
        </nav>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </div>
     
    </>
  )
}

export default App
