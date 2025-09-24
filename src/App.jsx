
import { Link, Outlet } from 'react-router-dom';
import './App.css'

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
