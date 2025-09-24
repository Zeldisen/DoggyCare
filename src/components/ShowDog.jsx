
import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { fetchDogs } from '../api';
import { resolveImg } from "../images";


function ShowDog(){

    const { chipNumber } = useParams();
    const [dog, setDog] = useState(null);
    const [state, setState ] = useState('loading');

    useEffect(() => {
        setState('Loading...')
        fetchDogs()
        .then(list => {
            const hit = Array.isArray(list)
            ? list.find(d => String(d.chipNumber) === String(chipNumber)): null;
            setDog(hit || null);
            setState('ready');
        })
        .catch(() => setState('error'));
    }, [chipNumber]);

    if(state === 'loading') return <p>Laddar...</p>;
    if(state === 'error') return <p>Något gick fel</p>;
    if(!dog) return (<p>Hunden hittade inte. <Link to="/dogs" >Tillbaka</Link></p>);

    return(
        <article className="details">
            
            <img  src={resolveImg(dog.img)}
                     onError={(e) => { e.currentTarget.src = `${import.meta.env.BASE_URL}placeholder-dog.png`; }}
                    alt={dog.name} />
              <div>
        <h2>{dog.name}</h2>
        <p><strong>Ras:</strong> {dog.breed}</p>
        <p><strong>Kön:</strong> {dog.sex}</p>
        <p><strong>Ålder:</strong> {dog.age}</p>
        <p><strong>Chip:</strong> {dog.chipNumber}</p>
        <p><strong>Ägare:</strong> {dog.owner?.name} {dog.owner?.lastName} ({dog.owner?.phoneNumber})</p>
        <p><strong>Närvarande idag:</strong> {dog.present ? 'Ja' : 'Nej'}</p>
        <p><Link to="/dogs">⬅ Tillbaka till katalogen</Link></p>
      </div>
        </article>
    )
}
export default ShowDog;