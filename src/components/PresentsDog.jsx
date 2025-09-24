import todayPack from "./images/Today-s-Pack.png";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { fetchDogs } from "../api";         
import { resolveImg } from "../images"; 
function PresentsDog(){

    const [allDogs, setAllDogs] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError ] = useState(null);

    useEffect(() => {
        fetchDogs({ present: true})
        .then(setAllDogs)
        .catch(setError)
        .finally(() => setloading(false));
    },[]);

    if (loading) return <p>Laddar...</p>;
    if(error) return <p>Fel: {error.message}</p>

      const presentDogs = allDogs.filter(d =>
    d.present === true || d.isPresent === true || d.status === "present"
  );

    return (
        <>
        <img src={todayPack} alt="Dagens flock" style={{width: "50%"}}/>
        <section className="content">
            <ul className="grid">
                {presentDogs.map(d => (
                    <li className="card" key={d.id}>
                      <img src={resolveImg(d.img)} alt={d.name} />
                      <div className="card-body">
                        <p>{d.name}</p>

                      </div>
                </li>
                ))}
               

            </ul>
             {presentDogs.length === 0 && <p>Just nu är inga hundar incheckade.</p>}
        </section>
        <Link to="welcome" style={{ color: 'green'}}>Tillbaka</Link>
        </>
    )
}
export default PresentsDog;
