
import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { fetchDogs } from '../api';
import about from './images/details-about.png';
import paw from './images/paw.png';

import "./css/showdog.css";


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

    if(state === 'loading') return <p>Loading...</p>;
    if(state === 'error') return <p>Somthing went wrong!</p>;
    if(!dog) return (<p>Doggy not found. <Link to="/dogs" >Back</Link></p>);

    return(
        <section className="show-dogs">
            <img src={about} alt="details-about"style={{width:"50%"}} />
            <section className="about">
                <img src={paw} alt="paw" />
                 <h2 className="name">{dog.name}</h2>
                 <img src={paw} alt="paw" />
            
            </section>
           
        <article className="details">

            <img  src={dog.img}
                     onError={(e) => { e.currentTarget.src = `${import.meta.env.BASE_URL}placeholder-dog.png`; }}
                    alt={dog.name} />
                    
              <div>
        
        <p><strong>Breed:</strong> {dog.breed}</p>
        <p><strong>Gender:</strong> {dog.sex}</p>
        <p><strong>Age:</strong> {dog.age}</p>
        <p><strong>Chip:</strong> {dog.chipNumber}</p>
        <p><strong>Owner:</strong> {dog.owner?.name} {dog.owner?.lastName} ({dog.owner?.phoneNumber})</p>
        <p><strong>Presents today:</strong> {dog.present ? 'Yes' : 'No'}</p>
        <Link to="/dogs" className="back-btn" >⬅ Go Back</Link>
      </div>
        </article>
        </section>
    )
}
export default ShowDog;