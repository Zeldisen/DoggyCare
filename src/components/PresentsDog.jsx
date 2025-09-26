import todayPack from "./images/Today-s-Pack.png";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { fetchDogs } from "../api";         
import './css/presentsdog.css'

function PresentsDog(){

    const [allDogs, setAllDogs] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError ] = useState(null);

    useEffect(() => {
        fetchDogs({ present: true, include: ['img'] })
        .then(setAllDogs)
        .catch(setError)
        .finally(() => setloading(false));
    },[]);

    if (loading) return <p>Loading...</p>;
    if(error) return <p>Fail: {error.message}</p>

      const presentDogs = allDogs.filter(d =>
    d.present === true || d.isPresent === true || d.status === "present"
  );

    return (
        <>
        <img src={todayPack} alt="Dagens flock" style={{width: "50%"}}/>
        <section className="presenets-dog">
        <section className="content-p">
            <ul className="grid-p">
                {presentDogs.map(d => (
                    <li className="card-p" key={d.id}>
       <Link className="card-link"
                  to={`/dogs/${encodeURIComponent(String(d.chipNumber))}`}
                  aria-label={`Visa ${d.name}`}>
                  
                      <img src={d.img} alt={d.name} style={{width:"100%"}} />
                      <p className="name-text">{d.name}</p>
                     </Link>
                </li>
                ))}
               

            </ul>
             {presentDogs.length === 0 && <p>No dogs are here today.</p>}
        </section>
         <Link to="welcome" className="go-back-btn" >Go Back</Link>
        </section>
       
        {/* färgtema #A020F0 */}
        </>
    )
}
export default PresentsDog;
 