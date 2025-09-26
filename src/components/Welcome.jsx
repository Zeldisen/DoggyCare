import { Link } from 'react-router-dom';
import paw from './images/paw.png';
import welcome from './images/Welcome.png';
import './css/welcome.css';

function Welcome(){
    return(
        <>
          <header className="header">
      <img src={paw} alt="tass" style={{width: "10%", height: "20%", maxWidth: "600%"}}/>
      <img src={welcome} alt="welcome" style={{width: "30%", maxWidth:"600%"}} />
      <img src={paw} alt="tass" style={{width: "10%", height: "20%", maxWidth: "600%"}}/>
    </header>
    <section className="welcome">
        <p className="search-text">Search among our Doggy members and click for more details.</p>
        <Link className="btn-w" to="/findDog" >All Members</Link>
        <Link className="btn-w" to="/presentsDog">Today´s Pack</Link>
    </section>

        </>
    );
}
export default Welcome;