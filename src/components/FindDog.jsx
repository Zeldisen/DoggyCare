import  { useEffect, useMemo, useState } from 'react';
import { fetchDogs } from "../api";
import { Link } from 'react-router-dom';
import { resolveImg } from '../images';
import  dogMembers  from './images/doggy-Members.png'
import './css/finddog.css';

function FindDog(){
    const [question, setQuestion] = useState('');
    const [dogs, setDogs] = useState([]);
    const [state, setState] = useState('loading');

    useEffect(() => {
        setState('loading');
        fetchDogs()     // from api.js function
        .then(list => {setDogs(Array.isArray(list) ? list : []); setState('ready'); })
        .catch(() => setState('error'));  //good to have when somting goes wrong to send a messege to user.
    }, []);

const filtered = useMemo(() => {
  const allDogs = Array.isArray(dogs) ? dogs : [];
  const searchInput = question.trim();
  if (!searchInput) return allDogs;

  // Exactly age (only int)
  const ageQuestion = Number(searchInput);
  if (Number.isInteger(ageQuestion)) {
    return allDogs.filter(dog => Number(dog.age) === ageQuestion);
  }

  // Gender search – exactly match (avoid that "male" catches "female")
  const query = searchInput.toLowerCase();
  const maleTokens = ['male', 'hane', 'm'];
  const femaleTokens = ['female', 'tik', 'f'];

  const normalizeGender = (gender) => {
    const genderValue = String(gender ?? '').toLowerCase();
    if (maleTokens.includes(genderValue)) return 'male';
    if (femaleTokens.includes(genderValue)) return 'female';
    return '';
  };

  if (maleTokens.includes(query)) {
    return allDogs.filter(dog => normalizeGender(dog.sex) === 'male');
  }
  if (femaleTokens.includes(query)) {
    return allDogs.filter(dog => normalizeGender(dog.sex) === 'female');
  }
  // Search input text, but not gender or age. This because it did not work when search where for male or a number.
  const textFields = (dog) => [
    dog.name,
    dog.breed,
    dog.owner?.name,
    dog.owner?.lastName,
    dog.chipNumber,
  ]
    .filter(Boolean)
    .map(genderValue => String(genderValue).toLowerCase());

  return allDogs.filter(dog =>
    textFields(dog).some(text => text.includes(query))
  );
}, [question, dogs]);

    // old function, worked to search for name, breed, owner and females, not male or age.

    // const filtered = useMemo(() => {
    //     const dValue = question.trim().toLocaleLowerCase('sv');
    //     const list = Array.isArray(dogs) ? dogs : [];
    //     if(!dValue) return list;
    //     return list.filter(d => 
    //     [d.name, d.breed, d.owner?.name, d.owner?.lastName, d.age, d.sex, d.chipNumber]
    //     .filter(Boolean)
    //     .some(x => String(x).toLocaleLowerCase('sv').includes(dValue))
    //     );
    // }, [question, dogs]);

    if(state === 'loading') return <p>Loading...</p>
    if(state === 'error') return <p>Faild to fetch data.</p>

    return(
       <section className="find-dogs"> 
        <img src={dogMembers} alt="members" style={{width: "50%"}} />
         <h4 className="text">Search for name, breed, owner, age or gender down below.</h4>
        <form role="search" onSubmit={(e) => e.preventDefault()}>
            <input type="search"
            placeholder='Search...'
            value={question}
            onChange={e => setQuestion(e.target.value)} />
            </form>

            <ul className='grid'>
                {filtered.map(dog => (
                    <li key={dog.chipNumber} className='card'>
                        <img  src={dog.img}
                          onError={(e) => { e.currentTarget.src = '/placeholder-dog.png'; }}
                               alt={dog.name} />
                        <div className="card-body">
                            <h3>{dog.name}</h3>
                            <p>{dog.breed} • {dog.age} år</p>
                           <Link to={`/dogs/${encodeURIComponent(dog.chipNumber)}`} className="show-dog-btn">Show details...</Link>

                        </div>
                    </li>
                ))}
            </ul>
       </section>
    )
}
export default FindDog;