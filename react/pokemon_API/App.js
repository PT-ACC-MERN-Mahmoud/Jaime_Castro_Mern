import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [Pokemon, setPokemon] = useState([]);

    useEffect(() => {
      fetch(' https://pokeapi.co/api/v2/pokemon?limit=807')
          .then(response => response.json())
          .then(response => setPokemon(response.results))
  }, []);

  return (
    <div className="App">
      <ul>
        { Pokemon.map((PokemonObj, index) =>{
          return (
            <li>
              {index}{PokemonObj.name}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
