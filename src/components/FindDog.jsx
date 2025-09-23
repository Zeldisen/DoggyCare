import  { useEffect, useMemo, useState } from 'react';
import { fetchDogs } from "../api";
import { Link } from 'react-router-dom';

function FindDog(){
    const [q, setQ] = useState('');
    const [dogs, setDogs] = useState([]);
    const [state, setState] = useState('loading');

    useEffect(() => {
        setState('loading');
        fetchDogs()
        .then(list => {setDogs(Array.isArray(list) ? list : []); setState('ready'); })
        .catch(() => setState('error'));
    }, []);

    const filtered = useMemo(() => {
        const v = q.trim().toLocaleLowerCase('sv');
        const list = Array.isArray(dogs) ? dogs : [];
        if(!v) return list;
        return list.filter(d => 
        [d.name, d.breed, d.owner?.name, d.owner?.lastName, d.chipNumber]
        .filter(Boolean)
        .some(x => String(x).toLocaleLowerCase('sv').includes(v))
        );
    }, [q, dogs]);

    if(state === 'loading') return <p>Laddar...</p>
    if(state === 'error') return <p>Kunde inte hämta data.</p>

    return(
       <section>
        <h2>Hund Katalogen</h2>
        <form role="search" onSubmit={(e) => e.preventDefault()}>
            <input type="search"
            placeholder='Sök namn, ras, ägare...'
            value={q}
            onChange={e => setQ(e.target.value)} />
            </form>

            <ul className='grid'>
                {filtered.map(dog => (
                    <li key={dog.chipNumber} className='card'>
                        <img  src={dog.img || '/placeholder-dog.png'}
                          onError={(e) => { e.currentTarget.src = '/placeholder-dog.png'; }}
                               alt={dog.name} />
                        <div className="card-body">
                            <h3>{dog.name}</h3>
                            <p>{dog.breed} • {dog.age} år</p>
                           <Link to={`/dogs/${encodeURIComponent(dog.chipNumber)}`}>Visa detaljer</Link>

                        </div>
                    </li>
                ))}
            </ul>
       </section>
    )
}
export default FindDog;