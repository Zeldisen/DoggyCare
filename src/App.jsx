
import { Link, Outlet } from 'react-router-dom';
import './App.css'
import doggy from './components/images/Doggy-day-care.png';

function App() {

  return (
    <>
        <div className="layout">
      <header className="header">
        <img src={doggy} alt="doggy care" style={{width: "100%", maxWidth:"600%"}} />
        <nav className="nav">
          {/* <Link to="/">Välkommen</Link>
          <Link to="/dogs">Katalog</Link> */}
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
