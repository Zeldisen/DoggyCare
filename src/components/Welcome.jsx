import { Link } from 'react-router-dom';
import leftPaw from './images/paw-left.jpg';
import rightPaw from './images/paw-right.jpg';
import welcome from './images/Welcome.png';

function Welcome(){
    return(
        <>
          <header className="header">
      <img src={rightPaw} alt="Vänster tass" style={{width: "10%", height: "20%", maxWidth: "600%"}}/>
      <img src={welcome} alt="welcome" style={{width: "30%", maxWidth:"600%"}} />
      <img src={rightPaw} alt="Höger tass" style={{width: "10%", height: "20%", maxWidth: "600%"}}/>
    </header>
    <section className="welcome">
        <p>Sök bland våra hundar och klicka för att se detaljer.</p>
        <Link className="btn-w" to="/findDog" >All Members</Link>
        <Link className="btn-w" to="/presentsDog">Today´s Pack</Link>
    </section>

        </>
    );
}
export default Welcome;