import { Link } from 'react-router-dom';
import leftPaw from './images/paw-left.jpg';
import rightPaw from './images/paw-right.jpg';

function Welcome(){
    return(
        <>
          <header className="header">
      <img src={leftPaw} alt="Vänster tass" style={{width: "10%", height: "20%", maxWidth: "600%"}}/>
      <h1 id="one">Doggy</h1>
      <h1 id="two">Day</h1>
      <h1 id="three">Care</h1>
      <img src={rightPaw} alt="Höger tass" style={{width: "10%", height: "20%", maxWidth: "600%"}}/>
    </header>
    <section>
        <p>Sök bland våra hundar och klicka för att se detaljer.</p>
        <Link to="/dogs" className="btn">Till katalogen</Link>
    </section>

        </>
    );
}
export default Welcome;