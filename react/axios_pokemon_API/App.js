import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [pokemonDB, setPokemonDB] = useState([]);
  useEffect(() => {
    axios.get(" https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((response) =>{
      console.log(response.data.results);
      setPokemonDB(response.data.results);
  })
    .catch ((err) => console.log (err));
  }, []);
  return (
    <div className="App">
      <h1>Axios Pokemon API</h1>
      <ul>
        {pokemonDB.map((pokemon, index) =>(
          <li key= {index}>{pokemon.name}</li>
      ))}
      </ul>
      
    </div>
  );
}

export default App;
